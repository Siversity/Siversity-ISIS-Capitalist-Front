import { World, Product, Pallier } from "./Classes/world";
import { lastUpdateList, showProducts, startProduct } from "./App/Products";
import { displayHeader, transform } from "./App/Header"
import { setProgressBar } from "./App/ProgressBar";
import { addSelected, buyableProducts, showSideBar } from "./App/SideBar";
import { displayMenu } from "./App/Menu";
import { buyableManagers, displayManager, verifManagers } from "./Modals/Managers";
import { displayUnlocks } from "./Modals/Unlocks";


// Username
export var username = localStorage.getItem("username");

// Changement du pseudo
export function setUsername(newUsername: string) {
    username = newUsername;
    localStorage.setItem("username", newUsername);

    $.ajaxSetup({
        headers: {"X-user": username}
        });
}


// Url serveur
export const serveurUrl: string = "http://localhost:8080/";
// export const serveurUrl: string = "https://isiscapitalist.kk.kurasawa.fr/";


$(document).ready(function () {
    // Chargement du pseudo du joueur
    console.log(username);
    setUsername(username);

    // Affichage du monde du joueur
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world: World) {
        // Affichage du monde chargé
        console.log(world)

        // Initialisation argent de base
        world.money = 0;

        // Affichage HTML
        displayHeader(serveurUrl, world);
        showProducts(serveurUrl, world);
        showSideBar(serveurUrl, world);
        displayMenu(world);
        displayManager(serveurUrl, world);
        displayUnlocks(serveurUrl, world);

        // Actions dynamiques
        setInterval(function () {
            // Calcul du score
            calcScore(serveurUrl, world);

            // Vérification achats managers
            if (document.getElementById("modalManager").classList.contains("show")) {
                verifManagers(world);
            }

            // Affichage achetables
            buyableProducts(world)
            buyableManagers(world);

            // Si l'option d'ajout sélectionnée est le max achetable, on synchronise avec en fonction du score
            //if (addSelected == "Max") {
            //setAddProduct(world);
            //}
        }, 100);

    });
});


// Calcul du score
function calcScore(server: string, world: World) {
    // Pour chaque produit
    $.each(world.products.product, function (index, product) {
        // On vérifie que le produit est en cours de production
        if (product.timeleft != 0) {
            // On calcule le temps de production restant
            let timeRemaining: number = Date.now() - lastUpdateList[product.id];
            product.timeleft = product.timeleft - timeRemaining;

            // On calcule le pourcentage de production restant et on actualise la bar de progression
            let pourcentage: number = (product.timeleft * 100) / product.vitesse;
            setProgressBar(product.id, pourcentage);

            // Si le nouveau temps restant est inférieur ou égal à 0
            if (product.timeleft <= 0) {
                // On ajoute le revenu du produit
                let revenu: number = product.revenu * product.quantite;
                addScore(world, revenu);

                // On réinitialise la progression de la production
                product.timeleft = 0;
                setProgressBar(product.id, 0);
            }
        }

        // Si le produit n'est pas en cours de production et a un manager
        else if ((product.timeleft == 0) && (product.managerUnlocked == true)) {
            // On lance la production du produit
            startProduct(product);
        }
    });
}


// Calcul du score
function addScore(world: World, score: number) {
    // Ajout de l'argent
    world.money += score;

    // Ajout du score
    world.score += score;

    // Affiche du nouveau solde
    document.getElementById("worldMoney").innerHTML = transform(world.money);
}



export function matchId(id: number, world: World) {
    let idProduct
    $.each(world.products.product, function (index, product) {
        idProduct = product.id;
        if (idProduct == id) {
            product.managerUnlocked = true;
            console.log("produit: " + product.name + " unlocked:" + product.managerUnlocked);
        }
    })

}
/*
function updateButton(addSelected:any){
    switch(addSelected) { 
        case 1: { 
           //statements; 
           break; 
        } 
        case 10: { 
           //statements; 
           break; 
        } 
        case 100: { 
            //statements; 
            break; 
         } 
         case "Max": { 
            //statements; 
            break; 
         } 
        default: { 
           //statements; 
           break; 
        } 
     } 
}*/
/*
function comparaison(world:World,multiplier:any){

}*/