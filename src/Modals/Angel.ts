import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";
import { displayToaster } from "../App/Toaster";
import type { ajaxRequest } from "../RestCalls";
import { ajaxRequests } from "../RestCalls";
import { displayRevenu } from "../App/Products";
import { applyBonusProduct, applyBonusWorld, findProduct } from "../index";
import { resetWorld } from "../RestCalls";

export function displayAngel(server: string, world: World) {
    creationModal(server, world)
    showResetAngel(server,world)
    showAngelsUpgrades(server, world)
}
    

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
    b.classList.add("btn-close", "btn-close-white")
    b.setAttribute("type", "button");
    b.setAttribute("data-bs-dismiss", "modal");
    b.setAttribute("aria-label", "Close");

    //Titre de la fenêtre
    let t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Muzan";

    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalAngelBody";
}


function showResetAngel(server:string,world: World) {
    let body = document.getElementById("modalAngelBody")

    let container = document.createElement("div")
    body.appendChild(container)
    container.classList.add("row", "row-cols-2")

    //1ere colonne
    let firstCol = document.createElement("div")
    container.appendChild(firstCol)
    firstCol.classList.add("col")
    firstCol.style.position = "relative"

    //Nbre total d'angel
    let angelNumber = document.createElement("div")
    firstCol.appendChild(angelNumber)
    angelNumber.id = "angelNumber"
    angelNumber.classList.add("angelNumber", "row")
    angelNumber.innerHTML = transform(world.totalangels) + " Totals angels"

    //Description
    let angelDesc = document.createElement("div")
    firstCol.appendChild(angelDesc)
    angelDesc.classList.add("row", "textAngel")
    angelDesc.innerText = "2% Bonus per Angels"

    //Seconde colonne
    let secondCol = document.createElement("div")
    container.appendChild(secondCol)
    secondCol.classList.add("col")
    secondCol.style.textAlign = "right"

    //Bouton reset partie
    let buttonReset = document.createElement("button")
    secondCol.appendChild(buttonReset)
    buttonReset.classList.add("btn", "btn-primary", "buttonReset", "bccFont")
    let nbrAngels = (150 * Math.sqrt(world.score / Math.pow(10, 15))) - world.totalangels
    console.log("NBRANGELS " + nbrAngels);
    buttonReset.innerHTML = "Reset your account in exchange of " + transform(nbrAngels) + '<img class="imgDeviseManager" src="../../Style/Images/deviseAngel.png"/>'
    $(buttonReset).click(function() {
        resetWorld();
    })
}


