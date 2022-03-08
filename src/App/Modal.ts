import { matchId } from "..";
import { World, Product, Pallier } from "../Classes/world";
import { transform } from "./Header";

export function displayModal(server: string, world: World) {

    let m = document.getElementById("modalManager");

    //Balise Modal Dialogue
    let md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog", "modal-lg");
    md.setAttribute("role", "document");

    //Balise Modal Content
    let mc = document.createElement("div");
    md.appendChild(mc);
    mc.classList.add("modal-content");

    //Balise Modal header
    let mh = document.createElement("div");
    mc.appendChild(mh);
    mh.classList.add("modal-header");

    //Bouton Fermer la fenêtre
    let b = document.createElement("button");
    mh.appendChild(b);
    b.classList.add("btn-close")
    b.setAttribute("type", "button");
    b.setAttribute("data-bs-dismiss", "modal");
    b.setAttribute("aria-label", "Close");

    //Titre de la fenêtre
    let t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Les Managers";


    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.setAttribute("id", "modalBody");

    //Remplissage du body avec les differrents managers
    listManagers(server, world);
}
function listManagers(server: string, world: World) {
    let body = document.getElementById("modalBody");
    let container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");

    let grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("row", "row-cols-2");//"row", "row-cols-2"

    $.each(world.managers.pallier, function(index,pallier){
        let col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("row");
        col.id = "manager" + pallier.idcible.toString();

        //Partie Image et nom du managers
        let imageName = document.createElement("div");
        col.appendChild(imageName);
        imageName.classList.add("col");//"col-4", "col-lg-2"

        //Partie Image
        let image = document.createElement("div");
        imageName.appendChild(image);
        image.classList.add("row");

        let imageManager = document.createElement("img");
        image.appendChild(imageManager);
        imageManager.id = "img" + pallier.idcible;
        imageManager.src = server + pallier.logo;
        imageManager.classList.add("img-fluid", "rounded")

        //Partie Nom et prix
        let namePrice = document.createElement("div")
        imageName.appendChild(namePrice);
        namePrice.classList.add("row")

        //Partie Nom
        let nameManager = document.createElement("div");
        namePrice.appendChild(nameManager);
        nameManager.classList.add("col");
        nameManager.innerText = pallier.name;

        //Partie Prix
        let priceManager = document.createElement("div");
        namePrice.appendChild(priceManager);
        priceManager.classList.add("col");
        let cost = transform(pallier.seuil)
        priceManager.innerHTML=cost;

        //Partie bouton d'embauche
        let hire = document.createElement("div");
        col.appendChild(hire);
        hire.classList.add("col"); //"col-4", "col-lg-2"

        let buttonHire = document.createElement("button");
        hire.appendChild(buttonHire);
        buttonHire.id = "hire" + pallier.idcible;
        buttonHire.classList.add("btn", "btn-primary", "buttonHire");
        buttonHire.innerText = "Achete Moi !";
        $(buttonHire).click(function () {
            console.log("je tente d'acheter un manager :)");
            acheterManager(pallier,world);
        });

        // Le Manager a t il déja été acheté ?
        /*
        if (pallier.unlocked == true) {
            buttonHire.classList.add("btn", "btn-secondary");
            buttonHire.setAttribute("disabled", "true");
            buttonHire.innerText = "Acheté";
        }
        else {
            buttonHire.classList.add("btn", "btn-primary", "buttonHire");
            buttonHire.innerText = "Achete Moi !";
            $(buttonHire).click(function () {
                console.log("je tente d'acheter un manager :)");
                acheterManager(pallier,world);
                
            });
        }*/



    });

}



// Un manager est-il achetable ?
export function verifManager(world: World) {
    $.each(world.managers.pallier, function (index, pallier) {
        let button = document.getElementById("hire" + pallier.idcible);
        if (pallier.seuil > world.money) {
            button.setAttribute("disabled", "true");
        }
        else{
            button.removeAttribute("disabled");
        }
    })
}


export function anyNews(world:World){
    let managerDispo =0;
    $.each(world.managers.pallier,function(index,manager){
        if(manager.seuil <= world.money && manager.unlocked==false){
            managerDispo ++;
        };
    })
    console.log(managerDispo);
    let notifManager=document.getElementById("badgeManager");
    if(managerDispo==0){
        notifManager.innerText=null;
    }
    else{
        notifManager.innerText=""+managerDispo;  
    }
}



function acheterManager(manager: Pallier, world: World) {
    //Le manager est-il achetable ?
    if (manager.seuil <= world.money) {
        console.log("le manager est achetable");
        //Soustraction du prix du manager à l'argent du monde
        world.money-=manager.seuil;
        //Manager ==> Unlocked
        manager.unlocked=true;
        matchId(manager.idcible,world);

        //Changement du bouton Hire en Acheté et disabled
        let button = document.getElementById("hire"+manager.idcible);
        button.setAttribute("disabled","true");
        button.innerText="Acheté"
        button.classList.remove();
        button.classList.add("btn","btn-secondary");
        //Modification Calcscore
        console.log("Modification de CalcScore")
    }
    else{
        console.log("le manager n'est pas achetable \b fin de transation");
    }



}