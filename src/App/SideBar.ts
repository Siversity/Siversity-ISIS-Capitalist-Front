                                                import { World, Product, Pallier } from "../Classes/world";
import { transform } from "./Header"

export const listAddProducts: any[] = [1, 10, 100, "Max"];
export var addSelected: any = 1;


// Fonction créant la bare de menu à drotie contenant le sélecteur sur la quantité de produits à acheter
export function showSideBar(server: string, world: World) {
    // Obtention du container des produits
    let container = document.getElementById("products");

    // Création du container du menu
    let sideContainer = document.createElement("div");
    container.appendChild(sideContainer);
    sideContainer.id = "sideMenu";
    // Centrage du menu à droite
    sideContainer.classList.add("position-absolute", "top-50", "end-0", "translate-middle-y");

    // Création d'une liste de boutons à la verticale
    let listButton = document.createElement("div");
    sideContainer.appendChild(listButton);
    listButton.classList.add("btn-group-vertical", "sideContainer");
    listButton.setAttribute("role", "group");

    // On génère des boutons de type radio
    listAddProducts.forEach(addNumber => {

        // On crée l'input du bouton
        let addNumberInput = document.createElement("input");
        listButton.appendChild(addNumberInput);
        addNumberInput.id = "button" + addNumber;
        addNumberInput.type = "radio";
        addNumberInput.classList.add("btn-check");
        addNumberInput.name = "btnradio";
        addNumberInput.autocomplete = "off"
        // A l'initialisation, l'option +1 est celle cochée par défaut
        if (addNumber == "1") {
            addNumberInput.setAttribute("checked", "");
        }

        // On crée le label du bouton
        let addNumberButton = document.createElement("label");
        listButton.appendChild(addNumberButton);
        addNumberButton.classList.add("addButton", "addButtonOutline", "align-middle");
        addNumberButton.setAttribute("for", addNumberInput.id)
        addNumberButton.innerHTML = "+" + addNumber;
        // Event : modification du sélecteur au clic
        $(addNumberButton).click(function () {
            addSelected = addNumber;
            buyableProducts(world);
        });
    });
}


// Fonction changeant l'affichage lié à l'achat d'un produit
export function buyableProducts(world: World) {

    // Si l'option est une valeur constante
    if (addSelected != "Max") {
        world.products.product.forEach(product => {
            // Changement affichage bouton
            let addProduct: HTMLElement = document.getElementById("add" + product.id);
            addProduct.innerHTML = "+" + addSelected;

            // Changement affichage coût
            let cost: number = getCostProduct(product, addSelected);
            let costProduct: HTMLElement = document.getElementById("cost" + product.id);
            costProduct.innerHTML = transform(cost);

            // Si le joueur n'a pas assez d'argent pour acheter le produit, on désactive le bouton
            if (world.money < cost) {
                addProduct.setAttribute("disabled", "true");
            }
            // Sinon on l'active
            else {
                addProduct.removeAttribute("disabled");
            }
        });
    }

    // Si l'option consiste à la valeur max
    if (addSelected == "Max") {
        world.products.product.forEach(product => {
            let max: number = getMaxProduct(world, product);

            // Changement affichage bouton
            let addProduct: HTMLElement = document.getElementById("add" + product.id);
            addProduct.removeAttribute("disabled");
            addProduct.innerHTML = "+" + max;

            // Changement affichage coût
            let cost: number = getCostProduct(product, max);
            let costProduct: HTMLElement = document.getElementById("cost" + product.id);
            costProduct.innerHTML = transform(cost);
        });


    }

}


// Fonction calculant le coût d'un groupe de produits
export function getCostProduct(product: Product, addNumber: number): number {
    // Calcul des termes
    // let un = product.cout * Math.pow(product.croissance, product.quantite);
    let un = product.cout;
    let numerator = 1 - Math.pow(product.croissance, addNumber);
    let denominator = 1 - product.croissance
    let cout = (un * numerator) / denominator;

    // Retour du coût calculé
    return cout;
}

// Fonction calculant le nombre max de produits achetable
export function getMaxProduct(world: World, product: Product): number {
    // Calcul des termes
    // let un = product.cout * Math.pow(product.croissance, product.quantite);
    let un = product.cout;
    let numerator: number = Math.log(-(world.money - world.money * product.croissance - un) / un);
    let denominator: number = Math.log(product.croissance);
    let max: number = (numerator / denominator)

    // Retour du max de produits
    return Math.floor(max);
}