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
    buttonUnlock.classList.add("btn","btn-Menu", "bccFont")
    buttonUnlock.setAttribute("data-bs-toggle", "modal")
    buttonUnlock.setAttribute("data-bs-target", "#modalUnlock")
    buttonUnlock.innerText = "Unlocks";


    //création cash upgrades
    let cash = document.createElement("div");
    navbar.appendChild(cash);
    cash.classList.add("cash");

    //Bouton Upgrades
    let buttonCashUp = document.createElement("button")
    cash.appendChild(buttonCashUp);
    buttonCashUp.classList.add("btn", "btn-primary","btn-Menu", "bccFont")
    buttonCashUp.setAttribute("data-bs-toggle", "modal")
    buttonCashUp.setAttribute("data-bs-target", "#modalCashUp")
    buttonCashUp.innerText = "Upgrades  ";

    //Création badge
    let badgeCashUp = document.createElement("span");
    buttonCashUp.appendChild(badgeCashUp);
    badgeCashUp.id = "badgeCashUp"
    badgeCashUp.classList.add("badge", "bg-secondary", "bsFont");


    //Création angels upgrades
    let angels = document.createElement("div");
    navbar.appendChild(angels);
    angels.classList.add("angels");

    let buttonAngel = document.createElement("button")
    angels.appendChild(buttonAngel);
    buttonAngel.classList.add("btn", "btn-primary","btn-Menu", "bccFont")
    buttonAngel.setAttribute("data-bs-toggle", "modal")
    buttonAngel.setAttribute("data-bs-target", "#modalAngel")
    buttonAngel.innerText = "Angels";

    //Création managers
    let managers = document.createElement("div");
    navbar.appendChild(managers);
    managers.classList.add("managers");

    //Bouton Manager
    let buttonManager = document.createElement("button")
    managers.appendChild(buttonManager);
    buttonManager.classList.add("btn", "btn-primary","btn-Menu", "bccFont")
    buttonManager.setAttribute("data-bs-toggle", "modal")
    buttonManager.setAttribute("data-bs-target", "#modalManager")
    buttonManager.innerText = "Managers  ";

    //Création badge
    let badgeManager = document.createElement("span");
    buttonManager.appendChild(badgeManager);
    badgeManager.id = "badgeManager"
    badgeManager.classList.add("badge", "bg-secondary", "bsFont");

}
