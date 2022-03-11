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

function creationBodyCash(server: string, world: World) {
    let body = document.getElementById("modalCashUpBody");
    let container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");

    let grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("row", "row-cols-2");//"row", "row-cols-2"

    $.each(world.upgrades.pallier, function (index, pallier) {
        let col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("row");
        col.id = "cashUpgrade" + pallier.idcible.toString();

        //Partie Image et nom du managers
        let imageName = document.createElement("div");
        col.appendChild(imageName);
        imageName.classList.add("col");//"col-4", "col-lg-2"

        //Partie Image
        let image = document.createElement("div");
        imageName.appendChild(image);
        image.classList.add("row", "imageCashUp");

        let imageManager = document.createElement("img");
        image.appendChild(imageManager);
        imageManager.id = "img" + pallier.idcible;
        imageManager.src = server + pallier.logo;
        imageManager.classList.add("img-fluid", "rounded")

        //Partie Nom et prix
        let namePrice = document.createElement("div")
        imageName.appendChild(namePrice);
        namePrice.classList.add("row")

        //Partie Nom
        let nameManager = document.createElement("div");
        namePrice.appendChild(nameManager);
        nameManager.classList.add("col");
        nameManager.innerText = pallier.name;

        //Partie Prix
        let priceManager = document.createElement("div");
        namePrice.appendChild(priceManager);
        priceManager.classList.add("col");
        let cost = transform(pallier.seuil)
        priceManager.innerHTML = cost;

        //Partie bouton d'embauche
        let hire = document.createElement("div");
        col.appendChild(hire);
        hire.classList.add("col");

        let buttonHire = document.createElement("button");
        hire.appendChild(buttonHire);
        buttonHire.id = "hire" + pallier.idcible;
        buttonHire.classList.add("btn", "btn-primary", "buttonHire");
        buttonHire.innerText = "Achete Moi !";

        $(buttonHire).click(function () {
            console.log("je tente d'acheter un cashUp :)");
            //buyManager(pallier, world);
        });
    });
}

function affichageCashUp(id: number, server: string, world: World) {
    let bodyCashUp = document.getElementById("modalCashUpBody")
    bodyCashUp.innerHTML = ""

    let gridCashUp = document.createElement("div")
    bodyCashUp.appendChild(gridCashUp)
    gridCashUp.id = "gridCashUp"
    gridCashUp.classList.add("row", "row-cols-2")

    $.each(world.upgrades.pallier, function (index, cashUp) {

        if (cashUp.idcible == id) {
            selectCashUp(server, cashUp)
        }
        else if (id == 7) {
            selectCashUp(server, cashUp)
        }
    })
}


function selectCashUp(server: string, cashUp: Pallier) {

    let gridCashUp = document.getElementById("gridCashUp")
    let col = document.createElement("div");
    gridCashUp.appendChild(col);
    col.classList.add("col","cols-2");
    col.id = "unlock" + cashUp.idcible;

    //division de la ligne en deux parties (Image+Description // Unlocked ou non)
    let colImageDesc = document.createElement("div")//Image Description
    let colBuyable = document.createElement("div")//Affichage est il dévérouillé ?
    col.appendChild(colImageDesc)
    col.appendChild(colBuyable)
    colImageDesc.classList.add("col")
    colBuyable.classList.add("col")

    //Affichage Icon CashUp
    let iconCashUp = document.createElement("img")
    colImageDesc.appendChild(iconCashUp)
    iconCashUp.src = server + cashUp.logo
    iconCashUp.classList.add("imgUnlock")

    //Affichage nom
    let nomUnlock = document.createElement("h3")
    colImageDesc.appendChild(nomUnlock)
    nomUnlock.innerText = cashUp.name

    //Partie bouton d'embauche
    let buy = document.createElement("div");
    colBuyable.appendChild(buy);
    buy.classList.add("col");

    let buttonBuyCashUp = document.createElement("button");
    buy.appendChild(buttonBuyCashUp);
    buttonBuyCashUp.id = "buy" + cashUp.idcible;
    buttonBuyCashUp.classList.add("btn", "btn-primary", "buttonBuyCashUp");
    buttonBuyCashUp.innerText = "Achete Moi !";

    $(buttonBuyCashUp).click(function () {
        console.log("je tente d'acheter un cashUp :)");
        //buyManager(pallier, world);
    });



}