import { World, Product, Pallier } from "../Classes/world";

export function displayModal(server: string,world: World ) {



let m =document.getElementById("modalManager");

//Balise Modal Dialogue
let md = document.createElement("div");
m.appendChild(md);
md.classList.add("modal-dialog");
md.setAttribute("role","document");

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
b.classList.add("close")
b.setAttribute("type","button");
b.setAttribute("data-dismiss","modal");
b.setAttribute("aria-label","Close");
b.innerHTML='<span aria-hidden="true">&times;</span>'  ; //&times; ==> X

//Titre de la fenêtre
let t = document.createElement("h4");
mh.appendChild(t);
t.classList.add("modal-title");
t.setAttribute("id","myModalLabel");
t.innerText="Les Managers";


//Création Body
let bodyM = document.createElement("div");
mc.appendChild(bodyM);
bodyM.classList.add("modal-body");
bodyM.setAttribute("id","modalBody");

//Remplissage du body avec les differrents managers
//listManagers(server,world);

//Balise Modal Footer
let mf =document.createElement("div");
mc.appendChild(mf);
mf.classList.add("modal-footer");

//Ajout bouton fermer dans le footer
let buttonClose=document.createElement("button");
mf.appendChild(buttonClose);
buttonClose.classList.add("btn","btn-default");
buttonClose.setAttribute("type","button");
buttonClose.setAttribute("data-dismiss","modal");
buttonClose.innerHTML="Close !!";

//m.innerHTML='<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">...</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div>'
}



function listManagers(server: string,world: World) {
    let container = document.getElementById("modalBody");

    $.each(world.managers.pallier, function (index, pallier) {


        let ligne = document.createElement("div");
        container.appendChild(ligne);
        ligne.id = "p" + pallier.name
        ligne.classList.add("row");

        // Titre (ligne)
        let managerName = document.createElement("div");
        ligne.appendChild(managerName);
        managerName.classList.add("row");
        managerName.innerHTML = pallier.name;

        // Image (ligne)
        let managerImage = document.createElement("div");
        ligne.appendChild(managerImage);
        managerImage.classList.add("row");
        let image = document.createElement("img");
        managerImage.appendChild(image);
        image.classList.add("managerImage")
        image.src = server + pallier.logo

        //Bouton Hire!
        let buttonHire = document.createElement("button");
        ligne.appendChild(buttonHire);
        buttonHire.classList.add("class","btn","btn-secondary");
        buttonHire.setAttribute("type","button");
        buttonHire.innerText="Achète Moi !";

    })

}
