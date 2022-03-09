import {World, Product, Pallier} from "./Classes/world";
import { showProducts, startProduct } from "./App/Products";
import { displayHeader, transform} from "./App/Header"
import { setProgressBar } from "./App/ProgressBar";
import { addSelected, setAddProduct, showSideBar } from "./App/SideBar";
import { displayMenu } from "./App/Menu";
import { anyNews, displayModal, verifManager } from "./App/Modal";
import { displayModalUnlock } from "./App/ModalUnlock";


var serveurUrl: string = "https://isiscapitalist.kk.kurasawa.fr/";
var currentWorld: World;
var ourWorld: boolean = true;

export var username = localStorage.getItem("username");
export function setUsername(newUsername: string) {
    username = newUsername;
    localStorage.setItem("username", newUsername);
}


$(document).ready(function () {

    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        currentWorld = world;
        console.log(currentWorld)


        world.money = 2000000;

        // remplir le layout avec les informations globales
        // (nom du monde, argent total....)
        // puis boucler sur chaque produit
        $.each(world.products.product, function (index, product) {

        });

        displayHeader(serveurUrl, world);
        showProducts(serveurUrl, world);
        displayMenu(world);
        showSideBar(serveurUrl, world);
        displayModal(serveurUrl, world);
        displayModalUnlock(serveurUrl,world);

        setInterval(function() {
            // On calcule en permanence le score
            calcScore(serveurUrl, currentWorld);
            verifManager(world);
            anyNews(world);
            // Si l'option d'ajout sélectionnée est le max achetable, on synchronise avec en fonction du score
            //if (addSelected == "Max") {
                //setAddProduct(world);
            //}
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
        else if ((product.timeleft==0) && (product.managerUnlocked==true)){
            console.log("Lancement produit");
            startProduct(product);
        }
    });
}


function addScore(world: World, score: number) {
    world.money = world.money + score;
    document.getElementById("worldMoney").innerHTML = transform(world.money);
}

export function matchId(id:number,world:World){
    let idProduct
    $.each(world.products.product, function(index,product){
         idProduct = product.id;
        if(idProduct==id){
            product.managerUnlocked=true;
            console.log("produit: "+product.name+" unlocked:"+product.managerUnlocked);
        }
    })

}