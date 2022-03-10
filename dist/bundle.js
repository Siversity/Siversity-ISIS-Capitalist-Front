/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/Header.ts":
/*!***************************!*\
  !*** ./src/App/Header.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHeader": () => (/* binding */ displayHeader),
/* harmony export */   "transform": () => (/* binding */ transform)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");

// Création container du header
function displayHeader(server, world) {
    var container = document.getElementById("header");
    //création première colone avec le nom et le logo
    var monde = document.createElement("div");
    container.appendChild(monde);
    monde.classList.add("col", "monde", "bccFont");
    //Logo
    var logo = document.createElement("img");
    monde.appendChild(logo);
    logo.classList.add("logo");
    logo.src = server + world.logo;
    //Nom
    var name = document.createElement("span");
    monde.appendChild(name);
    name.classList.add("name");
    name.innerHTML = " " + world.name;
    //Création second entête, l'argent
    var moneyCol = document.createElement("div");
    container.appendChild(moneyCol);
    moneyCol.classList.add("col", "bccFont");
    //L'argent
    var money = document.createElement("div");
    moneyCol.appendChild(money);
    money.id = "worldMoney";
    money.classList.add("money");
    var argent = transform(world.money);
    money.innerHTML = argent;
    //Création dernier entète, User ID
    var userCol = document.createElement("div");
    container.appendChild(userCol);
    userCol.classList.add("col");
    /*
    //User ID
    let userId = document.createElement("div");
    idCol.appendChild(userId);
    userId.classList.add("userId");
    userId.innerHTML = "ID:";
    */
    var userRow = document.createElement("div");
    userCol.appendChild(userRow);
    userRow.classList.add("row");
    var labelUser = document.createElement("label");
    userRow.appendChild(labelUser);
    labelUser.htmlFor = "inputUser";
    labelUser.classList.add("form-label");
    var inputUser = document.createElement("input");
    userRow.appendChild(inputUser);
    inputUser.id = "inputUser";
    inputUser.classList.add("form-control");
    inputUser.type = "text";
    inputUser.placeholder = "Pseudo";
    inputUser.value = _index__WEBPACK_IMPORTED_MODULE_0__.username;
    inputUser.readOnly = true;
    var buttonUserDiv = document.createElement("div");
    userRow.appendChild(buttonUserDiv);
    var buttonInput = document.createElement("input");
    buttonUserDiv.appendChild(buttonInput);
    buttonInput.id = "userButtonCheck";
    buttonInput.type = "checkbox";
    buttonInput.classList.add("btn-check");
    var buttonLabel = document.createElement("label");
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
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.setUsername)(inputUser.value);
            window.location.reload();
        }
    });
}
function transform(valeur) {
    var res = "";
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


/***/ }),

/***/ "./src/App/Menu.ts":
/*!*************************!*\
  !*** ./src/App/Menu.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenu": () => (/* binding */ displayMenu)
/* harmony export */ });
// Création container du header
function displayMenu(world) {
    var container = document.getElementById("menu");
    //création navbar
    var navbar = document.createElement("div");
    container.appendChild(navbar);
    navbar.classList.add("navbar", "fixed-bottom");
    //création unlocks
    var unlocks = document.createElement("div");
    navbar.appendChild(unlocks);
    unlocks.classList.add("unlocks");
    //Bouton Unlocks
    var buttonUnlock = document.createElement("button");
    unlocks.appendChild(buttonUnlock);
    buttonUnlock.classList.add("btn", "btn-primary");
    buttonUnlock.setAttribute("data-bs-toggle", "modal");
    buttonUnlock.setAttribute("data-bs-target", "#modalUnlock");
    buttonUnlock.innerText = "Unlocks ";
    //création cash upgrades
    var cash = document.createElement("div");
    navbar.appendChild(cash);
    cash.classList.add("cash");
    cash.innerHTML = "Cash Upgrades";
    //Création angels upgrades
    var angels = document.createElement("div");
    navbar.appendChild(angels);
    angels.classList.add("angels");
    angels.innerHTML = "Angels upgrades";
    //Création managers
    var managers = document.createElement("div");
    navbar.appendChild(managers);
    managers.classList.add("managers");
    //Bouton Manager
    var buttonManager = document.createElement("button");
    managers.appendChild(buttonManager);
    buttonManager.classList.add("btn", "btn-primary");
    buttonManager.setAttribute("data-bs-toggle", "modal");
    buttonManager.setAttribute("data-bs-target", "#modalManager");
    buttonManager.innerText = "Managers ";
    //Création badge
    var badgeManager = document.createElement("span");
    buttonManager.appendChild(badgeManager);
    badgeManager.id = "badgeManager";
    badgeManager.classList.add("badge", "bg-secondary");
    //Création investors
    var investors = document.createElement("div");
    navbar.appendChild(investors);
    investors.classList.add("investors");
    investors.innerHTML = "Investors";
}


/***/ }),

/***/ "./src/App/Modal.ts":
/*!**************************!*\
  !*** ./src/App/Modal.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anyNews": () => (/* binding */ anyNews),
/* harmony export */   "displayModal": () => (/* binding */ displayModal),
/* harmony export */   "verifManager": () => (/* binding */ verifManager)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/App/Header.ts");


function displayModal(server, world) {
    var m = document.getElementById("modalManager");
    //Balise Modal Dialogue
    var md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog", "modal-lg");
    md.setAttribute("role", "document");
    //Balise Modal Content
    var mc = document.createElement("div");
    md.appendChild(mc);
    mc.classList.add("modal-content");
    //Balise Modal header
    var mh = document.createElement("div");
    mc.appendChild(mh);
    mh.classList.add("modal-header");
    //Bouton Fermer la fenêtre
    var b = document.createElement("button");
    mh.appendChild(b);
    b.classList.add("btn-close");
    b.setAttribute("type", "button");
    b.setAttribute("data-bs-dismiss", "modal");
    b.setAttribute("aria-label", "Close");
    //Titre de la fenêtre
    var t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Les Managers";
    //Création Body
    var bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.setAttribute("id", "modalBody");
    //Remplissage du body avec les differrents managers
    listManagers(server, world);
}
function listManagers(server, world) {
    var body = document.getElementById("modalBody");
    var container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");
    var grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("row", "row-cols-2"); //"row", "row-cols-2"
    $.each(world.managers.pallier, function (index, pallier) {
        var col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("row");
        col.id = "manager" + pallier.idcible.toString();
        //Partie Image et nom du managers
        var imageName = document.createElement("div");
        col.appendChild(imageName);
        imageName.classList.add("col"); //"col-4", "col-lg-2"
        //Partie Image
        var image = document.createElement("div");
        imageName.appendChild(image);
        image.classList.add("row", "imageManagers");
        var imageManager = document.createElement("img");
        image.appendChild(imageManager);
        imageManager.id = "img" + pallier.idcible;
        imageManager.src = server + pallier.logo;
        imageManager.classList.add("img-fluid", "rounded");
        //Partie Nom et prix
        var namePrice = document.createElement("div");
        imageName.appendChild(namePrice);
        namePrice.classList.add("row");
        //Partie Nom
        var nameManager = document.createElement("div");
        namePrice.appendChild(nameManager);
        nameManager.classList.add("col");
        nameManager.innerText = pallier.name;
        //Partie Prix
        var priceManager = document.createElement("div");
        namePrice.appendChild(priceManager);
        priceManager.classList.add("col");
        var cost = (0,_Header__WEBPACK_IMPORTED_MODULE_1__.transform)(pallier.seuil);
        priceManager.innerHTML = cost;
        //Partie bouton d'embauche
        var hire = document.createElement("div");
        col.appendChild(hire);
        hire.classList.add("col"); //"col-4", "col-lg-2"
        var buttonHire = document.createElement("button");
        hire.appendChild(buttonHire);
        buttonHire.id = "hire" + pallier.idcible;
        buttonHire.classList.add("btn", "btn-primary", "buttonHire");
        buttonHire.innerText = "Achete Moi !";
        $(buttonHire).click(function () {
            console.log("je tente d'acheter un manager :)");
            acheterManager(pallier, world);
        });
    });
}
// Un manager est-il achetable ?
function verifManager(world) {
    $.each(world.managers.pallier, function (index, pallier) {
        var button = document.getElementById("hire" + pallier.idcible);
        if (pallier.seuil > world.money || button.innerText == "Acheté") {
            button.setAttribute("disabled", "true");
        }
        else {
            button.removeAttribute("disabled");
        }
    });
}
function anyNews(world) {
    var managerDispo = 0;
    $.each(world.managers.pallier, function (index, manager) {
        if (manager.seuil <= world.money && manager.unlocked == false) {
            managerDispo++;
        }
        ;
    });
    var notifManager = document.getElementById("badgeManager");
    if (managerDispo == 0) {
        notifManager.innerText = null;
    }
    else {
        notifManager.innerText = "" + managerDispo;
    }
}
function acheterManager(manager, world) {
    //Le manager est-il achetable ?
    if (manager.seuil <= world.money) {
        //Soustraction du prix du manager à l'argent du monde
        world.money -= manager.seuil;
        console.log("soustraction a l'argent => " + world.money);
        var money = document.getElementById("worldMoney");
        money.innerHTML = (0,_Header__WEBPACK_IMPORTED_MODULE_1__.transform)(world.money);
        //Manager ==> Unlocked
        manager.unlocked = true;
        (0,___WEBPACK_IMPORTED_MODULE_0__.matchId)(manager.idcible, world);
        //Changement du bouton Hire en Acheté et disabled
        var button = document.getElementById("hire" + manager.idcible);
        button.innerText = "Acheté";
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");
    }
    else {
        console.log("le manager n'est pas achetable \b fin de transation");
    }
}


