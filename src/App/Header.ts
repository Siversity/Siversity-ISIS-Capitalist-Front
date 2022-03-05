import { World, Product, Pallier } from "../Classes/world";

// Création container du header
export function displayHeader(world: World, server:string) {

    let container = document.getElementById("header");

    //création première colone avec le nom et le logo
    let monde = document.createElement("div");
    container.appendChild(monde);
    monde.classList.add("col","monde","bccFont");

    //Logo
    let logo = document.createElement("img");
    monde.appendChild(logo);
    logo.classList.add("logo");
    logo.src = server + world.logo;

    //Nom
    let name = document.createElement("span");
    monde.appendChild(name);
    name.classList.add("name");
    name.innerHTML=" " + world.name;

    //Création second entête, l'argent
    let moneyCol = document.createElement("div")
    container.appendChild(moneyCol)
    moneyCol.classList.add("col","bccFont")

    //L'argent
    let money = document.createElement("div");
    moneyCol.appendChild(money);
    money.classList.add("money");
    money.innerHTML= transform(world.money);

    //Création dernier entète, User ID
    let idCol = document.createElement("div");
    container.appendChild(idCol);
    idCol.classList.add("col","bccFont");

    //User ID
    let userId = document.createElement("div");
    idCol.appendChild(userId);
    userId.classList.add("userId");
    userId.innerHTML="ID:";
}

export function transform(valeur: number): string {
    let res : string = "";
    if (valeur < 1000)
    res = valeur.toFixed(2);
    else if (valeur < 1000000)
    res = valeur.toFixed(0);
    else if (valeur >= 1000000) {
    res = valeur.toPrecision(4);
    res = res.replace(/e\+(.*)/, " 10<sup>$1</sup>");
    }
    return res;
   }
   