function showAngelsUpgrades(server: string, world: World) {
    let body = document.getElementById("modalAngelBody")

    let hr = document.createElement("hr")
    body.appendChild(hr)
    hr.classList.add("my-4")



    $.each(world.angelupgrades.pallier, function (index, angelUp) {
        let container = document.createElement("div")
        body.appendChild(container)
        container.classList.add("row", "row-cols-3", "border", "rounded")

        //Colonne 1 : Image
        let imgCol = document.createElement("div")
        container.appendChild(imgCol)
        imgCol.classList.add("col")

        let iconAngelUp = document.createElement("img")
        imgCol.appendChild(iconAngelUp)
        iconAngelUp.classList.add("imgCashUp")
        iconAngelUp.id="iconAngelUp"+angelUp.name+angelUp.idcible
        console.log("ANGEL : " + angelUp.logo)
        iconAngelUp.src = server + angelUp.logo

        if (angelUp.unlocked == false) {
            iconAngelUp.classList.add("disabledUnlock");
        }

        //Colonne 2 : Description ( Prix + Nom + Bonus )
        let secondCol = document.createElement("div")
        container.appendChild(secondCol)
        secondCol.classList.add("row")


        let nameCashUp = document.createElement("div")
        secondCol.appendChild(nameCashUp)
        nameCashUp.classList.add("upgradeTitle")
        nameCashUp.innerText = angelUp.name
        nameCashUp.style.marginTop = "10px"

        let priceCashUp = document.createElement("div")
        secondCol.appendChild(priceCashUp)
        priceCashUp.classList.add("spanUpgrade")
        priceCashUp.innerHTML = transform(angelUp.seuil) + '<img class="imgDeviseManager" src="../../Style/Images/deviseAngel.png"/>';

        let bonusCashUp = document.createElement("div")
        secondCol.appendChild(bonusCashUp)
        bonusCashUp.innerText = angelUp.typeratio + " : x" + angelUp.ratio
        bonusCashUp.classList.add("spanUpgrade")

        //Colonne 3 : Bouton d'achat
        let butCol = document.createElement("div")
        container.appendChild(butCol)
        butCol.classList.add("col", "colButtonAngel")

        let buttonBuyAngelUp = document.createElement("button")
        butCol.appendChild(buttonBuyAngelUp)
        buttonBuyAngelUp.id = angelUp.name + angelUp.idcible;
        buttonBuyAngelUp.classList.add("btn", "btn-primary", "buttonBuyAngel");
        buttonBuyAngelUp.innerText = "Acheter";
        if (angelUp.unlocked == true) {
            buttonBuyAngelUp.innerText = "Acheté"
            buttonBuyAngelUp.classList.remove();
            buttonBuyAngelUp.classList.add("btn", "btn-secondary");
            buttonBuyAngelUp.setAttribute("disabled", "true");
        }

        if (angelUp.seuil > world.activeangels || angelUp.unlocked==true) {
            buttonBuyAngelUp.setAttribute("disabled", "true")
        }
        else {
            buttonBuyAngelUp.removeAttribute("disabled")
        }
    
    
        $(buttonBuyAngelUp).click(function () {
            buyAngelUp( angelUp, world)
        });

    })

}

/**/
function buyAngelUp(angel:Pallier,world:World) {
    // On vérifie que l'on a assez d'argent pour acheter le cash upgrade
    if ((angel.seuil <= world.totalangels) && (angel.unlocked == false)) {
        // Si c'est le cas, on soustrait son coût
        world.activeangels -= angel.seuil;

        //Il faut modifier la valeur du calculScore
        if (angel.idcible > 0) {
            // On récupère le produit
            let product: Product = findProduct(world, angel.idcible);

            // Dévérouiller l'unlock
            displayToaster("success", "New angel upgrade purchased !");
            angel.unlocked = true;

            console.log(product.name + " has upgrade a x" + angel.ratio + " " + angel.typeratio);

            // Appliquer les changements
            applyBonusProduct(product, angel.ratio, angel.typeratio);
            displayRevenu(world, product);
        }
        else if (angel.idcible == 0) {
            displayToaster("info", "New global angel upgrade purchased !");
            angel.unlocked = true;
            console.log("World has a global angel upgrade x" + angel.ratio + " " + angel.typeratio);
            $.each(world.products.product, function (index, product) {
                applyBonusProduct(product, angel.ratio, angel.typeratio);
                displayRevenu(world, product);
            })
        }
        else if(angel.idcible == -1){
            //Bonus angel
            displayToaster("info", "New angel bonus purchased !")
            angel.unlocked=true
            applyBonusWorld(world,angel.ratio,angel.typeratio)

        }

        // On affiche ensuite le nouveau solde
        document.getElementById("angelNumber").innerHTML = transform(world.activeangels);


        //Changement du bouton Hire en acheté et disabled
        let button = document.getElementById(angel.name + angel.idcible);
        button.innerText = "Acheté"
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");

        document.getElementById("iconAngelUp" + angel.name + angel.idcible).classList.remove("disabledUnlock")

        // sendToServer("angelupgrade", angel);
        let newRequest: ajaxRequest = { type: "angelupgrade", content: angel };
        ajaxRequests.push(newRequest);
    }
    else {
        console.log("Pas assez de sous")
    }
}



