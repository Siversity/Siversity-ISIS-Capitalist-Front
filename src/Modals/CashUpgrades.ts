import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";

export function displayCashUpgrades(server: string, world: World) {
    creationModal();
    creationBodyCash(server, world)

}

function creationModal() {
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
}

function creationBodyCash(server: string, world: World){
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