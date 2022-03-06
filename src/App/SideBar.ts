import { data } from "jquery";
import {World, Product, Pallier} from "../Classes/world";

export const listAddProducts: string[] = ["+1", "+10", "+100", "+Max"];

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
        addNumberButton.innerHTML = addNumber;
    });
    
    

}