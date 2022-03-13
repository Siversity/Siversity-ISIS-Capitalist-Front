import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";
import { verifUnlock } from "./Unlocks";
import { applyBonusProduct, applyBonusWorld, findProduct } from "..";
import { displayRevenu } from "../App/Products";
import { displayToaster } from "../App/Toaster";
import { sendToServer } from "../RestCalls";
import type { ajaxRequest } from "../RestCalls";
import { ajaxRequests } from "../RestCalls";

const listbutton: string[] = []

export function displayCashUpgrades(server: string, world: World) {
    creationModal(server, world);

}

function creationModal(server: string, world: World) {
    // Container
    let m = document.getElementById("modalCashUp");

    $(m).on('hidden.bs.modal', function () {
        $('#selectBarreCashUp').val(0)
        affichageCashUp(0, server, world)
    });


    //Balise Modal Dialogue
    let md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog", "modal-lg");
    md.setAttribute("role", "document");

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
    b.classList.add("btn-close","btn-close-white")
    b.setAttribute("type", "button");
    b.setAttribute("data-bs-dismiss", "modal");
    b.setAttribute("aria-label", "Close");

    //Création select barre
    let selectBarre = document.createElement("select")
    mh.appendChild(selectBarre)
    selectBarre.id = "selectBarreCashUp"
    selectBarre.classList.add("styleSelect")

    let optAll = document.createElement("option")
    selectBarre.appendChild(optAll)
    optAll.id = "optProduit" + -1
    optAll.value = "-1"
    optAll.text = "Tous les produits"

    let optGlob = document.createElement("option")
    selectBarre.appendChild(optGlob)
    optGlob.id = "optProduit" + 0
    optGlob.value = "" + 0
    optGlob.text = "CashUp globaux"
    optGlob.setAttribute("selected", "")

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
    t.innerText = "Upgrades";

    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalCashUpBody";

    $(selectBarre).change(function () {
        affichageCashUp(parseInt(this.value), server, world)
    });

    affichageCashUp(0,server,world)
}

function affichageCashUp(id: number, server: string, world: World) {
    let bodyCashUp = document.getElementById("modalCashUpBody")
    bodyCashUp.innerHTML = ""

    $.each(world.upgrades.pallier, function (index, cashUp) {

        if (cashUp.idcible == id) {
            selectCashUp(server, cashUp, world)
        }
        else if (id == -1) {
            selectCashUp(server, cashUp, world)
        }
    })
}


function selectCashUp(server: string, cashUp: Pallier, world: World) {
    let rowCashUp = document.createElement("div")
    let bodyCashUp = document.getElementById("modalCashUpBody")
    bodyCashUp.appendChild(rowCashUp)

    let container = document.createElement("div")
    bodyCashUp.appendChild(container)
    container.classList.add("row", "border", "rounded")
    if (cashUp.unlocked == true) {
        container.classList.add("unlocked")
    }

    let imgContainer = document.createElement("div");
    container.appendChild(imgContainer);
    imgContainer.classList.add("col", "imgUnlock");

    //Colonne 1 : Image
    let imgCol = document.createElement("div")
    imgContainer.appendChild(imgCol)
    imgCol.classList.add("col")
    

    let iconCashUp = document.createElement("img")
    imgCol.appendChild(iconCashUp)
    iconCashUp.id="imgCashUp"+cashUp.name+cashUp.idcible
    iconCashUp.src = server + cashUp.logo
    iconCashUp.classList.add("imgCashUp")
    if (cashUp.unlocked == false) {
        iconCashUp.classList.add("disabledUnlock");
    }

    //Colonne 2 : Description ( Prix + Nom + Bonus )
    let secondCol = document.createElement("div")
    container.appendChild(secondCol)
    secondCol.classList.add("col")

    let nameCashUp = document.createElement("div")
    secondCol.appendChild(nameCashUp)
    nameCashUp.classList.add("upgradeTitle")
    nameCashUp.innerText = cashUp.name

    let priceCashUp = document.createElement("div")
    secondCol.appendChild(priceCashUp)
    priceCashUp.classList.add("spanUpgrade")
    priceCashUp.innerHTML = transform(cashUp.seuil) + '<img class="imgDeviseManager" src="../../Style/Images/devise.png"/>'

    
    let bonusCashUp = document.createElement("div")
    secondCol.appendChild(bonusCashUp)
    bonusCashUp.classList.add("spanUpgrade")
    bonusCashUp.innerText = cashUp.typeratio + " : x" + cashUp.ratio

    //Colonne 3 : Bouton d'achat
    let butCol = document.createElement("div")
    container.appendChild(butCol)
    butCol.classList.add("col", "btnUnlock")

    let buttonBuyCashUp = document.createElement("button")
    butCol.appendChild(buttonBuyCashUp)
    buttonBuyCashUp.id = cashUp.name+cashUp.idcible;
    buttonBuyCashUp.classList.add("btn", "btn-primary", "buttonBuyCashUp");
    buttonBuyCashUp.innerText = "Achete Moi !";
    if (cashUp.unlocked == true) {
        buttonBuyCashUp.innerText = "Acheté"
        buttonBuyCashUp.classList.remove();
        buttonBuyCashUp.classList.add("btn", "btn-secondary");
        buttonBuyCashUp.setAttribute("disabled", "true");
    }


    if (cashUp.seuil > world.money || cashUp.unlocked==true) {
        buttonBuyCashUp.setAttribute("disabled", "true")
    }
    else {
        buttonBuyCashUp.removeAttribute("disabled")
    }

    if(cashUp.unlocked==true){
        buttonBuyCashUp.innerText="Acheté"
    }
    else {
        buttonBuyCashUp.innerText="Achete moi"
    }

    $(buttonBuyCashUp).click(function () {
        buyCashUp(cashUp, world)
    });
}

