import { World, Product, Pallier } from "../Classes/world";

// Création container du header
export function displayMenu(world: World, server: string) {
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
    managers.innerHTML = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalManager">Managers</button>';


    //Création investors
    let investors = document.createElement("div");
    navbar.appendChild(investors);
    investors.classList.add("investors");
    investors.innerHTML = "Investors";

}
<<<<<<< HEAD
=======

/*
<div id="managers" class="modal fade">
 <div>



 </div>

 <div class="modal-dialog" role="document">
 <div class="modal-content">
 <div class="modal-header">
 <button type="button" class="close" data-dismiss="modal"
aria-label="Close"><span aria-hidden="true">&times;</span>
 </button>
 <h4 class="modal-title" id="myModalLabel">Titre principal</h4>
 </div>
 <div class="modal-body">
 </div>
 <div class="modal-footer">
 <button type="button" class="btn btn-default"
data-dismiss="modal">Close
 </button>
 </div>
 </div>
 </div>
</div>

*/
>>>>>>> bb09bd5b29b06c4481cdaa091fc3d5d6d1eb3788
