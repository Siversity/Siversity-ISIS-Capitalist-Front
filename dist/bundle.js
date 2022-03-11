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
    var opt1 = document.createElement("option");
    selectBarre.appendChild(opt1);
    opt1.id = "optProduit" + 7;
    opt1.value = "" + 7;
    opt1.text = "Tous les produits";
    opt1.setAttribute("selected", "");
    $.each(world.products.product, function (index, product) {
        var opt = document.createElement("option");
        selectBarre.appendChild(opt);
        opt.id = "optProduit" + product.id;
        opt.value = "" + product.id;
        opt.text = product.name;
    });
    var opt2 = document.createElement("option");
    selectBarre.appendChild(opt2);
    opt2.id = "optProduit" + 0;
    opt2.value = "" + 0;
    opt2.text = "Unlocks globaux";
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
    //$.each(world.allunlocks.pallier, function(index,unlock){
    //    affichage(server,unlock);
    //})
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
/* harmony import */ var _Modals_CashUpgrades__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modals/CashUpgrades */ "./src/Modals/CashUpgrades.ts");








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
            sendToServer("manager", manager);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87UUFDbkQsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRWpGLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDLENBQUM7QUFFTixDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNIOzs7R0FHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0THdDO0FBQzNDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRCxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksc0RBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksc0RBQWU7QUFDbkI7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL0hlYWRlci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL01lbnUudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9kdWN0cy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1NpZGVCYXIudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL01vZGFscy9DYXNoVXBncmFkZXMudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL01vZGFscy9NYW5hZ2Vycy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvTW9kYWxzL1VubG9ja3MudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL1Jlc3RDYWxscy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gcHJlbWnDqHJlIGNvbG9uZSBhdmVjIGxlIG5vbSBldCBsZSBsb2dvXHJcbiAgICBsZXQgbW9uZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmRlKTtcclxuICAgIG1vbmRlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJtb25kZVwiLCBcImJjY0ZvbnRcIik7XHJcblxyXG4gICAgLy9Mb2dvXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgICBsb2dvLnNyYyA9IHNlcnZlciArIHdvcmxkLmxvZ287XHJcblxyXG4gICAgLy9Ob21cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiIFwiICsgd29ybGQubmFtZTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWNvbmQgZW50w6p0ZSwgbCdhcmdlbnRcclxuICAgIGxldCBtb25leUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25leUNvbClcclxuICAgIG1vbmV5Q29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIpXHJcblxyXG4gICAgLy9MJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vbmV5Q29sLmFwcGVuZENoaWxkKG1vbmV5KTtcclxuICAgIG1vbmV5LmlkID0gXCJ3b3JsZE1vbmV5XCI7XHJcbiAgICBtb25leS5jbGFzc0xpc3QuYWRkKFwibW9uZXlcIik7XHJcbiAgICBsZXQgYXJnZW50ID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuICAgIG1vbmV5LmlubmVySFRNTCA9IGFyZ2VudDtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBkZXJuaWVyIGVudMOodGUsIFVzZXIgSURcclxuICAgIGxldCB1c2VyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyQ29sKTtcclxuICAgIHVzZXJDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuXHJcbiAgICAvKlxyXG4gICAgLy9Vc2VyIElEXHJcbiAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlkQ29sLmFwcGVuZENoaWxkKHVzZXJJZCk7XHJcbiAgICB1c2VySWQuY2xhc3NMaXN0LmFkZChcInVzZXJJZFwiKTtcclxuICAgIHVzZXJJZC5pbm5lckhUTUwgPSBcIklEOlwiO1xyXG4gICAgKi9cclxuXHJcbiAgICBsZXQgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB1c2VyQ29sLmFwcGVuZENoaWxkKHVzZXJSb3cpO1xyXG4gICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG5cclxuICAgIGxldCBsYWJlbFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGxhYmVsVXNlcik7XHJcbiAgICBsYWJlbFVzZXIuaHRtbEZvciA9IFwiaW5wdXRVc2VyXCI7XHJcbiAgICBsYWJlbFVzZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIilcclxuXHJcbiAgICBsZXQgaW5wdXRVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChpbnB1dFVzZXIpO1xyXG4gICAgaW5wdXRVc2VyLmlkID0gXCJpbnB1dFVzZXJcIlxyXG4gICAgaW5wdXRVc2VyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XHJcbiAgICBpbnB1dFVzZXIudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgaW5wdXRVc2VyLnBsYWNlaG9sZGVyID0gXCJQc2V1ZG9cIjtcclxuICAgIGlucHV0VXNlci52YWx1ZSA9IHVzZXJuYW1lO1xyXG4gICAgaW5wdXRVc2VyLnJlYWRPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgYnV0dG9uVXNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGJ1dHRvblVzZXJEaXYpO1xyXG5cclxuICAgIGxldCBidXR0b25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGJ1dHRvblVzZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uSW5wdXQpO1xyXG4gICAgYnV0dG9uSW5wdXQuaWQgPSBcInVzZXJCdXR0b25DaGVja1wiO1xyXG4gICAgYnV0dG9uSW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGJ1dHRvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJidG4tY2hlY2tcIik7XHJcblxyXG4gICAgbGV0IGJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgYnV0dG9uVXNlckRpdi5hcHBlbmRDaGlsZChidXR0b25MYWJlbCk7XHJcbiAgICBidXR0b25MYWJlbC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIik7XHJcbiAgICBidXR0b25MYWJlbC5odG1sRm9yID0gXCJ1c2VyQnV0dG9uQ2hlY2tcIjtcclxuICAgIGJ1dHRvbkxhYmVsLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2JpIGJpLWNoZWNrLXNxdWFyZSc+PC9pPlwiO1xyXG4gICAgJChidXR0b25MYWJlbCkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChpbnB1dFVzZXIucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgaW5wdXRVc2VyLnJlYWRPbmx5ID0gZmFsc2U7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRVc2VyLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VXNlcm5hbWUoaW5wdXRVc2VyLnZhbHVlKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWxldXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKHZhbGV1ciA8IDEwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMik7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPCAxMDAwMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDApO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyID49IDEwMDAwMDApIHtcclxuICAgICAgICByZXMgPSB2YWxldXIudG9QcmVjaXNpb24oNCk7XHJcbiAgICAgICAgcmVzID0gcmVzLnJlcGxhY2UoL2VcXCsoLiopLywgXCIgMTA8c3VwPiQxPC9zdXA+XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG4vLyBDcsOpYXRpb24gY29udGFpbmVyIGR1IGhlYWRlclxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1lbnUod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIG5hdmJhclxyXG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIsIFwiZml4ZWQtYm90dG9tXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHVubG9ja3NcclxuICAgIGxldCB1bmxvY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bmxvY2tzKTtcclxuICAgIHVubG9ja3MuY2xhc3NMaXN0LmFkZChcInVubG9ja3NcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gVW5sb2Nrc1xyXG4gICAgbGV0IGJ1dHRvblVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIHVubG9ja3MuYXBwZW5kQ2hpbGQoYnV0dG9uVW5sb2NrKTtcclxuICAgIGJ1dHRvblVubG9jay5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIilcclxuICAgIGJ1dHRvblVubG9jay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLCBcIm1vZGFsXCIpXHJcbiAgICBidXR0b25VbmxvY2suc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbW9kYWxVbmxvY2tcIilcclxuICAgIGJ1dHRvblVubG9jay5pbm5lclRleHQgPSBcIlVubG9ja3MgXCI7XHJcblxyXG5cclxuICAgIC8vY3LDqWF0aW9uIGNhc2ggdXBncmFkZXNcclxuICAgIGxldCBjYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjYXNoKTtcclxuICAgIGNhc2guY2xhc3NMaXN0LmFkZChcImNhc2hcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gVW5sb2Nrc1xyXG4gICAgbGV0IGJ1dHRvbkNhc2hVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGNhc2guYXBwZW5kQ2hpbGQoYnV0dG9uQ2FzaFVwKTtcclxuICAgIGJ1dHRvbkNhc2hVcC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIilcclxuICAgIGJ1dHRvbkNhc2hVcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLCBcIm1vZGFsXCIpXHJcbiAgICBidXR0b25DYXNoVXAuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbW9kYWxDYXNoVXBcIilcclxuICAgIGJ1dHRvbkNhc2hVcC5pbm5lclRleHQgPSBcIkNhc2hVcGdyYWRlcyBcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBhbmdlbHMgdXBncmFkZXNcclxuICAgIGxldCBhbmdlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFuZ2Vscyk7XHJcbiAgICBhbmdlbHMuY2xhc3NMaXN0LmFkZChcImFuZ2Vsc1wiKTtcclxuICAgIGFuZ2Vscy5pbm5lckhUTUwgPSBcIkFuZ2VscyB1cGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIG1hbmFnZXJzXHJcbiAgICBsZXQgbWFuYWdlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1hbmFnZXJzKTtcclxuICAgIG1hbmFnZXJzLmNsYXNzTGlzdC5hZGQoXCJtYW5hZ2Vyc1wiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBNYW5hZ2VyXHJcbiAgICBsZXQgYnV0dG9uTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIG1hbmFnZXJzLmFwcGVuZENoaWxkKGJ1dHRvbk1hbmFnZXIpO1xyXG4gICAgYnV0dG9uTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIiwgXCJtb2RhbFwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNtb2RhbE1hbmFnZXJcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuaW5uZXJUZXh0ID0gXCJNYW5hZ2VycyBcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBiYWRnZVxyXG4gICAgbGV0IGJhZGdlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYnV0dG9uTWFuYWdlci5hcHBlbmRDaGlsZChiYWRnZU1hbmFnZXIpO1xyXG4gICAgYmFkZ2VNYW5hZ2VyLmlkID0gXCJiYWRnZU1hbmFnZXJcIlxyXG4gICAgYmFkZ2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiLCBcImJnLXNlY29uZGFyeVwiKTtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gaW52ZXN0b3JzXHJcbiAgICBsZXQgaW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChpbnZlc3RvcnMpO1xyXG4gICAgaW52ZXN0b3JzLmNsYXNzTGlzdC5hZGQoXCJpbnZlc3RvcnNcIik7XHJcbiAgICBpbnZlc3RvcnMuaW5uZXJIVE1MID0gXCJJbnZlc3RvcnNcIjtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBhZGRQcm9ncmVzc0Jhciwgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuaW1wb3J0IHthZGRTZWxlY3RlZCwgYnV5YWJsZVByb2R1Y3RzLCBnZXRDb3N0UHJvZHVjdCwgZ2V0TWF4UHJvZHVjdH0gZnJvbSBcIi4vU2lkZUJhclwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgc2VuZFRvU2VydmVyIH0gZnJvbSBcIi4uL1Jlc3RDYWxsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9ncmVzc0Jhckxpc3Q6IGFueVtdID0gW107XHJcbmV4cG9ydCBjb25zdCBsYXN0VXBkYXRlTGlzdCA6IG51bWJlcltdID0gW107XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxMYXN0VXBkYXRlKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGFzdFVwZGF0ZUxpc3RbaV0gPSBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcHJpbmNpcGFsZSBkJ2FwcGVsIGRlcyBwcm9kdWl0c1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2R1Y3RzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzXCIpO1xyXG5cclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwicFwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZG91YmxlQm9yZGVyUHJvZHVjdFwiKTtcclxuXHJcbiAgICAgICAgLy8gVGl0cmUgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0VGl0bGUpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiLCBcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmlubmVySFRNTCA9IHByb2R1Y3QubmFtZTtcclxuXHJcbiAgICAgICAgLy8gSW1hZ2UgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0SW1hZ2UpO1xyXG4gICAgICAgIHByb2R1Y3RJbWFnZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdEltYWdlXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5pZCA9IFwiaW1nXCIgKyBwcm9kdWN0LmlkO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0SWNvbnNcIilcclxuICAgICAgICAvLyBTaSBjZSBwcm9kdWl0IG4nYSBwYXMgw6l0w6kgZMOpYmxvcXXDqSwgb24gbCdhZmZpY2hlIGVuIGdyaXNcclxuICAgICAgICBpZiAocHJvZHVjdC5xdWFudGl0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFByb2R1Y3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlLnNyYyA9IHNlcnZlciArIHByb2R1Y3QubG9nb1xyXG4gICAgICAgIC8vIEFqb3V0IGV2ZW50IHByb2R1Y3Rpb25cclxuICAgICAgICAkKGltYWdlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UHJvZHVjdChwcm9kdWN0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCYXJyZSBkZSBwcm9ncmVzc2lvblxyXG4gICAgICAgIGFkZFByb2dyZXNzQmFyKHNlcnZlciwgcHJvZHVjdCwgY29sKTtcclxuXHJcbiAgICAgICAgLy8gTGV2ZWwgLS0+IFF1YW50aXTDqSAoY29sb25uZSlcclxuICAgICAgICBsZXQgcHJvZHVjdFF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RRdGUpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInByb2R1Y3RMZXZlbFwiKTtcclxuICAgICAgICBsZXQgbGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBwcm9kdWN0UXRlLmFwcGVuZENoaWxkKGxldmVsKTtcclxuICAgICAgICBsZXZlbC5pZCA9IFwicXRlXCIgKyBwcm9kdWN0LmlkO1xyXG4gICAgICAgIGxldmVsLmNsYXNzTGlzdC5hZGQoXCJiY2NGb250XCIpO1xyXG4gICAgICAgIGxldmVsLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0Q29udGFpbmVyKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJtdC0zXCIpO1xyXG5cclxuICAgICAgICAvLyBOYnIgbGV2ZWwgw6AgYWNoZXRlciAoY29sb25uZSlcclxuICAgICAgICBsZXQgcHJvZHVjdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0QWRkKTtcclxuICAgICAgICBwcm9kdWN0QWRkLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkLWZsZXhcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIpO1xyXG4gICAgICAgIGxldCBwcm9kdWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcm9kdWN0QWRkLmFwcGVuZENoaWxkKHByb2R1Y3RCdXR0b24pO1xyXG4gICAgICAgIHByb2R1Y3RCdXR0b24uaWQgPSBcImFkZFwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIHByb2R1Y3RCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvZHVjdFwiLCBcImFsaWduLW1pZGRsZVwiKTtcclxuICAgICAgICAkKHByb2R1Y3RCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBDb8O7dCBham91dCBsZXZlbCAoY29sb25uZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdENvc3QpO1xyXG4gICAgICAgIHByb2R1Y3RDb3N0LmlkID0gXCJjb3N0XCIgKyBwcm9kdWN0LmlkO1xyXG4gICAgICAgIHByb2R1Y3RDb3N0LmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaW5uZXJIVE1MID0gKHByb2R1Y3QuY291dCArIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSkpLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGRlIGxhbmNlciBsYSBwcm9kdWN0aW9uIGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIHBldXQgYWN0aXZlciBsZSBwcm9kdWl0XHJcbiAgICBpZiAodmVyaWZQcm9kdWN0KHByb2R1Y3QpKSB7XHJcbiAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMTAwKTtcclxuICAgICAgICBzZW5kVG9TZXJ2ZXIoXCJwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IHF1ZSBwcm9kdWl0IGVzdCBhY3RpdmFibGVcclxuZnVuY3Rpb24gdmVyaWZQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBib29sZWFuIHtcclxuICAgIGlmICgocHJvZHVjdC5xdWFudGl0ZSA+IDApICYmIChwcm9kdWN0LnRpbWVsZWZ0ID09IDApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGQnYWpvdXRlciB1bmUgcXVhbnRpdMOpIMOgIHVuIHByb2R1aXRcclxuZnVuY3Rpb24gYWRkUHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIG4nZXN0IHBhcyBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgIT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgY2/Du3RcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIGFkZFNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy8gT24gbW9kaWZpZSBsJ2FmZmljaGFnZSBkdSBwcm9kdWl0XHJcbiAgICAgICAgbW9kaWZ5UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCwgYWRkU2VsZWN0ZWQsIGNvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbWF4IGFjaGV0YWJsZSBldCBzb24gY291dFxyXG4gICAgICAgIGxldCBtYXggPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIG1heCwgY29zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT24gZW52b2llIGxlcyBkb25uw6llcyBhdSBzZXJ2ZXVyXHJcbiAgICBzZW5kVG9TZXJ2ZXIoXCJwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gZWZmZWN0dWFudCBsZXMgY2hhbmdlbWVudHMgZCdhZmZpY2hhZ2UgbGnDqXMgw6AgbCdhY2hhdCBkJ3VuIHByb2R1aXRcclxuZnVuY3Rpb24gbW9kaWZ5UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QsIHF1YW50aXR5OiBudW1iZXIsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBhc3NleiBkJ2FyZ2VudFxyXG4gICAgaWYgKHdvcmxkLm1vbmV5ID4gY29zdCkge1xyXG4gICAgICAgIC8vIE9uIGFqb3V0ZSBsYSBxdWFudGl0w6kgYWNoZXTDqWVcclxuICAgICAgICBwcm9kdWN0LnF1YW50aXRlICs9IHF1YW50aXR5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXRlXCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIE9uIHNvdXN0cmFpdCBsJ2FyZ2VudCBkw6lwZW5zw6lcclxuICAgICAgICB3b3JsZC5tb25leSAtPSBjb3N0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgICAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIHJlY2FsY3VsZSBsZSBtYXhcclxuICAgICAgICAgICAgcXVhbnRpdHkgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICAgICAgLy8gT24gY2hhbmdlIGwnYWZmaWNoYWdlIHN1ciBjaGFxdWUgcHJvZHVpdCBlbiBmb25jdGlvbiBkdSBub3V2ZWF1IHNvbGRlXHJcbiAgICAgICAgICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbm91dmVhdSBjb8O7dCBhcHLDqHMgYWNoYXRcclxuICAgICAgICBsZXQgbmV3Q29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIHF1YW50aXR5KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHRyYW5zZm9ybShuZXdDb3N0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTJ2lsIHMnYWdpdCBkdSAxZXIgYWNoYXQgc3VyIHVuIHByb2R1aXQsIG9uIGwnYWZmaWNoZSBlbiBjbGFpclxyXG4gICAgICAgIGxldCBpbWFnZVByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1wiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgaWYgKGltYWdlUHJvZHVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFByb2R1Y3RcIikpIHtcclxuICAgICAgICAgICAgaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFByb2R1Y3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBZGRQcm9kdWN0czogYW55W10gPSBbMSwgMTAsIDEwMCwgXCJNYXhcIl07XHJcbmV4cG9ydCB2YXIgYWRkU2VsZWN0ZWQ6IGFueSA9IDE7XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY3LDqWFudCBsYSBiYXJlIGRlIG1lbnUgw6AgZHJvdGllIGNvbnRlbmFudCBsZSBzw6lsZWN0ZXVyIHN1ciBsYSBxdWFudGl0w6kgZGUgcHJvZHVpdHMgw6AgYWNoZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVCYXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gT2J0ZW50aW9uIGR1IGNvbnRhaW5lciBkZXMgcHJvZHVpdHNcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzXCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkdSBjb250YWluZXIgZHUgbWVudVxyXG4gICAgbGV0IHNpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVDb250YWluZXIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5pZCA9IFwic2lkZU1lbnVcIjtcclxuICAgIC8vIENlbnRyYWdlIGR1IG1lbnUgw6AgZHJvaXRlXHJcbiAgICBzaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvbi1hYnNvbHV0ZVwiLCBcInRvcC01MFwiLCBcImVuZC0wXCIsIFwidHJhbnNsYXRlLW1pZGRsZS15XCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkJ3VuZSBsaXN0ZSBkZSBib3V0b25zIMOgIGxhIHZlcnRpY2FsZVxyXG4gICAgbGV0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcclxuICAgIGxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1ncm91cC12ZXJ0aWNhbFwiLCBcInNpZGVDb250YWluZXJcIik7XHJcbiAgICBsaXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJncm91cFwiKTtcclxuXHJcbiAgICAvLyBPbiBnw6luw6hyZSBkZXMgYm91dG9ucyBkZSB0eXBlIHJhZGlvXHJcbiAgICBsaXN0QWRkUHJvZHVjdHMuZm9yRWFjaChhZGROdW1iZXIgPT4ge1xyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsJ2lucHV0IGR1IGJvdXRvblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlcklucHV0KTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5pZCA9IFwiYnV0dG9uXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0Lm5hbWUgPSBcImJ0bnJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxyXG4gICAgICAgIC8vIEEgbCdpbml0aWFsaXNhdGlvbiwgbCdvcHRpb24gKzEgZXN0IGNlbGxlIGNvY2jDqWUgcGFyIGTDqWZhdXRcclxuICAgICAgICBpZiAoYWRkTnVtYmVyID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGFkZE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsZSBsYWJlbCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVyQnV0dG9uKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEJ1dHRvblwiLCBcImFkZEJ1dHRvbk91dGxpbmVcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLnNldEF0dHJpYnV0ZShcImZvclwiLCBhZGROdW1iZXJJbnB1dC5pZClcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uaW5uZXJIVE1MID0gXCIrXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgLy8gRXZlbnQgOiBtb2RpZmljYXRpb24gZHUgc8OpbGVjdGV1ciBhdSBjbGljXHJcbiAgICAgICAgJChhZGROdW1iZXJCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWRkU2VsZWN0ZWQgPSBhZGROdW1iZXI7XHJcbiAgICAgICAgICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNoYW5nZWFudCBsJ2FmZmljaGFnZSBsacOpIMOgIGwnYWNoYXQgZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBidXlhYmxlUHJvZHVjdHMod29ybGQ6IFdvcmxkKSB7XHJcblxyXG4gICAgLy8gU2kgbCdvcHRpb24gZXN0IHVuZSB2YWxldXIgY29uc3RhbnRlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgIT0gXCJNYXhcIikge1xyXG4gICAgICAgIHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgYm91dG9uXHJcbiAgICAgICAgICAgIGxldCBhZGRQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdC5pbm5lckhUTUwgPSBcIitcIiArIGFkZFNlbGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgY2/Du3RcclxuICAgICAgICAgICAgbGV0IGNvc3Q6IG51bWJlciA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIGFkZFNlbGVjdGVkKTtcclxuICAgICAgICAgICAgbGV0IGNvc3RQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGNvc3RQcm9kdWN0LmlubmVySFRNTCA9IHRyYW5zZm9ybShjb3N0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpIGxlIGpvdWV1ciBuJ2EgcGFzIGFzc2V6IGQnYXJnZW50IHBvdXIgYWNoZXRlciBsZSBwcm9kdWl0LCBvbiBkw6lzYWN0aXZlIGxlIGJvdXRvblxyXG4gICAgICAgICAgICBpZiAod29ybGQubW9uZXkgPCBjb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBhZGRQcm9kdWN0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTaW5vbiBvbiBsJ2FjdGl2ZVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFByb2R1Y3QucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBjb25zaXN0ZSDDoCBsYSB2YWxldXIgbWF4XHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1heDogbnVtYmVyID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgbWF4O1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgY2/Du3RcclxuICAgICAgICAgICAgbGV0IGNvc3Q6IG51bWJlciA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgY2/Du3QgZCd1biBncm91cGUgZGUgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvc3RQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QsIGFkZE51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpO1xyXG4gICAgbGV0IG51bWVyYXRvciA9IDEgLSBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIGFkZE51bWJlcik7XHJcbiAgICBsZXQgZGVub21pbmF0b3IgPSAxIC0gcHJvZHVjdC5jcm9pc3NhbmNlXHJcbiAgICBsZXQgY291dCA9ICh1biAqIG51bWVyYXRvcikgLyBkZW5vbWluYXRvcjtcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgY2/Du3QgY2FsY3Vsw6lcclxuICAgIHJldHVybiBjb3V0O1xyXG59XHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgbm9tYnJlIG1heCBkZSBwcm9kdWl0cyBhY2hldGFibGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpOyBcclxuICAgIGxldCBudW1lcmF0b3I6IG51bWJlciA9IE1hdGgubG9nKC0od29ybGQubW9uZXkgLSB3b3JsZC5tb25leSAqIHByb2R1Y3QuY3JvaXNzYW5jZSAtIHVuKSAvIHVuKTtcclxuICAgIGxldCBkZW5vbWluYXRvcjogbnVtYmVyID0gTWF0aC5sb2cocHJvZHVjdC5jcm9pc3NhbmNlKTtcclxuICAgIGxldCBtYXg6IG51bWJlciA9IChudW1lcmF0b3IgLyBkZW5vbWluYXRvcilcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgbWF4IGRlIHByb2R1aXRzXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtYXgpO1xyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi4vQXBwL0hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDYXNoVXBncmFkZXMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgY3JlYXRpb25Nb2RhbCgpO1xyXG4gICAgY3JlYXRpb25Cb2R5Q2FzaChzZXJ2ZXIsIHdvcmxkKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRpb25Nb2RhbCgpIHtcclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ2FzaFVwXCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIERpYWxvZ3VlXHJcbiAgICBsZXQgbWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbS5hcHBlbmRDaGlsZChtZCk7XHJcbiAgICBtZC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGlhbG9nXCIsIFwibW9kYWwtbGdcIik7XHJcbiAgICBtZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZG9jdW1lbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgQ29udGVudFxyXG4gICAgbGV0IG1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1kLmFwcGVuZENoaWxkKG1jKTtcclxuICAgIG1jLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIGhlYWRlclxyXG4gICAgbGV0IG1oID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKG1oKTtcclxuICAgIG1oLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gRmVybWVyIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZChiKTtcclxuICAgIGIuY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKVxyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLWRpc21pc3NcIiwgXCJtb2RhbFwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xyXG5cclxuICAgIC8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQodCk7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgIHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsTGFiZWxcIik7XHJcbiAgICB0LmlubmVyVGV4dCA9IFwiTGVzIENhc2hVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIEJvZHlcclxuICAgIGxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbiAgICBib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuICAgIGJvZHlNLmlkID0gXCJtb2RhbENhc2hVcEJvZHlcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRpb25Cb2R5Q2FzaChzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKXtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDYXNoVXBCb2R5XCIpO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcbiAgICBcclxuICAgICAgICAkLmVhY2god29ybGQudXBncmFkZXMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgICAgICBjb2wuaWQgPSBcImNhc2hVcGdyYWRlXCIgKyBwYWxsaWVyLmlkY2libGUudG9TdHJpbmcoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvL1BhcnRpZSBJbWFnZSBldCBub20gZHUgbWFuYWdlcnNcclxuICAgICAgICAgICAgbGV0IGltYWdlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbC5hcHBlbmRDaGlsZChpbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICBpbWFnZU5hbWUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsvL1wiY29sLTRcIiwgXCJjb2wtbGctMlwiXHJcbiAgICBcclxuICAgICAgICAgICAgLy9QYXJ0aWUgSW1hZ2VcclxuICAgICAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImltYWdlQ2FzaFVwXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBpbWFnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBpbWFnZS5hcHBlbmRDaGlsZChpbWFnZU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBpbWFnZU1hbmFnZXIuaWQgPSBcImltZ1wiICsgcGFsbGllci5pZGNpYmxlO1xyXG4gICAgICAgICAgICBpbWFnZU1hbmFnZXIuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvO1xyXG4gICAgICAgICAgICBpbWFnZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWRcIilcclxuICAgIFxyXG4gICAgICAgICAgICAvL1BhcnRpZSBOb20gZXQgcHJpeFxyXG4gICAgICAgICAgICBsZXQgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBpbWFnZU5hbWUuYXBwZW5kQ2hpbGQobmFtZVByaWNlKTtcclxuICAgICAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuICAgIFxyXG4gICAgICAgICAgICAvL1BhcnRpZSBOb21cclxuICAgICAgICAgICAgbGV0IG5hbWVNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKG5hbWVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgbmFtZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICAgICAgbmFtZU1hbmFnZXIuaW5uZXJUZXh0ID0gcGFsbGllci5uYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vUGFydGllIFByaXhcclxuICAgICAgICAgICAgbGV0IHByaWNlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZChwcmljZU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBwcmljZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgICAgICAgICAgbGV0IGNvc3QgPSB0cmFuc2Zvcm0ocGFsbGllci5zZXVpbClcclxuICAgICAgICAgICAgcHJpY2VNYW5hZ2VyLmlubmVySFRNTCA9IGNvc3Q7XHJcbiAgICBcclxuICAgICAgICAgICAgLy9QYXJ0aWUgYm91dG9uIGQnZW1iYXVjaGVcclxuICAgICAgICAgICAgbGV0IGhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoaGlyZSk7XHJcbiAgICAgICAgICAgIGhpcmUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGhpcmUuYXBwZW5kQ2hpbGQoYnV0dG9uSGlyZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhpcmUuaWQgPSBcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25IaXJlXCIpO1xyXG4gICAgICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dCA9IFwiQWNoZXRlIE1vaSAhXCI7XHJcbiAgICAgICAgICAgICQoYnV0dG9uSGlyZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJqZSB0ZW50ZSBkJ2FjaGV0ZXIgdW4gY2FzaFVwIDopXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9idXlNYW5hZ2VyKHBhbGxpZXIsIHdvcmxkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcblxyXG59IiwiaW1wb3J0IHsgbWF0Y2hJZCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuLi9BcHAvSGVhZGVyXCI7XHJcbmltcG9ydCB7IHNlbmRUb1NlcnZlciB9IGZyb20gXCIuLi9SZXN0Q2FsbHNcIjtcclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGVzIG1hbmFnZXJzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWFuYWdlcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgRGlhbG9ndWVcclxuICAgIGxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtLmFwcGVuZENoaWxkKG1kKTtcclxuICAgIG1kLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaWFsb2dcIiwgXCJtb2RhbC1sZ1wiKTtcclxuICAgIG1kLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJkb2N1bWVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBDb250ZW50XHJcbiAgICBsZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWQuYXBwZW5kQ2hpbGQobWMpO1xyXG4gICAgbWMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbiAgICBsZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQobWgpO1xyXG4gICAgbWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxuICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgICBiLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XHJcblxyXG4gICAgLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZCh0KTtcclxuICAgIHQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxuICAgIHQuaW5uZXJUZXh0ID0gXCJMZXMgTWFuYWdlcnNcIjtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbEJvZHlcIik7XHJcblxyXG4gICAgLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbiAgICBsaXN0TWFuYWdlcnMoc2VydmVyLCB3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGUgbGEgbGlzdGUgZGVzIG1hbmFnZXJzXHJcbmZ1bmN0aW9uIGxpc3RNYW5hZ2VycyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCb2R5XCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0yXCIpOy8vXCJyb3dcIiwgXCJyb3ctY29scy0yXCJcclxuXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwibWFuYWdlclwiICsgcGFsbGllci5pZGNpYmxlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vUGFydGllIEltYWdlIGV0IG5vbSBkdSBtYW5hZ2Vyc1xyXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChpbWFnZU5hbWUpO1xyXG4gICAgICAgIGltYWdlTmFtZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIpOy8vXCJjb2wtNFwiLCBcImNvbC1sZy0yXCJcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgSW1hZ2VcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGltYWdlTmFtZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImltYWdlTWFuYWdlcnNcIik7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLmFwcGVuZENoaWxkKGltYWdlTWFuYWdlcik7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLmlkID0gXCJpbWdcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICBpbWFnZU1hbmFnZXIuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsdWlkXCIsIFwicm91bmRlZFwiKVxyXG5cclxuICAgICAgICAvL1BhcnRpZSBOb20gZXQgcHJpeFxyXG4gICAgICAgIGxldCBuYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKG5hbWVQcmljZSk7XHJcbiAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tXHJcbiAgICAgICAgbGV0IG5hbWVNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lUHJpY2UuYXBwZW5kQ2hpbGQobmFtZU1hbmFnZXIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbmFtZU1hbmFnZXIuaW5uZXJUZXh0ID0gcGFsbGllci5uYW1lO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBQcml4XHJcbiAgICAgICAgbGV0IHByaWNlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKHByaWNlTWFuYWdlcik7XHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbGV0IGNvc3QgPSB0cmFuc2Zvcm0ocGFsbGllci5zZXVpbClcclxuICAgICAgICBwcmljZU1hbmFnZXIuaW5uZXJIVE1MID0gY29zdDtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgYm91dG9uIGQnZW1iYXVjaGVcclxuICAgICAgICBsZXQgaGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGhpcmUpO1xyXG4gICAgICAgIGhpcmUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsgLy9cImNvbC00XCIsIFwiY29sLWxnLTJcIlxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgaGlyZS5hcHBlbmRDaGlsZChidXR0b25IaXJlKTtcclxuICAgICAgICBidXR0b25IaXJlLmlkID0gXCJoaXJlXCIgKyBwYWxsaWVyLmlkY2libGU7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25IaXJlXCIpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuaW5uZXJUZXh0ID0gXCJBY2hldGUgTW9pICFcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYWxsaWVyLmlkY2libGUgKyBcIiBcIiArIHBhbGxpZXIudW5sb2NrZWQpO1xyXG4gICAgICAgIGlmIChwYWxsaWVyLnVubG9ja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJESVNBQkxFRFwiKVxyXG4gICAgICAgICAgICBidXR0b25IaXJlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChidXR0b25IaXJlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiamUgdGVudGUgZCdhY2hldGVyIHVuIG1hbmFnZXIgOilcIik7XHJcbiAgICAgICAgICAgIGJ1eU1hbmFnZXIocGFsbGllciwgd29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuLy8gQWZmaWNoYWdlIGR5bmFtaXF1ZW1lbnQgc2kgdW4gbWFuYWdlciBlc3QgYWNoZXRhYmxlXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZk1hbmFnZXJzKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gUG91ciBjaGFxdWUgbWFuYWdlclxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgcGFsbGllcikge1xyXG4gICAgICAgIC8vIE9uIHLDqWN1cMOocmUgc29uIGJvdXRvbiBkJ2FjaGF0XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiICsgcGFsbGllci5pZGNpYmxlKTtcclxuXHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBhc3NleiBkJ2FyZ2VudCBvdSBxdWUgbGUgbWFuYWdlciBuJ2VzdCBwYXMgZMOpasOgIGFjaGV0w6lcclxuICAgICAgICBpZiAoKHBhbGxpZXIuc2V1aWwgPiB3b3JsZC5tb25leSkgfHwgKHBhbGxpZXIudW5sb2NrZWQgPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgLy8gU2kgYydlc3QgbGUgY2FzLCBvbiBsJ2FjdGl2ZVxyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJBY2hldMOpXCI7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTaW5vbiBvbiBsZSBkw6lzYWN0aXZlXHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gQ2FsY3VsZSBkeW5hbWlxdWVtZW50IGxlIG5vbWJyZSBkZSBtYW5hZ2VycyBhY2hldGFibGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBidXlhYmxlTWFuYWdlcnMod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBWYXJpYWJsZXNcclxuICAgIGxldCBtYW5hZ2VyRGlzcG8gPSAwO1xyXG4gICAgbGV0IG5vdGlmTWFuYWdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFkZ2VNYW5hZ2VyXCIpO1xyXG5cclxuICAgIC8vIFBvdXIgY2hhcXVlIG1hbmFnZXJcclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIG1hbmFnZXIpIHtcclxuICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGxhIHBvc3NpYmlsaXTDqSBkJ2VuIGFjaGV0ZXJcclxuICAgICAgICBpZiAobWFuYWdlci5zZXVpbCA8PSB3b3JsZC5tb25leSAmJiBtYW5hZ2VyLnVubG9ja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZXJEaXNwbysrO1xyXG4gICAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBTJ2lsIG4neSBhIGF1Y3VuIG1hbmFnZXIgYWNoZXRhYmxlLCBvbiBhZmZpY2hlIHJpZW5cclxuICAgIGlmIChtYW5hZ2VyRGlzcG8gPT0gMCkge1xyXG4gICAgICAgIG5vdGlmTWFuYWdlci5pbm5lclRleHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gU2lub24gb24gYWZmaWNoZSBsZXVyIHF1YW50aXTDqSBhY2hldGFibGVcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5vdGlmTWFuYWdlci5pbm5lclRleHQgPSBtYW5hZ2VyRGlzcG8udG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEFjaGF0IGQndW4gbWFuYWdlclxyXG5mdW5jdGlvbiBidXlNYW5hZ2VyKG1hbmFnZXI6IFBhbGxpZXIsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBhc3NleiBkJ2FyZ2VudCBwb3VyIGFjaGV0ZXIgbGUgbWFuYWdlclxyXG4gICAgaWYgKG1hbmFnZXIuc2V1aWwgPD0gd29ybGQubW9uZXkpIHtcclxuICAgICAgICAvLyBTaSBjJ2VzdCBsZSBjYXMsIG9uIHNvdXN0cmFpdCBzb24gY2/Du3RcclxuICAgICAgICB3b3JsZC5tb25leSAtPSBtYW5hZ2VyLnNldWlsO1xyXG5cclxuICAgICAgICAvLyBPbiBhZmZpY2hlIGVuc3VpdGUgbGUgbm91dmVhdSBzb2xkZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgICAgICAvLyBPbiBkw6libG9xdWUgbGUgbWFuYWdlclxyXG4gICAgICAgIG1hbmFnZXIudW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hdGNoSWQobWFuYWdlciwgd29ybGQpO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2VtZW50IGR1IGJvdXRvbiBIaXJlIGVuIGFjaGV0w6kgZXQgZGlzYWJsZWRcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXJlXCIgKyBtYW5hZ2VyLmlkY2libGUpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIkFjaGV0w6lcIlxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tc2Vjb25kYXJ5XCIpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcblxyXG4gICAgICAgIDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG5cclxuLy8gQWZmaWNoYWdlIGRlcyB1bmxvY2tzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFVubG9ja1wiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWxlY3QgYmFycmVcclxuICAgIGxldCBzZWxlY3RCYXJyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIG1oLmFwcGVuZENoaWxkKHNlbGVjdEJhcnJlKVxyXG4gICAgc2VsZWN0QmFycmUuaWQgPSBcInNlbGVjdEJhcnJlVW5sb2Nrc1wiXHJcblxyXG4gICAgbGV0IG9wdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHQxKVxyXG4gICAgb3B0MS5pZCA9IFwib3B0UHJvZHVpdFwiICsgN1xyXG4gICAgb3B0MS52YWx1ZSA9IFwiXCIgKyA3XHJcbiAgICBvcHQxLnRleHQgPSBcIlRvdXMgbGVzIHByb2R1aXRzXCJcclxuICAgIG9wdDEuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixcIlwiKVxyXG5cclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHQpXHJcbiAgICAgICAgb3B0LmlkID0gXCJvcHRQcm9kdWl0XCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgb3B0LnZhbHVlID0gXCJcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBvcHQudGV4dCA9IHByb2R1Y3QubmFtZVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgb3B0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIHNlbGVjdEJhcnJlLmFwcGVuZENoaWxkKG9wdDIpXHJcbiAgICBvcHQyLmlkID0gXCJvcHRQcm9kdWl0XCIgKyAwXHJcbiAgICBvcHQyLnZhbHVlID0gXCJcIiArIDBcclxuICAgIG9wdDIudGV4dCA9IFwiVW5sb2NrcyBnbG9iYXV4XCJcclxuXHJcblxyXG4gICAgLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZCh0KTtcclxuICAgIHQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxuICAgIHQuaW5uZXJUZXh0ID0gXCJMZXMgVW5sb2Nrc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIEJvZHlcclxuICAgIGxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbiAgICBib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuICAgIGJvZHlNLmlkID0gXCJtb2RhbFVubG9ja0JvZHlcIjtcclxuXHJcbiBcclxuICAgICQoc2VsZWN0QmFycmUpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSlcclxuICAgICAgICBsaXN0VW5sb2NrcyhwYXJzZUludCh0aGlzLnZhbHVlKSwgc2VydmVyLCB3b3JsZClcclxuICAgIH0pO1xyXG5cclxuICAgIC8vJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllciwgZnVuY3Rpb24oaW5kZXgsdW5sb2NrKXtcclxuICAgIC8vICAgIGFmZmljaGFnZShzZXJ2ZXIsdW5sb2NrKTtcclxuICAgIC8vfSlcclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VW5sb2NrcyhpZDogbnVtYmVyLCBzZXJ2ZXI6IFN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgYm9keVVubG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxVbmxvY2tCb2R5XCIpXHJcbiAgICBib2R5VW5sb2NrLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBsZXQgZ3JpZFVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGJvZHlVbmxvY2suYXBwZW5kQ2hpbGQoZ3JpZFVubG9jaylcclxuICAgIGdyaWRVbmxvY2suaWQgPSBcImdyaWRVbmxvY2tcIlxyXG4gICAgZ3JpZFVubG9jay5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKVxyXG5cclxuICAgICQuZWFjaCh3b3JsZC5hbGx1bmxvY2tzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgdW5sb2NrKSB7XHJcblxyXG4gICAgICAgIGlmICh1bmxvY2suaWRjaWJsZSA9PSBpZCkge1xyXG4gICAgICAgICAgICBhZmZpY2hhZ2Uoc2VydmVyLHVubG9jaylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaWQgPT0gNykge1xyXG4gICAgICAgICAgICBhZmZpY2hhZ2Uoc2VydmVyLHVubG9jaylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZmZpY2hhZ2Uoc2VydmVyOiBTdHJpbmcsIHVubG9jazogUGFsbGllcikge1xyXG4gICAgbGV0IGdyaWRVbmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRVbmxvY2tcIilcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ3JpZFVubG9jay5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICBjb2wuaWQgPSBcInVubG9ja1wiICsgdW5sb2NrLmlkY2libGU7XHJcblxyXG4gICAgLy9kaXZpc2lvbiBkZSBsYSBsaWduZSBlbiBkZXV4IHBhcnRpZXMgKEltYWdlK0Rlc2NyaXB0aW9uIC8vIFVubG9ja2VkIG91IG5vbilcclxuICAgIGxldCBjb2xJbWFnZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9JbWFnZSBEZXNjcmlwdGlvblxyXG4gICAgbGV0IGNvbFVubG9ja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS8vQWZmaWNoYWdlIGVzdCBpbCBkw6l2w6lyb3VpbGzDqSA/XHJcbiAgICBjb2wuYXBwZW5kQ2hpbGQoY29sSW1hZ2VEZXNjKVxyXG4gICAgY29sLmFwcGVuZENoaWxkKGNvbFVubG9ja2VkKVxyXG4gICAgY29sSW1hZ2VEZXNjLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuICAgIGNvbFVubG9ja2VkLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuXHJcbiAgICAvL0FmZmljaGFnZSBJY29uIFVubG9ja1xyXG4gICAgbGV0IGljb25VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoaWNvblVubG9jaylcclxuICAgIGljb25VbmxvY2suc3JjID0gc2VydmVyICsgdW5sb2NrLmxvZ29cclxuICAgIGljb25VbmxvY2suY2xhc3NMaXN0LmFkZChcImltZ1VubG9ja1wiKVxyXG5cclxuICAgIGxldCBub21VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChub21VbmxvY2spXHJcbiAgICBub21VbmxvY2suaW5uZXJUZXh0ID0gdW5sb2NrLm5hbWVcclxuXHJcbiAgICBsZXQgZGVzY3JVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGRlc2NyVW5sb2NrKVxyXG4gICAgZGVzY3JVbmxvY2suaW5uZXJUZXh0ID0gXCJBdWdtZW50YXRpb24gZGUgXCIgKyB1bmxvY2sudHlwZXJhdGlvICsgXCIgeFwiICsgdW5sb2NrLnJhdGlvXHJcblxyXG4gICAgbGV0IHNldWlsVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChzZXVpbFVubG9jaylcclxuICAgIHNldWlsVW5sb2NrLmlubmVyVGV4dCA9IFwiU2V1aWw6IFwiICsgdW5sb2NrLnNldWlsXHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHNlcnZlclVybCB9IGZyb20gXCIuXCI7XHJcblxyXG4vLyBFbnZvaSBhdSBzZXJ2ZXVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kVG9TZXJ2ZXIodHlwZTogc3RyaW5nLCBjb250ZW50OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGUgKyBcIiA6XCIpO1xyXG4gICAgY29uc29sZS5sb2coY29udGVudCk7XHJcbiAgICAkLmFqYXgoc2VydmVyVXJsICsgXCJhZHZlbnR1cmVpc2lzL2dlbmVyaWMvXCIgKyB0eXBlLCB7XHJcbiAgICAgICAgdHlwZTogXCJQVVRcIixcclxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoY29udGVudCksXHJcbiAgICAgICAgc3RhdHVzQ29kZToge1xyXG4gICAgICAgICAgICAzMDQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFjdGlvbiBub24gcHJpc2UgZW4gY29tcHRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGVjaGVjIGRlIGxhIHJlcXXDqnRlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgbGFzdFVwZGF0ZUxpc3QsIHNob3dQcm9kdWN0cywgc3RhcnRQcm9kdWN0LCBmaWxsTGFzdFVwZGF0ZSB9IGZyb20gXCIuL0FwcC9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5SGVhZGVyLCB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9BcHAvSGVhZGVyXCJcclxuaW1wb3J0IHsgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9BcHAvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHsgYWRkU2VsZWN0ZWQsIGJ1eWFibGVQcm9kdWN0cywgc2hvd1NpZGVCYXIgfSBmcm9tIFwiLi9BcHAvU2lkZUJhclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gXCIuL0FwcC9NZW51XCI7XHJcbmltcG9ydCB7IGJ1eWFibGVNYW5hZ2VycywgZGlzcGxheU1hbmFnZXIsIHZlcmlmTWFuYWdlcnMgfSBmcm9tIFwiLi9Nb2RhbHMvTWFuYWdlcnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVVubG9ja3MgfSBmcm9tIFwiLi9Nb2RhbHMvVW5sb2Nrc1wiO1xyXG48PDw8PDw8IEhFQURcclxuaW1wb3J0IHsgZGlzcGxheUNhc2hVcGdyYWRlcyB9IGZyb20gXCIuL01vZGFscy9DYXNoVXBncmFkZXNcIjtcclxuPT09PT09PVxyXG5pbXBvcnQgeyBzZW5kVG9TZXJ2ZXIgfSBmcm9tIFwiLi9SZXN0Q2FsbHNcIjtcclxuPj4+Pj4+PiA3ZjViNjMxNmM1NTU3NTIyMzFkMzgwYjVjNjUwNjE4MjM1MTdmOGYxXHJcblxyXG5cclxuLy8gVXNlcm5hbWVcclxuZXhwb3J0IHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcblxyXG4vLyBDaGFuZ2VtZW50IGR1IHBzZXVkb1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcm5hbWUobmV3VXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdXNlcm5hbWUgPSBuZXdVc2VybmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgbmV3VXNlcm5hbWUpO1xyXG5cclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XCJYLXVzZXJcIjogdXNlcm5hbWV9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBVcmwgc2VydmV1ciBsb2NhbFxyXG5jb25zdCBzZXJ2ZXJMb2NhbDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4vLyBVcmwgc2VydmV1ciBoZXJva3VcclxuY29uc3Qgc2VydmVySGVyb2t1OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3QuaGVyb2t1YXBwLmNvbS9cIlxyXG5cclxuLy8gVXJsIHNlcnZldXIgdGVzdFxyXG5jb25zdCBzZXJ2ZXJ0ZXN0OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcblxyXG5cclxuLy8gU2VydmV1ciB1dGlsaXPDqVxyXG5leHBvcnQgdmFyIHNlcnZlclVybCA9IHNlcnZlckxvY2FsO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIENoYXJnZW1lbnQgZHUgcHNldWRvIGR1IGpvdWV1clxyXG4gICAgY29uc29sZS5sb2codXNlcm5hbWUpO1xyXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpO1xyXG5cclxuICAgIC8vIEFmZmljaGFnZSBkdSBtb25kZSBkdSBqb3VldXJcclxuICAgICQuZ2V0SlNPTihzZXJ2ZXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy93b3JsZFwiLCBmdW5jdGlvbiAod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAgICAgLy8gQWZmaWNoYWdlIGR1IG1vbmRlIGNoYXJnw6lcclxuICAgICAgICBjb25zb2xlLmxvZyh3b3JsZClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRJTUVMRUZUID0gXCIgKyB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0WzRdLnRpbWVsZWZ0KTtcclxuICAgICAgICBmaWxsTGFzdFVwZGF0ZSh3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpc2F0aW9uIGFyZ2VudCBkZSBiYXNlXHJcbiAgICAgICAgLy8gd29ybGQubW9uZXkgPSAwO1xyXG5cclxuICAgICAgICAvLyBBZmZpY2hhZ2UgSFRNTFxyXG4gICAgICAgIGRpc3BsYXlIZWFkZXIoc2VydmVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgc2hvd1Byb2R1Y3RzKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIHNob3dTaWRlQmFyKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNZW51KHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5TWFuYWdlcihzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5Q2FzaFVwZ3JhZGVzKHNlcnZlclVybCwgd29ybGQpO1xyXG5cclxuICAgICAgICAvLyBBY3Rpb25zIGR5bmFtaXF1ZXNcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIENhbGN1bCBkdSBzY29yZVxyXG4gICAgICAgICAgICBjYWxjU2NvcmUoc2VydmVyVXJsLCB3b3JsZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6lyaWZpY2F0aW9uIGFjaGF0cyBtYW5hZ2Vyc1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdmVyaWZNYW5hZ2Vycyh3b3JsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFmZmljaGFnZSBhY2hldGFibGVzXHJcbiAgICAgICAgICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZClcclxuICAgICAgICAgICAgYnV5YWJsZU1hbmFnZXJzKHdvcmxkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpIGwnb3B0aW9uIGQnYWpvdXQgc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGUsIG9uIHN5bmNocm9uaXNlIGF2ZWMgZW4gZm9uY3Rpb24gZHUgc2NvcmVcclxuICAgICAgICAgICAgLy9pZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAvL3NldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBDYWxjdWwgZHUgc2NvcmVcclxuZnVuY3Rpb24gY2FsY1Njb3JlKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIHByb2R1aXRcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbGUgcHJvZHVpdCBlc3QgZW4gY291cnMgZGUgcHJvZHVjdGlvblxyXG4gICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0ICE9IDApIHtcclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBsZSB0ZW1wcyBkZSBwcm9kdWN0aW9uIHJlc3RhbnRcclxuICAgICAgICAgICAgbGV0IHRpbWVQYXNzZWQ6IG51bWJlciA9IERhdGUubm93KCkgLSBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLSB0aW1lUGFzc2VkO1xyXG5cclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBwb3VyY2VudGFnZSBkZSBwcm9kdWN0aW9uIHJlc3RhbnQgZXQgb24gYWN0dWFsaXNlIGxhIGJhciBkZSBwcm9ncmVzc2lvblxyXG4gICAgICAgICAgICBsZXQgcG91cmNlbnRhZ2U6IG51bWJlciA9IHByb2R1Y3QudGltZWxlZnQgLyBwcm9kdWN0LnZpdGVzc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QudGltZWxlZnQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvdXJjZW50YWdlKTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgcG91cmNlbnRhZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgbm91dmVhdSB0ZW1wcyByZXN0YW50IGVzdCBpbmbDqXJpZXVyIG91IMOpZ2FsIMOgIDBcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3QudGltZWxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gT24gYWpvdXRlIGxlIHJldmVudSBkdSBwcm9kdWl0XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV2ZW51OiBudW1iZXIgPSBwcm9kdWN0LnJldmVudSAqIHByb2R1Y3QucXVhbnRpdGU7XHJcbiAgICAgICAgICAgICAgICBhZGRTY29yZSh3b3JsZCwgcmV2ZW51KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbiByw6lpbml0aWFsaXNlIGxhIHByb2dyZXNzaW9uIGRlIGxhIHByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNpIGxlIHByb2R1aXQgbidlc3QgcGFzIGVuIGNvdXJzIGRlIHByb2R1Y3Rpb24gZXQgYSB1biBtYW5hZ2VyXHJcbiAgICAgICAgZWxzZSBpZiAoKHByb2R1Y3QudGltZWxlZnQgPT0gMCkgJiYgKHByb2R1Y3QubWFuYWdlclVubG9ja2VkID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIGxhbmNlIGxhIHByb2R1Y3Rpb24gZHUgcHJvZHVpdFxyXG4gICAgICAgICAgICBzdGFydFByb2R1Y3QocHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy8gQ2FsY3VsIGR1IHNjb3JlXHJcbmZ1bmN0aW9uIGFkZFNjb3JlKHdvcmxkOiBXb3JsZCwgc2NvcmU6IG51bWJlcikge1xyXG4gICAgLy8gQWpvdXQgZGUgbCdhcmdlbnRcclxuICAgIHdvcmxkLm1vbmV5ICs9IHNjb3JlO1xyXG5cclxuICAgIC8vIEFqb3V0IGR1IHNjb3JlXHJcbiAgICB3b3JsZC5zY29yZSArPSBzY29yZTtcclxuXHJcbiAgICAvLyBBZmZpY2hlIGR1IG5vdXZlYXUgc29sZGVcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG59XHJcblxyXG5cclxuLy8gRMOpYmxvcXVlIG1hbmFnZXIgcG91ciB1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaElkKG1hbmFnZXI6IFBhbGxpZXIsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChtYW5hZ2VyLmlkY2libGUgPT0gcHJvZHVjdC5pZCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0Lm1hbmFnZXJVbmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVpdDogXCIgKyBwcm9kdWN0Lm5hbWUgKyBcIiB1bmxvY2tlZDpcIiArIHByb2R1Y3QubWFuYWdlclVubG9ja2VkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNlbmRUb1NlcnZlcihcIm1hbmFnZXJcIiwgbWFuYWdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuLypcclxuZnVuY3Rpb24gdXBkYXRlQnV0dG9uKGFkZFNlbGVjdGVkOmFueSl7XHJcbiAgICBzd2l0Y2goYWRkU2VsZWN0ZWQpIHsgXHJcbiAgICAgICAgY2FzZSAxOiB7IFxyXG4gICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSAxMDogeyBcclxuICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNhc2UgMTAwOiB7IFxyXG4gICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIGNhc2UgXCJNYXhcIjogeyBcclxuICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICB9IFxyXG4gICAgICAgIGRlZmF1bHQ6IHsgXHJcbiAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgfSBcclxuICAgICB9IFxyXG59Ki9cclxuLypcclxuZnVuY3Rpb24gY29tcGFyYWlzb24od29ybGQ6V29ybGQsbXVsdGlwbGllcjphbnkpe1xyXG5cclxufSovIiwiaW1wb3J0IHtwcm9ncmVzc0Jhckxpc3R9IGZyb20gXCIuL1Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpIHtcclxuICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uIChsaWduZSlcclxuICAgIGxldCBwcm9kdWN0UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RQcm9ncmVzcyk7XHJcbiAgICBwcm9kdWN0UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGxldCBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuTGluZShwcm9kdWN0UHJvZ3Jlc3MsIHtcclxuICAgICAgICBzdHJva2VXaWR0aDogMTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcclxuICAgICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgICAgICBjb2xvcjogJyNGRkVBODInLFxyXG4gICAgICAgIHRyYWlsQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICB0cmFpbFdpZHRoOiAxLFxyXG4gICAgICAgIHN2Z1N0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH0sXHJcbiAgICAgICAgZnJvbTogeyBjb2xvcjogJyNGRkVBODInIH0sXHJcbiAgICAgICAgdG86IHsgY29sb3I6ICcjRUQ2QTVBJyB9LFxyXG4gICAgICAgIHN0ZXA6IChzdGF0ZSwgYmFyKSA9PiB7XHJcbiAgICAgICAgICAgIGJhci5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2dyZXNzQmFyTGlzdFtwcm9kdWN0LmlkXSA9IGJhcjtcclxuICAgIGJhci5hbmltYXRlKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGlkLCBwb3VyY2VudGFnZSkge1xyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W2lkXS5zZXQocG91cmNlbnRhZ2UpXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==