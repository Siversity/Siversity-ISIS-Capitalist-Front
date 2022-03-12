import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";
import { verifUnlock } from "./Unlocks";
import { applyBonusProduct, findProduct } from "..";
import { displayRevenu } from "../App/Products";
import { displayToaster } from "../App/Toaster";
import { sendToServer } from "../RestCalls";
import type { ajaxRequest } from "../RestCalls";
import { ajaxRequests } from "../RestCalls";

const listbutton: string[] = []

export function displayCashUpgrades(server: string, world: World) {
    creationModal(server, world);
    //creationBodyCash(server, world)

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
    b.classList.add("btn-close")
    b.setAttribute("type", "button");
    b.setAttribute("data-bs-dismiss", "modal");
    b.setAttribute("aria-label", "Close");

    //Création select barre
    let selectBarre = document.createElement("select")
    mh.appendChild(selectBarre)
    selectBarre.id = "selectBarreCashUp"

    let optAll = document.createElement("option")
    selectBarre.appendChild(optAll)
    optAll.id = "optProduit" + -1
    optAll.value = "-1"
    optAll.text = "Tous les produits"
    optAll.setAttribute("selected", "")

    $.each(world.products.product, function (index, product) {

        let opt = document.createElement("option")
        selectBarre.appendChild(opt)
        opt.id = "optProduit" + product.id
        opt.value = "" + product.id
        opt.text = product.name
    })

    let optGlob = document.createElement("option")
    selectBarre.appendChild(optGlob)
    optGlob.id = "optProduit" + 0
    optGlob.value = "" + 0
    optGlob.text = "CashUp globaux"


    //Titre de la fenêtre
    let t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Les CashUpgrades";

    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalCashUpBody";

    $(selectBarre).change(function () {
        affichageCashUp(parseInt(this.value), server, world)
    });
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
    bodyCashUp.classList.add("row")

    let container = document.createElement("div")
    bodyCashUp.appendChild(container)
    container.classList.add("row", "row-cols-3")

    //Colonne 1 : Image
    let imgCol = document.createElement("div")
    container.appendChild(imgCol)
    imgCol.classList.add("col")

    let iconCashUp = document.createElement("img")
    imgCol.appendChild(iconCashUp)
    iconCashUp.src = server + cashUp.logo
    iconCashUp.classList.add("imgCashUp")

    //Colonne 2 : Description ( Prix + Nom + Bonus )
    let secondCol = document.createElement("div")
    container.appendChild(secondCol)
    secondCol.classList.add("row")

    let priceCashUp = document.createElement("div")
    secondCol.appendChild(priceCashUp)
    priceCashUp.innerHTML = transform(cashUp.seuil) + "$"

    let nameCashUp = document.createElement("div")
    secondCol.appendChild(nameCashUp)
    nameCashUp.innerText = cashUp.name

    let bonusCashUp = document.createElement("div")
    secondCol.appendChild(bonusCashUp)
    bonusCashUp.innerText = cashUp.typeratio + " x" + cashUp.ratio

    //Colonne 3 : Bouton d'achat
    let butCol = document.createElement("div")
    container.appendChild(butCol)
    butCol.classList.add("col")

    let buttonBuyCashUp = document.createElement("button")
    butCol.appendChild(buttonBuyCashUp)
    buttonBuyCashUp.id = "buy" + cashUp.idcible;
    buttonBuyCashUp.classList.add("btn", "btn-primary", "buttonBuyCashUp");
    buttonBuyCashUp.innerText = "Achete Moi !";
    if (cashUp.unlocked == true) {
        buttonBuyCashUp.innerText = "Acheté"
        buttonBuyCashUp.classList.remove();
        buttonBuyCashUp.classList.add("btn", "btn-secondary");
        buttonBuyCashUp.setAttribute("disabled", "true");
    }


    if (cashUp.seuil > world.money) {
        buttonBuyCashUp.setAttribute("disabled", "true")
    }
    else {
        buttonBuyCashUp.removeAttribute("disabled")
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

        //Il faut modifier la valeur du calculScore
        if (cashUp.idcible != 0) {
            // On récupère le produit
            let product: Product = findProduct(world, cashUp.idcible);

            // Dévérouiller l'unlock
            displayToaster("success", "New upgrade purchased !");
            cashUp.unlocked = true;

            console.log(product.name + " has upgrade a x" + cashUp.ratio + " " + cashUp.typeratio);

            // Appliquer les changements

            applyBonusProduct(product, cashUp.ratio, cashUp.typeratio);
            displayRevenu(product);
        }
        else if (cashUp.idcible == 0) {
            displayToaster("info", "New global upgrade purchased !");
            cashUp.unlocked = true;
            console.log("World has a global upgrade x" + cashUp.ratio + " " + cashUp.typeratio);
            $.each(world.products.product, function (index, product) {
                applyBonusProduct(product, cashUp.ratio, cashUp.typeratio);
                displayRevenu(product);
            })
        }

        // On affiche ensuite le nouveau solde
        document.getElementById("worldMoney").innerHTML = transform(world.money);

        // Changement du bouton Hire en acheté et disabled
        let button = document.getElementById("buy" + cashUp.idcible);
        button.innerText = "Acheté"
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");

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
        let button = document.getElementById("buy" + cashUp.idcible);

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
