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

    //Bouton Unlocks
    let buttonUnlock = document.createElement("button")
    unlocks.appendChild(buttonUnlock);
    buttonUnlock.classList.add("btn", "btn-primary")
    buttonUnlock.setAttribute("data-bs-toggle", "modal")
    buttonUnlock.setAttribute("data-bs-target", "#modalUnlock")
    buttonUnlock.innerText = "Unlocks ";


    //création cash upgrades
    let cash = document.createElement("div");
    navbar.appendChild(cash);
    cash.classList.add("cash");

    //Bouton Upgrades
    let buttonCashUp = document.createElement("button")
    cash.appendChild(buttonCashUp);
    buttonCashUp.classList.add("btn", "btn-primary")
    buttonCashUp.setAttribute("data-bs-toggle", "modal")
    buttonCashUp.setAttribute("data-bs-target", "#modalCashUp")
    buttonCashUp.innerText = "CashUpgrades ";

    //Création badge
    let badgeCashUp = document.createElement("span");
    buttonCashUp.appendChild(badgeCashUp);
    badgeCashUp.id = "badgeCashUp"
    badgeCashUp.classList.add("badge", "bg-secondary");


    //Création angels upgrades
    let angels = document.createElement("div");
    navbar.appendChild(angels);
    angels.classList.add("angels");
    angels.innerHTML = "Angels upgrades";

    //Création managers
    let managers = document.createElement("div");
    navbar.appendChild(managers);
    managers.classList.add("managers");

    //Bouton Manager
    let buttonManager = document.createElement("button")
    managers.appendChild(buttonManager);
    buttonManager.classList.add("btn", "btn-primary")
    buttonManager.setAttribute("data-bs-toggle", "modal")
    buttonManager.setAttribute("data-bs-target", "#modalManager")
    buttonManager.innerText = "Managers ";

    //Création badge
    let badgeManager = document.createElement("span");
    buttonManager.appendChild(badgeManager);
    badgeManager.id = "badgeManager"
    badgeManager.classList.add("badge", "bg-secondary");


    //Création investors
    let investors = document.createElement("div");
    navbar.appendChild(investors);
    investors.classList.add("investors");
    investors.innerHTML = "Investors";

}
