import { World, Product, Pallier } from "../Classes/world";

// Création container du header
export function displayMenu(world: World) {
    let container = document.getElementById("menu");

    //création navbar
    let navbar = document.createElement("div");
    container.appendChild(navbar);
    navbar.classList.add("navbar", "fixed-bottom");

    //création unlocks
    let unlocks = document.createElement("div");
    navbar.appendChild(unlocks);
    unlocks.classList.add("unlocks");
    unlocks.innerHTML = "Unlocks";

    //création cash upgrades
    let cash = document.createElement("div");
    navbar.appendChild(cash);
    cash.classList.add("cash");
    cash.innerHTML = "Cash Upgrades";

    //Création angels upgrades
    let angels = document.createElement("div");
    navbar.appendChild(angels);
    angels.classList.add("angels");
    angels.innerHTML = "Angels upgrades";

    //Création managers
    let managers = document.createElement("div");
    navbar.appendChild(managers);
    managers.classList.add("managers");
    managers.innerHTML = '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalManager">Managers</button>';


    //Création investors
    let investors = document.createElement("div");
    navbar.appendChild(investors);
    investors.classList.add("investors");
    investors.innerHTML = "Investors";

}