/***/ }),

/***/ "./src/App/ModalUnlock.ts":
/*!********************************!*\
  !*** ./src/App/ModalUnlock.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayModalUnlock": () => (/* binding */ displayModalUnlock)
/* harmony export */ });
function displayModalUnlock(server, world) {
    var m = document.getElementById("modalUnlock");
    //Balise Modal Dialogue
    var md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog", "modal-lg");
    md.setAttribute("role", "document");
    //Balise Modal Content
    var mc = document.createElement("div");
    md.appendChild(mc);
    mc.classList.add("modal-content");
    //Balise Modal header
    var mh = document.createElement("div");
    mc.appendChild(mh);
    mh.classList.add("modal-header");
    //Bouton Fermer la fenêtre
    var b = document.createElement("button");
    mh.appendChild(b);
    b.classList.add("btn-close");
    b.setAttribute("type", "button");
    b.setAttribute("data-bs-dismiss", "modal");
    b.setAttribute("aria-label", "Close");
    //Titre de la fenêtre
    var t = document.createElement("h4");
    mh.appendChild(t);
    t.classList.add("modal-title");
    t.setAttribute("id", "myModalLabel");
    t.innerText = "Les Unlocks";
    //Création Body
    var bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalUnlockBody";
    //Remplissage du body avec les differrents managers
    fillingBodyModalUnlock(server, world);
}
function fillingBodyModalUnlock(server, world) {
    console.log("remplissage modal unlock");
    var body = document.getElementById("modalUnlockBody");
    /*
    let container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");*/
    var grid = document.createElement("div");
    body.appendChild(grid);
    grid.classList.add("row", "row-cols-2"); //"row", "row-cols-2"
    $.each(world.allunlocks.pallier, function (index, unlock) {
        //Création des lignes de chaque unlock
        var col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("col");
        col.id = "unlock" + unlock.idcible;
        //division de la ligne en deux parties (Image+Description // Unlocked ou non)
        var colImageDesc = document.createElement("div"); //Image Description
        var colUnlocked = document.createElement("div"); //Affichage est il dévérouillé ?
        col.appendChild(colImageDesc);
        col.appendChild(colUnlocked);
        colImageDesc.classList.add("col");
        colUnlocked.classList.add("col");
        //Affichage Icon Unlock
        var iconUnlock = document.createElement("img");
        colImageDesc.appendChild(iconUnlock);
        iconUnlock.src = server + unlock.logo;
        iconUnlock.classList.add("imgUnlock");
        var nomUnlock = document.createElement("h3");
        colImageDesc.appendChild(nomUnlock);
        nomUnlock.innerText = unlock.name;
        var descrUnlock = document.createElement("span");
        colImageDesc.appendChild(descrUnlock);
        descrUnlock.innerText = "Augmentation de " + unlock.typeratio + " x" + unlock.ratio;
        var seuilUnlock = document.createElement("span");
        colImageDesc.appendChild(seuilUnlock);
        seuilUnlock.innerText = "Seuil: " + unlock.seuil;
    });
}
//On cherche à savoir si un Unlock est déverrouillable.x
function verifUnlock(id, world) {
    //let idProduct
    //idProduct = unlock.idcible;
    $.each(world.allunlocks.pallier, function (index, unlock) {
        if (unlock.idcible != 0) { //On doit regarder individuellement pour chaque unlock si son seuil a été atteint pour activer le bonus
            var idRecherche = unlock.idcible;
        }
        else if (unlock.idcible == 0) {
            // On doit regarder si chaque produit à atteint le seuil nécessaire pour ensuite activer le bonus
        }
    });
}
function verifSeuilUnlock(id1, id2, world) {
    //id1 ==> id de l'unlock (idRechercé)
    //id2 ==> id du produit
    //$.each(world.products.product,function(index,product){
    //if(idRecherche==product.id){
    //}
    //})
}


/***/ }),

/***/ "./src/App/Products.ts":
/*!*****************************!*\
  !*** ./src/App/Products.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProducts": () => (/* binding */ showProducts),
/* harmony export */   "startProduct": () => (/* binding */ startProduct)
/* harmony export */ });
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "./src/App/ProgressBar.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./src/App/SideBar.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/App/Header.ts");




// Fonction principale d'appel des produits
function showProducts(server, world) {
    var container = document.getElementById("products");
    $.each(world.products.product, function (index, product) {
        // Container (colonne)
        var col = document.createElement("div");
        container.appendChild(col);
        col.id = "p" + product.id;
        col.classList.add("col", "doubleBorderProduct");
        // Titre (ligne)
        var productTitle = document.createElement("div");
        col.appendChild(productTitle);
        productTitle.classList.add("row", "justify-content-center", "bccFont");
        productTitle.innerHTML = product.name;
        // Image (ligne)
        var productImage = document.createElement("div");
        col.appendChild(productImage);
        productImage.classList.add("row", "productImage");
        var image = document.createElement("img");
        productImage.appendChild(image);
        image.id = "img" + product.id;
        image.classList.add("productIcons");
        // Si ce produit n'a pas été débloqué, on l'affiche en gris
        if (product.quantite == 0) {
            image.classList.add("disabledProduct");
        }
        image.src = server + product.logo;
        // Ajout event production
        $(image).click(function () {
            startProduct(product);
        });
        // Barre de progression
        (0,_ProgressBar__WEBPACK_IMPORTED_MODULE_0__.addProgressBar)(server, product, col);
        // Level --> Quantité (colonne)
        var productQte = document.createElement("div");
        col.appendChild(productQte);
        productQte.classList.add("row", "productLevel");
        var level = document.createElement("span");
        productQte.appendChild(level);
        level.id = "qte" + product.id;
        level.classList.add("bccFont");
        level.innerHTML = product.quantite.toString();
        // Container (ligne)
        var productContainer = document.createElement("div");
        col.appendChild(productContainer);
        productContainer.classList.add("row", "mt-3");
        // Nbr level à acheter (colonne)
        var productAdd = document.createElement("div");
        productContainer.appendChild(productAdd);
        productAdd.classList.add("col", "d-flex", "justify-content-center");
        var productButton = document.createElement("button");
        productAdd.appendChild(productButton);
        productButton.id = "add" + product.id;
        productButton.type = "button";
        productButton.classList.add("addProduct", "align-middle");
        $(productButton).click(function () {
            console.log("click");
            addProduct(world, product);
        });
        // Coût ajout level (colonne)
        var productCost = document.createElement("div");
        productContainer.appendChild(productCost);
        productCost.id = "cost" + product.id;
        productCost.classList.add("col", "bccFont", "text-center");
        productCost.innerHTML = (product.cout + Math.pow(product.croissance, product.quantite)).toString();
    });
    (0,_SideBar__WEBPACK_IMPORTED_MODULE_2__.setAddProduct)(world);
}
// Fonction permettant de lancer la production d'un produit
function startProduct(product) {
    // On vérifie que l'on peut activer le produit
    if (verifProduct(product)) {
        console.log("Lancement de la production de " + product.name);
        product.timeleft = product.vitesse;
        ___WEBPACK_IMPORTED_MODULE_1__.lastUpdateList[product.id] = Date.now();
        (0,_ProgressBar__WEBPACK_IMPORTED_MODULE_0__.setProgressBar)(product.id, 100);
    }
}
// Fonction permettant que produit est activable
function verifProduct(product) {
    if ((product.quantite > 0) && (product.timeleft == 0)) {
        return true;
    }
    else {
        return false;
    }
}
// Fonction permettant d'ajouter une quantité à un produit
function addProduct(world, product) {
    // Si l'option sélectionnée n'est pas le max achetable
    if (_SideBar__WEBPACK_IMPORTED_MODULE_2__.addSelected != "Max") {
        // On calcule le coût
        var cost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_2__.getCostProduct)(product, _SideBar__WEBPACK_IMPORTED_MODULE_2__.addSelected);
        modifyProduct(world, product, _SideBar__WEBPACK_IMPORTED_MODULE_2__.addSelected, cost);
    }
    // Si l'option sélectionnée est le max achetable
    if (_SideBar__WEBPACK_IMPORTED_MODULE_2__.addSelected == "Max") {
        // On calcule le max achetable et son cout
        var max = (0,_SideBar__WEBPACK_IMPORTED_MODULE_2__.getMaxProduct)(world, product);
        var cost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_2__.getCostProduct)(product, max);
        // On modifie l'affichage du produit
        modifyProduct(world, product, max, cost);
    }
}
// Fonction effectuant les changements d'affichage liés à l'achat d'un produit
function modifyProduct(world, product, quantity, cost) {
    // On vérifie que l'on a assez d'argent
    if (world.money > cost) {
        // On ajoute la quantité achetée
        product.quantite += quantity;
        document.getElementById("qte" + product.id).innerHTML = product.quantite.toString();
        // On soustrait l'argent dépensé
        world.money -= cost;
        document.getElementById("worldMoney").innerHTML = (0,_Header__WEBPACK_IMPORTED_MODULE_3__.transform)(world.money);
        // Si l'option sélectionnée est le max achetable
        if (_SideBar__WEBPACK_IMPORTED_MODULE_2__.addSelected == "Max") {
            // On recalcule le max
            quantity = (0,_SideBar__WEBPACK_IMPORTED_MODULE_2__.getMaxProduct)(world, product);
            // On change l'affichage sur chaque produit en fonction du nouveau solde
            (0,_SideBar__WEBPACK_IMPORTED_MODULE_2__.setAddProduct)(world);
        }
        // On calcule le nouveau coût après achat
        var newCost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_2__.getCostProduct)(product, quantity);
        document.getElementById("cost" + product.id).innerHTML = (0,_Header__WEBPACK_IMPORTED_MODULE_3__.transform)(newCost);
        // S'il s'agit du 1er achat sur un produit, on l'affiche en clair
        var imageProduct = document.getElementById("img" + product.id);
        if (imageProduct.classList.contains("disabledProduct")) {
            imageProduct.classList.remove("disabledProduct");
        }
    }
}


