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

/***/ "./src/App/Products.ts":
/*!*****************************!*\
  !*** ./src/App/Products.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillLastUpdate": () => (/* binding */ fillLastUpdate),
/* harmony export */   "lastUpdateList": () => (/* binding */ lastUpdateList),
/* harmony export */   "progressBarList": () => (/* binding */ progressBarList),
/* harmony export */   "showProducts": () => (/* binding */ showProducts),
/* harmony export */   "startProduct": () => (/* binding */ startProduct)
/* harmony export */ });
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "./src/App/ProgressBar.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar */ "./src/App/SideBar.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/App/Header.ts");
/* harmony import */ var _RestCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RestCalls */ "./src/RestCalls.ts");




var progressBarList = [];
var lastUpdateList = [];
function fillLastUpdate(world) {
    for (var i = 1; i < world.products.product.length; i++) {
        lastUpdateList[i] = Date.now();
    }
}
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
    (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.buyableProducts)(world);
}
// Fonction permettant de lancer la production d'un produit
function startProduct(product) {
    // On vérifie que l'on peut activer le produit
    if (verifProduct(product)) {
        product.timeleft = product.vitesse;
        lastUpdateList[product.id] = Date.now();
        (0,_ProgressBar__WEBPACK_IMPORTED_MODULE_0__.setProgressBar)(product.id, 100);
        (0,_RestCalls__WEBPACK_IMPORTED_MODULE_3__.sendToServer)("product", product);
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
    if (_SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected != "Max") {
        // On calcule le coût
        var cost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getCostProduct)(product, _SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected);
        // On modifie l'affichage du produit
        modifyProduct(world, product, _SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected, cost);
    }
    // Si l'option sélectionnée est le max achetable
    if (_SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected == "Max") {
        // On calcule le max achetable et son cout
        var max = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getMaxProduct)(world, product);
        var cost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getCostProduct)(product, max);
        // On modifie l'affichage du produit
        modifyProduct(world, product, max, cost);
    }
    // On envoie les données au serveur
    (0,_RestCalls__WEBPACK_IMPORTED_MODULE_3__.sendToServer)("product", product);
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
        document.getElementById("worldMoney").innerHTML = (0,_Header__WEBPACK_IMPORTED_MODULE_2__.transform)(world.money);
        // Si l'option sélectionnée est le max achetable
        if (_SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected == "Max") {
            // On recalcule le max
            quantity = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getMaxProduct)(world, product);
            // On change l'affichage sur chaque produit en fonction du nouveau solde
            (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.buyableProducts)(world);
        }
        // On calcule le nouveau coût après achat
        var newCost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getCostProduct)(product, quantity);
        document.getElementById("cost" + product.id).innerHTML = (0,_Header__WEBPACK_IMPORTED_MODULE_2__.transform)(newCost);
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
/* harmony export */   "buyableProducts": () => (/* binding */ buyableProducts),
/* harmony export */   "getCostProduct": () => (/* binding */ getCostProduct),
/* harmony export */   "getMaxProduct": () => (/* binding */ getMaxProduct),
/* harmony export */   "listAddProducts": () => (/* binding */ listAddProducts),
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
            buyableProducts(world);
        });
    });
}
// Fonction changeant l'affichage lié à l'achat d'un produit
function buyableProducts(world) {
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

/***/ "./src/Modals/Managers.ts":
/*!********************************!*\
  !*** ./src/Modals/Managers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buyableManagers": () => (/* binding */ buyableManagers),
/* harmony export */   "displayManager": () => (/* binding */ displayManager),
/* harmony export */   "verifManagers": () => (/* binding */ verifManagers)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _App_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App/Header */ "./src/App/Header.ts");


// Affichage des managers
function displayManager(server, world) {
    // Container
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
// Affichage de la liste des managers
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
        var cost = (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.transform)(pallier.seuil);
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
        console.log(pallier.idcible + " " + pallier.unlocked);
        if (pallier.unlocked == true) {
            console.log("DISABLED");
            buttonHire.setAttribute("disabled", "true");
        }
        $(buttonHire).click(function () {
            console.log("je tente d'acheter un manager :)");
            buyManager(pallier, world);
        });
        /*
        let imageProduct = document.createElement("img")
        hire.appendChild(imageProduct)
        imageProduct.classList.add("imageProductManager")
        let srcImg=getImage(pallier.idcible,world)
        imageProduct.src=server+srcImg;*/
    });
}
// Affichage dynamiquement si un manager est achetable
function verifManagers(world) {
    // Pour chaque manager
    $.each(world.managers.pallier, function (index, pallier) {
        // On récupère son bouton d'achat
        var button = document.getElementById("hire" + pallier.idcible);
        // On vérifie que l'on a assez d'argent ou que le manager n'est pas déjà acheté
        if ((pallier.seuil > world.money) || (pallier.unlocked == true)) {
            // Si c'est le cas, on l'active
            button.innerHTML = "Acheté";
            button.setAttribute("disabled", "true");
        }
        else {
            // Sinon on le désactive
            button.removeAttribute("disabled");
        }
    });
}
// Calcule dynamiquement le nombre de managers achetables
function buyableManagers(world) {
    // Variables
    var managerDispo = 0;
    var notifManager = document.getElementById("badgeManager");
    // Pour chaque manager
    $.each(world.managers.pallier, function (index, manager) {
        // On vérifie que l'on a la possibilité d'en acheter
        if (manager.seuil <= world.money && manager.unlocked == false) {
            managerDispo++;
        }
        ;
    });
    // S'il n'y a aucun manager achetable, on affiche rien
    if (managerDispo == 0) {
        notifManager.innerText = null;
    }
    // Sinon on affiche leur quantité achetable
    else {
        notifManager.innerText = managerDispo.toString();
    }
}
// Achat d'un manager
function buyManager(manager, world) {
    // On vérifie que l'on a assez d'argent pour acheter le manager
    if (manager.seuil <= world.money) {
        // Si c'est le cas, on soustrait son coût
        world.money -= manager.seuil;
        // On affiche ensuite le nouveau solde
        document.getElementById("worldMoney").innerHTML = (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.transform)(world.money);
        // On débloque le manager
        manager.unlocked = true;
        (0,___WEBPACK_IMPORTED_MODULE_0__.matchId)(manager, world);
        // Changement du bouton Hire en acheté et disabled
        var button = document.getElementById("hire" + manager.idcible);
        button.innerText = "Acheté";
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");
        ;
    }
}
function getImage(id, world) {
    $.each(world.products.product, function (index, produit) {
        var src = "";
        if (produit.id == id) {
            src = produit.logo;
            console.log("Source image:" + produit.logo);
            return src;
        }
    });
}


/***/ }),

/***/ "./src/Modals/Unlocks.ts":
/*!*******************************!*\
  !*** ./src/Modals/Unlocks.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayUnlocks": () => (/* binding */ displayUnlocks)
/* harmony export */ });
// Affichage des unlocks
function displayUnlocks(server, world) {
    // Container
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
    //Création select barre
    var selectBarre = document.createElement("select");
    mh.appendChild(selectBarre);
    selectBarre.id = "selectBarreUnlocks";
    $.each(world.products.product, function (index, product) {
        var opt = document.createElement("option");
        selectBarre.appendChild(opt);
        opt.id = "optProduit" + product.id;
        opt.value = "" + product.id;
        opt.text = product.name;
    });
    var opt = document.createElement("option");
    selectBarre.appendChild(opt);
    opt.id = "optProduit" + 0;
    opt.value = "" + 0;
    opt.text = "Tous les produits";
    $(selectBarre).change(function () {
        console.log(this.value);
        listUnlocks(parseInt(this.value), server, world);
    });
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
    //fillingBodyModalUnlock(server,world)
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
            //check si tous les produits ont atteint le seuil pour activer l'unlock
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
function listUnlocks(id, server, world) {
    console.log("remplissage modal unlock");
    var body = document.getElementById("modalUnlockBody");
    body.innerHTML = "";
    var grid = document.createElement("div");
    body.appendChild(grid);
    grid.classList.add("row", "row-cols-2"); //"row", "row-cols-2"
    $.each(world.allunlocks.pallier, function (index, unlock) {
        if (unlock.idcible == id) {
            console.log("=" + id);
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
        }
        else if (id == 0) {
            console.log("=");
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
        }
    });
}


/***/ }),

/***/ "./src/RestCalls.ts":
/*!**************************!*\
  !*** ./src/RestCalls.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendToServer": () => (/* binding */ sendToServer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");

