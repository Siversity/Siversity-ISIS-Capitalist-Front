import {World, Product, Pallier} from "./Classes/world";
import { showProducts } from "./App/Products";
import { displayHeader, transform} from "./App/Header"
import { setProgressBar } from "./App/ProgressBar";
import { addSelected, setAddProduct, showSideBar } from "./App/SideBar";
import { displayMenu } from "./App/Menu";


var serveurUrl: string = "https://isiscapitalist.kk.kurasawa.fr/";
var currentWorld: World;

$(document).ready(function () {
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        currentWorld = world;
        console.log(currentWorld)


        world.money = 200;


        // remplir le layout avec les informations globales
        // (nom du monde, argent total....)
        // puis boucler sur chaque produit
        $.each(world.products.product, function (index, product) {

        });

        displayHeader(serveurUrl, world);
        showProducts(serveurUrl, world);
        displayMenu(world,serveurUrl)
        showSideBar(serveurUrl, world);

        setInterval(function() {
            // On calcule en permanence le score
            calcScore(serveurUrl, currentWorld);
            // Si l'option d'ajout sélectionnée est le max achetable, on synchronise avec en fonction du score
            if (addSelected == "Max") {
                setAddProduct(world);
            }
        }, 100);

    });
});


export const progressBarList: any[] = [];
export const lastUpdateList : number[] = [];

function calcScore(server: string, world: World) {
    $.each(world.products.product, function (index, product) {
        if (product.timeleft != 0) {
            let timeRemaining: number = Date.now() - lastUpdateList[product.id];
            product.timeleft = product.timeleft - timeRemaining;

            let pourcentage: number = (product.timeleft * 100) / product.vitesse;
            setProgressBar(product.id, pourcentage);
            
            if (this.timeleft <= 0) {
                console.log("Le produit " + product.name + " a rapporté " + product.revenu);
                let revenu: number = product.revenu;
                addScore(world, revenu);
                product.timeleft = 0;
                setProgressBar(product.id, 0);
            }
        }
    });
}


function addScore(world: World, score: number) {
    world.money = world.money + score;
    document.getElementById("worldMoney").innerHTML = transform(world.money);
}