/***/ }),

/***/ "./src/App/SideBar.ts":
/*!****************************!*\
  !*** ./src/App/SideBar.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSelected": () => (/* binding */ addSelected),
/* harmony export */   "getCostProduct": () => (/* binding */ getCostProduct),
/* harmony export */   "getMaxProduct": () => (/* binding */ getMaxProduct),
/* harmony export */   "listAddProducts": () => (/* binding */ listAddProducts),
/* harmony export */   "setAddProduct": () => (/* binding */ setAddProduct),
/* harmony export */   "showSideBar": () => (/* binding */ showSideBar)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/App/Header.ts");

var listAddProducts = [1, 10, 100, "Max"];
var addSelected = 1;
// Fonction créant la bare de menu à drotie contenant le sélecteur sur la quantité de produits à acheter
function showSideBar(server, world) {
    // Obtention du container des produits
    var container = document.getElementById("products");
    // Création du container du menu
    var sideContainer = document.createElement("div");
    container.appendChild(sideContainer);
    sideContainer.id = "sideMenu";
    // Centrage du menu à droite
    sideContainer.classList.add("position-absolute", "top-50", "end-0", "translate-middle-y");
    // Création d'une liste de boutons à la verticale
    var listButton = document.createElement("div");
    sideContainer.appendChild(listButton);
    listButton.classList.add("btn-group-vertical", "sideContainer");
    listButton.setAttribute("role", "group");
    // On génère des boutons de type radio
    listAddProducts.forEach(function (addNumber) {
        // On crée l'input du bouton
        var addNumberInput = document.createElement("input");
        listButton.appendChild(addNumberInput);
        addNumberInput.id = "button" + addNumber;
        addNumberInput.type = "radio";
        addNumberInput.classList.add("btn-check");
        addNumberInput.name = "btnradio";
        addNumberInput.autocomplete = "off";
        // A l'initialisation, l'option +1 est celle cochée par défaut
        if (addNumber == "1") {
            addNumberInput.setAttribute("checked", "");
        }
        // On crée le label du bouton
        var addNumberButton = document.createElement("label");
        listButton.appendChild(addNumberButton);
        addNumberButton.classList.add("addButton", "addButtonOutline", "align-middle");
        addNumberButton.setAttribute("for", addNumberInput.id);
        addNumberButton.innerHTML = "+" + addNumber;
        // Event : modification du sélecteur au clic
        $(addNumberButton).click(function () {
            addSelected = addNumber;
            setAddProduct(world);
        });
    });
}
// Fonction changeant l'affichage lié à l'achat d'un produit
function setAddProduct(world) {
    // Si l'option est une valeur constante
    if (addSelected != "Max") {
        world.products.product.forEach(function (product) {
            // Changement affichage bouton
            var addProduct = document.getElementById("add" + product.id);
            addProduct.innerHTML = "+" + addSelected;
            // Changement affichage coût
            var cost = getCostProduct(product, addSelected);
            var costProduct = document.getElementById("cost" + product.id);
            costProduct.innerHTML = (0,_Header__WEBPACK_IMPORTED_MODULE_0__.transform)(cost);
            // Si le joueur n'a pas assez d'argent pour acheter le produit, on désactive le bouton
            if (world.money < cost) {
                addProduct.setAttribute("disabled", "true");
            }
            // Sinon on l'active
            else {
                addProduct.removeAttribute("disabled");
            }
        });
    }
    // Si l'option consiste à la valeur max
    if (addSelected == "Max") {
        world.products.product.forEach(function (product) {
            var max = getMaxProduct(world, product);
            // Changement affichage bouton
            var addProduct = document.getElementById("add" + product.id);
            addProduct.removeAttribute("disabled");
            addProduct.innerHTML = "+" + max;
            // Changement affichage coût
            var cost = getCostProduct(product, max);
            var costProduct = document.getElementById("cost" + product.id);
            costProduct.innerHTML = (0,_Header__WEBPACK_IMPORTED_MODULE_0__.transform)(cost);
        });
    }
}
// Fonction calculant le coût d'un groupe de produits
function getCostProduct(product, addNumber) {
    // Calcul des termes
    var un = product.cout * Math.pow(product.croissance, product.quantite);
    var numerator = 1 - Math.pow(product.croissance, addNumber);
    var denominator = 1 - product.croissance;
    var cout = (un * numerator) / denominator;
    // Retour du coût calculé
    return cout;
}
// Fonction calculant le nombre max de produits achetable
function getMaxProduct(world, product) {
    // Calcul des termes
    var un = product.cout * Math.pow(product.croissance, product.quantite);
    var numerator = Math.log(-(world.money - world.money * product.croissance - un) / un);
    var denominator = Math.log(product.croissance);
    var max = (numerator / denominator);
    // Retour du max de produits
    return Math.floor(max);
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastUpdateList": () => (/* binding */ lastUpdateList),
/* harmony export */   "matchId": () => (/* binding */ matchId),
/* harmony export */   "progressBarList": () => (/* binding */ progressBarList),
/* harmony export */   "setUsername": () => (/* binding */ setUsername),
/* harmony export */   "username": () => (/* binding */ username)
/* harmony export */ });
/* harmony import */ var _App_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/Products */ "./src/App/Products.ts");
/* harmony import */ var _App_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Header */ "./src/App/Header.ts");
/* harmony import */ var _App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/ProgressBar */ "./src/App/ProgressBar.js");
/* harmony import */ var _App_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/SideBar */ "./src/App/SideBar.ts");
/* harmony import */ var _App_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App/Menu */ "./src/App/Menu.ts");
/* harmony import */ var _App_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App/Modal */ "./src/App/Modal.ts");
/* harmony import */ var _App_ModalUnlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App/ModalUnlock */ "./src/App/ModalUnlock.ts");