// Envoi au serveur
function sendToServer(type, content) {
    console.log(type + " :");
    console.log(content);
    $.ajax(___WEBPACK_IMPORTED_MODULE_0__.serverUrl + "adventureisis/generic/" + type, {
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(content),
        statusCode: {
            304: function () {
                // Action non prise en compte
            }
        },
        error: function () {
            // echec de la requête
        }
    });
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchId": () => (/* binding */ matchId),
/* harmony export */   "serverUrl": () => (/* binding */ serverUrl),
/* harmony export */   "setUsername": () => (/* binding */ setUsername),
/* harmony export */   "username": () => (/* binding */ username)
/* harmony export */ });
/* harmony import */ var _App_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/Products */ "./src/App/Products.ts");
/* harmony import */ var _App_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Header */ "./src/App/Header.ts");
/* harmony import */ var _App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/ProgressBar */ "./src/App/ProgressBar.js");
/* harmony import */ var _App_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/SideBar */ "./src/App/SideBar.ts");
/* harmony import */ var _App_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App/Menu */ "./src/App/Menu.ts");
/* harmony import */ var _Modals_Managers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modals/Managers */ "./src/Modals/Managers.ts");
/* harmony import */ var _Modals_Unlocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modals/Unlocks */ "./src/Modals/Unlocks.ts");
/* harmony import */ var _RestCalls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RestCalls */ "./src/RestCalls.ts");








