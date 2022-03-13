import { findProduct } from "../index";
import { World, Product, Pallier } from "../Classes/world";
import { applyBonusProduct } from "../index";
import { displayRevenu } from "../App/Products";
import { displayToaster } from "../App/Toaster";
import { applyBonusWorld } from "../index";


// Affichage des unlocks
export function displayUnlocks(server: string, world: World) {
    // Container
    let m = document.getElementById("modalUnlock");

    //Balise Modal Dialogue
    let md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog", "modal-lg");
    md.setAttribute("role", "document");

    $(m).on('hidden.bs.modal', function () {
        $('#selectBarreUnlocks').val(0);
        listUnlocks(0, server, world);
    });

    //Balise Modal Content
    let mc = document.createElement("div");
    md.appendChild(mc);
    mc.classList.add("modal-content");

    //Balise Modal header
    let mh = document.createElement("div");
    mc.appendChild(mh);
    mh.classList.add("modal-header");

    //Bouton Fermer la fenêtre
    let b = document.createElement("button");
    mh.appendChild(b);
    b.classList.add("btn-close", "btn-close-white")
    b.setAttribute("type", "button");
    b.setAttribute("data-bs-dismiss", "modal");
    b.setAttribute("aria-label", "Close");

    //Création select barre
    let selectBarre = document.createElement("select")
    mh.appendChild(selectBarre)
    selectBarre.id = "selectBarreUnlocks"
    selectBarre.classList.add("styleSelect")

    let optAll = document.createElement("option")
    selectBarre.appendChild(optAll)
    optAll.id = "optProduit" + -1
    optAll.value = "-1";
    optAll.text = "Tous les produits"

    let optGlobal = document.createElement("option")
    selectBarre.appendChild(optGlobal)
    optGlobal.id = "optProduit" + 0
    optGlobal.value = "" + 0
    optGlobal.text = "Unlocks globaux"
    optGlobal.setAttribute("selected", "")



    $.each(world.products.product, function (index, product) {

        let opt = document.createElement("option")
        selectBarre.appendChild(opt)
        opt.id = "optProduit" + product.id
        opt.value = "" + product.id
        opt.text = product.name
    })



    //Titre de la fenêtre
    let t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Unlocks";

    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalUnlockBody";


    $(selectBarre).change(function () {
        listUnlocks(parseInt(this.value), server, world)
    });

    listUnlocks(0, server, world);
}

function listUnlocks(id: number, server: String, world: World) {
    let bodyUnlock = document.getElementById("modalUnlockBody")
    bodyUnlock.innerHTML = ""

    let gridUnlock = document.createElement("div")
    bodyUnlock.appendChild(gridUnlock)
    gridUnlock.id = "gridUnlock"
    gridUnlock.classList.add("row", "row-cols-2")

    $.each(world.allunlocks.pallier, function (index, unlock) {

        if (unlock.idcible == id) {
            affichage(server, unlock)
        }
        else if (id == -1) {
            affichage(server, unlock)
        }
    })
}

function affichage(server: String, unlock: Pallier) {
    let gridUnlock = document.getElementById("gridUnlock")
    let col = document.createElement("div");
    gridUnlock.appendChild(col);
    col.classList.add("col", "rounded", "border");
    col.id = "unlock" + unlock.name + unlock.idcible;

    let rowUnlock = document.createElement("div");
    col.appendChild(rowUnlock);
    rowUnlock.classList.add("row");
    if (unlock.unlocked == true) {
        rowUnlock.classList.add("unlocked");
    }

    //division de la ligne en deux parties (Image+Description // Unlocked ou non)
    let colImageDesc = document.createElement("div")//Image Description
    let colUnlocked = document.createElement("div")//Affichage est il dévérouillé ?
    rowUnlock.appendChild(colImageDesc)
    rowUnlock.appendChild(colUnlocked)
    colImageDesc.classList.add("col", "box")
    colUnlocked.classList.add("col")

    //Affichage Icon Unlock
    let iconUnlock = document.createElement("img")
    colImageDesc.appendChild(iconUnlock)
    iconUnlock.src = server + unlock.logo
    iconUnlock.classList.add("imgUnlock", "rounded-circle")
    if (unlock.unlocked == false) {
        iconUnlock.classList.add("disabledUnlock");
    }

    let nomUnlock = document.createElement("div")
    colUnlocked.appendChild(nomUnlock)
    nomUnlock.innerText = unlock.name
    nomUnlock.classList.add("unlockTitle")

    let descrUnlock = document.createElement("div")
    colUnlocked.appendChild(descrUnlock)
    descrUnlock.classList.add("spanUnlock");
    descrUnlock.innerText = unlock.typeratio + " : x" + unlock.ratio

    let seuilUnlock = document.createElement("div")
    colUnlocked.appendChild(seuilUnlock)
    seuilUnlock.classList.add("spanUnlock");
    seuilUnlock.innerText = "SEUIL : " + unlock.seuil
}


// Vérifie si un unlock doit être dévérouille
export function verifUnlock(world: World) {
    // Pour tous les unlocks
    $.each(world.allunlocks.pallier, function (index, unlock) {
        // On vérifie que l'unlock n'est pas déjà dévérouillé
        if (unlock.unlocked == false) {
            // Si c'est un unlock pour un produit particulier
            if (unlock.idcible != 0) {
                // On récupère le produit
                let product: Product = findProduct(world, unlock.idcible);

                // On vérifie que l'on a dépassé le seuil produit
                if (product.quantite >= unlock.seuil) {
                    // Dévérouiller l'unlock
                    
                    unlock.unlocked = true;

                    console.log(product.name + " has unlocked a x" + unlock.ratio + " " + unlock.typeratio);

                    // Appliquer les changements
                    if (unlock.typeratio != "ANGE") {
                        displayToaster("info", "New unlock !");
                        applyBonusProduct(product, unlock.ratio, unlock.typeratio);
                        displayRevenu(product);
                    }
                    else {
                        displayToaster("info", "New angel unlock !");
                        applyBonusWorld(world, unlock.ratio, unlock.typeratio);
                    }
                    
                }
            }

            // Si c'est un unlock global
            else if (unlock.idcible == 0) {
                let status: boolean = true;

                // On vérifie que tous les produits valident les seuils
                $.each(world.products.product, function (index, product) {
                    if (product.quantite < unlock.seuil) {
                        status = false;
                    }
                })

                // Si tous les produits valident les seuils, on applique le changement
                if (status == true) {
                    
                    unlock.unlocked = true;
                    console.log("World has a global unlock x" + unlock.ratio + " " + unlock.typeratio);
                    // On vérifie que le bonus ne concerne pas les anges
                    if (unlock.typeratio != "ANGE") {
                        displayToaster("info", "New global unlock !");
                        $.each(world.products.product, function (index, product) {
                            applyBonusProduct(product, unlock.ratio, unlock.typeratio);
                            displayRevenu(product);
                        })
                    }
                    else if (unlock.typeratio == "ANGE") {
                        displayToaster("info", "New angel unlock !");
                        applyBonusWorld(world, unlock.ratio, unlock.typeratio);
                    }

                }
            }
        }
    })
}




