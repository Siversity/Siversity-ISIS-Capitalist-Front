import { World, Product, Pallier } from "./Classes/world";
import { lastUpdateList, showProducts, startProduct, fillLastUpdate } from "./App/Products";
import { displayHeader, transform } from "./App/Header"
import { setProgressBar } from "./App/ProgressBar";
import { addSelected, buyableProducts, showSideBar } from "./App/SideBar";
import { displayMenu } from "./App/Menu";
import { buyableManagers, displayManager, verifManagers } from "./Modals/Managers";
import { displayUnlocks } from "./Modals/Unlocks";
import { buyableCashUp, displayCashUpgrades } from "./Modals/CashUpgrades";
import { sendToServer } from "./RestCalls";
import * as bootstrap from "bootstrap"
import { nextAjaxCall } from "./RestCalls";
import {ajaxRequests} from "./RestCalls";
import type { ajaxRequest } from "./RestCalls";
import { displayAngel } from "./Modals/Angel";

// Username
export var username = localStorage.getItem("username");

// Changement du pseudo
export function setUsername(newUsername: string) {
    username = newUsername;
    localStorage.setItem("username", username);

    $.ajaxSetup({
        headers: { "X-user": username }
    });
}


// Url serveur local
const serverLocal: string = "http://localhost:8080/";

// Url serveur heroku
const serverHeroku: string = "https://isiscapitalist.herokuapp.com/"

// Url serveur test
const serverTest: string = "https://isiscapitalist.kk.kurasawa.fr/";


// Serveur utilisé
export var serverUrl = serverHeroku;


$(document).ready(function () {



    // Chargement du pseudo du joueur
    console.log(username);
    setUsername(username);

    // Affichage du monde du joueur
    $.getJSON(serverUrl + "adventureisis/generic/world", function (world: World) {
        // Affichage du monde chargé
        console.log(world)
        fillLastUpdate(world);



        // Initialisation argent de base
        // world.money = 2000;

        // Affichage HTML
        displayHeader(serverUrl, world);
        showProducts(serverUrl, world);
        showSideBar(serverUrl, world);
        displayMenu(world);
        displayManager(serverUrl, world);
        displayUnlocks(serverUrl, world);
        displayCashUpgrades(serverUrl, world);
        displayAngel(serverUrl,world)


        // Affichage revenus
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl: any) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })

        // Actions dynamiques
        setInterval(function () {

            // Calcul du score
            calcScore(serverUrl, world);

            // Vérification achats managers
            if (document.getElementById("modalManager").classList.contains("show")) {
                verifManagers(world);
            }

            // Affichage achetables
            buyableProducts(world)
            buyableManagers(world)
            buyableCashUp(world)

            // Si l'option d'ajout sélectionnée est le max achetable, on synchronise avec en fonction du score
            //if (addSelected == "Max") {
            //setAddProduct(world);
            //}
        }, 100);



        setInterval(function () {
            nextAjaxCall();
        }, 150)

    });
});


// Calcul du score
function calcScore(server: string, world: World) {
    // Pour chaque produit
    $.each(world.products.product, function (index, product) {
        // On vérifie que le produit est en cours de production
        if (product.timeleft != 0) {
            // On calcule le temps de production restant
            let timePassed: number = Date.now() - lastUpdateList[product.id];
            product.timeleft = product.timeleft - timePassed;

            // On calcule le pourcentage de production restant et on actualise la bar de progression
            let pourcentage: number = product.timeleft / product.vitesse;
            setProgressBar(product.id, pourcentage);
            

            // Si le nouveau temps restant est inférieur ou égal à 0
            if (product.timeleft <= 0) {
                // On ajoute le revenu du produit
                let revenu: number = product.revenu * product.quantite *( 1 + world.activeangels * world.angelbonus/100);
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
        lastUpdateList[product.id] = Date.now();
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


// Débloque manager pour un produit
export function matchId(manager: Pallier, world: World) {
    $.each(world.products.product, function (index, product) {
        if (manager.idcible == product.id) {
            product.managerUnlocked = true;
            //console.log("produit: " + product.name + " unlocked:" + product.managerUnlocked);

            // sendToServer("manager", manager);
            let newRequest: ajaxRequest = {type: "manager", content: manager};
            ajaxRequests.push(newRequest);
        }
    })
}


// Retrouver un produit à partir d'un id
export function findProduct(world: World, idProduct: number): Product {
    let p: Product = null;
    $.each(world.products.product, function (index, product) {
        if (product.id.toString() == idProduct.toString()) {
            p = product
            return p;
        }
    })

    return p;
}


// Applique un bonus 
export function applyBonusProduct(product: Product, ratio: number, type: string) {
    switch (type) {
        case "VITESSE":
            product.vitesse = product.vitesse / ratio;
            product.timeleft = product.timeleft / ratio;
            break;
        case "GAIN":
            product.revenu = product.revenu * ratio;
            break
    }
}
