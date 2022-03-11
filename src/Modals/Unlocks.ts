import { World, Product, Pallier } from "../Classes/world";


// Affichage des unlocks
export function displayUnlocks(server: string, world: World) {
    // Container
    let m = document.getElementById("modalUnlock");

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
    selectBarre.id = "selectBarreUnlocks"

    let opt1 = document.createElement("option")
    selectBarre.appendChild(opt1)
    opt1.id = "optProduit" + 7
    opt1.value = "" + 7
    opt1.text = "Tous les produits"
    opt1.setAttribute("selected","")

    $.each(world.products.product, function (index, product) {

        let opt = document.createElement("option")
        selectBarre.appendChild(opt)
        opt.id = "optProduit" + product.id
        opt.value = "" + product.id
        opt.text = product.name
    })

    let opt2 = document.createElement("option")
    selectBarre.appendChild(opt2)
    opt2.id = "optProduit" + 0
    opt2.value = "" + 0
    opt2.text = "Unlocks globaux"


    //Titre de la fenêtre
    let t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Les Unlocks";

    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalUnlockBody";

 
    $(selectBarre).change(function () {
        console.log(this.value)
        listUnlocks(parseInt(this.value), server, world)
    });

    //$.each(world.allunlocks.pallier, function(index,unlock){
    //    affichage(server,unlock);
    //})


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
            affichage(server,unlock)
        }
        else if (id == 7) {
            affichage(server,unlock)
        }
    })
}

function affichage(server: String, unlock: Pallier) {
    let gridUnlock = document.getElementById("gridUnlock")
    let col = document.createElement("div");
    gridUnlock.appendChild(col);
    col.classList.add("col");
    col.id = "unlock" + unlock.idcible;

    //division de la ligne en deux parties (Image+Description // Unlocked ou non)
    let colImageDesc = document.createElement("div")//Image Description
    let colUnlocked = document.createElement("div")//Affichage est il dévérouillé ?
    col.appendChild(colImageDesc)
    col.appendChild(colUnlocked)
    colImageDesc.classList.add("col")
    colUnlocked.classList.add("col")

    //Affichage Icon Unlock
    let iconUnlock = document.createElement("img")
    colImageDesc.appendChild(iconUnlock)
    iconUnlock.src = server + unlock.logo
    iconUnlock.classList.add("imgUnlock")

    let nomUnlock = document.createElement("h3")
    colImageDesc.appendChild(nomUnlock)
    nomUnlock.innerText = unlock.name

    let descrUnlock = document.createElement("span")
    colImageDesc.appendChild(descrUnlock)
    descrUnlock.innerText = "Augmentation de " + unlock.typeratio + " x" + unlock.ratio

    let seuilUnlock = document.createElement("span")
    colImageDesc.appendChild(seuilUnlock)
    seuilUnlock.innerText = "Seuil: " + unlock.seuil
}
