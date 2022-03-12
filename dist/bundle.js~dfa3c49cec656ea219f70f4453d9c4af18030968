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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

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
    inputUser.value = ___WEBPACK_IMPORTED_MODULE_0__.username;
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
            (0,___WEBPACK_IMPORTED_MODULE_0__.setUsername)(inputUser.value);
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
    //Bouton Unlocks
    var buttonCashUp = document.createElement("button");
    cash.appendChild(buttonCashUp);
    buttonCashUp.classList.add("btn", "btn-primary");
    buttonCashUp.setAttribute("data-bs-toggle", "modal");
    buttonCashUp.setAttribute("data-bs-target", "#modalCashUp");
    buttonCashUp.innerText = "CashUpgrades ";
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
/* harmony import */ var _Modals_Unlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modals/Unlocks */ "./src/Modals/Unlocks.ts");





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
        // productCost.innerHTML = (product.cout + Math.pow(product.croissance, product.quantite)).toString();
        productCost.innerHTML = product.cout.toString();
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
        product.cout = product.cout * Math.pow(product.croissance, _SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected);
        // On modifie l'affichage du produit
        modifyProduct(world, product, _SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected, cost);
    }
    // Si l'option sélectionnée est le max achetable
    if (_SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected == "Max") {
        // On calcule le max achetable et son cout
        var max = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getMaxProduct)(world, product);
        var cost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getCostProduct)(product, max);
        product.cout = product.cout * Math.pow(product.croissance, max);
        // On modifie l'affichage du produit
        modifyProduct(world, product, max, cost);
    }
    (0,_Modals_Unlocks__WEBPACK_IMPORTED_MODULE_4__.verifUnlock)(world);
    console.log(product.vitesse);
    console.log(product.timeleft);
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
    // let un = product.cout * Math.pow(product.croissance, product.quantite);
    var un = product.cout;
    var numerator = 1 - Math.pow(product.croissance, addNumber);
    var denominator = 1 - product.croissance;
    var cout = (un * numerator) / denominator;
    // Retour du coût calculé
    return cout;
}
// Fonction calculant le nombre max de produits achetable
function getMaxProduct(world, product) {
    // Calcul des termes
    // let un = product.cout * Math.pow(product.croissance, product.quantite);
    var un = product.cout;
    var numerator = Math.log(-(world.money - world.money * product.croissance - un) / un);
    var denominator = Math.log(product.croissance);
    var max = (numerator / denominator);
    // Retour du max de produits
    return Math.floor(max);
}


/***/ }),

/***/ "./src/Modals/CashUpgrades.ts":
/*!************************************!*\
  !*** ./src/Modals/CashUpgrades.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCashUpgrades": () => (/* binding */ displayCashUpgrades)
/* harmony export */ });
/* harmony import */ var _App_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/Header */ "./src/App/Header.ts");