// Username
var username = localStorage.getItem("username");
// Changement du pseudo
function setUsername(newUsername) {
    username = newUsername;
    localStorage.setItem("username", newUsername);
    $.ajaxSetup({
        headers: { "X-user": username }
    });
}
// Url serveur local
var serverLocal = "http://localhost:8080/";
// Url serveur heroku
var serverHeroku = "https://isiscapitalist.herokuapp.com/";
// Url serveur test
var servertest = "https://isiscapitalist.kk.kurasawa.fr/";
// Serveur utilisé
var serverUrl = serverLocal;
$(document).ready(function () {
    // Chargement du pseudo du joueur
    console.log(username);
    setUsername(username);
    // Affichage du monde du joueur
    $.getJSON(serverUrl + "adventureisis/generic/world", function (world) {
        // Affichage du monde chargé
        console.log(world);
        console.log("TIMELEFT = " + world.products.product[4].timeleft);
        (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.fillLastUpdate)(world);
        // Initialisation argent de base
        // world.money = 0;
        // Affichage HTML
        (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(serverUrl, world);
        (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.showProducts)(serverUrl, world);
        (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.showSideBar)(serverUrl, world);
        (0,_App_Menu__WEBPACK_IMPORTED_MODULE_4__.displayMenu)(world);
        (0,_Modals_Managers__WEBPACK_IMPORTED_MODULE_5__.displayManager)(serverUrl, world);
        (0,_Modals_Unlocks__WEBPACK_IMPORTED_MODULE_6__.displayUnlocks)(serverUrl, world);
        // Actions dynamiques
        setInterval(function () {
            // Calcul du score
            calcScore(serverUrl, world);
            // Vérification achats managers
            if (document.getElementById("modalManager").classList.contains("show")) {
                (0,_Modals_Managers__WEBPACK_IMPORTED_MODULE_5__.verifManagers)(world);
            }
            // Affichage achetables
            (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.buyableProducts)(world);
            (0,_Modals_Managers__WEBPACK_IMPORTED_MODULE_5__.buyableManagers)(world);
            // Si l'option d'ajout sélectionnée est le max achetable, on synchronise avec en fonction du score
            //if (addSelected == "Max") {
            //setAddProduct(world);
            //}
        }, 100);
    });
});
// Calcul du score
function calcScore(server, world) {
    // Pour chaque produit
    $.each(world.products.product, function (index, product) {
        // On vérifie que le produit est en cours de production
        if (product.timeleft != 0) {
            // On calcule le temps de production restant
            var timePassed = Date.now() - _App_Products__WEBPACK_IMPORTED_MODULE_0__.lastUpdateList[product.id];
            product.timeleft = product.timeleft - timePassed;
            // On calcule le pourcentage de production restant et on actualise la bar de progression
            var pourcentage = product.timeleft / product.vitesse;
            console.log(product.timeleft);
            console.log(pourcentage);
            (0,_App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.setProgressBar)(product.id, pourcentage);
            // Si le nouveau temps restant est inférieur ou égal à 0
            if (product.timeleft <= 0) {
                // On ajoute le revenu du produit
                var revenu = product.revenu * product.quantite;
                addScore(world, revenu);
                // On réinitialise la progression de la production
                product.timeleft = 0;
                (0,_App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.setProgressBar)(product.id, 0);
            }
        }
        // Si le produit n'est pas en cours de production et a un manager
        else if ((product.timeleft == 0) && (product.managerUnlocked == true)) {
            // On lance la production du produit
            (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.startProduct)(product);
        }
        _App_Products__WEBPACK_IMPORTED_MODULE_0__.lastUpdateList[product.id] = Date.now();
    });
}
// Calcul du score
function addScore(world, score) {
    // Ajout de l'argent
    world.money += score;
    // Ajout du score
    world.score += score;
    // Affiche du nouveau solde
    document.getElementById("worldMoney").innerHTML = (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.transform)(world.money);
}
// Débloque manager pour un produit
function matchId(manager, world) {
    $.each(world.products.product, function (index, product) {
        if (manager.idcible == product.id) {
            product.managerUnlocked = true;
            console.log("produit: " + product.name + " unlocked:" + product.managerUnlocked);
            (0,_RestCalls__WEBPACK_IMPORTED_MODULE_7__.sendToServer)("manager", manager);
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
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./src/App/Products.ts");


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

    _Products__WEBPACK_IMPORTED_MODULE_0__.progressBarList[product.id] = bar;
    bar.animate(0);
}


function setProgressBar(id, pourcentage) {
    _Products__WEBPACK_IMPORTED_MODULE_0__.progressBarList[id].set(pourcentage)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rix3REFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUMsQ0FBQztBQUVOLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0g7OztHQUdHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMd0M7QUFDM0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25ELGdCQUFnQixrQkFBa0I7QUFDbEMsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSxzREFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxzREFBZTtBQUNuQjs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvSGVhZGVyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvTWVudS50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvU2lkZUJhci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvTW9kYWxzL01hbmFnZXJzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9Nb2RhbHMvVW5sb2Nrcy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvUmVzdENhbGxzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBwcmVtacOocmUgY29sb25lIGF2ZWMgbGUgbm9tIGV0IGxlIGxvZ29cclxuICAgIGxldCBtb25kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZGUpO1xyXG4gICAgbW9uZGUuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcIm1vbmRlXCIsIFwiYmNjRm9udFwiKTtcclxuXHJcbiAgICAvL0xvZ29cclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICAgIGxvZ28uc3JjID0gc2VydmVyICsgd29ybGQubG9nbztcclxuXHJcbiAgICAvL05vbVxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCIgXCIgKyB3b3JsZC5uYW1lO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIHNlY29uZCBlbnTDqnRlLCBsJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmV5Q29sKVxyXG4gICAgbW9uZXlDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIilcclxuXHJcbiAgICAvL0wnYXJnZW50XHJcbiAgICBsZXQgbW9uZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9uZXlDb2wuYXBwZW5kQ2hpbGQobW9uZXkpO1xyXG4gICAgbW9uZXkuaWQgPSBcIndvcmxkTW9uZXlcIjtcclxuICAgIG1vbmV5LmNsYXNzTGlzdC5hZGQoXCJtb25leVwiKTtcclxuICAgIGxldCBhcmdlbnQgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG4gICAgbW9uZXkuaW5uZXJIVE1MID0gYXJnZW50O1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGRlcm5pZXIgZW50w6h0ZSwgVXNlciBJRFxyXG4gICAgbGV0IHVzZXJDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJDb2wpO1xyXG4gICAgdXNlckNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG5cclxuICAgIC8qXHJcbiAgICAvL1VzZXIgSURcclxuICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWRDb2wuYXBwZW5kQ2hpbGQodXNlcklkKTtcclxuICAgIHVzZXJJZC5jbGFzc0xpc3QuYWRkKFwidXNlcklkXCIpO1xyXG4gICAgdXNlcklkLmlubmVySFRNTCA9IFwiSUQ6XCI7XHJcbiAgICAqL1xyXG5cclxuICAgIGxldCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHVzZXJDb2wuYXBwZW5kQ2hpbGQodXNlclJvdyk7XHJcbiAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcblxyXG4gICAgbGV0IGxhYmVsVXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQobGFiZWxVc2VyKTtcclxuICAgIGxhYmVsVXNlci5odG1sRm9yID0gXCJpbnB1dFVzZXJcIjtcclxuICAgIGxhYmVsVXNlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKVxyXG5cclxuICAgIGxldCBpbnB1dFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGlucHV0VXNlcik7XHJcbiAgICBpbnB1dFVzZXIuaWQgPSBcImlucHV0VXNlclwiXHJcbiAgICBpbnB1dFVzZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcclxuICAgIGlucHV0VXNlci50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBpbnB1dFVzZXIucGxhY2Vob2xkZXIgPSBcIlBzZXVkb1wiO1xyXG4gICAgaW5wdXRVc2VyLnZhbHVlID0gdXNlcm5hbWU7XHJcbiAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSB0cnVlO1xyXG5cclxuICAgIGxldCBidXR0b25Vc2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uVXNlckRpdik7XHJcblxyXG4gICAgbGV0IGJ1dHRvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgYnV0dG9uVXNlckRpdi5hcHBlbmRDaGlsZChidXR0b25JbnB1dCk7XHJcbiAgICBidXR0b25JbnB1dC5pZCA9IFwidXNlckJ1dHRvbkNoZWNrXCI7XHJcbiAgICBidXR0b25JbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgYnV0dG9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuXHJcbiAgICBsZXQgYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBidXR0b25Vc2VyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkxhYmVsKTtcclxuICAgIGJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKTtcclxuICAgIGJ1dHRvbkxhYmVsLmh0bWxGb3IgPSBcInVzZXJCdXR0b25DaGVja1wiO1xyXG4gICAgYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nYmkgYmktY2hlY2stc3F1YXJlJz48L2k+XCI7XHJcbiAgICAkKGJ1dHRvbkxhYmVsKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VXNlci5yZWFkT25seSkge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSBmYWxzZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZShpbnB1dFVzZXIudmFsdWUpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHZhbGV1cjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAodmFsZXVyIDwgMTAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgyKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA8IDEwMDAwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMCk7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPj0gMTAwMDAwMCkge1xyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b1ByZWNpc2lvbig0KTtcclxuICAgICAgICByZXMgPSByZXMucmVwbGFjZSgvZVxcKyguKikvLCBcIiAxMDxzdXA+JDE8L3N1cD5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudSh3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gbmF2YmFyXHJcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIiwgXCJmaXhlZC1ib3R0b21cIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gdW5sb2Nrc1xyXG4gICAgbGV0IHVubG9ja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHVubG9ja3MpO1xyXG4gICAgdW5sb2Nrcy5jbGFzc0xpc3QuYWRkKFwidW5sb2Nrc1wiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBVbmxvY2tzXHJcbiAgICBsZXQgYnV0dG9uVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgdW5sb2Nrcy5hcHBlbmRDaGlsZChidXR0b25VbmxvY2spO1xyXG4gICAgYnV0dG9uVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJidG5cIixcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidXR0b25VbmxvY2suc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIixcIm1vZGFsXCIpXHJcbiAgICBidXR0b25VbmxvY2suc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIixcIiNtb2RhbFVubG9ja1wiKVxyXG4gICAgYnV0dG9uVW5sb2NrLmlubmVyVGV4dD1cIlVubG9ja3MgXCI7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gY2FzaCB1cGdyYWRlc1xyXG4gICAgbGV0IGNhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNhc2gpO1xyXG4gICAgY2FzaC5jbGFzc0xpc3QuYWRkKFwiY2FzaFwiKTtcclxuICAgIGNhc2guaW5uZXJIVE1MID0gXCJDYXNoIFVwZ3JhZGVzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gYW5nZWxzIHVwZ3JhZGVzXHJcbiAgICBsZXQgYW5nZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhbmdlbHMpO1xyXG4gICAgYW5nZWxzLmNsYXNzTGlzdC5hZGQoXCJhbmdlbHNcIik7XHJcbiAgICBhbmdlbHMuaW5uZXJIVE1MID0gXCJBbmdlbHMgdXBncmFkZXNcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBtYW5hZ2Vyc1xyXG4gICAgbGV0IG1hbmFnZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtYW5hZ2Vycyk7XHJcbiAgICBtYW5hZ2Vycy5jbGFzc0xpc3QuYWRkKFwibWFuYWdlcnNcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gTWFuYWdlclxyXG4gICAgbGV0IGJ1dHRvbk1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBtYW5hZ2Vycy5hcHBlbmRDaGlsZChidXR0b25NYW5hZ2VyKTtcclxuICAgIGJ1dHRvbk1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImJ0blwiLFwiYnRuLXByaW1hcnlcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIixcIm1vZGFsXCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsXCIjbW9kYWxNYW5hZ2VyXCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLmlubmVyVGV4dD1cIk1hbmFnZXJzIFwiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGJhZGdlXHJcbiAgICBsZXQgYmFkZ2VNYW5hZ2VyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGJ1dHRvbk1hbmFnZXIuYXBwZW5kQ2hpbGQoYmFkZ2VNYW5hZ2VyKTtcclxuICAgIGJhZGdlTWFuYWdlci5pZD1cImJhZGdlTWFuYWdlclwiXHJcbiAgICBiYWRnZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImJhZGdlXCIsXCJiZy1zZWNvbmRhcnlcIik7XHJcbiAgICBcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBpbnZlc3RvcnNcclxuICAgIGxldCBpbnZlc3RvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGludmVzdG9ycyk7XHJcbiAgICBpbnZlc3RvcnMuY2xhc3NMaXN0LmFkZChcImludmVzdG9yc1wiKTtcclxuICAgIGludmVzdG9ycy5pbm5lckhUTUwgPSBcIkludmVzdG9yc1wiO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IGFkZFByb2dyZXNzQmFyLCBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XHJcblxyXG5pbXBvcnQge2FkZFNlbGVjdGVkLCBidXlhYmxlUHJvZHVjdHMsIGdldENvc3RQcm9kdWN0LCBnZXRNYXhQcm9kdWN0fSBmcm9tIFwiLi9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBzZW5kVG9TZXJ2ZXIgfSBmcm9tIFwiLi4vUmVzdENhbGxzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyTGlzdDogYW55W10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IGxhc3RVcGRhdGVMaXN0IDogbnVtYmVyW10gPSBbXTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbExhc3RVcGRhdGUod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtpXSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwcmluY2lwYWxlIGQnYXBwZWwgZGVzIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZHVjdHMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmlkID0gXCJwXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkb3VibGVCb3JkZXJQcm9kdWN0XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwiYmNjRm9udFwiKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdC5uYW1lO1xyXG5cclxuICAgICAgICAvLyBJbWFnZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0SW1hZ2VcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmlkID0gXCJpbWdcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RJY29uc1wiKVxyXG4gICAgICAgIC8vIFNpIGNlIHByb2R1aXQgbidhIHBhcyDDqXTDqSBkw6libG9xdcOpLCBvbiBsJ2FmZmljaGUgZW4gZ3Jpc1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlID09IDApIHtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcHJvZHVjdC5sb2dvXHJcbiAgICAgICAgLy8gQWpvdXQgZXZlbnQgcHJvZHVjdGlvblxyXG4gICAgICAgICQoaW1hZ2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpO1xyXG5cclxuICAgICAgICAvLyBMZXZlbCAtLT4gUXVhbnRpdMOpIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0UXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFF0ZSk7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdExldmVsXCIpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuYXBwZW5kQ2hpbGQobGV2ZWwpO1xyXG4gICAgICAgIGxldmVsLmlkID0gXCJxdGVcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgbGV2ZWwuY2xhc3NMaXN0LmFkZChcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgbGV2ZWwuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RDb250YWluZXIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcIm10LTNcIik7XHJcblxyXG4gICAgICAgIC8vIE5iciBsZXZlbCDDoCBhY2hldGVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RBZGQpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuYXBwZW5kQ2hpbGQocHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5pZCA9IFwiYWRkXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9kdWN0XCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgICQocHJvZHVjdEJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaWQgPSBcImNvc3RcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSAocHJvZHVjdC5jb3V0ICsgTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKSkudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgZGUgbGFuY2VyIGxhIHByb2R1Y3Rpb24gZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gcGV1dCBhY3RpdmVyIGxlIHByb2R1aXRcclxuICAgIGlmICh2ZXJpZlByb2R1Y3QocHJvZHVjdCkpIHtcclxuICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAxMDApO1xyXG4gICAgICAgIHNlbmRUb1NlcnZlcihcInByb2R1Y3RcIiwgcHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgcXVlIHByb2R1aXQgZXN0IGFjdGl2YWJsZVxyXG5mdW5jdGlvbiB2ZXJpZlByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKChwcm9kdWN0LnF1YW50aXRlID4gMCkgJiYgKHByb2R1Y3QudGltZWxlZnQgPT0gMCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgZCdham91dGVyIHVuZSBxdWFudGl0w6kgw6AgdW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBhZGRQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gU2kgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWUgbidlc3QgcGFzIGxlIG1heCBhY2hldGFibGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBjb8O7dFxyXG4gICAgICAgIGxldCBjb3N0ID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAvLyBPbiBtb2RpZmllIGwnYWZmaWNoYWdlIGR1IHByb2R1aXRcclxuICAgICAgICBtb2RpZnlQcm9kdWN0KHdvcmxkLCBwcm9kdWN0LCBhZGRTZWxlY3RlZCwgY29zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2kgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBtYXggYWNoZXRhYmxlIGV0IHNvbiBjb3V0XHJcbiAgICAgICAgbGV0IG1heCA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgbWF4KTtcclxuXHJcbiAgICAgICAgLy8gT24gbW9kaWZpZSBsJ2FmZmljaGFnZSBkdSBwcm9kdWl0XHJcbiAgICAgICAgbW9kaWZ5UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCwgbWF4LCBjb3N0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbiBlbnZvaWUgbGVzIGRvbm7DqWVzIGF1IHNlcnZldXJcclxuICAgIHNlbmRUb1NlcnZlcihcInByb2R1Y3RcIiwgcHJvZHVjdCk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBlZmZlY3R1YW50IGxlcyBjaGFuZ2VtZW50cyBkJ2FmZmljaGFnZSBsacOpcyDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBtb2RpZnlQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlciwgY29zdDogbnVtYmVyKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50XHJcbiAgICBpZiAod29ybGQubW9uZXkgPiBjb3N0KSB7XHJcbiAgICAgICAgLy8gT24gYWpvdXRlIGxhIHF1YW50aXTDqSBhY2hldMOpZVxyXG4gICAgICAgIHByb2R1Y3QucXVhbnRpdGUgKz0gcXVhbnRpdHk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdGVcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gT24gc291c3RyYWl0IGwnYXJnZW50IGTDqXBlbnPDqVxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IGNvc3Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICAgICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgLy8gT24gcmVjYWxjdWxlIGxlIG1heFxyXG4gICAgICAgICAgICBxdWFudGl0eSA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAvLyBPbiBjaGFuZ2UgbCdhZmZpY2hhZ2Ugc3VyIGNoYXF1ZSBwcm9kdWl0IGVuIGZvbmN0aW9uIGR1IG5vdXZlYXUgc29sZGVcclxuICAgICAgICAgICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBub3V2ZWF1IGNvw7t0IGFwcsOocyBhY2hhdFxyXG4gICAgICAgIGxldCBuZXdDb3N0ID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgcXVhbnRpdHkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCkuaW5uZXJIVE1MID0gdHJhbnNmb3JtKG5ld0Nvc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFMnaWwgcydhZ2l0IGR1IDFlciBhY2hhdCBzdXIgdW4gcHJvZHVpdCwgb24gbCdhZmZpY2hlIGVuIGNsYWlyXHJcbiAgICAgICAgbGV0IGltYWdlUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICBpZiAoaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkUHJvZHVjdFwiKSkge1xyXG4gICAgICAgICAgICBpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEFkZFByb2R1Y3RzOiBhbnlbXSA9IFsxLCAxMCwgMTAwLCBcIk1heFwiXTtcclxuZXhwb3J0IHZhciBhZGRTZWxlY3RlZDogYW55ID0gMTtcclxuXHJcblxyXG4vLyBGb25jdGlvbiBjcsOpYW50IGxhIGJhcmUgZGUgbWVudSDDoCBkcm90aWUgY29udGVuYW50IGxlIHPDqWxlY3RldXIgc3VyIGxhIHF1YW50aXTDqSBkZSBwcm9kdWl0cyDDoCBhY2hldGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZUJhcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBPYnRlbnRpb24gZHUgY29udGFpbmVyIGRlcyBwcm9kdWl0c1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGR1IGNvbnRhaW5lciBkdSBtZW51XHJcbiAgICBsZXQgc2lkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUNvbnRhaW5lcik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmlkID0gXCJzaWRlTWVudVwiO1xyXG4gICAgLy8gQ2VudHJhZ2UgZHUgbWVudSDDoCBkcm9pdGVcclxuICAgIHNpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvc2l0aW9uLWFic29sdXRlXCIsIFwidG9wLTUwXCIsIFwiZW5kLTBcIiwgXCJ0cmFuc2xhdGUtbWlkZGxlLXlcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGQndW5lIGxpc3RlIGRlIGJvdXRvbnMgw6AgbGEgdmVydGljYWxlXHJcbiAgICBsZXQgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xyXG4gICAgbGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLWdyb3VwLXZlcnRpY2FsXCIsIFwic2lkZUNvbnRhaW5lclwiKTtcclxuICAgIGxpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImdyb3VwXCIpO1xyXG5cclxuICAgIC8vIE9uIGfDqW7DqHJlIGRlcyBib3V0b25zIGRlIHR5cGUgcmFkaW9cclxuICAgIGxpc3RBZGRQcm9kdWN0cy5mb3JFYWNoKGFkZE51bWJlciA9PiB7XHJcblxyXG4gICAgICAgIC8vIE9uIGNyw6llIGwnaW5wdXQgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVySW5wdXQpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmlkID0gXCJidXR0b25cIiArIGFkZE51bWJlcjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmNsYXNzTGlzdC5hZGQoXCJidG4tY2hlY2tcIik7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQubmFtZSA9IFwiYnRucmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5hdXRvY29tcGxldGUgPSBcIm9mZlwiXHJcbiAgICAgICAgLy8gQSBsJ2luaXRpYWxpc2F0aW9uLCBsJ29wdGlvbiArMSBlc3QgY2VsbGUgY29jaMOpZSBwYXIgZMOpZmF1dFxyXG4gICAgICAgIGlmIChhZGROdW1iZXIgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgYWRkTnVtYmVySW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9uIGNyw6llIGxlIGxhYmVsIGR1IGJvdXRvblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJCdXR0b24pO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkQnV0dG9uXCIsIFwiYWRkQnV0dG9uT3V0bGluZVwiLCBcImFsaWduLW1pZGRsZVwiKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIGFkZE51bWJlcklucHV0LmlkKVxyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIiArIGFkZE51bWJlcjtcclxuICAgICAgICAvLyBFdmVudCA6IG1vZGlmaWNhdGlvbiBkdSBzw6lsZWN0ZXVyIGF1IGNsaWNcclxuICAgICAgICAkKGFkZE51bWJlckJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhZGRTZWxlY3RlZCA9IGFkZE51bWJlcjtcclxuICAgICAgICAgICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY2hhbmdlYW50IGwnYWZmaWNoYWdlIGxpw6kgw6AgbCdhY2hhdCBkJ3VuIHByb2R1aXRcclxuZXhwb3J0IGZ1bmN0aW9uIGJ1eWFibGVQcm9kdWN0cyh3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBlc3QgdW5lIHZhbGV1ciBjb25zdGFudGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgYWRkU2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgam91ZXVyIG4nYSBwYXMgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIHByb2R1aXQsIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uXHJcbiAgICAgICAgICAgIGlmICh3b3JsZC5tb25leSA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgIGFkZFByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGNvbnNpc3RlIMOgIGxhIHZhbGV1ciBtYXhcclxuICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBtYXg7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgbWF4KTtcclxuICAgICAgICAgICAgbGV0IGNvc3RQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGNvc3RQcm9kdWN0LmlubmVySFRNTCA9IHRyYW5zZm9ybShjb3N0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBjb8O7dCBkJ3VuIGdyb3VwZSBkZSBwcm9kdWl0c1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCwgYWRkTnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7XHJcbiAgICBsZXQgbnVtZXJhdG9yID0gMSAtIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgYWRkTnVtYmVyKTtcclxuICAgIGxldCBkZW5vbWluYXRvciA9IDEgLSBwcm9kdWN0LmNyb2lzc2FuY2VcclxuICAgIGxldCBjb3V0ID0gKHVuICogbnVtZXJhdG9yKSAvIGRlbm9taW5hdG9yO1xyXG5cclxuICAgIC8vIFJldG91ciBkdSBjb8O7dCBjYWxjdWzDqVxyXG4gICAgcmV0dXJuIGNvdXQ7XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBub21icmUgbWF4IGRlIHByb2R1aXRzIGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7IFxyXG4gICAgbGV0IG51bWVyYXRvcjogbnVtYmVyID0gTWF0aC5sb2coLSh3b3JsZC5tb25leSAtIHdvcmxkLm1vbmV5ICogcHJvZHVjdC5jcm9pc3NhbmNlIC0gdW4pIC8gdW4pO1xyXG4gICAgbGV0IGRlbm9taW5hdG9yOiBudW1iZXIgPSBNYXRoLmxvZyhwcm9kdWN0LmNyb2lzc2FuY2UpO1xyXG4gICAgbGV0IG1heDogbnVtYmVyID0gKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKVxyXG5cclxuICAgIC8vIFJldG91ciBkdSBtYXggZGUgcHJvZHVpdHNcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG1heCk7XHJcbn0iLCJpbXBvcnQgeyBtYXRjaElkIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4uL0FwcC9IZWFkZXJcIjtcclxuaW1wb3J0IHsgc2VuZFRvU2VydmVyIH0gZnJvbSBcIi4uL1Jlc3RDYWxsc1wiO1xyXG5cclxuXHJcbi8vIEFmZmljaGFnZSBkZXMgbWFuYWdlcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsTWFuYWdlclwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL1RpdHJlIGRlIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XHJcbiAgICB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlNb2RhbExhYmVsXCIpO1xyXG4gICAgdC5pbm5lclRleHQgPSBcIkxlcyBNYW5hZ2Vyc1wiO1xyXG5cclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBCb2R5XHJcbiAgICBsZXQgYm9keU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQoYm9keU0pO1xyXG4gICAgYm9keU0uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJvZHlcIik7XHJcbiAgICBib2R5TS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsQm9keVwiKTtcclxuXHJcbiAgICAvL1JlbXBsaXNzYWdlIGR1IGJvZHkgYXZlYyBsZXMgZGlmZmVycmVudHMgbWFuYWdlcnNcclxuICAgIGxpc3RNYW5hZ2VycyhzZXJ2ZXIsIHdvcmxkKTtcclxufVxyXG5cclxuXHJcbi8vIEFmZmljaGFnZSBkZSBsYSBsaXN0ZSBkZXMgbWFuYWdlcnNcclxuZnVuY3Rpb24gbGlzdE1hbmFnZXJzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJvZHlcIik7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInJvdy1jb2xzLTJcIik7Ly9cInJvd1wiLCBcInJvdy1jb2xzLTJcIlxyXG5cclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIHBhbGxpZXIpIHtcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICAgICAgY29sLmlkID0gXCJtYW5hZ2VyXCIgKyBwYWxsaWVyLmlkY2libGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgSW1hZ2UgZXQgbm9tIGR1IG1hbmFnZXJzXHJcbiAgICAgICAgbGV0IGltYWdlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGltYWdlTmFtZSk7XHJcbiAgICAgICAgaW1hZ2VOYW1lLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7Ly9cImNvbC00XCIsIFwiY29sLWxnLTJcIlxyXG5cclxuICAgICAgICAvL1BhcnRpZSBJbWFnZVxyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwiaW1hZ2VNYW5hZ2Vyc1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2VNYW5hZ2VyKTtcclxuICAgICAgICBpbWFnZU1hbmFnZXIuaWQgPSBcImltZ1wiICsgcGFsbGllci5pZGNpYmxlO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5zcmMgPSBzZXJ2ZXIgKyBwYWxsaWVyLmxvZ287XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJpbWctZmx1aWRcIiwgXCJyb3VuZGVkXCIpXHJcblxyXG4gICAgICAgIC8vUGFydGllIE5vbSBldCBwcml4XHJcbiAgICAgICAgbGV0IG5hbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBpbWFnZU5hbWUuYXBwZW5kQ2hpbGQobmFtZVByaWNlKTtcclxuICAgICAgICBuYW1lUHJpY2UuY2xhc3NMaXN0LmFkZChcInJvd1wiKVxyXG5cclxuICAgICAgICAvL1BhcnRpZSBOb21cclxuICAgICAgICBsZXQgbmFtZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZChuYW1lTWFuYWdlcik7XHJcbiAgICAgICAgbmFtZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICBuYW1lTWFuYWdlci5pbm5lclRleHQgPSBwYWxsaWVyLm5hbWU7XHJcblxyXG4gICAgICAgIC8vUGFydGllIFByaXhcclxuICAgICAgICBsZXQgcHJpY2VNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lUHJpY2UuYXBwZW5kQ2hpbGQocHJpY2VNYW5hZ2VyKTtcclxuICAgICAgICBwcmljZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICBsZXQgY29zdCA9IHRyYW5zZm9ybShwYWxsaWVyLnNldWlsKVxyXG4gICAgICAgIHByaWNlTWFuYWdlci5pbm5lckhUTUwgPSBjb3N0O1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBib3V0b24gZCdlbWJhdWNoZVxyXG4gICAgICAgIGxldCBoaXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoaGlyZSk7XHJcbiAgICAgICAgaGlyZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIpOyAvL1wiY29sLTRcIiwgXCJjb2wtbGctMlwiXHJcblxyXG4gICAgICAgIGxldCBidXR0b25IaXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBoaXJlLmFwcGVuZENoaWxkKGJ1dHRvbkhpcmUpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuaWQgPSBcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICBidXR0b25IaXJlLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiLCBcImJ1dHRvbkhpcmVcIik7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5pbm5lclRleHQgPSBcIkFjaGV0ZSBNb2kgIVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhbGxpZXIuaWRjaWJsZSArIFwiIFwiICsgcGFsbGllci51bmxvY2tlZCk7XHJcbiAgICAgICAgaWYgKHBhbGxpZXIudW5sb2NrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRJU0FCTEVEXCIpXHJcbiAgICAgICAgICAgIGJ1dHRvbkhpcmUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKGJ1dHRvbkhpcmUpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJqZSB0ZW50ZSBkJ2FjaGV0ZXIgdW4gbWFuYWdlciA6KVwiKTtcclxuICAgICAgICAgICAgYnV5TWFuYWdlcihwYWxsaWVyLCB3b3JsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IGltYWdlUHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgICBoaXJlLmFwcGVuZENoaWxkKGltYWdlUHJvZHVjdClcclxuICAgICAgICBpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LmFkZChcImltYWdlUHJvZHVjdE1hbmFnZXJcIilcclxuICAgICAgICBsZXQgc3JjSW1nPWdldEltYWdlKHBhbGxpZXIuaWRjaWJsZSx3b3JsZClcclxuICAgICAgICBpbWFnZVByb2R1Y3Quc3JjPXNlcnZlcitzcmNJbWc7Ki9cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8vIEFmZmljaGFnZSBkeW5hbWlxdWVtZW50IHNpIHVuIG1hbmFnZXIgZXN0IGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZNYW5hZ2Vycyh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIG1hbmFnZXJcclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIHBhbGxpZXIpIHtcclxuICAgICAgICAvLyBPbiByw6ljdXDDqHJlIHNvbiBib3V0b24gZCdhY2hhdFxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZSk7XHJcblxyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgb3UgcXVlIGxlIG1hbmFnZXIgbidlc3QgcGFzIGTDqWrDoCBhY2hldMOpXHJcbiAgICAgICAgaWYgKChwYWxsaWVyLnNldWlsID4gd29ybGQubW9uZXkpIHx8IChwYWxsaWVyLnVubG9ja2VkID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWNoZXTDqVwiO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2lub24gb24gbGUgZMOpc2FjdGl2ZVxyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vIENhbGN1bGUgZHluYW1pcXVlbWVudCBsZSBub21icmUgZGUgbWFuYWdlcnMgYWNoZXRhYmxlc1xyXG5leHBvcnQgZnVuY3Rpb24gYnV5YWJsZU1hbmFnZXJzKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gVmFyaWFibGVzXHJcbiAgICBsZXQgbWFuYWdlckRpc3BvID0gMDtcclxuICAgIGxldCBub3RpZk1hbmFnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZGdlTWFuYWdlclwiKTtcclxuXHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBtYW5hZ2VyXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBtYW5hZ2VyKSB7XHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBsYSBwb3NzaWJpbGl0w6kgZCdlbiBhY2hldGVyXHJcbiAgICAgICAgaWYgKG1hbmFnZXIuc2V1aWwgPD0gd29ybGQubW9uZXkgJiYgbWFuYWdlci51bmxvY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtYW5hZ2VyRGlzcG8rKztcclxuICAgICAgICB9O1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gUydpbCBuJ3kgYSBhdWN1biBtYW5hZ2VyIGFjaGV0YWJsZSwgb24gYWZmaWNoZSByaWVuXHJcbiAgICBpZiAobWFuYWdlckRpc3BvID09IDApIHtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIFNpbm9uIG9uIGFmZmljaGUgbGV1ciBxdWFudGl0w6kgYWNoZXRhYmxlXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0ID0gbWFuYWdlckRpc3BvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBBY2hhdCBkJ3VuIG1hbmFnZXJcclxuZnVuY3Rpb24gYnV5TWFuYWdlcihtYW5hZ2VyOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIG1hbmFnZXJcclxuICAgIGlmIChtYW5hZ2VyLnNldWlsIDw9IHdvcmxkLm1vbmV5KSB7XHJcbiAgICAgICAgLy8gU2kgYydlc3QgbGUgY2FzLCBvbiBzb3VzdHJhaXQgc29uIGNvw7t0XHJcbiAgICAgICAgd29ybGQubW9uZXkgLT0gbWFuYWdlci5zZXVpbDtcclxuXHJcbiAgICAgICAgLy8gT24gYWZmaWNoZSBlbnN1aXRlIGxlIG5vdXZlYXUgc29sZGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuXHJcbiAgICAgICAgLy8gT24gZMOpYmxvcXVlIGxlIG1hbmFnZXJcclxuICAgICAgICBtYW5hZ2VyLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBtYXRjaElkKG1hbmFnZXIsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlbWVudCBkdSBib3V0b24gSGlyZSBlbiBhY2hldMOpIGV0IGRpc2FibGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiICsgbWFuYWdlci5pZGNpYmxlKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJBY2hldMOpXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEltYWdlKGlkOm51bWJlcix3b3JsZDpXb3JsZCl7XHJcbiQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCxwcm9kdWl0KXtcclxuICAgIGxldCBzcmM9XCJcIlxyXG4gICAgaWYocHJvZHVpdC5pZD09aWQpe1xyXG4gICAgICAgIHNyYz1wcm9kdWl0LmxvZ29cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvdXJjZSBpbWFnZTpcIitwcm9kdWl0LmxvZ28pXHJcbiAgICAgICAgcmV0dXJuIHNyYztcclxuICAgIH1cclxufSlcclxufSIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGVzIHVubG9ja3NcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlVbmxvY2tzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVW5sb2NrXCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIERpYWxvZ3VlXHJcbiAgICBsZXQgbWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbS5hcHBlbmRDaGlsZChtZCk7XHJcbiAgICBtZC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGlhbG9nXCIsIFwibW9kYWwtbGdcIik7XHJcbiAgICBtZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZG9jdW1lbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgQ29udGVudFxyXG4gICAgbGV0IG1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1kLmFwcGVuZENoaWxkKG1jKTtcclxuICAgIG1jLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIGhlYWRlclxyXG4gICAgbGV0IG1oID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKG1oKTtcclxuICAgIG1oLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gRmVybWVyIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZChiKTtcclxuICAgIGIuY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKVxyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLWRpc21pc3NcIiwgXCJtb2RhbFwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIHNlbGVjdCBiYXJyZVxyXG4gICAgbGV0IHNlbGVjdEJhcnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxyXG4gICAgbWguYXBwZW5kQ2hpbGQoc2VsZWN0QmFycmUpXHJcbiAgICBzZWxlY3RCYXJyZS5pZD1cInNlbGVjdEJhcnJlVW5sb2Nrc1wiXHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgscHJvZHVjdCl7XHJcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHQpXHJcbiAgICAgICAgb3B0LmlkPVwib3B0UHJvZHVpdFwiK3Byb2R1Y3QuaWRcclxuICAgICAgICBvcHQudmFsdWU9XCJcIitwcm9kdWN0LmlkXHJcbiAgICAgICAgb3B0LnRleHQ9cHJvZHVjdC5uYW1lXHJcbiAgICB9KVxyXG4gICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIHNlbGVjdEJhcnJlLmFwcGVuZENoaWxkKG9wdClcclxuICAgIG9wdC5pZD1cIm9wdFByb2R1aXRcIiswXHJcbiAgICBvcHQudmFsdWU9XCJcIiswXHJcbiAgICBvcHQudGV4dD1cIlRvdXMgbGVzIHByb2R1aXRzXCJcclxuXHJcbiAgICAkKCBzZWxlY3RCYXJyZSApLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxyXG4gICAgICAgIGxpc3RVbmxvY2tzKHBhcnNlSW50KHRoaXMudmFsdWUpLHNlcnZlcix3b3JsZClcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIC8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQodCk7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgIHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsTGFiZWxcIik7XHJcbiAgICB0LmlubmVyVGV4dCA9IFwiTGVzIFVubG9ja3NcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBCb2R5XHJcbiAgICBsZXQgYm9keU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQoYm9keU0pO1xyXG4gICAgYm9keU0uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJvZHlcIik7XHJcbiAgICBib2R5TS5pZD1cIm1vZGFsVW5sb2NrQm9keVwiO1xyXG5cclxuICAgIC8vUmVtcGxpc3NhZ2UgZHUgYm9keSBhdmVjIGxlcyBkaWZmZXJyZW50cyBtYW5hZ2Vyc1xyXG4gICAgLy9maWxsaW5nQm9keU1vZGFsVW5sb2NrKHNlcnZlcix3b3JsZClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbGxpbmdCb2R5TW9kYWxVbmxvY2soc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZW1wbGlzc2FnZSBtb2RhbCB1bmxvY2tcIilcclxuXHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxVbmxvY2tCb2R5XCIpO1xyXG4gICAgLypcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7Ki9cclxuXHJcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcblxyXG5cclxuICAgICQuZWFjaCh3b3JsZC5hbGx1bmxvY2tzLnBhbGxpZXIsZnVuY3Rpb24oaW5kZXgsdW5sb2NrKXtcclxuICAgICAgICAvL0Nyw6lhdGlvbiBkZXMgbGlnbmVzIGRlIGNoYXF1ZSB1bmxvY2tcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgY29sLmlkID0gXCJ1bmxvY2tcIiArIHVubG9jay5pZGNpYmxlO1xyXG5cclxuICAgICAgICAvL2RpdmlzaW9uIGRlIGxhIGxpZ25lIGVuIGRldXggcGFydGllcyAoSW1hZ2UrRGVzY3JpcHRpb24gLy8gVW5sb2NrZWQgb3Ugbm9uKVxyXG4gICAgICAgIGxldCBjb2xJbWFnZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9JbWFnZSBEZXNjcmlwdGlvblxyXG4gICAgICAgIGxldCBjb2xVbmxvY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikvL0FmZmljaGFnZSBlc3QgaWwgZMOpdsOpcm91aWxsw6kgP1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2xJbWFnZURlc2MpXHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNvbFVubG9ja2VkKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5jbGFzc0xpc3QuYWRkKFwiY29sXCIpXHJcbiAgICAgICAgY29sVW5sb2NrZWQuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL0FmZmljaGFnZSBJY29uIFVubG9ja1xyXG4gICAgICAgIGxldCBpY29uVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChpY29uVW5sb2NrKVxyXG4gICAgICAgIGljb25VbmxvY2suc3JjPXNlcnZlcit1bmxvY2subG9nb1xyXG4gICAgICAgIGljb25VbmxvY2suY2xhc3NMaXN0LmFkZChcImltZ1VubG9ja1wiKVxyXG5cclxuICAgICAgICBsZXQgbm9tVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKG5vbVVubG9jaylcclxuICAgICAgICBub21VbmxvY2suaW5uZXJUZXh0PXVubG9jay5uYW1lXHJcblxyXG4gICAgICAgIGxldCBkZXNjclVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGRlc2NyVW5sb2NrKVxyXG4gICAgICAgIGRlc2NyVW5sb2NrLmlubmVyVGV4dD1cIkF1Z21lbnRhdGlvbiBkZSBcIit1bmxvY2sudHlwZXJhdGlvK1wiIHhcIit1bmxvY2sucmF0aW9cclxuXHJcbiAgICAgICAgbGV0IHNldWlsVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoc2V1aWxVbmxvY2spXHJcbiAgICAgICAgc2V1aWxVbmxvY2suaW5uZXJUZXh0PVwiU2V1aWw6IFwiK3VubG9jay5zZXVpbFxyXG4gICAgfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuLy9PbiBjaGVyY2hlIMOgIHNhdm9pciBzaSB1biBVbmxvY2sgZXN0IGTDqXZlcnJvdWlsbGFibGUueFxyXG5mdW5jdGlvbiB2ZXJpZlVubG9jayhpZDpudW1iZXIsd29ybGQ6V29ybGQpe1xyXG4gICAgLy9sZXQgaWRQcm9kdWN0XHJcbiAgICAvL2lkUHJvZHVjdCA9IHVubG9jay5pZGNpYmxlO1xyXG4gICAgJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllciwgZnVuY3Rpb24oaW5kZXgsdW5sb2NrKXtcclxuICAgICAgICBpZih1bmxvY2suaWRjaWJsZSAhPSAwKXsgICAgLy9PbiBkb2l0IHJlZ2FyZGVyIGluZGl2aWR1ZWxsZW1lbnQgcG91ciBjaGFxdWUgdW5sb2NrIHNpIHNvbiBzZXVpbCBhIMOpdMOpIGF0dGVpbnQgcG91ciBhY3RpdmVyIGxlIGJvbnVzXHJcbiAgICAgICAgICAgIGxldCBpZFJlY2hlcmNoZSA9IHVubG9jay5pZGNpYmxlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHVubG9jay5pZGNpYmxlPT0wKXtcclxuICAgICAgICAgICAgLy9jaGVjayBzaSB0b3VzIGxlcyBwcm9kdWl0cyBvbnQgYXR0ZWludCBsZSBzZXVpbCBwb3VyIGFjdGl2ZXIgbCd1bmxvY2tcclxuICAgICAgICAgICAgLy8gT24gZG9pdCByZWdhcmRlciBzaSBjaGFxdWUgcHJvZHVpdCDDoCBhdHRlaW50IGxlIHNldWlsIG7DqWNlc3NhaXJlIHBvdXIgZW5zdWl0ZSBhY3RpdmVyIGxlIGJvbnVzXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcmlmU2V1aWxVbmxvY2soaWQxOm51bWJlcixpZDI6bnVtYmVyLHdvcmxkOldvcmxkKXtcclxuICAgIC8vaWQxID09PiBpZCBkZSBsJ3VubG9jayAoaWRSZWNoZXJjw6kpXHJcbiAgICAvL2lkMiA9PT4gaWQgZHUgcHJvZHVpdFxyXG5cclxuICAgIC8vJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsZnVuY3Rpb24oaW5kZXgscHJvZHVjdCl7XHJcbiAgICAgICAgLy9pZihpZFJlY2hlcmNoZT09cHJvZHVjdC5pZCl7XHJcblxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgIC8vfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbGlzdFVubG9ja3MoaWQ6bnVtYmVyLHNlcnZlcjpTdHJpbmcsd29ybGQ6V29ybGQpe1xyXG4gICAgY29uc29sZS5sb2coXCJyZW1wbGlzc2FnZSBtb2RhbCB1bmxvY2tcIilcclxuXHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxVbmxvY2tCb2R5XCIpO1xyXG4gICAgYm9keS5pbm5lckhUTUw9XCJcIlxyXG5cclxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0yXCIpOy8vXCJyb3dcIiwgXCJyb3ctY29scy0yXCJcclxuXHJcbiAgICAkLmVhY2god29ybGQuYWxsdW5sb2Nrcy5wYWxsaWVyLGZ1bmN0aW9uKGluZGV4LHVubG9jayl7XHJcblxyXG4gICAgICAgIGlmKHVubG9jay5pZGNpYmxlPT1pZCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPVwiK2lkKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL0Nyw6lhdGlvbiBkZXMgbGlnbmVzIGRlIGNoYXF1ZSB1bmxvY2tcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgY29sLmlkID0gXCJ1bmxvY2tcIiArIHVubG9jay5pZGNpYmxlO1xyXG5cclxuICAgICAgICAvL2RpdmlzaW9uIGRlIGxhIGxpZ25lIGVuIGRldXggcGFydGllcyAoSW1hZ2UrRGVzY3JpcHRpb24gLy8gVW5sb2NrZWQgb3Ugbm9uKVxyXG4gICAgICAgIGxldCBjb2xJbWFnZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9JbWFnZSBEZXNjcmlwdGlvblxyXG4gICAgICAgIGxldCBjb2xVbmxvY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikvL0FmZmljaGFnZSBlc3QgaWwgZMOpdsOpcm91aWxsw6kgP1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2xJbWFnZURlc2MpXHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNvbFVubG9ja2VkKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5jbGFzc0xpc3QuYWRkKFwiY29sXCIpXHJcbiAgICAgICAgY29sVW5sb2NrZWQuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL0FmZmljaGFnZSBJY29uIFVubG9ja1xyXG4gICAgICAgIGxldCBpY29uVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChpY29uVW5sb2NrKVxyXG4gICAgICAgIGljb25VbmxvY2suc3JjPXNlcnZlcit1bmxvY2subG9nb1xyXG4gICAgICAgIGljb25VbmxvY2suY2xhc3NMaXN0LmFkZChcImltZ1VubG9ja1wiKVxyXG5cclxuICAgICAgICBsZXQgbm9tVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKG5vbVVubG9jaylcclxuICAgICAgICBub21VbmxvY2suaW5uZXJUZXh0PXVubG9jay5uYW1lXHJcblxyXG4gICAgICAgIGxldCBkZXNjclVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGRlc2NyVW5sb2NrKVxyXG4gICAgICAgIGRlc2NyVW5sb2NrLmlubmVyVGV4dD1cIkF1Z21lbnRhdGlvbiBkZSBcIit1bmxvY2sudHlwZXJhdGlvK1wiIHhcIit1bmxvY2sucmF0aW9cclxuXHJcbiAgICAgICAgbGV0IHNldWlsVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoc2V1aWxVbmxvY2spXHJcbiAgICAgICAgc2V1aWxVbmxvY2suaW5uZXJUZXh0PVwiU2V1aWw6IFwiK3VubG9jay5zZXVpbFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlkPT0wKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9XCIpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vQ3LDqWF0aW9uIGRlcyBsaWduZXMgZGUgY2hhcXVlIHVubG9ja1xyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICBjb2wuaWQgPSBcInVubG9ja1wiICsgdW5sb2NrLmlkY2libGU7XHJcblxyXG4gICAgICAgIC8vZGl2aXNpb24gZGUgbGEgbGlnbmUgZW4gZGV1eCBwYXJ0aWVzIChJbWFnZStEZXNjcmlwdGlvbiAvLyBVbmxvY2tlZCBvdSBub24pXHJcbiAgICAgICAgbGV0IGNvbEltYWdlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikvL0ltYWdlIERlc2NyaXB0aW9uXHJcbiAgICAgICAgbGV0IGNvbFVubG9ja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS8vQWZmaWNoYWdlIGVzdCBpbCBkw6l2w6lyb3VpbGzDqSA/XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNvbEltYWdlRGVzYylcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY29sVW5sb2NrZWQpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuICAgICAgICBjb2xVbmxvY2tlZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vQWZmaWNoYWdlIEljb24gVW5sb2NrXHJcbiAgICAgICAgbGV0IGljb25VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGljb25VbmxvY2spXHJcbiAgICAgICAgaWNvblVubG9jay5zcmM9c2VydmVyK3VubG9jay5sb2dvXHJcbiAgICAgICAgaWNvblVubG9jay5jbGFzc0xpc3QuYWRkKFwiaW1nVW5sb2NrXCIpXHJcblxyXG4gICAgICAgIGxldCBub21VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQobm9tVW5sb2NrKVxyXG4gICAgICAgIG5vbVVubG9jay5pbm5lclRleHQ9dW5sb2NrLm5hbWVcclxuXHJcbiAgICAgICAgbGV0IGRlc2NyVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoZGVzY3JVbmxvY2spXHJcbiAgICAgICAgZGVzY3JVbmxvY2suaW5uZXJUZXh0PVwiQXVnbWVudGF0aW9uIGRlIFwiK3VubG9jay50eXBlcmF0aW8rXCIgeFwiK3VubG9jay5yYXRpb1xyXG5cclxuICAgICAgICBsZXQgc2V1aWxVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChzZXVpbFVubG9jaylcclxuICAgICAgICBzZXVpbFVubG9jay5pbm5lclRleHQ9XCJTZXVpbDogXCIrdW5sb2NrLnNldWlsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBzZXJ2ZXJVcmwgfSBmcm9tIFwiLlwiO1xyXG5cclxuLy8gRW52b2kgYXUgc2VydmV1clxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRvU2VydmVyKHR5cGU6IHN0cmluZywgY29udGVudDogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlICsgXCIgOlwiKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG4gICAgJC5hamF4KHNlcnZlclVybCArIFwiYWR2ZW50dXJlaXNpcy9nZW5lcmljL1wiICsgdHlwZSwge1xyXG4gICAgICAgIHR5cGU6IFwiUFVUXCIsXHJcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpLFxyXG4gICAgICAgIHN0YXR1c0NvZGU6IHtcclxuICAgICAgICAgICAgMzA0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBY3Rpb24gbm9uIHByaXNlIGVuIGNvbXB0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBlY2hlYyBkZSBsYSByZXF1w6p0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IGxhc3RVcGRhdGVMaXN0LCBzaG93UHJvZHVjdHMsIHN0YXJ0UHJvZHVjdCwgZmlsbExhc3RVcGRhdGUgfSBmcm9tIFwiLi9BcHAvUHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhlYWRlciwgdHJhbnNmb3JtIH0gZnJvbSBcIi4vQXBwL0hlYWRlclwiXHJcbmltcG9ydCB7IHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vQXBwL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCB7IGFkZFNlbGVjdGVkLCBidXlhYmxlUHJvZHVjdHMsIHNob3dTaWRlQmFyIH0gZnJvbSBcIi4vQXBwL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9BcHAvTWVudVwiO1xyXG5pbXBvcnQgeyBidXlhYmxlTWFuYWdlcnMsIGRpc3BsYXlNYW5hZ2VyLCB2ZXJpZk1hbmFnZXJzIH0gZnJvbSBcIi4vTW9kYWxzL01hbmFnZXJzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlVbmxvY2tzIH0gZnJvbSBcIi4vTW9kYWxzL1VubG9ja3NcIjtcclxuaW1wb3J0IHsgc2VuZFRvU2VydmVyIH0gZnJvbSBcIi4vUmVzdENhbGxzXCI7XHJcblxyXG5cclxuLy8gVXNlcm5hbWVcclxuZXhwb3J0IHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcblxyXG4vLyBDaGFuZ2VtZW50IGR1IHBzZXVkb1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcm5hbWUobmV3VXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdXNlcm5hbWUgPSBuZXdVc2VybmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgbmV3VXNlcm5hbWUpO1xyXG5cclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XCJYLXVzZXJcIjogdXNlcm5hbWV9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBVcmwgc2VydmV1ciBsb2NhbFxyXG5jb25zdCBzZXJ2ZXJMb2NhbDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4vLyBVcmwgc2VydmV1ciBoZXJva3VcclxuY29uc3Qgc2VydmVySGVyb2t1OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3QuaGVyb2t1YXBwLmNvbS9cIlxyXG5cclxuLy8gVXJsIHNlcnZldXIgdGVzdFxyXG5jb25zdCBzZXJ2ZXJ0ZXN0OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcblxyXG5cclxuLy8gU2VydmV1ciB1dGlsaXPDqVxyXG5leHBvcnQgdmFyIHNlcnZlclVybCA9IHNlcnZlckxvY2FsO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIENoYXJnZW1lbnQgZHUgcHNldWRvIGR1IGpvdWV1clxyXG4gICAgY29uc29sZS5sb2codXNlcm5hbWUpO1xyXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpO1xyXG5cclxuICAgIC8vIEFmZmljaGFnZSBkdSBtb25kZSBkdSBqb3VldXJcclxuICAgICQuZ2V0SlNPTihzZXJ2ZXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy93b3JsZFwiLCBmdW5jdGlvbiAod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAgICAgLy8gQWZmaWNoYWdlIGR1IG1vbmRlIGNoYXJnw6lcclxuICAgICAgICBjb25zb2xlLmxvZyh3b3JsZClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRJTUVMRUZUID0gXCIgKyB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0WzRdLnRpbWVsZWZ0KTtcclxuICAgICAgICBmaWxsTGFzdFVwZGF0ZSh3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpc2F0aW9uIGFyZ2VudCBkZSBiYXNlXHJcbiAgICAgICAgLy8gd29ybGQubW9uZXkgPSAwO1xyXG5cclxuICAgICAgICAvLyBBZmZpY2hhZ2UgSFRNTFxyXG4gICAgICAgIGRpc3BsYXlIZWFkZXIoc2VydmVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgc2hvd1Byb2R1Y3RzKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIHNob3dTaWRlQmFyKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNZW51KHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5TWFuYWdlcihzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aW9ucyBkeW5hbWlxdWVzXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBDYWxjdWwgZHUgc2NvcmVcclxuICAgICAgICAgICAgY2FsY1Njb3JlKHNlcnZlclVybCwgd29ybGQpO1xyXG5cclxuICAgICAgICAgICAgLy8gVsOpcmlmaWNhdGlvbiBhY2hhdHMgbWFuYWdlcnNcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxNYW5hZ2VyXCIpLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikpIHtcclxuICAgICAgICAgICAgICAgIHZlcmlmTWFuYWdlcnMod29ybGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZmZpY2hhZ2UgYWNoZXRhYmxlc1xyXG4gICAgICAgICAgICBidXlhYmxlUHJvZHVjdHMod29ybGQpXHJcbiAgICAgICAgICAgIGJ1eWFibGVNYW5hZ2Vycyh3b3JsZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsJ29wdGlvbiBkJ2Fqb3V0IHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlLCBvbiBzeW5jaHJvbmlzZSBhdmVjIGVuIGZvbmN0aW9uIGR1IHNjb3JlXHJcbiAgICAgICAgICAgIC8vaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgLy9zZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8gQ2FsY3VsIGR1IHNjb3JlXHJcbmZ1bmN0aW9uIGNhbGNTY29yZShzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBwcm9kdWl0XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGxlIHByb2R1aXQgZXN0IGVuIGNvdXJzIGRlIHByb2R1Y3Rpb25cclxuICAgICAgICBpZiAocHJvZHVjdC50aW1lbGVmdCAhPSAwKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgdGVtcHMgZGUgcHJvZHVjdGlvbiByZXN0YW50XHJcbiAgICAgICAgICAgIGxldCB0aW1lUGFzc2VkOiBudW1iZXIgPSBEYXRlLm5vdygpIC0gbGFzdFVwZGF0ZUxpc3RbcHJvZHVjdC5pZF07XHJcbiAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSBwcm9kdWN0LnRpbWVsZWZ0IC0gdGltZVBhc3NlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgcG91cmNlbnRhZ2UgZGUgcHJvZHVjdGlvbiByZXN0YW50IGV0IG9uIGFjdHVhbGlzZSBsYSBiYXIgZGUgcHJvZ3Jlc3Npb25cclxuICAgICAgICAgICAgbGV0IHBvdXJjZW50YWdlOiBudW1iZXIgPSBwcm9kdWN0LnRpbWVsZWZ0IC8gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0LnRpbWVsZWZ0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3VyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIHBvdXJjZW50YWdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpIGxlIG5vdXZlYXUgdGVtcHMgcmVzdGFudCBlc3QgaW5mw6lyaWV1ciBvdSDDqWdhbCDDoCAwXHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE9uIGFqb3V0ZSBsZSByZXZlbnUgZHUgcHJvZHVpdFxyXG4gICAgICAgICAgICAgICAgbGV0IHJldmVudTogbnVtYmVyID0gcHJvZHVjdC5yZXZlbnUgKiBwcm9kdWN0LnF1YW50aXRlO1xyXG4gICAgICAgICAgICAgICAgYWRkU2NvcmUod29ybGQsIHJldmVudSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT24gcsOpaW5pdGlhbGlzZSBsYSBwcm9ncmVzc2lvbiBkZSBsYSBwcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaSBsZSBwcm9kdWl0IG4nZXN0IHBhcyBlbiBjb3VycyBkZSBwcm9kdWN0aW9uIGV0IGEgdW4gbWFuYWdlclxyXG4gICAgICAgIGVsc2UgaWYgKChwcm9kdWN0LnRpbWVsZWZ0ID09IDApICYmIChwcm9kdWN0Lm1hbmFnZXJVbmxvY2tlZCA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAvLyBPbiBsYW5jZSBsYSBwcm9kdWN0aW9uIGR1IHByb2R1aXRcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXSA9IERhdGUubm93KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIENhbGN1bCBkdSBzY29yZVxyXG5mdW5jdGlvbiBhZGRTY29yZSh3b3JsZDogV29ybGQsIHNjb3JlOiBudW1iZXIpIHtcclxuICAgIC8vIEFqb3V0IGRlIGwnYXJnZW50XHJcbiAgICB3b3JsZC5tb25leSArPSBzY29yZTtcclxuXHJcbiAgICAvLyBBam91dCBkdSBzY29yZVxyXG4gICAgd29ybGQuc2NvcmUgKz0gc2NvcmU7XHJcblxyXG4gICAgLy8gQWZmaWNoZSBkdSBub3V2ZWF1IHNvbGRlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxufVxyXG5cclxuXHJcbi8vIETDqWJsb3F1ZSBtYW5hZ2VyIHBvdXIgdW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hJZChtYW5hZ2VyOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICBpZiAobWFuYWdlci5pZGNpYmxlID09IHByb2R1Y3QuaWQpIHtcclxuICAgICAgICAgICAgcHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1aXQ6IFwiICsgcHJvZHVjdC5uYW1lICsgXCIgdW5sb2NrZWQ6XCIgKyBwcm9kdWN0Lm1hbmFnZXJVbmxvY2tlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZW5kVG9TZXJ2ZXIoXCJtYW5hZ2VyXCIsIG1hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbihhZGRTZWxlY3RlZDphbnkpe1xyXG4gICAgc3dpdGNoKGFkZFNlbGVjdGVkKSB7IFxyXG4gICAgICAgIGNhc2UgMTogeyBcclxuICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNhc2UgMTA6IHsgXHJcbiAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXNlIDEwMDogeyBcclxuICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICB9IFxyXG4gICAgICAgICBjYXNlIFwiTWF4XCI6IHsgXHJcbiAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgfSBcclxuICAgICAgICBkZWZhdWx0OiB7IFxyXG4gICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgfSBcclxufSovXHJcbi8qXHJcbmZ1bmN0aW9uIGNvbXBhcmFpc29uKHdvcmxkOldvcmxkLG11bHRpcGxpZXI6YW55KXtcclxuXHJcbn0qLyIsImltcG9ydCB7cHJvZ3Jlc3NCYXJMaXN0fSBmcm9tIFwiLi9Qcm9kdWN0c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2dyZXNzQmFyKHNlcnZlciwgcHJvZHVjdCwgY29sKSB7XHJcbiAgICAvLyBCYXJyZSBkZSBwcm9ncmVzc2lvbiAobGlnbmUpXHJcbiAgICBsZXQgcHJvZHVjdFByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UHJvZ3Jlc3MpO1xyXG4gICAgcHJvZHVjdFByb2dyZXNzLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBsZXQgYmFyID0gbmV3IFByb2dyZXNzQmFyLkxpbmUocHJvZHVjdFByb2dyZXNzLCB7XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXHJcbiAgICAgICAgZHVyYXRpb246IDE0MDAsXHJcbiAgICAgICAgY29sb3I6ICcjRkZFQTgyJyxcclxuICAgICAgICB0cmFpbENvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgdHJhaWxXaWR0aDogMSxcclxuICAgICAgICBzdmdTdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9LFxyXG4gICAgICAgIGZyb206IHsgY29sb3I6ICcjRkZFQTgyJyB9LFxyXG4gICAgICAgIHRvOiB7IGNvbG9yOiAnI0VENkE1QScgfSxcclxuICAgICAgICBzdGVwOiAoc3RhdGUsIGJhcikgPT4ge1xyXG4gICAgICAgICAgICBiYXIucGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHN0YXRlLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9ncmVzc0Jhckxpc3RbcHJvZHVjdC5pZF0gPSBiYXI7XHJcbiAgICBiYXIuYW5pbWF0ZSgwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzc0JhcihpZCwgcG91cmNlbnRhZ2UpIHtcclxuICAgIHByb2dyZXNzQmFyTGlzdFtpZF0uc2V0KHBvdXJjZW50YWdlKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=