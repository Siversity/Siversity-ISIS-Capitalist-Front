import { matchId } from "..";
import { World, Product, Pallier } from "../Classes/world";
import { transform } from "../App/Header";
import { sendToServer } from "../RestCalls";
import { displayToaster } from "../App/Toaster";


// Affichage des managers
export function displayManager(server: string, world: World) {
    // Container
    let m = document.getElementById("modalManager");

    //Balise Modal Dialogue
    let md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog", "modal-xl");
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
    container.classList.add("row");

    /*let grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("row", "row-cols-2");
    grid.style.justifyContent="space-between";*/

    $.each(world.managers.pallier, function (index, manager) {


        let col = document.createElement("div");
        container.appendChild(col);
        col.id = "p" + manager.idcible
        col.classList.add("col", "doubleBorderManager");

        // Titre (ligne)
        let managerTitle = document.createElement("div");
        col.appendChild(managerTitle);
        managerTitle.classList.add("row", "justify-content-center", "text-center", "bsFont");
        managerTitle.innerHTML = manager.name;

        // Image (ligne)
        let managerImage = document.createElement("div");
        col.appendChild(managerImage);
        managerImage.classList.add("row", "managerImage");
        let image = document.createElement("img");
        managerImage.appendChild(image);
        image.id = "imgMan" + manager.idcible;
        image.classList.add("managerIcon")

        // Si ce produit n'a pas été débloqué, on l'affiche en gris
        if (manager.unlocked == false) {
            image.classList.add("disabledProduct");
        }
        image.src = server + manager.logo

        // Container (ligne)
        let productContainer = document.createElement("div");
        col.appendChild(productContainer);
        productContainer.classList.add("row", "mt-3");

        //Prix
        let priceManager = document.createElement("div");
        col.appendChild(priceManager);
        priceManager.classList.add("col","bccFont");
        priceManager.style.textAlign="center"
        let cost = transform(manager.seuil)

        priceManager.innerHTML = cost + '<img class="imgDeviseManager" src="../../Style/Images/devise.png"/>';

        //Partie bouton d'embauche
        let hire = document.createElement("div");
        col.appendChild(hire);
        hire.classList.add("col", "hireSection"); //"col-4", "col-lg-2"
        hire.style.textAlign="center"

        let buttonHire = document.createElement("button");
        hire.appendChild(buttonHire);
        buttonHire.id = "hire" + manager.idcible;
        buttonHire.classList.add("btn", "btn-primary", "buttonHire","bccFont");
        buttonHire.innerText = "Recruter";
        if (manager.unlocked == true) {
            buttonHire.innerText="Recruté"
            buttonHire.setAttribute("disabled", "true");
        }
        else {
            buttonHire.innerText="Recruter"
        }
        $(buttonHire).click(function () {
            buyManager(manager, world);
        });
    });
}


// Affichage dynamiquement si un manager est achetable
export function verifManagers(world: World) {
    // Pour chaque manager
    $.each(world.managers.pallier, function (index, pallier) {
        // On récupère son bouton d'achat
        let button = document.getElementById("hire" + pallier.idcible);

        // On vérifie que l'on a assez d'argent ou que le manager n'est pas déjà acheté
        if ((pallier.seuil > world.money) || (pallier.unlocked == true)) {
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
        matchId(manager, world);

        // Changement du bouton Hire en acheté et disabled
        let button = document.getElementById("hire" + manager.idcible);
        button.innerText = "Recruté"
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");

        console.log("Unlocked" + " imgMan" + manager.idcible)

        // Affichage en clair de l'image
        document.getElementById("imgMan" + manager.idcible).classList.remove("disabledProduct");

        displayToaster("success", "New manager hired !");
    }
}

function getImage(id: number, world: World) {
    $.each(world.products.product, function (index, produit) {
        let src = ""
        if (produit.id == id) {
            src = produit.logo
            console.log("Source image:" + produit.logo)
            return src;
        }
    })
}