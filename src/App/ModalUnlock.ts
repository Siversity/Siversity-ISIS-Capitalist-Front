import { World, Product, Pallier } from "../Classes/world";

export function displayModalUnlock(server: string, world: World) {
    let m = document.getElementById("modalUnlock");

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

    //Création select barre
    let selectBarre = document.createElement("select")
    mh.appendChild(selectBarre)
    selectBarre.id="selectBarreUnlocks"
    $.each(world.products.product, function(index,product){
        let opt = document.createElement("option")
        selectBarre.appendChild(opt)
        opt.id="optProduit"+product.id
        opt.value=""+product.id
        opt.text=product.name
    })
    let opt = document.createElement("option")
    selectBarre.appendChild(opt)
    opt.id="optProduit"+0
    opt.value=""+0
    opt.text="Tous les produits"

    $( selectBarre ).change(function() {
        console.log(this.value)
        affichageUnlock(parseInt(this.value),server,world)
      });


    //Titre de la fenêtre
    let t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Les Unlocks";

    //Création Body
    let bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id="modalUnlockBody";

    //Remplissage du body avec les differrents managers
    //fillingBodyModalUnlock(server,world)
}


function fillingBodyModalUnlock(server: string, world: World) {
    console.log("remplissage modal unlock")

    let body = document.getElementById("modalUnlockBody");
    /*
    let container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");*/

    let grid = document.createElement("div");
    body.appendChild(grid);
    grid.classList.add("row", "row-cols-2");//"row", "row-cols-2"


    $.each(world.allunlocks.pallier,function(index,unlock){
        //Création des lignes de chaque unlock
        let col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("col");
        col.id = "unlock" + unlock.idcible;

        //division de la ligne en deux parties (Image+Description // Unlocked ou non)
        let colImageDesc = document.createElement("div")//Image Description
        let colUnlocked = document.createElement("div")//Affichage est il dévérouillé ?
        col.appendChild(colImageDesc)
        col.appendChild(colUnlocked)
        colImageDesc.classList.add("col")
        colUnlocked.classList.add("col")
        

        //Affichage Icon Unlock
        let iconUnlock = document.createElement("img")
        colImageDesc.appendChild(iconUnlock)
        iconUnlock.src=server+unlock.logo
        iconUnlock.classList.add("imgUnlock")

        let nomUnlock = document.createElement("h3")
        colImageDesc.appendChild(nomUnlock)
        nomUnlock.innerText=unlock.name

        let descrUnlock = document.createElement("span")
        colImageDesc.appendChild(descrUnlock)
        descrUnlock.innerText="Augmentation de "+unlock.typeratio+" x"+unlock.ratio

        let seuilUnlock = document.createElement("span")
        colImageDesc.appendChild(seuilUnlock)
        seuilUnlock.innerText="Seuil: "+unlock.seuil
    })


}


//On cherche à savoir si un Unlock est déverrouillable.x
function verifUnlock(id:number,world:World){
    $.each(world.allunlocks.pallier, function(index,unlock){
        if(unlock.idcible != 0){    //On doit regarder individuellement pour chaque unlock si son seuil a été atteint pour activer le bonus
            let idRecherche = unlock.idcible
            
        }
        else if(unlock.idcible==0){
            //check si tous les produits ont atteint le seuil pour activer l'unlock
            // On doit regarder si chaque produit à atteint le seuil nécessaire pour ensuite activer le bonus
        }
    })

}

function verifSeuilUnlock(id1:number,id2:number,world:World){
    //id1 ==> id de l'unlock (idRechercé)
    //id2 ==> id du produit

    //$.each(world.products.product,function(index,product){
        //if(idRecherche==product.id){

        //}

    //})


}


function affichageUnlock(id:number,server:String,world:World){
    console.log("remplissage modal unlock")

    let body = document.getElementById("modalUnlockBody");
    body.innerHTML=""

    let grid = document.createElement("div");
    body.appendChild(grid);
    grid.classList.add("row", "row-cols-2");//"row", "row-cols-2"

    $.each(world.allunlocks.pallier,function(index,unlock){

        if(unlock.idcible==id){

            
        //Création des lignes de chaque unlock
        let col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("col");
        col.id = "unlock" + unlock.idcible;

        //division de la ligne en deux parties (Image+Description // Unlocked ou non)
        let colImageDesc = document.createElement("div")//Image Description
        let colUnlocked = document.createElement("div")//Affichage est il dévérouillé ?
        col.appendChild(colImageDesc)
        col.appendChild(colUnlocked)
        colImageDesc.classList.add("col")
        colUnlocked.classList.add("col")
        

        //Affichage Icon Unlock
        let iconUnlock = document.createElement("img")
        colImageDesc.appendChild(iconUnlock)
        iconUnlock.src=server+unlock.logo
        iconUnlock.classList.add("imgUnlock")

        let nomUnlock = document.createElement("h3")
        colImageDesc.appendChild(nomUnlock)
        nomUnlock.innerText=unlock.name

        let descrUnlock = document.createElement("span")
        colImageDesc.appendChild(descrUnlock)
        descrUnlock.innerText="Augmentation de "+unlock.typeratio+" x"+unlock.ratio

        let seuilUnlock = document.createElement("span")
        colImageDesc.appendChild(seuilUnlock)
        seuilUnlock.innerText="Seuil: "+unlock.seuil
        }
        else if(id==0){
            
        //Création des lignes de chaque unlock
        let col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("col");
        col.id = "unlock" + unlock.idcible;

        //division de la ligne en deux parties (Image+Description // Unlocked ou non)
        let colImageDesc = document.createElement("div")//Image Description
        let colUnlocked = document.createElement("div")//Affichage est il dévérouillé ?
        col.appendChild(colImageDesc)
        col.appendChild(colUnlocked)
        colImageDesc.classList.add("col")
        colUnlocked.classList.add("col")
        

        //Affichage Icon Unlock
        let iconUnlock = document.createElement("img")
        colImageDesc.appendChild(iconUnlock)
        iconUnlock.src=server+unlock.logo
        iconUnlock.classList.add("imgUnlock")

        let nomUnlock = document.createElement("h3")
        colImageDesc.appendChild(nomUnlock)
        nomUnlock.innerText=unlock.name

        let descrUnlock = document.createElement("span")
        colImageDesc.appendChild(descrUnlock)
        descrUnlock.innerText="Augmentation de "+unlock.typeratio+" x"+unlock.ratio

        let seuilUnlock = document.createElement("span")
        colImageDesc.appendChild(seuilUnlock)
        seuilUnlock.innerText="Seuil: "+unlock.seuil
        }
    })
}
