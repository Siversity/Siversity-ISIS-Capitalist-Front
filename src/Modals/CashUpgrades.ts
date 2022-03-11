import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";

export function displayCashUpgrades(server: string, world: World) {
    creationModal(server, world);
    //creationBodyCash(server, world)

}

function creationModal(server: string, world: World) {
    // Container
    let m = document.getElementById("modalCashUp");

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
    optAll.id = "optProduit" + 7
    optAll.value = "" + 7
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
        console.log(this.value)
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
        else if (id == 7) {
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

    $(buttonBuyCashUp).click(function () {
        console.log("je tente d'acheter un cashUp :)");
        buyCashUp(cashUp, world)
    });
}

// Achat d'un cashUpgrade
function buyCashUp(cashUp: Pallier, world: World) {
    // On vérifie que l'on a assez d'argent pour acheter le cash upgrade
    if (cashUp.seuil <= world.money) {
        // Si c'est le cas, on soustrait son coût
        world.money -= cashUp.seuil;


        //Il faut modifier la valeur du calculScore
        console.log("Il faut modifier la valeur du calcul score après l'achat d'un CashUp")

        // On affiche ensuite le nouveau solde
        document.getElementById("worldMoney").innerHTML = transform(world.money);

        // Changement du bouton Hire en acheté et disabled
        let button = document.getElementById("buy" + cashUp.idcible);
        button.innerText = "Acheté"
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");
    }
    else {
        console.log("pas assez de sous")
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