var serveurUrl = "https://isiscapitalist.kk.kurasawa.fr/";
var currentWorld;
var ourWorld = true;
var username = localStorage.getItem("username");
function setUsername(newUsername) {
    username = newUsername;
    localStorage.setItem("username", newUsername);
}
$(document).ready(function () {
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        currentWorld = world;
        console.log(currentWorld);
        world.money = 2000000;
        // remplir le layout avec les informations globales
        // (nom du monde, argent total....)
        // puis boucler sur chaque produit
        $.each(world.products.product, function (index, product) {
        });
        (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(serveurUrl, world);
        (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.showProducts)(serveurUrl, world);
        (0,_App_Menu__WEBPACK_IMPORTED_MODULE_4__.displayMenu)(world);
        (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.showSideBar)(serveurUrl, world);
        (0,_App_Modal__WEBPACK_IMPORTED_MODULE_5__.displayModal)(serveurUrl, world);
        (0,_App_ModalUnlock__WEBPACK_IMPORTED_MODULE_6__.displayModalUnlock)(serveurUrl, world);
        setInterval(function () {
            // On calcule en permanence le score
            calcScore(serveurUrl, currentWorld);
            (0,_App_Modal__WEBPACK_IMPORTED_MODULE_5__.verifManager)(world);
            (0,_App_Modal__WEBPACK_IMPORTED_MODULE_5__.anyNews)(world);
            (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.setAddProduct)(currentWorld);
            // Si l'option d'ajout sélectionnée est le max achetable, on synchronise avec en fonction du score
            //if (addSelected == "Max") {
            //setAddProduct(world);
            //}
        }, 100);
    });
});
var progressBarList = [];
var lastUpdateList = [];
function calcScore(server, world) {
    $.each(world.products.product, function (index, product) {
        if (product.timeleft != 0) {
            var timeRemaining = Date.now() - lastUpdateList[product.id];
            product.timeleft = product.timeleft - timeRemaining;
            var pourcentage = (product.timeleft * 100) / product.vitesse;
            (0,_App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.setProgressBar)(product.id, pourcentage);
            if (this.timeleft <= 0) {
                console.log("Le produit " + product.name + " a rapporté " + product.revenu);
                var revenu = product.revenu;
                addScore(world, revenu);
                product.timeleft = 0;
                (0,_App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.setProgressBar)(product.id, 0);
            }
        }
        else if ((product.timeleft == 0) && (product.managerUnlocked == true)) {
            console.log("Lancement produit");
            (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.startProduct)(product);
        }
    });
}
function addScore(world, score) {
    world.money = world.money + score;
    document.getElementById("worldMoney").innerHTML = (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.transform)(world.money);
}
function matchId(id, world) {
    var idProduct;
    $.each(world.products.product, function (index, product) {
        idProduct = product.id;
        if (idProduct == id) {
            product.managerUnlocked = true;
            console.log("produit: " + product.name + " unlocked:" + product.managerUnlocked);
        }
    });
}
/*
function updateButton(addSelected:any){
    switch(addSelected) {
        case 1: {
           //statements;
           break;
        }
        case 10: {
           //statements;
           break;
        }
        case 100: {
            //statements;
            break;
         }
         case "Max": {
            //statements;
            break;
         }
        default: {
           //statements;
           break;
        }
     }
}*/
/*
function comparaison(world:World,multiplier:any){

}*/ 


/***/ }),

/***/ "./src/App/ProgressBar.js":
/*!********************************!*\
  !*** ./src/App/ProgressBar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProgressBar": () => (/* binding */ addProgressBar),
/* harmony export */   "setProgressBar": () => (/* binding */ setProgressBar)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");


