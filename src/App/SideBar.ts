
import { World, Product, Pallier } from "../Classes/world";
import { transform } from "./Header"

export const listAddProducts: any[] = [1, 10, 100, "Max"];

export function showSideBar(server: string, world: World) {
    let container = document.getElementById("products");

    let sideContainer = document.createElement("div");
    container.appendChild(sideContainer);
    sideContainer.id = "sideMenu";
    sideContainer.classList.add("position-absolute", "top-50", "end-0", "translate-middle-y");

    let listButton = document.createElement("div");
    sideContainer.appendChild(listButton);
    listButton.classList.add("btn-group-vertical", "sideContainer");
    listButton.setAttribute("role", "group");

    listAddProducts.forEach(addNumber => {

        let addNumberInput = document.createElement("input");
        listButton.appendChild(addNumberInput);
        addNumberInput.id = "button" + addNumber;
        addNumberInput.type = "radio";
        addNumberInput.classList.add("btn-check");
        addNumberInput.name = "btnradio";
        addNumberInput.autocomplete = "off"
        if (addNumber == "+1") {
            addNumberInput.setAttribute("checked", "");
        }

        let addNumberButton = document.createElement("label");
        listButton.appendChild(addNumberButton);
        addNumberButton.classList.add("addButton", "addButtonOutline", "align-middle");
        addNumberButton.setAttribute("for", addNumberInput.id)
        addNumberButton.innerHTML = "+" + addNumber;
        $(addNumberButton).click(function () {
            setAddProduct(world, addNumber);
        });
    });
}


export function setAddProduct(world: World, addNumber: any) {
    console.log(addNumber + " selected");
    if (addNumber != "Max") {
        world.products.product.forEach(product => {
            // Changement bouton
            let addProduct: HTMLElement = document.getElementById("add" + product.id);
            addProduct.innerHTML = "+" + addNumber;

            // Changement coût
            let cost: number = getCostProduct(product, addNumber);
            let costProduct: HTMLElement = document.getElementById("cost" + product.id);
            costProduct.innerHTML = transform(cost);

            if (world.money < cost) {

            }
        });
    }
    if (addNumber == "Max") {
        console.log("On calcule le max achetable");

        world.products.product.forEach(product => {
            // Calcul max achetable
            let numerator: number = Math.log((-world.money - world.money * product.croissance - product.cout) / product.cout);
            let denominator: number = Math.log(product.croissance);
            let max: number = Math.floor((numerator / denominator) - 1)
            // console.log("product.name : " + max)

            // Changement bouton
            let addProduct: HTMLElement = document.getElementById("add" + product.id);
            addProduct.innerHTML = "+" + max;

            // Changement coût
            let cost: number = getCostProduct(product, max);
            let costProduct: HTMLElement = document.getElementById("cost" + product.id);
            costProduct.innerHTML = transform(cost);
        });
        

    }

}


function getCostProduct(product: Product, addNumber: number): number {
    // Changement cout
    let numerator: number = 1 - Math.pow(product.croissance, addNumber);
    let denominator: number = 1 - product.croissance;
    let cost: number = Math.ceil(product.cout * (numerator) / denominator) // On arrondi à la valeur sup

    return cost;
}