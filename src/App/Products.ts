import { World, Product, Pallier } from "../Classes/world";
import { addProgressBar, setProgressBar } from "./ProgressBar";

import { progressBarList, lastUpdateList } from "..";

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
        image.classList.add("productIcons")
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
        productButton.innerHTML = "+" + 1;

        // Coût ajout level (colonne)
        let productCost = document.createElement("div");
        productContainer.appendChild(productCost);
        productCost.classList.add("col", "bccFont", "text-center");
        productCost.innerHTML = product.cout.toString();
    });
}


function startProduct(product: Product) {
    if (verifProduct(product)) {
        console.log("Lancement de la production de " + product.name);
        product.timeleft = product.vitesse;
        lastUpdateList[product.id] = Date.now();
        setProgressBar(product.id, 100);
    }
    
}

function verifProduct(product: Product): boolean {
    if ((product.quantite > -1) && (product.timeleft == 0)) {
        return true;
    }
    else {
        return false;
    }
}