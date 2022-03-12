import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";

export function displayAngel(server: string, world: World) {
    creationModal(server, world)
    showResetAngel(world)
    showAngelsUpgrades(server,world)
}
/*
function resetWorld(server:string) {
    $.ajax(server + "webresources/generic/world", {
     type: "DELETE",
     statusCode: {
     304: function () {
     syncError("Echec du reset");
     }
     },
     error: function () {
     syncError("Echec de la requete");
     }
     }).done(function () { location.reload(); });
    }
    */

function creationModal(server: string, world: World) {
    // Container
    let m = document.getElementById("modalAngel");

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

    //Titre de la fenêtre
    let t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Les Angels";

    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalAngelBody";
}


function showResetAngel(world: World) {
    let body = document.getElementById("modalAngelBody")

    let container = document.createElement("div")
    body.appendChild(container)
    container.classList.add("row", "row-cols-2")

    //1ere colonne
    let firstCol = document.createElement("div")
    container.appendChild(firstCol)
    firstCol.classList.add("col", "justify-content-center", "d-block")

    //Nbre total d'angel
    let angelNumber = document.createElement("span")
    firstCol.appendChild(angelNumber)
    angelNumber.id = "angelNumber"
    angelNumber.classList.add("angelNumber", "row")
    angelNumber.innerHTML = transform(world.totalangels) + " Totals angels"

    //Description
    let angelDesc = document.createElement("span")
    firstCol.appendChild(angelDesc)
    angelDesc.classList.add("row")
    angelDesc.innerText = "2% Bonus per Angels"

    //Seconde colonne
    let secondCol = document.createElement("div")
    container.appendChild(secondCol)
    secondCol.classList.add("col")

    //Bouton reset partie
    let buttonReset = document.createElement("button")
    secondCol.appendChild(buttonReset)
    buttonReset.classList.add("btn", "btn-primary", "buttonReset")
    let nbrAngels = 150 * Math.sqrt(world.score / Math.pow(10, 15)) - world.totalangels
    buttonReset.innerHTML = "Reset your account for: " +transform(nbrAngels) + " Angels"
}


function showAngelsUpgrades(server: string, world: World) {
    let body = document.getElementById("modalAngelBody")

    let hr = document.createElement("hr")
    body.appendChild(hr)
    hr.classList.add("my-4")

    let container = document.createElement("div")
    body.appendChild(container)
    container.classList.add("row","row-cols-3")

    $.each(world.angelupgrades.pallier, function (index, angelUp) {
        //Colonne 1 : Image
        let imgCol = document.createElement("div")
        container.appendChild(imgCol)
        imgCol.classList.add("col")

        let iconCashUp = document.createElement("img")
        imgCol.appendChild(iconCashUp)
        iconCashUp.src = server + angelUp.logo
        iconCashUp.classList.add("imgCashUp")

        //Colonne 2 : Description ( Prix + Nom + Bonus )
        let secondCol = document.createElement("div")
        container.appendChild(secondCol)
        secondCol.classList.add("row")

        let priceCashUp = document.createElement("div")
        secondCol.appendChild(priceCashUp)
        priceCashUp.innerHTML = transform(angelUp.seuil) + "$"

        let nameCashUp = document.createElement("div")
        secondCol.appendChild(nameCashUp)
        nameCashUp.innerText = angelUp.name

        let bonusCashUp = document.createElement("div")
        secondCol.appendChild(bonusCashUp)
        bonusCashUp.innerText = angelUp.typeratio + " x" + angelUp.ratio

        //Colonne 3 : Bouton d'achat
        let butCol = document.createElement("div")
        container.appendChild(butCol)
        butCol.classList.add("col")

        let buttonBuyCashUp = document.createElement("button")
        butCol.appendChild(buttonBuyCashUp)
        buttonBuyCashUp.id = "buy" + angelUp.idcible;
        buttonBuyCashUp.classList.add("btn", "btn-primary", "buttonBuyCashUp");
        buttonBuyCashUp.innerText = "Achete Moi !";
    })

}