// Achat d'un cashUpgrade
function buyCashUp(cashUp: Pallier, world: World) {
    // On vérifie que l'on a assez d'argent pour acheter le cash upgrade
    if ((cashUp.seuil <= world.money) && (cashUp.unlocked == false)) {
        // Si c'est le cas, on soustrait son coût
        world.money -= cashUp.seuil;
        cashUp.unlocked = true;

        //Il faut modifier la valeur du calculScore
        if ((cashUp.idcible != 0) && (cashUp.typeratio != "ANGE")) {
            // On récupère le produit
            let product: Product = findProduct(world, cashUp.idcible);

            // Dévérouiller l'unlock
            displayToaster("success", "New product upgrade purchased !");

            console.log(product.name + " has upgrade a x" + cashUp.ratio + " " + cashUp.typeratio);

            // Appliquer les changements

            applyBonusProduct(product, cashUp.ratio, cashUp.typeratio);
            displayRevenu(product);
        }
        else if ((cashUp.idcible == 0) && (cashUp.typeratio != "ANGE")) {
            displayToaster("info", "New global upgrade purchased !");
            console.log("World has a global upgrade x" + cashUp.ratio + " " + cashUp.typeratio);
            $.each(world.products.product, function (index, product) {
                applyBonusProduct(product, cashUp.ratio, cashUp.typeratio);
                displayRevenu(product);
            })
        }
        else if ((cashUp.idcible == -1) && (cashUp.typeratio == "ANGE")) {
            displayToaster("info", "New angel upgrade purchased !");
            applyBonusWorld(world, cashUp.ratio, cashUp.typeratio);
        }

        // On affiche ensuite le nouveau solde
        document.getElementById("worldMoney").innerHTML = transform(world.money);


        //Changement du bouton Hire en acheté et disabled
        let button = document.getElementById(cashUp.name+cashUp.idcible);
        button.innerText = "Acheté"
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");

        document.getElementById("imgCashUp" + cashUp.name + cashUp.idcible).classList.remove("disabledUnlock")

        // sendToServer("upgrade", cashUp);
        let newRequest: ajaxRequest = { type: "upgrade", content: cashUp };
        ajaxRequests.push(newRequest);
    }
    else {
        console.log("Pas assez de sous")
    }
}

// Calcule dynamiquement le nombre de managers achetables
export function buyableCashUp(world: World) {
    // Variables
    let cashUpDispo = 0;
    let notifCashUp = document.getElementById("badgeCashUp");

    // Pour chaque CashUp
    $.each(world.upgrades.pallier, function (index, cashUp) {
        // On vérifie que l'on a la possibilité d'en acheter
        if (cashUp.seuil <= world.money && cashUp.unlocked == false) {
            cashUpDispo++;
        };
    })

    // S'il n'y a aucun CashUp achetable, on affiche rien
    if (cashUpDispo == 0) {
        notifCashUp.innerText = null;
    }
    // Sinon on affiche leur quantité achetable
    else {
        notifCashUp.innerText = cashUpDispo.toString();
    }
}


// Affichage dynamiquement si un manager est achetable
function verifCashUp(world: World) {
    // Pour chaque manager
    $.each(world.upgrades.pallier, function (index, cashUp) {
        // On récupère son bouton d'achat
        let button = document.getElementById(cashUp.name+cashUp.idcible);

        // On vérifie que l'on a assez d'argent ou que le manager n'est pas déjà acheté
        if ((cashUp.seuil > world.money) || (cashUp.unlocked == true)) {
            // Si c'est le cas, on l'active
            button.innerHTML = "Acheté";
            button.setAttribute("disabled", "true");
        }
        else {
            // Sinon on le désactive
            button.removeAttribute("disabled");
        }
    })
}
