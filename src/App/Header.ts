import { World, Product, Pallier } from "../Classes/world";
import { username, setUsername } from "..";

// Création container du header
export function displayHeader(server: string, world: World) {

    let container = document.getElementById("header");

    //création première colone avec le nom et le logo
    let monde = document.createElement("div");
    container.appendChild(monde);
    monde.classList.add("col", "monde", "bccFont");

    //Logo
    let logo = document.createElement("img");
    monde.appendChild(logo);
    logo.classList.add("logo");
    logo.src = server + world.logo;

    //Nom
    let name = document.createElement("span");
    monde.appendChild(name);
    name.id = "worldName";
    name.classList.add("name");
    name.innerHTML = " " + world.name;

    //Création second entête, l'argent
    let moneyCol = document.createElement("div")
    container.appendChild(moneyCol)
    moneyCol.classList.add("col", "bccFont", "money")

    //L'argent
    let money = document.createElement("div");
    moneyCol.appendChild(money);
    money.id = "worldMoney";
    let argent = transform(world.money);
    money.innerHTML = argent;

    let devise = document.createElement("img")
    moneyCol.appendChild(devise)
    devise.classList.add("devise")
    devise.src='../../Style/Images/devise.png'

    //Création dernier entète, User ID
    let userCol = document.createElement("div");
    container.appendChild(userCol);
    userCol.classList.add("col");

    let userRow = document.createElement("div");
    userCol.appendChild(userRow);
    userRow.classList.add("row");

    let labelUser = document.createElement("label");
    userRow.appendChild(labelUser);
    labelUser.htmlFor = "inputUser";
    labelUser.classList.add("form-label")

    let inputUser = document.createElement("input");
    userRow.appendChild(inputUser);
    inputUser.id = "inputUser"
    inputUser.classList.add("form-control");
    inputUser.type = "text";
    inputUser.placeholder = "Pseudo";
    inputUser.value = username;
    inputUser.readOnly = true;

    let buttonUserDiv = document.createElement("div");
    container.appendChild(buttonUserDiv);
    buttonUserDiv.id = "userDiv"
    buttonUserDiv.classList.add("buttonUserDiv")

    let buttonInput = document.createElement("input");
    buttonUserDiv.appendChild(buttonInput);
    buttonInput.id = "userButtonCheck";
    buttonInput.type = "checkbox";
    buttonInput.classList.add("btn-check");

    let buttonLabel = document.createElement("label");
    buttonUserDiv.appendChild(buttonLabel);
    buttonLabel.classList.add("btn", "btn-primary");
    buttonLabel.htmlFor = "userButtonCheck";
    buttonLabel.innerHTML = "<i class='bi bi-check-square'></i>";
    $(buttonLabel).click(function () {
        if (inputUser.readOnly) {
            inputUser.readOnly = false; 
        }
        else {
            inputUser.readOnly = true;
            setUsername(inputUser.value);
            window.location.reload();
        }
    });

}

export function transform(valeur: number): string {
    let res: string = "";
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
