import { World, Product, Pallier } from "../Classes/world";
import { addProgressBar, setProgressBar } from "./ProgressBar";

import { progressBarList, lastUpdateList } from "..";
import {addSelected, setAddProduct, getCostProduct, getMaxProduct} from "./SideBar";
import { transform } from "./Header";


// Fonction principale d'appel des produits
export function showProducts(server: string, world: World) {
    let container = document.getElementById("products");

    $.each(world.products.product, function (index, product) {

        // Container (colonne)
        let col = document.createElement("div");
        container.appendChild(col);
        col.id = "p" + product.id
        col.classList.add("col", "doubleBorderProduct");

        // Titre (ligne)
        let productTitle = document.createElement("div");
        col.appendChild(productTitle);
        productTitle.classList.add("row", "justify-content-center", "bccFont");
        productTitle.innerHTML = product.name;

        // Image (ligne)
        let productImage = document.createElement("div");
        col.appendChild(productImage);
        productImage.classList.add("row", "productImage");
        let image = document.createElement("img");
        productImage.appendChild(image);
        image.id = "img" + product.id;
        image.classList.add("productIcons")
        // Si ce produit n'a pas été débloqué, on l'affiche en gris
        if (product.quantite == 0) {
            image.classList.add("disabledProduct");
        }
        image.src = server + product.logo
        // Ajout event production
        $(image).click(function () {
            startProduct(product)
        });

        // Barre de progression
        addProgressBar(server, product, col);

        // Level --> Quantité (colonne)
        let productQte = document.createElement("div");
        col.appendChild(productQte);
        productQte.classList.add("row", "productLevel");
        let level = document.createElement("span");
        productQte.appendChild(level);
        level.id = "qte" + product.id;
        level.classList.add("bccFont");
        level.innerHTML = product.quantite.toString();


        // Container (ligne)
        let productContainer = document.createElement("div");
        col.appendChild(productContainer);
        productContainer.classList.add("row", "mt-3");

        // Nbr level à acheter (colonne)
        let productAdd = document.createElement("div");
        productContainer.appendChild(productAdd);
        productAdd.classList.add("col", "d-flex", "justify-content-center");
        let productButton = document.createElement("button");
        productAdd.appendChild(productButton);
        productButton.id = "add" + product.id
        productButton.type = "button";
        productButton.classList.add("addProduct", "align-middle");
        $(productButton).click(function () {
            console.log("click");
            addProduct(world, product);
        });


        // Coût ajout level (colonne)
        let productCost = document.createElement("div");
        productContainer.appendChild(productCost);
        productCost.id = "cost" + product.id;
        productCost.classList.add("col", "bccFont", "text-center");
        productCost.innerHTML = (product.cout + Math.pow(product.croissance, product.quantite)).toString();
    });
    setAddProduct(world);
}


// Fonction permettant de lancer la production d'un produit
export function startProduct(product: Product) {
    // On vérifie que l'on peut activer le produit
    if (verifProduct(product)) {
        console.log("Lancement de la production de " + product.name);
        product.timeleft = product.vitesse;
        lastUpdateList[product.id] = Date.now();
        setProgressBar(product.id, 100);
    }
    
}


// Fonction permettant que produit est activable
function verifProduct(product: Product): boolean {
    if ((product.quantite > 0) && (product.timeleft == 0)) {
        return true;
    }
    else {
        return false;
    }
}


// Fonction permettant d'ajouter une quantité à un produit
function addProduct(world: World, product: Product) {
    // Si l'option sélectionnée n'est pas le max achetable
    if (addSelected != "Max") {
        // On calcule le coût
        let cost = getCostProduct(product, addSelected);

        modifyProduct(world, product, addSelected, cost);
    }

    // Si l'option sélectionnée est le max achetable
    if (addSelected == "Max") {
        // On calcule le max achetable et son cout
        let max = getMaxProduct(world, product);
        let cost = getCostProduct(product, max);

        // On modifie l'affichage du produit
        modifyProduct(world, product, max, cost);
    }
}


// Fonction effectuant les changements d'affichage liés à l'achat d'un produit
function modifyProduct(world: World, product: Product, quantity: number, cost: number) {
    // On vérifie que l'on a assez d'argent
    if (world.money > cost) {
        // On ajoute la quantité achetée
        product.quantite += quantity;
        document.getElementById("qte" + product.id).innerHTML = product.quantite.toString();

        // On soustrait l'argent dépensé
        world.money -= cost;
        document.getElementById("worldMoney").innerHTML = transform(world.money);

        // Si l'option sélectionnée est le max achetable
        if (addSelected == "Max") {
            // On recalcule le max
            quantity = getMaxProduct(world, product);
            // On change l'affichage sur chaque produit en fonction du nouveau solde
            setAddProduct(world);
        }
        // On calcule le nouveau coût après achat
        let newCost = getCostProduct(product, quantity);
        document.getElementById("cost" + product.id).innerHTML = transform(newCost);
        
        // S'il s'agit du 1er achat sur un produit, on l'affiche en clair
        let imageProduct = document.getElementById("img" + product.id);
        if (imageProduct.classList.contains("disabledProduct")) {
            imageProduct.classList.remove("disabledProduct");
        }
    }
}