function addProgressBar(server, product, col) {
    // Barre de progression (ligne)
    let productProgress = document.createElement("div");
    col.appendChild(productProgress);
    productProgress.classList.add("row");
    let bar = new ProgressBar.Line(productProgress, {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' },
        from: { color: '#FFEA82' },
        to: { color: '#ED6A5A' },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    _index__WEBPACK_IMPORTED_MODULE_0__.progressBarList[product.id] = bar;
    bar.animate(0);
}


function setProgressBar(id, pourcentage) {
    _index__WEBPACK_IMPORTED_MODULE_0__.progressBarList[id].set(pourcentage / 100)
    console.log(pourcentage/100)
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNPO0FBQ1AsSUFBSSxtREFBZTtBQUNuQjtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9NZW51LnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvTW9kYWwudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Nb2RhbFVubG9jay50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvU2lkZUJhci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gcHJlbWnDqHJlIGNvbG9uZSBhdmVjIGxlIG5vbSBldCBsZSBsb2dvXHJcbiAgICBsZXQgbW9uZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmRlKTtcclxuICAgIG1vbmRlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJtb25kZVwiLCBcImJjY0ZvbnRcIik7XHJcblxyXG4gICAgLy9Mb2dvXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgICBsb2dvLnNyYyA9IHNlcnZlciArIHdvcmxkLmxvZ287XHJcblxyXG4gICAgLy9Ob21cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiIFwiICsgd29ybGQubmFtZTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWNvbmQgZW50w6p0ZSwgbCdhcmdlbnRcclxuICAgIGxldCBtb25leUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25leUNvbClcclxuICAgIG1vbmV5Q29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIpXHJcblxyXG4gICAgLy9MJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vbmV5Q29sLmFwcGVuZENoaWxkKG1vbmV5KTtcclxuICAgIG1vbmV5LmlkID0gXCJ3b3JsZE1vbmV5XCI7XHJcbiAgICBtb25leS5jbGFzc0xpc3QuYWRkKFwibW9uZXlcIik7XHJcbiAgICBsZXQgYXJnZW50ID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuICAgIG1vbmV5LmlubmVySFRNTCA9IGFyZ2VudDtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBkZXJuaWVyIGVudMOodGUsIFVzZXIgSURcclxuICAgIGxldCB1c2VyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyQ29sKTtcclxuICAgIHVzZXJDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuXHJcbiAgICAvKlxyXG4gICAgLy9Vc2VyIElEXHJcbiAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlkQ29sLmFwcGVuZENoaWxkKHVzZXJJZCk7XHJcbiAgICB1c2VySWQuY2xhc3NMaXN0LmFkZChcInVzZXJJZFwiKTtcclxuICAgIHVzZXJJZC5pbm5lckhUTUwgPSBcIklEOlwiO1xyXG4gICAgKi9cclxuXHJcbiAgICBsZXQgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB1c2VyQ29sLmFwcGVuZENoaWxkKHVzZXJSb3cpO1xyXG4gICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG5cclxuICAgIGxldCBsYWJlbFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGxhYmVsVXNlcik7XHJcbiAgICBsYWJlbFVzZXIuaHRtbEZvciA9IFwiaW5wdXRVc2VyXCI7XHJcbiAgICBsYWJlbFVzZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIilcclxuXHJcbiAgICBsZXQgaW5wdXRVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChpbnB1dFVzZXIpO1xyXG4gICAgaW5wdXRVc2VyLmlkID0gXCJpbnB1dFVzZXJcIlxyXG4gICAgaW5wdXRVc2VyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XHJcbiAgICBpbnB1dFVzZXIudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgaW5wdXRVc2VyLnBsYWNlaG9sZGVyID0gXCJQc2V1ZG9cIjtcclxuICAgIGlucHV0VXNlci52YWx1ZSA9IHVzZXJuYW1lO1xyXG4gICAgaW5wdXRVc2VyLnJlYWRPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgYnV0dG9uVXNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGJ1dHRvblVzZXJEaXYpO1xyXG5cclxuICAgIGxldCBidXR0b25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGJ1dHRvblVzZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uSW5wdXQpO1xyXG4gICAgYnV0dG9uSW5wdXQuaWQgPSBcInVzZXJCdXR0b25DaGVja1wiO1xyXG4gICAgYnV0dG9uSW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGJ1dHRvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJidG4tY2hlY2tcIik7XHJcblxyXG4gICAgbGV0IGJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgYnV0dG9uVXNlckRpdi5hcHBlbmRDaGlsZChidXR0b25MYWJlbCk7XHJcbiAgICBidXR0b25MYWJlbC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIik7XHJcbiAgICBidXR0b25MYWJlbC5odG1sRm9yID0gXCJ1c2VyQnV0dG9uQ2hlY2tcIjtcclxuICAgIGJ1dHRvbkxhYmVsLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2JpIGJpLWNoZWNrLXNxdWFyZSc+PC9pPlwiO1xyXG4gICAgJChidXR0b25MYWJlbCkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChpbnB1dFVzZXIucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgaW5wdXRVc2VyLnJlYWRPbmx5ID0gZmFsc2U7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRVc2VyLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VXNlcm5hbWUoaW5wdXRVc2VyLnZhbHVlKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWxldXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKHZhbGV1ciA8IDEwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMik7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPCAxMDAwMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDApO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyID49IDEwMDAwMDApIHtcclxuICAgICAgICByZXMgPSB2YWxldXIudG9QcmVjaXNpb24oNCk7XHJcbiAgICAgICAgcmVzID0gcmVzLnJlcGxhY2UoL2VcXCsoLiopLywgXCIgMTA8c3VwPiQxPC9zdXA+XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG4vLyBDcsOpYXRpb24gY29udGFpbmVyIGR1IGhlYWRlclxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1lbnUod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIG5hdmJhclxyXG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIsIFwiZml4ZWQtYm90dG9tXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHVubG9ja3NcclxuICAgIGxldCB1bmxvY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bmxvY2tzKTtcclxuICAgIHVubG9ja3MuY2xhc3NMaXN0LmFkZChcInVubG9ja3NcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gVW5sb2Nrc1xyXG4gICAgbGV0IGJ1dHRvblVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIHVubG9ja3MuYXBwZW5kQ2hpbGQoYnV0dG9uVW5sb2NrKTtcclxuICAgIGJ1dHRvblVubG9jay5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgYnV0dG9uVW5sb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsXCJtb2RhbFwiKVxyXG4gICAgYnV0dG9uVW5sb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsXCIjbW9kYWxVbmxvY2tcIilcclxuICAgIGJ1dHRvblVubG9jay5pbm5lclRleHQ9XCJVbmxvY2tzIFwiO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIGNhc2ggdXBncmFkZXNcclxuICAgIGxldCBjYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjYXNoKTtcclxuICAgIGNhc2guY2xhc3NMaXN0LmFkZChcImNhc2hcIik7XHJcbiAgICBjYXNoLmlubmVySFRNTCA9IFwiQ2FzaCBVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGFuZ2VscyB1cGdyYWRlc1xyXG4gICAgbGV0IGFuZ2VscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYW5nZWxzKTtcclxuICAgIGFuZ2Vscy5jbGFzc0xpc3QuYWRkKFwiYW5nZWxzXCIpO1xyXG4gICAgYW5nZWxzLmlubmVySFRNTCA9IFwiQW5nZWxzIHVwZ3JhZGVzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gbWFuYWdlcnNcclxuICAgIGxldCBtYW5hZ2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWFuYWdlcnMpO1xyXG4gICAgbWFuYWdlcnMuY2xhc3NMaXN0LmFkZChcIm1hbmFnZXJzXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIE1hbmFnZXJcclxuICAgIGxldCBidXR0b25NYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgbWFuYWdlcnMuYXBwZW5kQ2hpbGQoYnV0dG9uTWFuYWdlcik7XHJcbiAgICBidXR0b25NYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJidG5cIixcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsXCJtb2RhbFwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLFwiI21vZGFsTWFuYWdlclwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5pbm5lclRleHQ9XCJNYW5hZ2VycyBcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBiYWRnZVxyXG4gICAgbGV0IGJhZGdlTWFuYWdlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBidXR0b25NYW5hZ2VyLmFwcGVuZENoaWxkKGJhZGdlTWFuYWdlcik7XHJcbiAgICBiYWRnZU1hbmFnZXIuaWQ9XCJiYWRnZU1hbmFnZXJcIlxyXG4gICAgYmFkZ2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiLFwiYmctc2Vjb25kYXJ5XCIpO1xyXG4gICAgXHJcblxyXG4gICAgLy9DcsOpYXRpb24gaW52ZXN0b3JzXHJcbiAgICBsZXQgaW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChpbnZlc3RvcnMpO1xyXG4gICAgaW52ZXN0b3JzLmNsYXNzTGlzdC5hZGQoXCJpbnZlc3RvcnNcIik7XHJcbiAgICBpbnZlc3RvcnMuaW5uZXJIVE1MID0gXCJJbnZlc3RvcnNcIjtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgbWF0Y2hJZCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcblxyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsTWFuYWdlclwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL1RpdHJlIGRlIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XHJcbiAgICB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlNb2RhbExhYmVsXCIpO1xyXG4gICAgdC5pbm5lclRleHQgPSBcIkxlcyBNYW5hZ2Vyc1wiO1xyXG5cclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBCb2R5XHJcbiAgICBsZXQgYm9keU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQoYm9keU0pO1xyXG4gICAgYm9keU0uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJvZHlcIik7XHJcbiAgICBib2R5TS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsQm9keVwiKTtcclxuXHJcbiAgICAvL1JlbXBsaXNzYWdlIGR1IGJvZHkgYXZlYyBsZXMgZGlmZmVycmVudHMgbWFuYWdlcnNcclxuICAgIGxpc3RNYW5hZ2VycyhzZXJ2ZXIsIHdvcmxkKTtcclxufVxyXG5mdW5jdGlvbiBsaXN0TWFuYWdlcnMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQm9keVwiKTtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgcGFsbGllcikge1xyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgICAgICBjb2wuaWQgPSBcIm1hbmFnZXJcIiArIHBhbGxpZXIuaWRjaWJsZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBJbWFnZSBldCBub20gZHUgbWFuYWdlcnNcclxuICAgICAgICBsZXQgaW1hZ2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoaW1hZ2VOYW1lKTtcclxuICAgICAgICBpbWFnZU5hbWUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsvL1wiY29sLTRcIiwgXCJjb2wtbGctMlwiXHJcblxyXG4gICAgICAgIC8vUGFydGllIEltYWdlXHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpbWFnZU5hbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJpbWFnZU1hbmFnZXJzXCIpO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWFnZS5hcHBlbmRDaGlsZChpbWFnZU1hbmFnZXIpO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5pZCA9IFwiaW1nXCIgKyBwYWxsaWVyLmlkY2libGU7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLnNyYyA9IHNlcnZlciArIHBhbGxpZXIubG9nbztcclxuICAgICAgICBpbWFnZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWRcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tIGV0IHByaXhcclxuICAgICAgICBsZXQgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGltYWdlTmFtZS5hcHBlbmRDaGlsZChuYW1lUHJpY2UpO1xyXG4gICAgICAgIG5hbWVQcmljZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpXHJcblxyXG4gICAgICAgIC8vUGFydGllIE5vbVxyXG4gICAgICAgIGxldCBuYW1lTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKG5hbWVNYW5hZ2VyKTtcclxuICAgICAgICBuYW1lTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmlubmVyVGV4dCA9IHBhbGxpZXIubmFtZTtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgUHJpeFxyXG4gICAgICAgIGxldCBwcmljZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZChwcmljZU1hbmFnZXIpO1xyXG4gICAgICAgIHByaWNlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gdHJhbnNmb3JtKHBhbGxpZXIuc2V1aWwpXHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmlubmVySFRNTCA9IGNvc3Q7XHJcblxyXG4gICAgICAgIC8vUGFydGllIGJvdXRvbiBkJ2VtYmF1Y2hlXHJcbiAgICAgICAgbGV0IGhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChoaXJlKTtcclxuICAgICAgICBoaXJlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7IC8vXCJjb2wtNFwiLCBcImNvbC1sZy0yXCJcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGhpcmUuYXBwZW5kQ2hpbGQoYnV0dG9uSGlyZSk7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5pZCA9IFwiaGlyZVwiICsgcGFsbGllci5pZGNpYmxlO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIsIFwiYnV0dG9uSGlyZVwiKTtcclxuICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dCA9IFwiQWNoZXRlIE1vaSAhXCI7XHJcbiAgICAgICAgJChidXR0b25IaXJlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiamUgdGVudGUgZCdhY2hldGVyIHVuIG1hbmFnZXIgOilcIik7XHJcbiAgICAgICAgICAgIGFjaGV0ZXJNYW5hZ2VyKHBhbGxpZXIsIHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBVbiBtYW5hZ2VyIGVzdC1pbCBhY2hldGFibGUgP1xyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZNYW5hZ2VyKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgcGFsbGllcikge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZSk7XHJcbiAgICAgICAgaWYgKHBhbGxpZXIuc2V1aWwgPiB3b3JsZC5tb25leSB8fCBidXR0b24uaW5uZXJUZXh0PT1cIkFjaGV0w6lcIikge1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW55TmV3cyh3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBtYW5hZ2VyRGlzcG8gPSAwO1xyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgbWFuYWdlcikge1xyXG4gICAgICAgIGlmIChtYW5hZ2VyLnNldWlsIDw9IHdvcmxkLm1vbmV5ICYmIG1hbmFnZXIudW5sb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWFuYWdlckRpc3BvKys7XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbiAgICBsZXQgbm90aWZNYW5hZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWRnZU1hbmFnZXJcIik7XHJcbiAgICBpZiAobWFuYWdlckRpc3BvID09IDApIHtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5vdGlmTWFuYWdlci5pbm5lclRleHQgPSBcIlwiICsgbWFuYWdlckRpc3BvO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFjaGV0ZXJNYW5hZ2VyKG1hbmFnZXI6IFBhbGxpZXIsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy9MZSBtYW5hZ2VyIGVzdC1pbCBhY2hldGFibGUgP1xyXG4gICAgaWYgKG1hbmFnZXIuc2V1aWwgPD0gd29ybGQubW9uZXkpIHtcclxuICAgICAgICAvL1NvdXN0cmFjdGlvbiBkdSBwcml4IGR1IG1hbmFnZXIgw6AgbCdhcmdlbnQgZHUgbW9uZGVcclxuICAgICAgICB3b3JsZC5tb25leSAtPSBtYW5hZ2VyLnNldWlsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic291c3RyYWN0aW9uIGEgbCdhcmdlbnQgPT4gXCIrd29ybGQubW9uZXkpO1xyXG4gICAgICAgIGxldCBtb25leSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKVxyXG4gICAgICAgIG1vbmV5LmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbiAgICAgICAgLy9NYW5hZ2VyID09PiBVbmxvY2tlZFxyXG4gICAgICAgIG1hbmFnZXIudW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hdGNoSWQobWFuYWdlci5pZGNpYmxlLCB3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vQ2hhbmdlbWVudCBkdSBib3V0b24gSGlyZSBlbiBBY2hldMOpIGV0IGRpc2FibGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiICsgbWFuYWdlci5pZGNpYmxlKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJBY2hldMOpXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZSBtYW5hZ2VyIG4nZXN0IHBhcyBhY2hldGFibGUgXFxiIGZpbiBkZSB0cmFuc2F0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbFVubG9jayhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxVbmxvY2tcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgRGlhbG9ndWVcclxuICAgIGxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtLmFwcGVuZENoaWxkKG1kKTtcclxuICAgIG1kLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaWFsb2dcIiwgXCJtb2RhbC1sZ1wiKTtcclxuICAgIG1kLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJkb2N1bWVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBDb250ZW50XHJcbiAgICBsZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWQuYXBwZW5kQ2hpbGQobWMpO1xyXG4gICAgbWMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbiAgICBsZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQobWgpO1xyXG4gICAgbWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxuICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgICBiLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XHJcblxyXG4gICAgLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZCh0KTtcclxuICAgIHQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxuICAgIHQuaW5uZXJUZXh0ID0gXCJMZXMgVW5sb2Nrc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIEJvZHlcclxuICAgIGxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbiAgICBib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuICAgIGJvZHlNLmlkPVwibW9kYWxVbmxvY2tCb2R5XCI7XHJcblxyXG4gICAgLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbiAgICBmaWxsaW5nQm9keU1vZGFsVW5sb2NrKHNlcnZlcix3b3JsZClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbGxpbmdCb2R5TW9kYWxVbmxvY2soc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZW1wbGlzc2FnZSBtb2RhbCB1bmxvY2tcIilcclxuXHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxVbmxvY2tCb2R5XCIpO1xyXG4gICAgLypcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7Ki9cclxuXHJcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllcixmdW5jdGlvbihpbmRleCx1bmxvY2spe1xyXG4gICAgICAgIC8vQ3LDqWF0aW9uIGRlcyBsaWduZXMgZGUgY2hhcXVlIHVubG9ja1xyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICBjb2wuaWQgPSBcInVubG9ja1wiICsgdW5sb2NrLmlkY2libGU7XHJcblxyXG4gICAgICAgIC8vZGl2aXNpb24gZGUgbGEgbGlnbmUgZW4gZGV1eCBwYXJ0aWVzIChJbWFnZStEZXNjcmlwdGlvbiAvLyBVbmxvY2tlZCBvdSBub24pXHJcbiAgICAgICAgbGV0IGNvbEltYWdlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikvL0ltYWdlIERlc2NyaXB0aW9uXHJcbiAgICAgICAgbGV0IGNvbFVubG9ja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS8vQWZmaWNoYWdlIGVzdCBpbCBkw6l2w6lyb3VpbGzDqSA/XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNvbEltYWdlRGVzYylcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY29sVW5sb2NrZWQpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuICAgICAgICBjb2xVbmxvY2tlZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vQWZmaWNoYWdlIEljb24gVW5sb2NrXHJcbiAgICAgICAgbGV0IGljb25VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGljb25VbmxvY2spXHJcbiAgICAgICAgaWNvblVubG9jay5zcmM9c2VydmVyK3VubG9jay5sb2dvXHJcbiAgICAgICAgaWNvblVubG9jay5jbGFzc0xpc3QuYWRkKFwiaW1nVW5sb2NrXCIpXHJcblxyXG4gICAgICAgIGxldCBub21VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQobm9tVW5sb2NrKVxyXG4gICAgICAgIG5vbVVubG9jay5pbm5lclRleHQ9dW5sb2NrLm5hbWVcclxuXHJcbiAgICAgICAgbGV0IGRlc2NyVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoZGVzY3JVbmxvY2spXHJcbiAgICAgICAgZGVzY3JVbmxvY2suaW5uZXJUZXh0PVwiQXVnbWVudGF0aW9uIGRlIFwiK3VubG9jay50eXBlcmF0aW8rXCIgeFwiK3VubG9jay5yYXRpb1xyXG5cclxuICAgICAgICBsZXQgc2V1aWxVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChzZXVpbFVubG9jaylcclxuICAgICAgICBzZXVpbFVubG9jay5pbm5lclRleHQ9XCJTZXVpbDogXCIrdW5sb2NrLnNldWlsXHJcbiAgICB9KVxyXG5cclxuXHJcbn1cclxuLy9PbiBjaGVyY2hlIMOgIHNhdm9pciBzaSB1biBVbmxvY2sgZXN0IGTDqXZlcnJvdWlsbGFibGUueFxyXG5mdW5jdGlvbiB2ZXJpZlVubG9jayhpZDpudW1iZXIsd29ybGQ6V29ybGQpe1xyXG4gICAgLy9sZXQgaWRQcm9kdWN0XHJcbiAgICAvL2lkUHJvZHVjdCA9IHVubG9jay5pZGNpYmxlO1xyXG4gICAgJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllciwgZnVuY3Rpb24oaW5kZXgsdW5sb2NrKXtcclxuICAgICAgICBpZih1bmxvY2suaWRjaWJsZSAhPSAwKXsgICAgLy9PbiBkb2l0IHJlZ2FyZGVyIGluZGl2aWR1ZWxsZW1lbnQgcG91ciBjaGFxdWUgdW5sb2NrIHNpIHNvbiBzZXVpbCBhIMOpdMOpIGF0dGVpbnQgcG91ciBhY3RpdmVyIGxlIGJvbnVzXHJcbiAgICAgICAgICAgIGxldCBpZFJlY2hlcmNoZSA9IHVubG9jay5pZGNpYmxlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHVubG9jay5pZGNpYmxlPT0wKXtcclxuICAgICAgICAgICAgLy8gT24gZG9pdCByZWdhcmRlciBzaSBjaGFxdWUgcHJvZHVpdCDDoCBhdHRlaW50IGxlIHNldWlsIG7DqWNlc3NhaXJlIHBvdXIgZW5zdWl0ZSBhY3RpdmVyIGxlIGJvbnVzXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcmlmU2V1aWxVbmxvY2soaWQxOm51bWJlcixpZDI6bnVtYmVyLHdvcmxkOldvcmxkKXtcclxuICAgIC8vaWQxID09PiBpZCBkZSBsJ3VubG9jayAoaWRSZWNoZXJjw6kpXHJcbiAgICAvL2lkMiA9PT4gaWQgZHUgcHJvZHVpdFxyXG5cclxuICAgIC8vJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsZnVuY3Rpb24oaW5kZXgscHJvZHVjdCl7XHJcbiAgICAgICAgLy9pZihpZFJlY2hlcmNoZT09cHJvZHVjdC5pZCl7XHJcblxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgIC8vfSlcclxuXHJcblxyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBhZGRQcm9ncmVzc0Jhciwgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJMaXN0LCBsYXN0VXBkYXRlTGlzdCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQge2FkZFNlbGVjdGVkLCBzZXRBZGRQcm9kdWN0LCBnZXRDb3N0UHJvZHVjdCwgZ2V0TWF4UHJvZHVjdH0gZnJvbSBcIi4vU2lkZUJhclwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcblxyXG4vLyBGb25jdGlvbiBwcmluY2lwYWxlIGQnYXBwZWwgZGVzIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZHVjdHMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmlkID0gXCJwXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkb3VibGVCb3JkZXJQcm9kdWN0XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwiYmNjRm9udFwiKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdC5uYW1lO1xyXG5cclxuICAgICAgICAvLyBJbWFnZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0SW1hZ2VcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmlkID0gXCJpbWdcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RJY29uc1wiKVxyXG4gICAgICAgIC8vIFNpIGNlIHByb2R1aXQgbidhIHBhcyDDqXTDqSBkw6libG9xdcOpLCBvbiBsJ2FmZmljaGUgZW4gZ3Jpc1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlID09IDApIHtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcHJvZHVjdC5sb2dvXHJcbiAgICAgICAgLy8gQWpvdXQgZXZlbnQgcHJvZHVjdGlvblxyXG4gICAgICAgICQoaW1hZ2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpO1xyXG5cclxuICAgICAgICAvLyBMZXZlbCAtLT4gUXVhbnRpdMOpIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0UXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFF0ZSk7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdExldmVsXCIpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuYXBwZW5kQ2hpbGQobGV2ZWwpO1xyXG4gICAgICAgIGxldmVsLmlkID0gXCJxdGVcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgbGV2ZWwuY2xhc3NMaXN0LmFkZChcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgbGV2ZWwuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RDb250YWluZXIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcIm10LTNcIik7XHJcblxyXG4gICAgICAgIC8vIE5iciBsZXZlbCDDoCBhY2hldGVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RBZGQpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuYXBwZW5kQ2hpbGQocHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5pZCA9IFwiYWRkXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9kdWN0XCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgICQocHJvZHVjdEJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaWQgPSBcImNvc3RcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSAocHJvZHVjdC5jb3V0ICsgTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKSkudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGRlIGxhbmNlciBsYSBwcm9kdWN0aW9uIGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIHBldXQgYWN0aXZlciBsZSBwcm9kdWl0XHJcbiAgICBpZiAodmVyaWZQcm9kdWN0KHByb2R1Y3QpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMYW5jZW1lbnQgZGUgbGEgcHJvZHVjdGlvbiBkZSBcIiArIHByb2R1Y3QubmFtZSk7XHJcbiAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMTAwKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBxdWUgcHJvZHVpdCBlc3QgYWN0aXZhYmxlXHJcbmZ1bmN0aW9uIHZlcmlmUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHByb2R1Y3QucXVhbnRpdGUgPiAwKSAmJiAocHJvZHVjdC50aW1lbGVmdCA9PSAwKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkJ2Fqb3V0ZXIgdW5lIHF1YW50aXTDqSDDoCB1biBwcm9kdWl0XHJcbmZ1bmN0aW9uIGFkZFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBuJ2VzdCBwYXMgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIGNvw7t0XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIGFkZFNlbGVjdGVkLCBjb3N0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG1heCBhY2hldGFibGUgZXQgc29uIGNvdXRcclxuICAgICAgICBsZXQgbWF4ID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG5cclxuICAgICAgICAvLyBPbiBtb2RpZmllIGwnYWZmaWNoYWdlIGR1IHByb2R1aXRcclxuICAgICAgICBtb2RpZnlQcm9kdWN0KHdvcmxkLCBwcm9kdWN0LCBtYXgsIGNvc3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gZWZmZWN0dWFudCBsZXMgY2hhbmdlbWVudHMgZCdhZmZpY2hhZ2UgbGnDqXMgw6AgbCdhY2hhdCBkJ3VuIHByb2R1aXRcclxuZnVuY3Rpb24gbW9kaWZ5UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QsIHF1YW50aXR5OiBudW1iZXIsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBhc3NleiBkJ2FyZ2VudFxyXG4gICAgaWYgKHdvcmxkLm1vbmV5ID4gY29zdCkge1xyXG4gICAgICAgIC8vIE9uIGFqb3V0ZSBsYSBxdWFudGl0w6kgYWNoZXTDqWVcclxuICAgICAgICBwcm9kdWN0LnF1YW50aXRlICs9IHF1YW50aXR5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXRlXCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIE9uIHNvdXN0cmFpdCBsJ2FyZ2VudCBkw6lwZW5zw6lcclxuICAgICAgICB3b3JsZC5tb25leSAtPSBjb3N0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgICAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIHJlY2FsY3VsZSBsZSBtYXhcclxuICAgICAgICAgICAgcXVhbnRpdHkgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICAgICAgLy8gT24gY2hhbmdlIGwnYWZmaWNoYWdlIHN1ciBjaGFxdWUgcHJvZHVpdCBlbiBmb25jdGlvbiBkdSBub3V2ZWF1IHNvbGRlXHJcbiAgICAgICAgICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG5vdXZlYXUgY2/Du3QgYXByw6hzIGFjaGF0XHJcbiAgICAgICAgbGV0IG5ld0Nvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBxdWFudGl0eSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0obmV3Q29zdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUydpbCBzJ2FnaXQgZHUgMWVyIGFjaGF0IHN1ciB1biBwcm9kdWl0LCBvbiBsJ2FmZmljaGUgZW4gY2xhaXJcclxuICAgICAgICBsZXQgaW1hZ2VQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgIGlmIChpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRQcm9kdWN0XCIpKSB7XHJcbiAgICAgICAgICAgIGltYWdlUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QWRkUHJvZHVjdHM6IGFueVtdID0gWzEsIDEwLCAxMDAsIFwiTWF4XCJdO1xyXG5leHBvcnQgdmFyIGFkZFNlbGVjdGVkOiBhbnkgPSAxO1xyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNyw6lhbnQgbGEgYmFyZSBkZSBtZW51IMOgIGRyb3RpZSBjb250ZW5hbnQgbGUgc8OpbGVjdGV1ciBzdXIgbGEgcXVhbnRpdMOpIGRlIHByb2R1aXRzIMOgIGFjaGV0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlQmFyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9idGVudGlvbiBkdSBjb250YWluZXIgZGVzIHByb2R1aXRzXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZHUgY29udGFpbmVyIGR1IG1lbnVcclxuICAgIGxldCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcclxuICAgIHNpZGVDb250YWluZXIuaWQgPSBcInNpZGVNZW51XCI7XHJcbiAgICAvLyBDZW50cmFnZSBkdSBtZW51IMOgIGRyb2l0ZVxyXG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9zaXRpb24tYWJzb2x1dGVcIiwgXCJ0b3AtNTBcIiwgXCJlbmQtMFwiLCBcInRyYW5zbGF0ZS1taWRkbGUteVwiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZCd1bmUgbGlzdGUgZGUgYm91dG9ucyDDoCBsYSB2ZXJ0aWNhbGVcclxuICAgIGxldCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XHJcbiAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tZ3JvdXAtdmVydGljYWxcIiwgXCJzaWRlQ29udGFpbmVyXCIpO1xyXG4gICAgbGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZ3JvdXBcIik7XHJcblxyXG4gICAgLy8gT24gZ8OpbsOocmUgZGVzIGJvdXRvbnMgZGUgdHlwZSByYWRpb1xyXG4gICAgbGlzdEFkZFByb2R1Y3RzLmZvckVhY2goYWRkTnVtYmVyID0+IHtcclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbCdpbnB1dCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJJbnB1dCk7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuaWQgPSBcImJ1dHRvblwiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5uYW1lID0gXCJidG5yYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcclxuICAgICAgICAvLyBBIGwnaW5pdGlhbGlzYXRpb24sIGwnb3B0aW9uICsxIGVzdCBjZWxsZSBjb2Now6llIHBhciBkw6lmYXV0XHJcbiAgICAgICAgaWYgKGFkZE51bWJlciA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBhZGROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbGUgbGFiZWwgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlckJ1dHRvbik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRCdXR0b25cIiwgXCJhZGRCdXR0b25PdXRsaW5lXCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYWRkTnVtYmVySW5wdXQuaWQpXHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIC8vIEV2ZW50IDogbW9kaWZpY2F0aW9uIGR1IHPDqWxlY3RldXIgYXUgY2xpY1xyXG4gICAgICAgICQoYWRkTnVtYmVyQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkID0gYWRkTnVtYmVyO1xyXG4gICAgICAgICAgICBzZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBGb25jdGlvbiBjaGFuZ2VhbnQgbCdhZmZpY2hhZ2UgbGnDqSDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdCh3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBlc3QgdW5lIHZhbGV1ciBjb25zdGFudGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgYWRkU2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgam91ZXVyIG4nYSBwYXMgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIHByb2R1aXQsIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uXHJcbiAgICAgICAgICAgIGlmICh3b3JsZC5tb25leSA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgIGFkZFByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGNvbnNpc3RlIMOgIGxhIHZhbGV1ciBtYXhcclxuICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBtYXg7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgbWF4KTtcclxuICAgICAgICAgICAgbGV0IGNvc3RQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGNvc3RQcm9kdWN0LmlubmVySFRNTCA9IHRyYW5zZm9ybShjb3N0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBjb8O7dCBkJ3VuIGdyb3VwZSBkZSBwcm9kdWl0c1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCwgYWRkTnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7XHJcbiAgICBsZXQgbnVtZXJhdG9yID0gMSAtIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgYWRkTnVtYmVyKTtcclxuICAgIGxldCBkZW5vbWluYXRvciA9IDEgLSBwcm9kdWN0LmNyb2lzc2FuY2VcclxuICAgIGxldCBjb3V0ID0gKHVuICogbnVtZXJhdG9yKSAvIGRlbm9taW5hdG9yO1xyXG5cclxuICAgIC8vIFJldG91ciBkdSBjb8O7dCBjYWxjdWzDqVxyXG4gICAgcmV0dXJuIGNvdXQ7XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBub21icmUgbWF4IGRlIHByb2R1aXRzIGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7IFxyXG4gICAgbGV0IG51bWVyYXRvcjogbnVtYmVyID0gTWF0aC5sb2coLSh3b3JsZC5tb25leSAtIHdvcmxkLm1vbmV5ICogcHJvZHVjdC5jcm9pc3NhbmNlIC0gdW4pIC8gdW4pO1xyXG4gICAgbGV0IGRlbm9taW5hdG9yOiBudW1iZXIgPSBNYXRoLmxvZyhwcm9kdWN0LmNyb2lzc2FuY2UpO1xyXG4gICAgbGV0IG1heDogbnVtYmVyID0gKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKVxyXG5cclxuICAgIC8vIFJldG91ciBkdSBtYXggZGUgcHJvZHVpdHNcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG1heCk7XHJcbn0iLCJpbXBvcnQge1dvcmxkLCBQcm9kdWN0LCBQYWxsaWVyfSBmcm9tIFwiLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHNob3dQcm9kdWN0cywgc3RhcnRQcm9kdWN0IH0gZnJvbSBcIi4vQXBwL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIZWFkZXIsIHRyYW5zZm9ybX0gZnJvbSBcIi4vQXBwL0hlYWRlclwiXHJcbmltcG9ydCB7IHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vQXBwL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCB7IGFkZFNlbGVjdGVkLCBzZXRBZGRQcm9kdWN0LCBzaG93U2lkZUJhciB9IGZyb20gXCIuL0FwcC9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlNZW51IH0gZnJvbSBcIi4vQXBwL01lbnVcIjtcclxuaW1wb3J0IHsgYW55TmV3cywgZGlzcGxheU1vZGFsLCB2ZXJpZk1hbmFnZXIgfSBmcm9tIFwiLi9BcHAvTW9kYWxcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1vZGFsVW5sb2NrIH0gZnJvbSBcIi4vQXBwL01vZGFsVW5sb2NrXCI7XHJcblxyXG5cclxudmFyIHNlcnZldXJVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9pc2lzY2FwaXRhbGlzdC5ray5rdXJhc2F3YS5mci9cIjtcclxudmFyIGN1cnJlbnRXb3JsZDogV29ybGQ7XHJcbnZhciBvdXJXb3JsZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5leHBvcnQgdmFyIHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJuYW1lKG5ld1VzZXJuYW1lOiBzdHJpbmcpIHtcclxuICAgIHVzZXJuYW1lID0gbmV3VXNlcm5hbWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIG5ld1VzZXJuYW1lKTtcclxufVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkLmdldEpTT04oc2VydmV1clVybCArIFwiYWR2ZW50dXJlaXNpcy9nZW5lcmljL3dvcmxkXCIsIGZ1bmN0aW9uICh3b3JsZCkge1xyXG4gICAgICAgIGN1cnJlbnRXb3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXb3JsZClcclxuXHJcblxyXG4gICAgICAgIHdvcmxkLm1vbmV5ID0gMjAwMDAwMDtcclxuXHJcbiAgICAgICAgLy8gcmVtcGxpciBsZSBsYXlvdXQgYXZlYyBsZXMgaW5mb3JtYXRpb25zIGdsb2JhbGVzXHJcbiAgICAgICAgLy8gKG5vbSBkdSBtb25kZSwgYXJnZW50IHRvdGFsLi4uLilcclxuICAgICAgICAvLyBwdWlzIGJvdWNsZXIgc3VyIGNoYXF1ZSBwcm9kdWl0XHJcbiAgICAgICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlzcGxheUhlYWRlcihzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgc2hvd1Byb2R1Y3RzKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5TWVudSh3b3JsZCk7XHJcbiAgICAgICAgc2hvd1NpZGVCYXIoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNb2RhbChzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1vZGFsVW5sb2NrKHNlcnZldXJVcmwsd29ybGQpO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBlbiBwZXJtYW5lbmNlIGxlIHNjb3JlXHJcbiAgICAgICAgICAgIGNhbGNTY29yZShzZXJ2ZXVyVXJsLCBjdXJyZW50V29ybGQpO1xyXG4gICAgICAgICAgICB2ZXJpZk1hbmFnZXIod29ybGQpO1xyXG4gICAgICAgICAgICBhbnlOZXdzKHdvcmxkKTtcclxuICAgICAgICAgICAgc2V0QWRkUHJvZHVjdChjdXJyZW50V29ybGQpXHJcbiAgICAgICAgICAgIC8vIFNpIGwnb3B0aW9uIGQnYWpvdXQgc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGUsIG9uIHN5bmNocm9uaXNlIGF2ZWMgZW4gZm9uY3Rpb24gZHUgc2NvcmVcclxuICAgICAgICAgICAgLy9pZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAgICAgLy9zZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyTGlzdDogYW55W10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IGxhc3RVcGRhdGVMaXN0IDogbnVtYmVyW10gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNhbGNTY29yZShzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QudGltZWxlZnQgIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgdGltZVJlbWFpbmluZzogbnVtYmVyID0gRGF0ZS5ub3coKSAtIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdO1xyXG4gICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC50aW1lbGVmdCAtIHRpbWVSZW1haW5pbmc7XHJcblxyXG4gICAgICAgICAgICBsZXQgcG91cmNlbnRhZ2U6IG51bWJlciA9IChwcm9kdWN0LnRpbWVsZWZ0ICogMTAwKSAvIHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgcG91cmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZWxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZSBwcm9kdWl0IFwiICsgcHJvZHVjdC5uYW1lICsgXCIgYSByYXBwb3J0w6kgXCIgKyBwcm9kdWN0LnJldmVudSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV2ZW51OiBudW1iZXIgPSBwcm9kdWN0LnJldmVudTtcclxuICAgICAgICAgICAgICAgIGFkZFNjb3JlKHdvcmxkLCByZXZlbnUpO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgocHJvZHVjdC50aW1lbGVmdD09MCkgJiYgKHByb2R1Y3QubWFuYWdlclVubG9ja2VkPT10cnVlKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGFuY2VtZW50IHByb2R1aXRcIik7XHJcbiAgICAgICAgICAgIHN0YXJ0UHJvZHVjdChwcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFNjb3JlKHdvcmxkOiBXb3JsZCwgc2NvcmU6IG51bWJlcikge1xyXG4gICAgd29ybGQubW9uZXkgPSB3b3JsZC5tb25leSArIHNjb3JlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaElkKGlkOm51bWJlcix3b3JsZDpXb3JsZCl7XHJcbiAgICBsZXQgaWRQcm9kdWN0XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgscHJvZHVjdCl7XHJcbiAgICAgICAgIGlkUHJvZHVjdCA9IHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaWYoaWRQcm9kdWN0PT1pZCl7XHJcbiAgICAgICAgICAgIHByb2R1Y3QubWFuYWdlclVubG9ja2VkPXRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVpdDogXCIrcHJvZHVjdC5uYW1lK1wiIHVubG9ja2VkOlwiK3Byb2R1Y3QubWFuYWdlclVubG9ja2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG4vKlxyXG5mdW5jdGlvbiB1cGRhdGVCdXR0b24oYWRkU2VsZWN0ZWQ6YW55KXtcclxuICAgIHN3aXRjaChhZGRTZWxlY3RlZCkgeyBcclxuICAgICAgICBjYXNlIDE6IHsgXHJcbiAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXNlIDEwOiB7IFxyXG4gICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSAxMDA6IHsgXHJcbiAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgfSBcclxuICAgICAgICAgY2FzZSBcIk1heFwiOiB7IFxyXG4gICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgZGVmYXVsdDogeyBcclxuICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICB9IFxyXG4gICAgIH0gXHJcbn0qL1xyXG4vKlxyXG5mdW5jdGlvbiBjb21wYXJhaXNvbih3b3JsZDpXb3JsZCxtdWx0aXBsaWVyOmFueSl7XHJcblxyXG59Ki8iLCJpbXBvcnQge3Byb2dyZXNzQmFyTGlzdH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpIHtcclxuICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uIChsaWduZSlcclxuICAgIGxldCBwcm9kdWN0UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RQcm9ncmVzcyk7XHJcbiAgICBwcm9kdWN0UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGxldCBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuTGluZShwcm9kdWN0UHJvZ3Jlc3MsIHtcclxuICAgICAgICBzdHJva2VXaWR0aDogMTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcclxuICAgICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgICAgICBjb2xvcjogJyNGRkVBODInLFxyXG4gICAgICAgIHRyYWlsQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICB0cmFpbFdpZHRoOiAxLFxyXG4gICAgICAgIHN2Z1N0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH0sXHJcbiAgICAgICAgZnJvbTogeyBjb2xvcjogJyNGRkVBODInIH0sXHJcbiAgICAgICAgdG86IHsgY29sb3I6ICcjRUQ2QTVBJyB9LFxyXG4gICAgICAgIHN0ZXA6IChzdGF0ZSwgYmFyKSA9PiB7XHJcbiAgICAgICAgICAgIGJhci5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2dyZXNzQmFyTGlzdFtwcm9kdWN0LmlkXSA9IGJhcjtcclxuICAgIGJhci5hbmltYXRlKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGlkLCBwb3VyY2VudGFnZSkge1xyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W2lkXS5zZXQocG91cmNlbnRhZ2UgLyAxMDApXHJcbiAgICBjb25zb2xlLmxvZyhwb3VyY2VudGFnZS8xMDApXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==