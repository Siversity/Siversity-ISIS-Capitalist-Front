import { matchId } from "..";
import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";


// Affichage des managers
export function displayManager(server: string, world: World) {
    // Container
    let m = document.getElementById("modalManager");

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
    t.innerText = "Les Managers";


    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.setAttribute("id", "modalBody");

    //Remplissage du body avec les differrents managers
    listManagers(server, world);
}


// Affichage de la liste des managers
function listManagers(server: string, world: World) {
    let body = document.getElementById("modalBody");
    let container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");

    let grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("row", "row-cols-2");//"row", "row-cols-2"

    $.each(world.managers.pallier, function (index, pallier) {
        let col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("row");
        col.id = "manager" + pallier.idcible.toString();

        //Partie Image et nom du managers
        let imageName = document.createElement("div");
        col.appendChild(imageName);
        imageName.classList.add("col");//"col-4", "col-lg-2"

        //Partie Image
        let image = document.createElement("div");
        imageName.appendChild(image);
        image.classList.add("row", "imageManagers");

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
        hire.classList.add("col"); //"col-4", "col-lg-2"

        let buttonHire = document.createElement("button");
        hire.appendChild(buttonHire);
        buttonHire.id = "hire" + pallier.idcible;
        buttonHire.classList.add("btn", "btn-primary", "buttonHire");
        buttonHire.innerText = "Achete Moi !";
        $(buttonHire).click(function () {
            console.log("je tente d'acheter un manager :)");
            buyManager(pallier, world);
        });

        /*
        let imageProduct = document.createElement("img")
        hire.appendChild(imageProduct)
        imageProduct.classList.add("imageProductManager")
        let srcImg=getImage(pallier.idcible,world)
        imageProduct.src=server+srcImg;*/
    });

}


// Affichage dynamiquement si un manager est achetable
export function verifManagers(world: World) {
    // Pour chaque manager
    $.each(world.managers.pallier, function (index, pallier) {
        // On récupère son bouton d'achat
        let button = document.getElementById("hire" + pallier.idcible);

        // On vérifie que l'on a assez d'argent ou que le manager n'est pas déjà acheté
        if (pallier.seuil > world.money || button.innerText == "Acheté") {
            // Si c'est le cas, on l'active
            button.setAttribute("disabled", "true");
        }
        else {
            // Sinon on le désactive
            button.removeAttribute("disabled");
        }
    })
}


// Calcule dynamiquement le nombre de managers achetables
export function buyableManagers(world: World) {
    // Variables
    let managerDispo = 0;
    let notifManager = document.getElementById("badgeManager");

    // Pour chaque manager
    $.each(world.managers.pallier, function (index, manager) {
        // On vérifie que l'on a la possibilité d'en acheter
        if (manager.seuil <= world.money && manager.unlocked == false) {
            managerDispo++;
        };
    })
    
    // S'il n'y a aucun manager achetable, on affiche rien
    if (managerDispo == 0) {
        notifManager.innerText = null;
    }
    // Sinon on affiche leur quantité achetable
    else {
        notifManager.innerText = managerDispo.toString();
    }
}


// Achat d'un manager
function buyManager(manager: Pallier, world: World) {
    // On vérifie que l'on a assez d'argent pour acheter le manager
    if (manager.seuil <= world.money) {
        // Si c'est le cas, on soustrait son coût
        world.money -= manager.seuil;

        // On affiche ensuite le nouveau solde
        document.getElementById("worldMoney").innerHTML = transform(world.money);

        // On débloque le manager
        manager.unlocked = true;
        matchId(manager.idcible, world);

        // Changement du bouton Hire en acheté et disabled
        let button = document.getElementById("hire" + manager.idcible);
        button.innerText = "Acheté"
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");
    }
}

function getImage(id:number,world:World){
$.each(world.products.product, function(index,produit){
    let src=""
    if(produit.id==id){
        src=produit.logo
        console.log("Source image:"+produit.logo)
        return src;
    }
})
}