function displayCashUpgrades(server, world) {
    creationModal();
    creationBodyCash(server, world);
}
function creationModal() {
    // Container
    var m = document.getElementById("modalCashUp");
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
    t.innerText = "Les CashUpgrades";
    //Création Body
    var bodyM = document.createElement("div");
    mc.appendChild(bodyM);
    bodyM.classList.add("modal-body");
    bodyM.id = "modalCashUpBody";
}
function creationBodyCash(server, world) {
    var body = document.getElementById("modalCashUpBody");
    var container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");
    var grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("row", "row-cols-2"); //"row", "row-cols-2"
    $.each(world.upgrades.pallier, function (index, pallier) {
        var col = document.createElement("div");
        grid.appendChild(col);
        col.classList.add("row");
        col.id = "cashUpgrade" + pallier.idcible.toString();
        //Partie Image et nom du managers
        var imageName = document.createElement("div");
        col.appendChild(imageName);
        imageName.classList.add("col"); //"col-4", "col-lg-2"
        //Partie Image
        var image = document.createElement("div");
        imageName.appendChild(image);
        image.classList.add("row", "imageCashUp");
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
        var cost = (0,_App_Header__WEBPACK_IMPORTED_MODULE_0__.transform)(pallier.seuil);
        priceManager.innerHTML = cost;
        //Partie bouton d'embauche
        var hire = document.createElement("div");
        col.appendChild(hire);
        hire.classList.add("col");
        var buttonHire = document.createElement("button");
        hire.appendChild(buttonHire);
        buttonHire.id = "hire" + pallier.idcible;
        buttonHire.classList.add("btn", "btn-primary", "buttonHire");
        buttonHire.innerText = "Achete Moi !";
        $(buttonHire).click(function () {
            console.log("je tente d'acheter un cashUp :)");
            //buyManager(pallier, world);
        });
    });
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
/* harmony export */   "displayUnlocks": () => (/* binding */ displayUnlocks),
/* harmony export */   "verifUnlock": () => (/* binding */ verifUnlock)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");

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
    var optGlobal = document.createElement("option");
    selectBarre.appendChild(optGlobal);
    optGlobal.id = "optProduit" + 0;
    optGlobal.value = "" + 0;
    optGlobal.text = "Unlocks globaux";
    optGlobal.setAttribute("selected", "");
    $.each(world.products.product, function (index, product) {
        var opt = document.createElement("option");
        selectBarre.appendChild(opt);
        opt.id = "optProduit" + product.id;
        opt.value = "" + product.id;
        opt.text = product.name;
    });
    var optAll = document.createElement("option");
    selectBarre.appendChild(optAll);
    optAll.id = "optProduit" + 7;
    optAll.value = "7";
    optAll.text = "Tous les produits";
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
    $(selectBarre).change(function () {
        console.log(this.value);
        listUnlocks(parseInt(this.value), server, world);
    });
    listUnlocks(0, server, world);
}
function listUnlocks(id, server, world) {
    var bodyUnlock = document.getElementById("modalUnlockBody");
    bodyUnlock.innerHTML = "";
    var gridUnlock = document.createElement("div");
    bodyUnlock.appendChild(gridUnlock);
    gridUnlock.id = "gridUnlock";
    gridUnlock.classList.add("row", "row-cols-2");
    $.each(world.allunlocks.pallier, function (index, unlock) {
        if (unlock.idcible == id) {
            affichage(server, unlock);
        }
        else if (id == 7) {
            affichage(server, unlock);
        }
    });
}
function affichage(server, unlock) {
    var gridUnlock = document.getElementById("gridUnlock");
    var col = document.createElement("div");
    gridUnlock.appendChild(col);
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
    if (unlock.unlocked == false) {
        iconUnlock.classList.add("disabledUnlock");
    }
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
// Vérifie si un unlock doit être dévérouille
function verifUnlock(world) {
    // Pour tous les unlocks
    $.each(world.allunlocks.pallier, function (index, unlock) {
        // On vérifie que l'unlock n'est pas déjà dévérouillé
        if (unlock.unlocked == false) {
            // Si c'est un unlock pour un produit particulier
            if (unlock.idcible != 0) {
                // On récupère le produit
                var product = (0,___WEBPACK_IMPORTED_MODULE_0__.findProduct)(world, unlock.idcible);
                // On vérifie que l'on a dépassé le seuil produit
                if (product.quantite >= unlock.seuil) {
                    // Dévérouiller l'unlock
                    unlock.unlocked = true;
                    console.log(product.name + " has unlocked a x" + unlock.ratio + " " + unlock.typeratio);
                    // Appliquer les changements
                    switch (unlock.typeratio) {
                        case "VITESSE":
                            product.vitesse = product.vitesse / unlock.ratio;
                            product.timeleft = product.timeleft / unlock.ratio;
                            break;
                        case "GAIN":
                            product.revenu = product.revenu * unlock.ratio;
                            break;
                    }
                }
            }
            // Si c'est un unlock global
            else if (unlock.idcible == 0) {
                var status_1 = true;
                // On vérifie que tous les produits valident les seuils
                $.each(world.products.product, function (index, product) {
                    if (product.quantite < unlock.seuil) {
                        status_1 = false;
                    }
                });
                // Si tous les produits valident les seuils, on applique le changement
                if (status_1 == true) {
                    console.log("World has a global unlock x" + unlock.ratio + " " + unlock.typeratio);
                    $.each(world.products.product, function (index, product) {
                        switch (unlock.typeratio) {
                            case "VITESSE":
                                product.vitesse = product.vitesse / unlock.ratio;
                                product.timeleft = product.timeleft / unlock.ratio;
                            case "GAIN":
                                product.revenu = product.revenu * unlock.ratio;
                        }
                    });
                }
            }
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
/* harmony export */   "findProduct": () => (/* binding */ findProduct),
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
/* harmony import */ var _Modals_CashUpgrades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modals/CashUpgrades */ "./src/Modals/CashUpgrades.ts");
/* harmony import */ var _RestCalls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RestCalls */ "./src/RestCalls.ts");









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
var serverTest = "https://isiscapitalist.kk.kurasawa.fr/";
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
        (0,_Modals_CashUpgrades__WEBPACK_IMPORTED_MODULE_7__.displayCashUpgrades)(serverUrl, world);
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
            (0,_RestCalls__WEBPACK_IMPORTED_MODULE_8__.sendToServer)("manager", manager);
        }
    });
}
// Retrouver un produit à partir d'un id
function findProduct(world, idProduct) {
    var p = null;
    $.each(world.products.product, function (index, product) {
        if (product.id.toString() == idProduct.toString()) {
            p = product;
            return p;
        }
    });
    return p;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQsZ0JBQWdCLGtCQUFrQjtBQUNsQyxjQUFjLGtCQUFrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLHNEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxJQUFJLHNEQUFlO0FBQ25COzs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9NZW51LnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvUHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9TaWRlQmFyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9Nb2RhbHMvQ2FzaFVwZ3JhZGVzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9Nb2RhbHMvTWFuYWdlcnMudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL01vZGFscy9VbmxvY2tzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9SZXN0Q2FsbHMudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdXNlcm5hbWUsIHNldFVzZXJuYW1lIH0gZnJvbSBcIi4uXCI7XHJcblxyXG4vLyBDcsOpYXRpb24gY29udGFpbmVyIGR1IGhlYWRlclxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhlYWRlcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHByZW1pw6hyZSBjb2xvbmUgYXZlYyBsZSBub20gZXQgbGUgbG9nb1xyXG4gICAgbGV0IG1vbmRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25kZSk7XHJcbiAgICBtb25kZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwibW9uZGVcIiwgXCJiY2NGb250XCIpO1xyXG5cclxuICAgIC8vTG9nb1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbW9uZGUuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gICAgbG9nby5zcmMgPSBzZXJ2ZXIgKyB3b3JsZC5sb2dvO1xyXG5cclxuICAgIC8vTm9tXHJcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbW9uZGUuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgbmFtZS5pbm5lckhUTUwgPSBcIiBcIiArIHdvcmxkLm5hbWU7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gc2Vjb25kIGVudMOqdGUsIGwnYXJnZW50XHJcbiAgICBsZXQgbW9uZXlDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZXlDb2wpXHJcbiAgICBtb25leUNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiYmNjRm9udFwiKVxyXG5cclxuICAgIC8vTCdhcmdlbnRcclxuICAgIGxldCBtb25leSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb25leUNvbC5hcHBlbmRDaGlsZChtb25leSk7XHJcbiAgICBtb25leS5pZCA9IFwid29ybGRNb25leVwiO1xyXG4gICAgbW9uZXkuY2xhc3NMaXN0LmFkZChcIm1vbmV5XCIpO1xyXG4gICAgbGV0IGFyZ2VudCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbiAgICBtb25leS5pbm5lckhUTUwgPSBhcmdlbnQ7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gZGVybmllciBlbnTDqHRlLCBVc2VyIElEXHJcbiAgICBsZXQgdXNlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXNlckNvbCk7XHJcbiAgICB1c2VyQ29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcblxyXG4gICAgLypcclxuICAgIC8vVXNlciBJRFxyXG4gICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZENvbC5hcHBlbmRDaGlsZCh1c2VySWQpO1xyXG4gICAgdXNlcklkLmNsYXNzTGlzdC5hZGQoXCJ1c2VySWRcIik7XHJcbiAgICB1c2VySWQuaW5uZXJIVE1MID0gXCJJRDpcIjtcclxuICAgICovXHJcblxyXG4gICAgbGV0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXNlckNvbC5hcHBlbmRDaGlsZCh1c2VyUm93KTtcclxuICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuXHJcbiAgICBsZXQgbGFiZWxVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChsYWJlbFVzZXIpO1xyXG4gICAgbGFiZWxVc2VyLmh0bWxGb3IgPSBcImlucHV0VXNlclwiO1xyXG4gICAgbGFiZWxVc2VyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpXHJcblxyXG4gICAgbGV0IGlucHV0VXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQoaW5wdXRVc2VyKTtcclxuICAgIGlucHV0VXNlci5pZCA9IFwiaW5wdXRVc2VyXCJcclxuICAgIGlucHV0VXNlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xyXG4gICAgaW5wdXRVc2VyLnR5cGUgPSBcInRleHRcIjtcclxuICAgIGlucHV0VXNlci5wbGFjZWhvbGRlciA9IFwiUHNldWRvXCI7XHJcbiAgICBpbnB1dFVzZXIudmFsdWUgPSB1c2VybmFtZTtcclxuICAgIGlucHV0VXNlci5yZWFkT25seSA9IHRydWU7XHJcblxyXG4gICAgbGV0IGJ1dHRvblVzZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChidXR0b25Vc2VyRGl2KTtcclxuXHJcbiAgICBsZXQgYnV0dG9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBidXR0b25Vc2VyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbklucHV0KTtcclxuICAgIGJ1dHRvbklucHV0LmlkID0gXCJ1c2VyQnV0dG9uQ2hlY2tcIjtcclxuICAgIGJ1dHRvbklucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBidXR0b25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG5cclxuICAgIGxldCBidXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGJ1dHRvblVzZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uTGFiZWwpO1xyXG4gICAgYnV0dG9uTGFiZWwuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgYnV0dG9uTGFiZWwuaHRtbEZvciA9IFwidXNlckJ1dHRvbkNoZWNrXCI7XHJcbiAgICBidXR0b25MYWJlbC5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdiaSBiaS1jaGVjay1zcXVhcmUnPjwvaT5cIjtcclxuICAgICQoYnV0dG9uTGFiZWwpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoaW5wdXRVc2VyLnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIGlucHV0VXNlci5yZWFkT25seSA9IGZhbHNlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0VXNlci5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGlucHV0VXNlci52YWx1ZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsZXVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIGlmICh2YWxldXIgPCAxMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDIpO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyIDwgMTAwMDAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgwKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA+PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvUHJlY2lzaW9uKDQpO1xyXG4gICAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKC9lXFwrKC4qKS8sIFwiIDEwPHN1cD4kMTwvc3VwPlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBuYXZiYXJcclxuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiLCBcImZpeGVkLWJvdHRvbVwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiB1bmxvY2tzXHJcbiAgICBsZXQgdW5sb2NrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQodW5sb2Nrcyk7XHJcbiAgICB1bmxvY2tzLmNsYXNzTGlzdC5hZGQoXCJ1bmxvY2tzXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIFVubG9ja3NcclxuICAgIGxldCBidXR0b25VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICB1bmxvY2tzLmFwcGVuZENoaWxkKGJ1dHRvblVubG9jayk7XHJcbiAgICBidXR0b25VbmxvY2suY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidXR0b25VbmxvY2suc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIiwgXCJtb2RhbFwiKVxyXG4gICAgYnV0dG9uVW5sb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI21vZGFsVW5sb2NrXCIpXHJcbiAgICBidXR0b25VbmxvY2suaW5uZXJUZXh0ID0gXCJVbmxvY2tzIFwiO1xyXG5cclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBjYXNoIHVwZ3JhZGVzXHJcbiAgICBsZXQgY2FzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY2FzaCk7XHJcbiAgICBjYXNoLmNsYXNzTGlzdC5hZGQoXCJjYXNoXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIFVubG9ja3NcclxuICAgIGxldCBidXR0b25DYXNoVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBjYXNoLmFwcGVuZENoaWxkKGJ1dHRvbkNhc2hVcCk7XHJcbiAgICBidXR0b25DYXNoVXAuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidXR0b25DYXNoVXAuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIiwgXCJtb2RhbFwiKVxyXG4gICAgYnV0dG9uQ2FzaFVwLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI21vZGFsQ2FzaFVwXCIpXHJcbiAgICBidXR0b25DYXNoVXAuaW5uZXJUZXh0ID0gXCJDYXNoVXBncmFkZXMgXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gYW5nZWxzIHVwZ3JhZGVzXHJcbiAgICBsZXQgYW5nZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhbmdlbHMpO1xyXG4gICAgYW5nZWxzLmNsYXNzTGlzdC5hZGQoXCJhbmdlbHNcIik7XHJcbiAgICBhbmdlbHMuaW5uZXJIVE1MID0gXCJBbmdlbHMgdXBncmFkZXNcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBtYW5hZ2Vyc1xyXG4gICAgbGV0IG1hbmFnZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtYW5hZ2Vycyk7XHJcbiAgICBtYW5hZ2Vycy5jbGFzc0xpc3QuYWRkKFwibWFuYWdlcnNcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gTWFuYWdlclxyXG4gICAgbGV0IGJ1dHRvbk1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBtYW5hZ2Vycy5hcHBlbmRDaGlsZChidXR0b25NYW5hZ2VyKTtcclxuICAgIGJ1dHRvbk1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsIFwibW9kYWxcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbW9kYWxNYW5hZ2VyXCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLmlubmVyVGV4dCA9IFwiTWFuYWdlcnMgXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gYmFkZ2VcclxuICAgIGxldCBiYWRnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGJ1dHRvbk1hbmFnZXIuYXBwZW5kQ2hpbGQoYmFkZ2VNYW5hZ2VyKTtcclxuICAgIGJhZGdlTWFuYWdlci5pZCA9IFwiYmFkZ2VNYW5hZ2VyXCJcclxuICAgIGJhZGdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiYmFkZ2VcIiwgXCJiZy1zZWNvbmRhcnlcIik7XHJcblxyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGludmVzdG9yc1xyXG4gICAgbGV0IGludmVzdG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW52ZXN0b3JzKTtcclxuICAgIGludmVzdG9ycy5jbGFzc0xpc3QuYWRkKFwiaW52ZXN0b3JzXCIpO1xyXG4gICAgaW52ZXN0b3JzLmlubmVySFRNTCA9IFwiSW52ZXN0b3JzXCI7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgYWRkUHJvZ3Jlc3NCYXIsIHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcclxuXHJcbmltcG9ydCB7YWRkU2VsZWN0ZWQsIGJ1eWFibGVQcm9kdWN0cywgZ2V0Q29zdFByb2R1Y3QsIGdldE1heFByb2R1Y3R9IGZyb20gXCIuL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IHNlbmRUb1NlcnZlciB9IGZyb20gXCIuLi9SZXN0Q2FsbHNcIjtcclxuaW1wb3J0IHsgdmVyaWZVbmxvY2sgfSBmcm9tIFwiLi4vTW9kYWxzL1VubG9ja3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJMaXN0OiBhbnlbXSA9IFtdO1xyXG5leHBvcnQgY29uc3QgbGFzdFVwZGF0ZUxpc3QgOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsTGFzdFVwZGF0ZSh3b3JsZDogV29ybGQpIHtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd29ybGQucHJvZHVjdHMucHJvZHVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W2ldID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHByaW5jaXBhbGUgZCdhcHBlbCBkZXMgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9kdWN0cyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciAoY29sb25uZSlcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuaWQgPSBcInBcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImRvdWJsZUJvcmRlclByb2R1Y3RcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdHJlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgXCJiY2NGb250XCIpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5pbm5lckhUTUwgPSBwcm9kdWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIC8vIEltYWdlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdEltYWdlKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInByb2R1Y3RJbWFnZVwiKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHByb2R1Y3RJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuaWQgPSBcImltZ1wiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdEljb25zXCIpXHJcbiAgICAgICAgLy8gU2kgY2UgcHJvZHVpdCBuJ2EgcGFzIMOpdMOpIGTDqWJsb3F1w6ksIG9uIGwnYWZmaWNoZSBlbiBncmlzXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdGUgPT0gMCkge1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZS5zcmMgPSBzZXJ2ZXIgKyBwcm9kdWN0LmxvZ29cclxuICAgICAgICAvLyBBam91dCBldmVudCBwcm9kdWN0aW9uXHJcbiAgICAgICAgJChpbWFnZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGFydFByb2R1Y3QocHJvZHVjdClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFycmUgZGUgcHJvZ3Jlc3Npb25cclxuICAgICAgICBhZGRQcm9ncmVzc0JhcihzZXJ2ZXIsIHByb2R1Y3QsIGNvbCk7XHJcblxyXG4gICAgICAgIC8vIExldmVsIC0tPiBRdWFudGl0w6kgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RRdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UXRlKTtcclxuICAgICAgICBwcm9kdWN0UXRlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0TGV2ZWxcIik7XHJcbiAgICAgICAgbGV0IGxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5hcHBlbmRDaGlsZChsZXZlbCk7XHJcbiAgICAgICAgbGV2ZWwuaWQgPSBcInF0ZVwiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBsZXZlbC5jbGFzc0xpc3QuYWRkKFwiYmNjRm9udFwiKTtcclxuICAgICAgICBsZXZlbC5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdENvbnRhaW5lcik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibXQtM1wiKTtcclxuXHJcbiAgICAgICAgLy8gTmJyIGxldmVsIMOgIGFjaGV0ZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdEFkZCk7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiKTtcclxuICAgICAgICBsZXQgcHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5hcHBlbmRDaGlsZChwcm9kdWN0QnV0dG9uKTtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmlkID0gXCJhZGRcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2R1Y3RcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgJChwcm9kdWN0QnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ2/Du3QgYWpvdXQgbGV2ZWwgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RDb3N0KTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pZCA9IFwiY29zdFwiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBwcm9kdWN0Q29zdC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiYmNjRm9udFwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgIC8vIHByb2R1Y3RDb3N0LmlubmVySFRNTCA9IChwcm9kdWN0LmNvdXQgKyBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpKS50b1N0cmluZygpO1xyXG4gICAgICAgIHByb2R1Y3RDb3N0LmlubmVySFRNTCA9IHByb2R1Y3QuY291dC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcbiAgICBidXlhYmxlUHJvZHVjdHMod29ybGQpO1xyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkZSBsYW5jZXIgbGEgcHJvZHVjdGlvbiBkJ3VuIHByb2R1aXRcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBwZXV0IGFjdGl2ZXIgbGUgcHJvZHVpdFxyXG4gICAgaWYgKHZlcmlmUHJvZHVjdChwcm9kdWN0KSkge1xyXG4gICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSBwcm9kdWN0LnZpdGVzc2U7XHJcbiAgICAgICAgbGFzdFVwZGF0ZUxpc3RbcHJvZHVjdC5pZF0gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIDEwMCk7XHJcbiAgICAgICAgc2VuZFRvU2VydmVyKFwicHJvZHVjdFwiLCBwcm9kdWN0KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBxdWUgcHJvZHVpdCBlc3QgYWN0aXZhYmxlXHJcbmZ1bmN0aW9uIHZlcmlmUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHByb2R1Y3QucXVhbnRpdGUgPiAwKSAmJiAocHJvZHVjdC50aW1lbGVmdCA9PSAwKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkJ2Fqb3V0ZXIgdW5lIHF1YW50aXTDqSDDoCB1biBwcm9kdWl0XHJcbmZ1bmN0aW9uIGFkZFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBuJ2VzdCBwYXMgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIGNvw7t0XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcbiAgICAgICAgcHJvZHVjdC5jb3V0ID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBhZGRTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIGFkZFNlbGVjdGVkLCBjb3N0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG1heCBhY2hldGFibGUgZXQgc29uIGNvdXRcclxuICAgICAgICBsZXQgbWF4ID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG5cclxuICAgICAgICBwcm9kdWN0LmNvdXQgPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIG1heCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIG1heCwgY29zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVyaWZVbmxvY2sod29ybGQpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdC52aXRlc3NlKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QudGltZWxlZnQpO1xyXG5cclxuICAgIC8vIE9uIGVudm9pZSBsZXMgZG9ubsOpZXMgYXUgc2VydmV1clxyXG4gICAgc2VuZFRvU2VydmVyKFwicHJvZHVjdFwiLCBwcm9kdWN0KTtcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGVmZmVjdHVhbnQgbGVzIGNoYW5nZW1lbnRzIGQnYWZmaWNoYWdlIGxpw6lzIMOgIGwnYWNoYXQgZCd1biBwcm9kdWl0XHJcbmZ1bmN0aW9uIG1vZGlmeVByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0LCBxdWFudGl0eTogbnVtYmVyLCBjb3N0OiBudW1iZXIpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnRcclxuICAgIGlmICh3b3JsZC5tb25leSA+IGNvc3QpIHtcclxuICAgICAgICAvLyBPbiBham91dGUgbGEgcXVhbnRpdMOpIGFjaGV0w6llXHJcbiAgICAgICAgcHJvZHVjdC5xdWFudGl0ZSArPSBxdWFudGl0eTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF0ZVwiICsgcHJvZHVjdC5pZCkuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBPbiBzb3VzdHJhaXQgbCdhcmdlbnQgZMOpcGVuc8OpXHJcbiAgICAgICAgd29ybGQubW9uZXkgLT0gY29zdDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuXHJcbiAgICAgICAgLy8gU2kgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGVcclxuICAgICAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAvLyBPbiByZWNhbGN1bGUgbGUgbWF4XHJcbiAgICAgICAgICAgIHF1YW50aXR5ID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgICAgIC8vIE9uIGNoYW5nZSBsJ2FmZmljaGFnZSBzdXIgY2hhcXVlIHByb2R1aXQgZW4gZm9uY3Rpb24gZHUgbm91dmVhdSBzb2xkZVxyXG4gICAgICAgICAgICBidXlhYmxlUHJvZHVjdHMod29ybGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG5vdXZlYXUgY2/Du3QgYXByw6hzIGFjaGF0XHJcbiAgICAgICAgbGV0IG5ld0Nvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBxdWFudGl0eSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0obmV3Q29zdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUydpbCBzJ2FnaXQgZHUgMWVyIGFjaGF0IHN1ciB1biBwcm9kdWl0LCBvbiBsJ2FmZmljaGUgZW4gY2xhaXJcclxuICAgICAgICBsZXQgaW1hZ2VQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgIGlmIChpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRQcm9kdWN0XCIpKSB7XHJcbiAgICAgICAgICAgIGltYWdlUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QWRkUHJvZHVjdHM6IGFueVtdID0gWzEsIDEwLCAxMDAsIFwiTWF4XCJdO1xyXG5leHBvcnQgdmFyIGFkZFNlbGVjdGVkOiBhbnkgPSAxO1xyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNyw6lhbnQgbGEgYmFyZSBkZSBtZW51IMOgIGRyb3RpZSBjb250ZW5hbnQgbGUgc8OpbGVjdGV1ciBzdXIgbGEgcXVhbnRpdMOpIGRlIHByb2R1aXRzIMOgIGFjaGV0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlQmFyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9idGVudGlvbiBkdSBjb250YWluZXIgZGVzIHByb2R1aXRzXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZHUgY29udGFpbmVyIGR1IG1lbnVcclxuICAgIGxldCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcclxuICAgIHNpZGVDb250YWluZXIuaWQgPSBcInNpZGVNZW51XCI7XHJcbiAgICAvLyBDZW50cmFnZSBkdSBtZW51IMOgIGRyb2l0ZVxyXG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9zaXRpb24tYWJzb2x1dGVcIiwgXCJ0b3AtNTBcIiwgXCJlbmQtMFwiLCBcInRyYW5zbGF0ZS1taWRkbGUteVwiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZCd1bmUgbGlzdGUgZGUgYm91dG9ucyDDoCBsYSB2ZXJ0aWNhbGVcclxuICAgIGxldCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XHJcbiAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tZ3JvdXAtdmVydGljYWxcIiwgXCJzaWRlQ29udGFpbmVyXCIpO1xyXG4gICAgbGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZ3JvdXBcIik7XHJcblxyXG4gICAgLy8gT24gZ8OpbsOocmUgZGVzIGJvdXRvbnMgZGUgdHlwZSByYWRpb1xyXG4gICAgbGlzdEFkZFByb2R1Y3RzLmZvckVhY2goYWRkTnVtYmVyID0+IHtcclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbCdpbnB1dCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJJbnB1dCk7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuaWQgPSBcImJ1dHRvblwiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5uYW1lID0gXCJidG5yYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcclxuICAgICAgICAvLyBBIGwnaW5pdGlhbGlzYXRpb24sIGwnb3B0aW9uICsxIGVzdCBjZWxsZSBjb2Now6llIHBhciBkw6lmYXV0XHJcbiAgICAgICAgaWYgKGFkZE51bWJlciA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBhZGROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbGUgbGFiZWwgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlckJ1dHRvbik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRCdXR0b25cIiwgXCJhZGRCdXR0b25PdXRsaW5lXCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYWRkTnVtYmVySW5wdXQuaWQpXHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIC8vIEV2ZW50IDogbW9kaWZpY2F0aW9uIGR1IHPDqWxlY3RldXIgYXUgY2xpY1xyXG4gICAgICAgICQoYWRkTnVtYmVyQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkID0gYWRkTnVtYmVyO1xyXG4gICAgICAgICAgICBidXlhYmxlUHJvZHVjdHMod29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBjaGFuZ2VhbnQgbCdhZmZpY2hhZ2UgbGnDqSDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gYnV5YWJsZVByb2R1Y3RzKHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGVzdCB1bmUgdmFsZXVyIGNvbnN0YW50ZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBhZGRTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsZSBqb3VldXIgbidhIHBhcyBhc3NleiBkJ2FyZ2VudCBwb3VyIGFjaGV0ZXIgbGUgcHJvZHVpdCwgb24gZMOpc2FjdGl2ZSBsZSBib3V0b25cclxuICAgICAgICAgICAgaWYgKHdvcmxkLm1vbmV5IDwgY29zdCkge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2lub24gb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRQcm9kdWN0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2kgbCdvcHRpb24gY29uc2lzdGUgw6AgbGEgdmFsZXVyIG1heFxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXg6IG51bWJlciA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgYm91dG9uXHJcbiAgICAgICAgICAgIGxldCBhZGRQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdC5pbm5lckhUTUwgPSBcIitcIiArIG1heDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIGNvw7t0IGQndW4gZ3JvdXBlIGRlIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3N0UHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0LCBhZGROdW1iZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgLy8gbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTtcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dDtcclxuICAgIGxldCBudW1lcmF0b3IgPSAxIC0gTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBhZGROdW1iZXIpO1xyXG4gICAgbGV0IGRlbm9taW5hdG9yID0gMSAtIHByb2R1Y3QuY3JvaXNzYW5jZVxyXG4gICAgbGV0IGNvdXQgPSAodW4gKiBudW1lcmF0b3IpIC8gZGVub21pbmF0b3I7XHJcblxyXG4gICAgLy8gUmV0b3VyIGR1IGNvw7t0IGNhbGN1bMOpXHJcbiAgICByZXR1cm4gY291dDtcclxufVxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIG5vbWJyZSBtYXggZGUgcHJvZHVpdHMgYWNoZXRhYmxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCk6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgLy8gbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTtcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dDtcclxuICAgIGxldCBudW1lcmF0b3I6IG51bWJlciA9IE1hdGgubG9nKC0od29ybGQubW9uZXkgLSB3b3JsZC5tb25leSAqIHByb2R1Y3QuY3JvaXNzYW5jZSAtIHVuKSAvIHVuKTtcclxuICAgIGxldCBkZW5vbWluYXRvcjogbnVtYmVyID0gTWF0aC5sb2cocHJvZHVjdC5jcm9pc3NhbmNlKTtcclxuICAgIGxldCBtYXg6IG51bWJlciA9IChudW1lcmF0b3IgLyBkZW5vbWluYXRvcilcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgbWF4IGRlIHByb2R1aXRzXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtYXgpO1xyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi4vQXBwL0hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDYXNoVXBncmFkZXMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgY3JlYXRpb25Nb2RhbCgpO1xyXG4gICAgY3JlYXRpb25Cb2R5Q2FzaChzZXJ2ZXIsIHdvcmxkKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRpb25Nb2RhbCgpIHtcclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ2FzaFVwXCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIERpYWxvZ3VlXHJcbiAgICBsZXQgbWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbS5hcHBlbmRDaGlsZChtZCk7XHJcbiAgICBtZC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGlhbG9nXCIsIFwibW9kYWwtbGdcIik7XHJcbiAgICBtZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZG9jdW1lbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgQ29udGVudFxyXG4gICAgbGV0IG1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1kLmFwcGVuZENoaWxkKG1jKTtcclxuICAgIG1jLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIGhlYWRlclxyXG4gICAgbGV0IG1oID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKG1oKTtcclxuICAgIG1oLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gRmVybWVyIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZChiKTtcclxuICAgIGIuY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKVxyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLWRpc21pc3NcIiwgXCJtb2RhbFwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xyXG5cclxuICAgIC8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQodCk7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgIHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsTGFiZWxcIik7XHJcbiAgICB0LmlubmVyVGV4dCA9IFwiTGVzIENhc2hVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIEJvZHlcclxuICAgIGxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbiAgICBib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuICAgIGJvZHlNLmlkID0gXCJtb2RhbENhc2hVcEJvZHlcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRpb25Cb2R5Q2FzaChzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKXtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDYXNoVXBCb2R5XCIpO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcbiAgICBcclxuICAgICAgICAkLmVhY2god29ybGQudXBncmFkZXMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgICAgICBjb2wuaWQgPSBcImNhc2hVcGdyYWRlXCIgKyBwYWxsaWVyLmlkY2libGUudG9TdHJpbmcoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvL1BhcnRpZSBJbWFnZSBldCBub20gZHUgbWFuYWdlcnNcclxuICAgICAgICAgICAgbGV0IGltYWdlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbC5hcHBlbmRDaGlsZChpbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICBpbWFnZU5hbWUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsvL1wiY29sLTRcIiwgXCJjb2wtbGctMlwiXHJcbiAgICBcclxuICAgICAgICAgICAgLy9QYXJ0aWUgSW1hZ2VcclxuICAgICAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImltYWdlQ2FzaFVwXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBpbWFnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBpbWFnZS5hcHBlbmRDaGlsZChpbWFnZU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBpbWFnZU1hbmFnZXIuaWQgPSBcImltZ1wiICsgcGFsbGllci5pZGNpYmxlO1xyXG4gICAgICAgICAgICBpbWFnZU1hbmFnZXIuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvO1xyXG4gICAgICAgICAgICBpbWFnZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWRcIilcclxuICAgIFxyXG4gICAgICAgICAgICAvL1BhcnRpZSBOb20gZXQgcHJpeFxyXG4gICAgICAgICAgICBsZXQgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBpbWFnZU5hbWUuYXBwZW5kQ2hpbGQobmFtZVByaWNlKTtcclxuICAgICAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuICAgIFxyXG4gICAgICAgICAgICAvL1BhcnRpZSBOb21cclxuICAgICAgICAgICAgbGV0IG5hbWVNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKG5hbWVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgbmFtZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICAgICAgbmFtZU1hbmFnZXIuaW5uZXJUZXh0ID0gcGFsbGllci5uYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vUGFydGllIFByaXhcclxuICAgICAgICAgICAgbGV0IHByaWNlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZChwcmljZU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBwcmljZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICAgICAgbGV0IGNvc3QgPSB0cmFuc2Zvcm0ocGFsbGllci5zZXVpbClcclxuICAgICAgICAgICAgcHJpY2VNYW5hZ2VyLmlubmVySFRNTCA9IGNvc3Q7XHJcbiAgICBcclxuICAgICAgICAgICAgLy9QYXJ0aWUgYm91dG9uIGQnZW1iYXVjaGVcclxuICAgICAgICAgICAgbGV0IGhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoaGlyZSk7XHJcbiAgICAgICAgICAgIGhpcmUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGhpcmUuYXBwZW5kQ2hpbGQoYnV0dG9uSGlyZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhpcmUuaWQgPSBcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25IaXJlXCIpO1xyXG4gICAgICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dCA9IFwiQWNoZXRlIE1vaSAhXCI7XHJcbiAgICAgICAgICAgICQoYnV0dG9uSGlyZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJqZSB0ZW50ZSBkJ2FjaGV0ZXIgdW4gY2FzaFVwIDopXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9idXlNYW5hZ2VyKHBhbGxpZXIsIHdvcmxkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcblxyXG59IiwiaW1wb3J0IHsgbWF0Y2hJZCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuLi9BcHAvSGVhZGVyXCI7XHJcbmltcG9ydCB7IHNlbmRUb1NlcnZlciB9IGZyb20gXCIuLi9SZXN0Q2FsbHNcIjtcclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGVzIG1hbmFnZXJzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWFuYWdlcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgRGlhbG9ndWVcclxuICAgIGxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtLmFwcGVuZENoaWxkKG1kKTtcclxuICAgIG1kLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaWFsb2dcIiwgXCJtb2RhbC1sZ1wiKTtcclxuICAgIG1kLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJkb2N1bWVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBDb250ZW50XHJcbiAgICBsZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWQuYXBwZW5kQ2hpbGQobWMpO1xyXG4gICAgbWMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbiAgICBsZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQobWgpO1xyXG4gICAgbWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxuICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgICBiLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XHJcblxyXG4gICAgLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZCh0KTtcclxuICAgIHQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxuICAgIHQuaW5uZXJUZXh0ID0gXCJMZXMgTWFuYWdlcnNcIjtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbEJvZHlcIik7XHJcblxyXG4gICAgLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbiAgICBsaXN0TWFuYWdlcnMoc2VydmVyLCB3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGUgbGEgbGlzdGUgZGVzIG1hbmFnZXJzXHJcbmZ1bmN0aW9uIGxpc3RNYW5hZ2VycyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCb2R5XCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0yXCIpOy8vXCJyb3dcIiwgXCJyb3ctY29scy0yXCJcclxuXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwibWFuYWdlclwiICsgcGFsbGllci5pZGNpYmxlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vUGFydGllIEltYWdlIGV0IG5vbSBkdSBtYW5hZ2Vyc1xyXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChpbWFnZU5hbWUpO1xyXG4gICAgICAgIGltYWdlTmFtZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIpOy8vXCJjb2wtNFwiLCBcImNvbC1sZy0yXCJcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgSW1hZ2VcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGltYWdlTmFtZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImltYWdlTWFuYWdlcnNcIik7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLmFwcGVuZENoaWxkKGltYWdlTWFuYWdlcik7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLmlkID0gXCJpbWdcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICBpbWFnZU1hbmFnZXIuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsdWlkXCIsIFwicm91bmRlZFwiKVxyXG5cclxuICAgICAgICAvL1BhcnRpZSBOb20gZXQgcHJpeFxyXG4gICAgICAgIGxldCBuYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKG5hbWVQcmljZSk7XHJcbiAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tXHJcbiAgICAgICAgbGV0IG5hbWVNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lUHJpY2UuYXBwZW5kQ2hpbGQobmFtZU1hbmFnZXIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbmFtZU1hbmFnZXIuaW5uZXJUZXh0ID0gcGFsbGllci5uYW1lO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBQcml4XHJcbiAgICAgICAgbGV0IHByaWNlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKHByaWNlTWFuYWdlcik7XHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbGV0IGNvc3QgPSB0cmFuc2Zvcm0ocGFsbGllci5zZXVpbClcclxuICAgICAgICBwcmljZU1hbmFnZXIuaW5uZXJIVE1MID0gY29zdDtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgYm91dG9uIGQnZW1iYXVjaGVcclxuICAgICAgICBsZXQgaGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGhpcmUpO1xyXG4gICAgICAgIGhpcmUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsgLy9cImNvbC00XCIsIFwiY29sLWxnLTJcIlxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgaGlyZS5hcHBlbmRDaGlsZChidXR0b25IaXJlKTtcclxuICAgICAgICBidXR0b25IaXJlLmlkID0gXCJoaXJlXCIgKyBwYWxsaWVyLmlkY2libGU7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25IaXJlXCIpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuaW5uZXJUZXh0ID0gXCJBY2hldGUgTW9pICFcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYWxsaWVyLmlkY2libGUgKyBcIiBcIiArIHBhbGxpZXIudW5sb2NrZWQpO1xyXG4gICAgICAgIGlmIChwYWxsaWVyLnVubG9ja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJESVNBQkxFRFwiKVxyXG4gICAgICAgICAgICBidXR0b25IaXJlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChidXR0b25IaXJlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiamUgdGVudGUgZCdhY2hldGVyIHVuIG1hbmFnZXIgOilcIik7XHJcbiAgICAgICAgICAgIGJ1eU1hbmFnZXIocGFsbGllciwgd29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBpbWFnZVByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgaGlyZS5hcHBlbmRDaGlsZChpbWFnZVByb2R1Y3QpXHJcbiAgICAgICAgaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5hZGQoXCJpbWFnZVByb2R1Y3RNYW5hZ2VyXCIpXHJcbiAgICAgICAgbGV0IHNyY0ltZz1nZXRJbWFnZShwYWxsaWVyLmlkY2libGUsd29ybGQpXHJcbiAgICAgICAgaW1hZ2VQcm9kdWN0LnNyYz1zZXJ2ZXIrc3JjSW1nOyovXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIEFmZmljaGFnZSBkeW5hbWlxdWVtZW50IHNpIHVuIG1hbmFnZXIgZXN0IGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZNYW5hZ2Vycyh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIG1hbmFnZXJcclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIHBhbGxpZXIpIHtcclxuICAgICAgICAvLyBPbiByw6ljdXDDqHJlIHNvbiBib3V0b24gZCdhY2hhdFxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZSk7XHJcblxyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgb3UgcXVlIGxlIG1hbmFnZXIgbidlc3QgcGFzIGTDqWrDoCBhY2hldMOpXHJcbiAgICAgICAgaWYgKChwYWxsaWVyLnNldWlsID4gd29ybGQubW9uZXkpIHx8IChwYWxsaWVyLnVubG9ja2VkID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWNoZXTDqVwiO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2lub24gb24gbGUgZMOpc2FjdGl2ZVxyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vIENhbGN1bGUgZHluYW1pcXVlbWVudCBsZSBub21icmUgZGUgbWFuYWdlcnMgYWNoZXRhYmxlc1xyXG5leHBvcnQgZnVuY3Rpb24gYnV5YWJsZU1hbmFnZXJzKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gVmFyaWFibGVzXHJcbiAgICBsZXQgbWFuYWdlckRpc3BvID0gMDtcclxuICAgIGxldCBub3RpZk1hbmFnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZGdlTWFuYWdlclwiKTtcclxuXHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBtYW5hZ2VyXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBtYW5hZ2VyKSB7XHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBsYSBwb3NzaWJpbGl0w6kgZCdlbiBhY2hldGVyXHJcbiAgICAgICAgaWYgKG1hbmFnZXIuc2V1aWwgPD0gd29ybGQubW9uZXkgJiYgbWFuYWdlci51bmxvY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtYW5hZ2VyRGlzcG8rKztcclxuICAgICAgICB9O1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gUydpbCBuJ3kgYSBhdWN1biBtYW5hZ2VyIGFjaGV0YWJsZSwgb24gYWZmaWNoZSByaWVuXHJcbiAgICBpZiAobWFuYWdlckRpc3BvID09IDApIHtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIFNpbm9uIG9uIGFmZmljaGUgbGV1ciBxdWFudGl0w6kgYWNoZXRhYmxlXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0ID0gbWFuYWdlckRpc3BvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBBY2hhdCBkJ3VuIG1hbmFnZXJcclxuZnVuY3Rpb24gYnV5TWFuYWdlcihtYW5hZ2VyOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIG1hbmFnZXJcclxuICAgIGlmIChtYW5hZ2VyLnNldWlsIDw9IHdvcmxkLm1vbmV5KSB7XHJcbiAgICAgICAgLy8gU2kgYydlc3QgbGUgY2FzLCBvbiBzb3VzdHJhaXQgc29uIGNvw7t0XHJcbiAgICAgICAgd29ybGQubW9uZXkgLT0gbWFuYWdlci5zZXVpbDtcclxuXHJcbiAgICAgICAgLy8gT24gYWZmaWNoZSBlbnN1aXRlIGxlIG5vdXZlYXUgc29sZGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuXHJcbiAgICAgICAgLy8gT24gZMOpYmxvcXVlIGxlIG1hbmFnZXJcclxuICAgICAgICBtYW5hZ2VyLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBtYXRjaElkKG1hbmFnZXIsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlbWVudCBkdSBib3V0b24gSGlyZSBlbiBhY2hldMOpIGV0IGRpc2FibGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiICsgbWFuYWdlci5pZGNpYmxlKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJBY2hldMOpXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEltYWdlKGlkOm51bWJlcix3b3JsZDpXb3JsZCl7XHJcbiQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCxwcm9kdWl0KXtcclxuICAgIGxldCBzcmM9XCJcIlxyXG4gICAgaWYocHJvZHVpdC5pZD09aWQpe1xyXG4gICAgICAgIHNyYz1wcm9kdWl0LmxvZ29cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvdXJjZSBpbWFnZTpcIitwcm9kdWl0LmxvZ28pXHJcbiAgICAgICAgcmV0dXJuIHNyYztcclxuICAgIH1cclxufSlcclxufSIsImltcG9ydCB7IGZpbmRQcm9kdWN0IH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGVzIHVubG9ja3NcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlVbmxvY2tzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVW5sb2NrXCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIERpYWxvZ3VlXHJcbiAgICBsZXQgbWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbS5hcHBlbmRDaGlsZChtZCk7XHJcbiAgICBtZC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGlhbG9nXCIsIFwibW9kYWwtbGdcIik7XHJcbiAgICBtZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZG9jdW1lbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgQ29udGVudFxyXG4gICAgbGV0IG1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1kLmFwcGVuZENoaWxkKG1jKTtcclxuICAgIG1jLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIGhlYWRlclxyXG4gICAgbGV0IG1oID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKG1oKTtcclxuICAgIG1oLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gRmVybWVyIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZChiKTtcclxuICAgIGIuY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKVxyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLWRpc21pc3NcIiwgXCJtb2RhbFwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIHNlbGVjdCBiYXJyZVxyXG4gICAgbGV0IHNlbGVjdEJhcnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxyXG4gICAgbWguYXBwZW5kQ2hpbGQoc2VsZWN0QmFycmUpXHJcbiAgICBzZWxlY3RCYXJyZS5pZCA9IFwic2VsZWN0QmFycmVVbmxvY2tzXCJcclxuXHJcbiAgICBsZXQgb3B0R2xvYmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgc2VsZWN0QmFycmUuYXBwZW5kQ2hpbGQob3B0R2xvYmFsKVxyXG4gICAgb3B0R2xvYmFsLmlkID0gXCJvcHRQcm9kdWl0XCIgKyAwXHJcbiAgICBvcHRHbG9iYWwudmFsdWUgPSBcIlwiICsgMFxyXG4gICAgb3B0R2xvYmFsLnRleHQgPSBcIlVubG9ja3MgZ2xvYmF1eFwiXHJcbiAgICBvcHRHbG9iYWwuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixcIlwiKVxyXG5cclxuICAgIFxyXG5cclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHQpXHJcbiAgICAgICAgb3B0LmlkID0gXCJvcHRQcm9kdWl0XCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgb3B0LnZhbHVlID0gXCJcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBvcHQudGV4dCA9IHByb2R1Y3QubmFtZVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgb3B0QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgc2VsZWN0QmFycmUuYXBwZW5kQ2hpbGQob3B0QWxsKVxyXG4gICAgb3B0QWxsLmlkID0gXCJvcHRQcm9kdWl0XCIgKyA3XHJcbiAgICBvcHRBbGwudmFsdWUgPSBcIjdcIjtcclxuICAgIG9wdEFsbC50ZXh0ID0gXCJUb3VzIGxlcyBwcm9kdWl0c1wiXHJcbiAgICBcclxuICAgIC8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQodCk7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgIHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsTGFiZWxcIik7XHJcbiAgICB0LmlubmVyVGV4dCA9IFwiTGVzIFVubG9ja3NcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBCb2R5XHJcbiAgICBsZXQgYm9keU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQoYm9keU0pO1xyXG4gICAgYm9keU0uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJvZHlcIik7XHJcbiAgICBib2R5TS5pZCA9IFwibW9kYWxVbmxvY2tCb2R5XCI7XHJcblxyXG4gXHJcbiAgICAkKHNlbGVjdEJhcnJlKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpXHJcbiAgICAgICAgbGlzdFVubG9ja3MocGFyc2VJbnQodGhpcy52YWx1ZSksIHNlcnZlciwgd29ybGQpXHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0VW5sb2NrcygwLCBzZXJ2ZXIsIHdvcmxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFVubG9ja3MoaWQ6IG51bWJlciwgc2VydmVyOiBTdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGJvZHlVbmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVW5sb2NrQm9keVwiKVxyXG4gICAgYm9keVVubG9jay5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IGdyaWRVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBib2R5VW5sb2NrLmFwcGVuZENoaWxkKGdyaWRVbmxvY2spXHJcbiAgICBncmlkVW5sb2NrLmlkID0gXCJncmlkVW5sb2NrXCJcclxuICAgIGdyaWRVbmxvY2suY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInJvdy1jb2xzLTJcIilcclxuXHJcbiAgICAkLmVhY2god29ybGQuYWxsdW5sb2Nrcy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIHVubG9jaykge1xyXG5cclxuICAgICAgICBpZiAodW5sb2NrLmlkY2libGUgPT0gaWQpIHtcclxuICAgICAgICAgICAgYWZmaWNoYWdlKHNlcnZlcix1bmxvY2spXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkID09IDcpIHtcclxuICAgICAgICAgICAgYWZmaWNoYWdlKHNlcnZlcix1bmxvY2spXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWZmaWNoYWdlKHNlcnZlcjogU3RyaW5nLCB1bmxvY2s6IFBhbGxpZXIpIHtcclxuICAgIGxldCBncmlkVW5sb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkVW5sb2NrXCIpXHJcbiAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdyaWRVbmxvY2suYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgY29sLmlkID0gXCJ1bmxvY2tcIiArIHVubG9jay5pZGNpYmxlO1xyXG5cclxuICAgIC8vZGl2aXNpb24gZGUgbGEgbGlnbmUgZW4gZGV1eCBwYXJ0aWVzIChJbWFnZStEZXNjcmlwdGlvbiAvLyBVbmxvY2tlZCBvdSBub24pXHJcbiAgICBsZXQgY29sSW1hZ2VEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS8vSW1hZ2UgRGVzY3JpcHRpb25cclxuICAgIGxldCBjb2xVbmxvY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikvL0FmZmljaGFnZSBlc3QgaWwgZMOpdsOpcm91aWxsw6kgP1xyXG4gICAgY29sLmFwcGVuZENoaWxkKGNvbEltYWdlRGVzYylcclxuICAgIGNvbC5hcHBlbmRDaGlsZChjb2xVbmxvY2tlZClcclxuICAgIGNvbEltYWdlRGVzYy5jbGFzc0xpc3QuYWRkKFwiY29sXCIpXHJcbiAgICBjb2xVbmxvY2tlZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpXHJcblxyXG4gICAgLy9BZmZpY2hhZ2UgSWNvbiBVbmxvY2tcclxuICAgIGxldCBpY29uVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGljb25VbmxvY2spXHJcbiAgICBpY29uVW5sb2NrLnNyYyA9IHNlcnZlciArIHVubG9jay5sb2dvXHJcbiAgICBpY29uVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJpbWdVbmxvY2tcIilcclxuICAgIGlmICh1bmxvY2sudW5sb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICBpY29uVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFVubG9ja1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbm9tVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQobm9tVW5sb2NrKVxyXG4gICAgbm9tVW5sb2NrLmlubmVyVGV4dCA9IHVubG9jay5uYW1lXHJcblxyXG4gICAgbGV0IGRlc2NyVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChkZXNjclVubG9jaylcclxuICAgIGRlc2NyVW5sb2NrLmlubmVyVGV4dCA9IFwiQXVnbWVudGF0aW9uIGRlIFwiICsgdW5sb2NrLnR5cGVyYXRpbyArIFwiIHhcIiArIHVubG9jay5yYXRpb1xyXG5cclxuICAgIGxldCBzZXVpbFVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoc2V1aWxVbmxvY2spXHJcbiAgICBzZXVpbFVubG9jay5pbm5lclRleHQgPSBcIlNldWlsOiBcIiArIHVubG9jay5zZXVpbFxyXG59XHJcblxyXG5cclxuLy8gVsOpcmlmaWUgc2kgdW4gdW5sb2NrIGRvaXQgw6p0cmUgZMOpdsOpcm91aWxsZVxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZVbmxvY2sod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBQb3VyIHRvdXMgbGVzIHVubG9ja3NcclxuICAgICQuZWFjaCh3b3JsZC5hbGx1bmxvY2tzLnBhbGxpZXIsIGZ1bmN0aW9uKGluZGV4LCB1bmxvY2spe1xyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ3VubG9jayBuJ2VzdCBwYXMgZMOpasOgIGTDqXbDqXJvdWlsbMOpXHJcbiAgICAgICAgaWYgKHVubG9jay51bmxvY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAvLyBTaSBjJ2VzdCB1biB1bmxvY2sgcG91ciB1biBwcm9kdWl0IHBhcnRpY3VsaWVyXHJcbiAgICAgICAgICAgIGlmICh1bmxvY2suaWRjaWJsZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiByw6ljdXDDqHJlIGxlIHByb2R1aXRcclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0OiBQcm9kdWN0ID0gZmluZFByb2R1Y3Qod29ybGQsIHVubG9jay5pZGNpYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGTDqXBhc3PDqSBsZSBzZXVpbCBwcm9kdWl0XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5xdWFudGl0ZSA+PSB1bmxvY2suc2V1aWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEw6l2w6lyb3VpbGxlciBsJ3VubG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIHVubG9jay51bmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC5uYW1lICsgXCIgaGFzIHVubG9ja2VkIGEgeFwiICsgdW5sb2NrLnJhdGlvICsgXCIgXCIgKyB1bmxvY2sudHlwZXJhdGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwbGlxdWVyIGxlcyBjaGFuZ2VtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh1bmxvY2sudHlwZXJhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJWSVRFU1NFXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZpdGVzc2UgPSBwcm9kdWN0LnZpdGVzc2UgLyB1bmxvY2sucmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC50aW1lbGVmdCAvIHVubG9jay5yYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR0FJTlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5yZXZlbnUgPSBwcm9kdWN0LnJldmVudSAqIHVubG9jay5yYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNpIGMnZXN0IHVuIHVubG9jayBnbG9iYWxcclxuICAgICAgICAgICAgZWxzZSBpZiAodW5sb2NrLmlkY2libGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1czogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSB0b3VzIGxlcyBwcm9kdWl0cyB2YWxpZGVudCBsZXMgc2V1aWxzXHJcbiAgICAgICAgICAgICAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5xdWFudGl0ZSA8IHVubG9jay5zZXVpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNpIHRvdXMgbGVzIHByb2R1aXRzIHZhbGlkZW50IGxlcyBzZXVpbHMsIG9uIGFwcGxpcXVlIGxlIGNoYW5nZW1lbnRcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV29ybGQgaGFzIGEgZ2xvYmFsIHVubG9jayB4XCIgKyB1bmxvY2sucmF0aW8gKyBcIiBcIiArIHVubG9jay50eXBlcmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2godW5sb2NrLnR5cGVyYXRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlZJVEVTU0VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZpdGVzc2UgPSBwcm9kdWN0LnZpdGVzc2UgLyB1bmxvY2sucmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLyB1bmxvY2sucmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR0FJTlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucmV2ZW51ID0gcHJvZHVjdC5yZXZlbnUgKiB1bmxvY2sucmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgc2VydmVyVXJsIH0gZnJvbSBcIi5cIjtcclxuXHJcbi8vIEVudm9pIGF1IHNlcnZldXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUb1NlcnZlcih0eXBlOiBzdHJpbmcsIGNvbnRlbnQ6IGFueSkge1xyXG4gICAgJC5hamF4KHNlcnZlclVybCArIFwiYWR2ZW50dXJlaXNpcy9nZW5lcmljL1wiICsgdHlwZSwge1xyXG4gICAgICAgIHR5cGU6IFwiUFVUXCIsXHJcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpLFxyXG4gICAgICAgIHN0YXR1c0NvZGU6IHtcclxuICAgICAgICAgICAgMzA0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBY3Rpb24gbm9uIHByaXNlIGVuIGNvbXB0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBlY2hlYyBkZSBsYSByZXF1w6p0ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IGxhc3RVcGRhdGVMaXN0LCBzaG93UHJvZHVjdHMsIHN0YXJ0UHJvZHVjdCwgZmlsbExhc3RVcGRhdGUgfSBmcm9tIFwiLi9BcHAvUHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhlYWRlciwgdHJhbnNmb3JtIH0gZnJvbSBcIi4vQXBwL0hlYWRlclwiXHJcbmltcG9ydCB7IHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vQXBwL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCB7IGFkZFNlbGVjdGVkLCBidXlhYmxlUHJvZHVjdHMsIHNob3dTaWRlQmFyIH0gZnJvbSBcIi4vQXBwL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9BcHAvTWVudVwiO1xyXG5pbXBvcnQgeyBidXlhYmxlTWFuYWdlcnMsIGRpc3BsYXlNYW5hZ2VyLCB2ZXJpZk1hbmFnZXJzIH0gZnJvbSBcIi4vTW9kYWxzL01hbmFnZXJzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlVbmxvY2tzIH0gZnJvbSBcIi4vTW9kYWxzL1VubG9ja3NcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNhc2hVcGdyYWRlcyB9IGZyb20gXCIuL01vZGFscy9DYXNoVXBncmFkZXNcIjtcclxuaW1wb3J0IHsgc2VuZFRvU2VydmVyIH0gZnJvbSBcIi4vUmVzdENhbGxzXCI7XHJcblxyXG5cclxuLy8gVXNlcm5hbWVcclxuZXhwb3J0IHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcblxyXG4vLyBDaGFuZ2VtZW50IGR1IHBzZXVkb1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcm5hbWUobmV3VXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdXNlcm5hbWUgPSBuZXdVc2VybmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgbmV3VXNlcm5hbWUpO1xyXG5cclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XCJYLXVzZXJcIjogdXNlcm5hbWV9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBVcmwgc2VydmV1ciBsb2NhbFxyXG5jb25zdCBzZXJ2ZXJMb2NhbDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4vLyBVcmwgc2VydmV1ciBoZXJva3VcclxuY29uc3Qgc2VydmVySGVyb2t1OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3QuaGVyb2t1YXBwLmNvbS9cIlxyXG5cclxuLy8gVXJsIHNlcnZldXIgdGVzdFxyXG5jb25zdCBzZXJ2ZXJUZXN0OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcblxyXG5cclxuLy8gU2VydmV1ciB1dGlsaXPDqVxyXG5leHBvcnQgdmFyIHNlcnZlclVybCA9IHNlcnZlckxvY2FsO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIENoYXJnZW1lbnQgZHUgcHNldWRvIGR1IGpvdWV1clxyXG4gICAgY29uc29sZS5sb2codXNlcm5hbWUpO1xyXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpO1xyXG5cclxuICAgIC8vIEFmZmljaGFnZSBkdSBtb25kZSBkdSBqb3VldXJcclxuICAgICQuZ2V0SlNPTihzZXJ2ZXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy93b3JsZFwiLCBmdW5jdGlvbiAod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAgICAgLy8gQWZmaWNoYWdlIGR1IG1vbmRlIGNoYXJnw6lcclxuICAgICAgICBjb25zb2xlLmxvZyh3b3JsZClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRJTUVMRUZUID0gXCIgKyB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0WzRdLnRpbWVsZWZ0KTtcclxuICAgICAgICBmaWxsTGFzdFVwZGF0ZSh3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpc2F0aW9uIGFyZ2VudCBkZSBiYXNlXHJcbiAgICAgICAgLy8gd29ybGQubW9uZXkgPSAwO1xyXG5cclxuICAgICAgICAvLyBBZmZpY2hhZ2UgSFRNTFxyXG4gICAgICAgIGRpc3BsYXlIZWFkZXIoc2VydmVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgc2hvd1Byb2R1Y3RzKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIHNob3dTaWRlQmFyKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNZW51KHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5TWFuYWdlcihzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5Q2FzaFVwZ3JhZGVzKHNlcnZlclVybCwgd29ybGQpO1xyXG5cclxuICAgICAgICAvLyBBY3Rpb25zIGR5bmFtaXF1ZXNcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIENhbGN1bCBkdSBzY29yZVxyXG4gICAgICAgICAgICBjYWxjU2NvcmUoc2VydmVyVXJsLCB3b3JsZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6lyaWZpY2F0aW9uIGFjaGF0cyBtYW5hZ2Vyc1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdmVyaWZNYW5hZ2Vycyh3b3JsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFmZmljaGFnZSBhY2hldGFibGVzXHJcbiAgICAgICAgICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZClcclxuICAgICAgICAgICAgYnV5YWJsZU1hbmFnZXJzKHdvcmxkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpIGwnb3B0aW9uIGQnYWpvdXQgc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGUsIG9uIHN5bmNocm9uaXNlIGF2ZWMgZW4gZm9uY3Rpb24gZHUgc2NvcmVcclxuICAgICAgICAgICAgLy9pZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAvL3NldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBDYWxjdWwgZHUgc2NvcmVcclxuZnVuY3Rpb24gY2FsY1Njb3JlKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIHByb2R1aXRcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbGUgcHJvZHVpdCBlc3QgZW4gY291cnMgZGUgcHJvZHVjdGlvblxyXG4gICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0ICE9IDApIHtcclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBsZSB0ZW1wcyBkZSBwcm9kdWN0aW9uIHJlc3RhbnRcclxuICAgICAgICAgICAgbGV0IHRpbWVQYXNzZWQ6IG51bWJlciA9IERhdGUubm93KCkgLSBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLSB0aW1lUGFzc2VkO1xyXG5cclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBwb3VyY2VudGFnZSBkZSBwcm9kdWN0aW9uIHJlc3RhbnQgZXQgb24gYWN0dWFsaXNlIGxhIGJhciBkZSBwcm9ncmVzc2lvblxyXG4gICAgICAgICAgICBsZXQgcG91cmNlbnRhZ2U6IG51bWJlciA9IHByb2R1Y3QudGltZWxlZnQgLyBwcm9kdWN0LnZpdGVzc2U7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIHBvdXJjZW50YWdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpIGxlIG5vdXZlYXUgdGVtcHMgcmVzdGFudCBlc3QgaW5mw6lyaWV1ciBvdSDDqWdhbCDDoCAwXHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE9uIGFqb3V0ZSBsZSByZXZlbnUgZHUgcHJvZHVpdFxyXG4gICAgICAgICAgICAgICAgbGV0IHJldmVudTogbnVtYmVyID0gcHJvZHVjdC5yZXZlbnUgKiBwcm9kdWN0LnF1YW50aXRlO1xyXG4gICAgICAgICAgICAgICAgYWRkU2NvcmUod29ybGQsIHJldmVudSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT24gcsOpaW5pdGlhbGlzZSBsYSBwcm9ncmVzc2lvbiBkZSBsYSBwcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaSBsZSBwcm9kdWl0IG4nZXN0IHBhcyBlbiBjb3VycyBkZSBwcm9kdWN0aW9uIGV0IGEgdW4gbWFuYWdlclxyXG4gICAgICAgIGVsc2UgaWYgKChwcm9kdWN0LnRpbWVsZWZ0ID09IDApICYmIChwcm9kdWN0Lm1hbmFnZXJVbmxvY2tlZCA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAvLyBPbiBsYW5jZSBsYSBwcm9kdWN0aW9uIGR1IHByb2R1aXRcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXSA9IERhdGUubm93KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIENhbGN1bCBkdSBzY29yZVxyXG5mdW5jdGlvbiBhZGRTY29yZSh3b3JsZDogV29ybGQsIHNjb3JlOiBudW1iZXIpIHtcclxuICAgIC8vIEFqb3V0IGRlIGwnYXJnZW50XHJcbiAgICB3b3JsZC5tb25leSArPSBzY29yZTtcclxuXHJcbiAgICAvLyBBam91dCBkdSBzY29yZVxyXG4gICAgd29ybGQuc2NvcmUgKz0gc2NvcmU7XHJcblxyXG4gICAgLy8gQWZmaWNoZSBkdSBub3V2ZWF1IHNvbGRlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxufVxyXG5cclxuXHJcbi8vIETDqWJsb3F1ZSBtYW5hZ2VyIHBvdXIgdW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hJZChtYW5hZ2VyOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICBpZiAobWFuYWdlci5pZGNpYmxlID09IHByb2R1Y3QuaWQpIHtcclxuICAgICAgICAgICAgcHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZW5kVG9TZXJ2ZXIoXCJtYW5hZ2VyXCIsIG1hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBSZXRyb3V2ZXIgdW4gcHJvZHVpdCDDoCBwYXJ0aXIgZCd1biBpZFxyXG5leHBvcnQgZnVuY3Rpb24gZmluZFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBpZFByb2R1Y3Q6IG51bWJlcik6IFByb2R1Y3Qge1xyXG4gICAgbGV0IHA6IFByb2R1Y3QgPSBudWxsO1xyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QuaWQudG9TdHJpbmcoKSA9PSBpZFByb2R1Y3QudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBwID0gcHJvZHVjdFxyXG4gICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBwO1xyXG59IiwiaW1wb3J0IHtwcm9ncmVzc0Jhckxpc3R9IGZyb20gXCIuL1Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpIHtcclxuICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uIChsaWduZSlcclxuICAgIGxldCBwcm9kdWN0UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RQcm9ncmVzcyk7XHJcbiAgICBwcm9kdWN0UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGxldCBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuTGluZShwcm9kdWN0UHJvZ3Jlc3MsIHtcclxuICAgICAgICBzdHJva2VXaWR0aDogMTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcclxuICAgICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgICAgICBjb2xvcjogJyNGRkVBODInLFxyXG4gICAgICAgIHRyYWlsQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICB0cmFpbFdpZHRoOiAxLFxyXG4gICAgICAgIHN2Z1N0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH0sXHJcbiAgICAgICAgZnJvbTogeyBjb2xvcjogJyNGRkVBODInIH0sXHJcbiAgICAgICAgdG86IHsgY29sb3I6ICcjRUQ2QTVBJyB9LFxyXG4gICAgICAgIHN0ZXA6IChzdGF0ZSwgYmFyKSA9PiB7XHJcbiAgICAgICAgICAgIGJhci5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2dyZXNzQmFyTGlzdFtwcm9kdWN0LmlkXSA9IGJhcjtcclxuICAgIGJhci5hbmltYXRlKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGlkLCBwb3VyY2VudGFnZSkge1xyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W2lkXS5zZXQocG91cmNlbnRhZ2UpXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==