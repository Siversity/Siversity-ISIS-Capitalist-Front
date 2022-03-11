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
    //Bouton Upgrades
    var buttonCashUp = document.createElement("button");
    cash.appendChild(buttonCashUp);
    buttonCashUp.classList.add("btn", "btn-primary");
    buttonCashUp.setAttribute("data-bs-toggle", "modal");
    buttonCashUp.setAttribute("data-bs-target", "#modalCashUp");
    buttonCashUp.innerText = "CashUpgrades ";
    //Création badge
    var badgeCashUp = document.createElement("span");
    buttonCashUp.appendChild(badgeCashUp);
    badgeCashUp.id = "badgeCashUp";
    badgeCashUp.classList.add("badge", "bg-secondary");
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
/* harmony export */   "buyableCashUp": () => (/* binding */ buyableCashUp),
/* harmony export */   "displayCashUpgrades": () => (/* binding */ displayCashUpgrades)
/* harmony export */ });
/* harmony import */ var _App_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/Header */ "./src/App/Header.ts");

function displayCashUpgrades(server, world) {
    creationModal(server, world);
    //creationBodyCash(server, world)
}
function creationModal(server, world) {
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
    //Création select barre
    var selectBarre = document.createElement("select");
    mh.appendChild(selectBarre);
    selectBarre.id = "selectBarreCashUp";
    var optAll = document.createElement("option");
    selectBarre.appendChild(optAll);
    optAll.id = "optProduit" + 7;
    optAll.value = "" + 7;
    optAll.text = "Tous les produits";
    optAll.setAttribute("selected", "");
    $.each(world.products.product, function (index, product) {
        var opt = document.createElement("option");
        selectBarre.appendChild(opt);
        opt.id = "optProduit" + product.id;
        opt.value = "" + product.id;
        opt.text = product.name;
    });
    var optGlob = document.createElement("option");
    selectBarre.appendChild(optGlob);
    optGlob.id = "optProduit" + 0;
    optGlob.value = "" + 0;
    optGlob.text = "CashUp globaux";
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
    $(selectBarre).change(function () {
        console.log(this.value);
        affichageCashUp(parseInt(this.value), server, world);
    });
}
function affichageCashUp(id, server, world) {
    var bodyCashUp = document.getElementById("modalCashUpBody");
    bodyCashUp.innerHTML = "";
    $.each(world.upgrades.pallier, function (index, cashUp) {
        if (cashUp.idcible == id) {
            selectCashUp(server, cashUp, world);
        }
        else if (id == 7) {
            selectCashUp(server, cashUp, world);
        }
    });
}
function selectCashUp(server, cashUp, world) {
    var rowCashUp = document.createElement("div");
    var bodyCashUp = document.getElementById("modalCashUpBody");
    bodyCashUp.appendChild(rowCashUp);
    bodyCashUp.classList.add("row");
    var container = document.createElement("div");
    bodyCashUp.appendChild(container);
    container.classList.add("row", "row-cols-3");
    //Colonne 1 : Image
    var imgCol = document.createElement("div");
    container.appendChild(imgCol);
    imgCol.classList.add("col");
    var iconCashUp = document.createElement("img");
    imgCol.appendChild(iconCashUp);
    iconCashUp.src = server + cashUp.logo;
    iconCashUp.classList.add("imgCashUp");
    //Colonne 2 : Description ( Prix + Nom + Bonus )
    var secondCol = document.createElement("div");
    container.appendChild(secondCol);
    secondCol.classList.add("row");
    var priceCashUp = document.createElement("div");
    secondCol.appendChild(priceCashUp);
    priceCashUp.innerHTML = (0,_App_Header__WEBPACK_IMPORTED_MODULE_0__.transform)(cashUp.seuil) + "$";
    var nameCashUp = document.createElement("div");
    secondCol.appendChild(nameCashUp);
    nameCashUp.innerText = cashUp.name;
    var bonusCashUp = document.createElement("div");
    secondCol.appendChild(bonusCashUp);
    bonusCashUp.innerText = cashUp.typeratio + " x" + cashUp.ratio;
    //Colonne 3 : Bouton d'achat
    var butCol = document.createElement("div");
    container.appendChild(butCol);
    butCol.classList.add("col");
    var buttonBuyCashUp = document.createElement("button");
    butCol.appendChild(buttonBuyCashUp);
    buttonBuyCashUp.id = "buy" + cashUp.idcible;
    buttonBuyCashUp.classList.add("btn", "btn-primary", "buttonBuyCashUp");
    buttonBuyCashUp.innerText = "Achete Moi !";
    $(buttonBuyCashUp).click(function () {
        console.log("je tente d'acheter un cashUp :)");
        buyCashUp(cashUp, world);
    });
}
// Achat d'un cashUpgrade
function buyCashUp(cashUp, world) {
    // On vérifie que l'on a assez d'argent pour acheter le cash upgrade
    if (cashUp.seuil <= world.money) {
        // Si c'est le cas, on soustrait son coût
        world.money -= cashUp.seuil;
        //Il faut modifier la valeur du calculScore
        console.log("Il faut modifier la valeur du calcul score après l'achat d'un CashUp");
        // On affiche ensuite le nouveau solde
        document.getElementById("worldMoney").innerHTML = (0,_App_Header__WEBPACK_IMPORTED_MODULE_0__.transform)(world.money);
        // Changement du bouton Hire en acheté et disabled
        var button = document.getElementById("buy" + cashUp.idcible);
        button.innerText = "Acheté";
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");
    }
    else {
        console.log("pas assez de sous");
    }
}
// Calcule dynamiquement le nombre de managers achetables
function buyableCashUp(world) {
    // Variables
    var cashUpDispo = 0;
    var notifCashUp = document.getElementById("badgeCashUp");
    // Pour chaque CashUp
    $.each(world.upgrades.pallier, function (index, cashUp) {
        // On vérifie que l'on a la possibilité d'en acheter
        if (cashUp.seuil <= world.money && cashUp.unlocked == false) {
            cashUpDispo++;
        }
        ;
    });
    // S'il n'y a aucun CashUp achetable, on affiche rien
    if (cashUpDispo == 0) {
        notifCashUp.innerText = null;
    }
    // Sinon on affiche leur quantité achetable
    else {
        notifCashUp.innerText = cashUpDispo.toString();
    }
}
// Affichage dynamiquement si un manager est achetable
function verifCashUp(world) {
    // Pour chaque manager
    $.each(world.upgrades.pallier, function (index, cashUp) {
        // On récupère son bouton d'achat
        var button = document.getElementById("buy" + cashUp.idcible);
        // On vérifie que l'on a assez d'argent ou que le manager n'est pas déjà acheté
        if ((cashUp.seuil > world.money) || (cashUp.unlocked == true)) {
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
var servertest = "https://isiscapitalist.kk.kurasawa.fr/";
// Serveur utilisé
var serverUrl = servertest;
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
        // world.money = 2000;
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
            (0,_Modals_CashUpgrades__WEBPACK_IMPORTED_MODULE_7__.buyableCashUp)(world);
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
            (0,_RestCalls__WEBPACK_IMPORTED_MODULE_8__.sendToServer)("manager", manager);
        }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25ELGdCQUFnQixrQkFBa0I7QUFDbEMsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSxzREFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxzREFBZTtBQUNuQjs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvSGVhZGVyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvTWVudS50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvU2lkZUJhci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvTW9kYWxzL0Nhc2hVcGdyYWRlcy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvTW9kYWxzL01hbmFnZXJzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9Nb2RhbHMvVW5sb2Nrcy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvUmVzdENhbGxzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9IGZyb20gXCIuLlwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBwcmVtacOocmUgY29sb25lIGF2ZWMgbGUgbm9tIGV0IGxlIGxvZ29cclxuICAgIGxldCBtb25kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZGUpO1xyXG4gICAgbW9uZGUuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcIm1vbmRlXCIsIFwiYmNjRm9udFwiKTtcclxuXHJcbiAgICAvL0xvZ29cclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICAgIGxvZ28uc3JjID0gc2VydmVyICsgd29ybGQubG9nbztcclxuXHJcbiAgICAvL05vbVxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCIgXCIgKyB3b3JsZC5uYW1lO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIHNlY29uZCBlbnTDqnRlLCBsJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmV5Q29sKVxyXG4gICAgbW9uZXlDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIilcclxuXHJcbiAgICAvL0wnYXJnZW50XHJcbiAgICBsZXQgbW9uZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9uZXlDb2wuYXBwZW5kQ2hpbGQobW9uZXkpO1xyXG4gICAgbW9uZXkuaWQgPSBcIndvcmxkTW9uZXlcIjtcclxuICAgIG1vbmV5LmNsYXNzTGlzdC5hZGQoXCJtb25leVwiKTtcclxuICAgIGxldCBhcmdlbnQgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG4gICAgbW9uZXkuaW5uZXJIVE1MID0gYXJnZW50O1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGRlcm5pZXIgZW50w6h0ZSwgVXNlciBJRFxyXG4gICAgbGV0IHVzZXJDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJDb2wpO1xyXG4gICAgdXNlckNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG5cclxuICAgIC8qXHJcbiAgICAvL1VzZXIgSURcclxuICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWRDb2wuYXBwZW5kQ2hpbGQodXNlcklkKTtcclxuICAgIHVzZXJJZC5jbGFzc0xpc3QuYWRkKFwidXNlcklkXCIpO1xyXG4gICAgdXNlcklkLmlubmVySFRNTCA9IFwiSUQ6XCI7XHJcbiAgICAqL1xyXG5cclxuICAgIGxldCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHVzZXJDb2wuYXBwZW5kQ2hpbGQodXNlclJvdyk7XHJcbiAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcblxyXG4gICAgbGV0IGxhYmVsVXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQobGFiZWxVc2VyKTtcclxuICAgIGxhYmVsVXNlci5odG1sRm9yID0gXCJpbnB1dFVzZXJcIjtcclxuICAgIGxhYmVsVXNlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKVxyXG5cclxuICAgIGxldCBpbnB1dFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGlucHV0VXNlcik7XHJcbiAgICBpbnB1dFVzZXIuaWQgPSBcImlucHV0VXNlclwiXHJcbiAgICBpbnB1dFVzZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcclxuICAgIGlucHV0VXNlci50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBpbnB1dFVzZXIucGxhY2Vob2xkZXIgPSBcIlBzZXVkb1wiO1xyXG4gICAgaW5wdXRVc2VyLnZhbHVlID0gdXNlcm5hbWU7XHJcbiAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSB0cnVlO1xyXG5cclxuICAgIGxldCBidXR0b25Vc2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uVXNlckRpdik7XHJcblxyXG4gICAgbGV0IGJ1dHRvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgYnV0dG9uVXNlckRpdi5hcHBlbmRDaGlsZChidXR0b25JbnB1dCk7XHJcbiAgICBidXR0b25JbnB1dC5pZCA9IFwidXNlckJ1dHRvbkNoZWNrXCI7XHJcbiAgICBidXR0b25JbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgYnV0dG9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuXHJcbiAgICBsZXQgYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBidXR0b25Vc2VyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkxhYmVsKTtcclxuICAgIGJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKTtcclxuICAgIGJ1dHRvbkxhYmVsLmh0bWxGb3IgPSBcInVzZXJCdXR0b25DaGVja1wiO1xyXG4gICAgYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nYmkgYmktY2hlY2stc3F1YXJlJz48L2k+XCI7XHJcbiAgICAkKGJ1dHRvbkxhYmVsKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VXNlci5yZWFkT25seSkge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSBmYWxzZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZShpbnB1dFVzZXIudmFsdWUpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHZhbGV1cjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAodmFsZXVyIDwgMTAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgyKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA8IDEwMDAwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMCk7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPj0gMTAwMDAwMCkge1xyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b1ByZWNpc2lvbig0KTtcclxuICAgICAgICByZXMgPSByZXMucmVwbGFjZSgvZVxcKyguKikvLCBcIiAxMDxzdXA+JDE8L3N1cD5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudSh3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gbmF2YmFyXHJcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIiwgXCJmaXhlZC1ib3R0b21cIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gdW5sb2Nrc1xyXG4gICAgbGV0IHVubG9ja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHVubG9ja3MpO1xyXG4gICAgdW5sb2Nrcy5jbGFzc0xpc3QuYWRkKFwidW5sb2Nrc1wiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBVbmxvY2tzXHJcbiAgICBsZXQgYnV0dG9uVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgdW5sb2Nrcy5hcHBlbmRDaGlsZChidXR0b25VbmxvY2spO1xyXG4gICAgYnV0dG9uVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgYnV0dG9uVW5sb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsIFwibW9kYWxcIilcclxuICAgIGJ1dHRvblVubG9jay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNtb2RhbFVubG9ja1wiKVxyXG4gICAgYnV0dG9uVW5sb2NrLmlubmVyVGV4dCA9IFwiVW5sb2NrcyBcIjtcclxuXHJcblxyXG4gICAgLy9jcsOpYXRpb24gY2FzaCB1cGdyYWRlc1xyXG4gICAgbGV0IGNhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNhc2gpO1xyXG4gICAgY2FzaC5jbGFzc0xpc3QuYWRkKFwiY2FzaFwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBVcGdyYWRlc1xyXG4gICAgbGV0IGJ1dHRvbkNhc2hVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGNhc2guYXBwZW5kQ2hpbGQoYnV0dG9uQ2FzaFVwKTtcclxuICAgIGJ1dHRvbkNhc2hVcC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIilcclxuICAgIGJ1dHRvbkNhc2hVcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLCBcIm1vZGFsXCIpXHJcbiAgICBidXR0b25DYXNoVXAuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbW9kYWxDYXNoVXBcIilcclxuICAgIGJ1dHRvbkNhc2hVcC5pbm5lclRleHQgPSBcIkNhc2hVcGdyYWRlcyBcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBiYWRnZVxyXG4gICAgbGV0IGJhZGdlQ2FzaFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBidXR0b25DYXNoVXAuYXBwZW5kQ2hpbGQoYmFkZ2VDYXNoVXApO1xyXG4gICAgYmFkZ2VDYXNoVXAuaWQgPSBcImJhZGdlQ2FzaFVwXCJcclxuICAgIGJhZGdlQ2FzaFVwLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiLCBcImJnLXNlY29uZGFyeVwiKTtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gYW5nZWxzIHVwZ3JhZGVzXHJcbiAgICBsZXQgYW5nZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhbmdlbHMpO1xyXG4gICAgYW5nZWxzLmNsYXNzTGlzdC5hZGQoXCJhbmdlbHNcIik7XHJcbiAgICBhbmdlbHMuaW5uZXJIVE1MID0gXCJBbmdlbHMgdXBncmFkZXNcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBtYW5hZ2Vyc1xyXG4gICAgbGV0IG1hbmFnZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtYW5hZ2Vycyk7XHJcbiAgICBtYW5hZ2Vycy5jbGFzc0xpc3QuYWRkKFwibWFuYWdlcnNcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gTWFuYWdlclxyXG4gICAgbGV0IGJ1dHRvbk1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBtYW5hZ2Vycy5hcHBlbmRDaGlsZChidXR0b25NYW5hZ2VyKTtcclxuICAgIGJ1dHRvbk1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsIFwibW9kYWxcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbW9kYWxNYW5hZ2VyXCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLmlubmVyVGV4dCA9IFwiTWFuYWdlcnMgXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gYmFkZ2VcclxuICAgIGxldCBiYWRnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGJ1dHRvbk1hbmFnZXIuYXBwZW5kQ2hpbGQoYmFkZ2VNYW5hZ2VyKTtcclxuICAgIGJhZGdlTWFuYWdlci5pZCA9IFwiYmFkZ2VNYW5hZ2VyXCJcclxuICAgIGJhZGdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiYmFkZ2VcIiwgXCJiZy1zZWNvbmRhcnlcIik7XHJcblxyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGludmVzdG9yc1xyXG4gICAgbGV0IGludmVzdG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW52ZXN0b3JzKTtcclxuICAgIGludmVzdG9ycy5jbGFzc0xpc3QuYWRkKFwiaW52ZXN0b3JzXCIpO1xyXG4gICAgaW52ZXN0b3JzLmlubmVySFRNTCA9IFwiSW52ZXN0b3JzXCI7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgYWRkUHJvZ3Jlc3NCYXIsIHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcclxuXHJcbmltcG9ydCB7YWRkU2VsZWN0ZWQsIGJ1eWFibGVQcm9kdWN0cywgZ2V0Q29zdFByb2R1Y3QsIGdldE1heFByb2R1Y3R9IGZyb20gXCIuL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCB7IHNlbmRUb1NlcnZlciB9IGZyb20gXCIuLi9SZXN0Q2FsbHNcIjtcclxuaW1wb3J0IHsgdmVyaWZVbmxvY2sgfSBmcm9tIFwiLi4vTW9kYWxzL1VubG9ja3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJMaXN0OiBhbnlbXSA9IFtdO1xyXG5leHBvcnQgY29uc3QgbGFzdFVwZGF0ZUxpc3QgOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsTGFzdFVwZGF0ZSh3b3JsZDogV29ybGQpIHtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd29ybGQucHJvZHVjdHMucHJvZHVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W2ldID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHByaW5jaXBhbGUgZCdhcHBlbCBkZXMgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9kdWN0cyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciAoY29sb25uZSlcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuaWQgPSBcInBcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImRvdWJsZUJvcmRlclByb2R1Y3RcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdHJlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgXCJiY2NGb250XCIpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5pbm5lckhUTUwgPSBwcm9kdWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIC8vIEltYWdlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdEltYWdlKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInByb2R1Y3RJbWFnZVwiKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHByb2R1Y3RJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuaWQgPSBcImltZ1wiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdEljb25zXCIpXHJcbiAgICAgICAgLy8gU2kgY2UgcHJvZHVpdCBuJ2EgcGFzIMOpdMOpIGTDqWJsb3F1w6ksIG9uIGwnYWZmaWNoZSBlbiBncmlzXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdGUgPT0gMCkge1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZS5zcmMgPSBzZXJ2ZXIgKyBwcm9kdWN0LmxvZ29cclxuICAgICAgICAvLyBBam91dCBldmVudCBwcm9kdWN0aW9uXHJcbiAgICAgICAgJChpbWFnZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGFydFByb2R1Y3QocHJvZHVjdClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFycmUgZGUgcHJvZ3Jlc3Npb25cclxuICAgICAgICBhZGRQcm9ncmVzc0JhcihzZXJ2ZXIsIHByb2R1Y3QsIGNvbCk7XHJcblxyXG4gICAgICAgIC8vIExldmVsIC0tPiBRdWFudGl0w6kgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RRdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UXRlKTtcclxuICAgICAgICBwcm9kdWN0UXRlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0TGV2ZWxcIik7XHJcbiAgICAgICAgbGV0IGxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5hcHBlbmRDaGlsZChsZXZlbCk7XHJcbiAgICAgICAgbGV2ZWwuaWQgPSBcInF0ZVwiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBsZXZlbC5jbGFzc0xpc3QuYWRkKFwiYmNjRm9udFwiKTtcclxuICAgICAgICBsZXZlbC5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdENvbnRhaW5lcik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibXQtM1wiKTtcclxuXHJcbiAgICAgICAgLy8gTmJyIGxldmVsIMOgIGFjaGV0ZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdEFkZCk7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiKTtcclxuICAgICAgICBsZXQgcHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5hcHBlbmRDaGlsZChwcm9kdWN0QnV0dG9uKTtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmlkID0gXCJhZGRcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2R1Y3RcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgJChwcm9kdWN0QnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ2/Du3QgYWpvdXQgbGV2ZWwgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RDb3N0KTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pZCA9IFwiY29zdFwiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBwcm9kdWN0Q29zdC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiYmNjRm9udFwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgIC8vIHByb2R1Y3RDb3N0LmlubmVySFRNTCA9IChwcm9kdWN0LmNvdXQgKyBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpKS50b1N0cmluZygpO1xyXG4gICAgICAgIHByb2R1Y3RDb3N0LmlubmVySFRNTCA9IHByb2R1Y3QuY291dC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcbiAgICBidXlhYmxlUHJvZHVjdHMod29ybGQpO1xyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkZSBsYW5jZXIgbGEgcHJvZHVjdGlvbiBkJ3VuIHByb2R1aXRcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBwZXV0IGFjdGl2ZXIgbGUgcHJvZHVpdFxyXG4gICAgaWYgKHZlcmlmUHJvZHVjdChwcm9kdWN0KSkge1xyXG4gICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSBwcm9kdWN0LnZpdGVzc2U7XHJcbiAgICAgICAgbGFzdFVwZGF0ZUxpc3RbcHJvZHVjdC5pZF0gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIDEwMCk7XHJcbiAgICAgICAgc2VuZFRvU2VydmVyKFwicHJvZHVjdFwiLCBwcm9kdWN0KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBxdWUgcHJvZHVpdCBlc3QgYWN0aXZhYmxlXHJcbmZ1bmN0aW9uIHZlcmlmUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHByb2R1Y3QucXVhbnRpdGUgPiAwKSAmJiAocHJvZHVjdC50aW1lbGVmdCA9PSAwKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkJ2Fqb3V0ZXIgdW5lIHF1YW50aXTDqSDDoCB1biBwcm9kdWl0XHJcbmZ1bmN0aW9uIGFkZFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBuJ2VzdCBwYXMgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIGNvw7t0XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcbiAgICAgICAgcHJvZHVjdC5jb3V0ID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBhZGRTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIGFkZFNlbGVjdGVkLCBjb3N0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG1heCBhY2hldGFibGUgZXQgc29uIGNvdXRcclxuICAgICAgICBsZXQgbWF4ID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG5cclxuICAgICAgICBwcm9kdWN0LmNvdXQgPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIG1heCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIG1heCwgY29zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVyaWZVbmxvY2sod29ybGQpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdC52aXRlc3NlKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QudGltZWxlZnQpO1xyXG5cclxuICAgIC8vIE9uIGVudm9pZSBsZXMgZG9ubsOpZXMgYXUgc2VydmV1clxyXG4gICAgc2VuZFRvU2VydmVyKFwicHJvZHVjdFwiLCBwcm9kdWN0KTtcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGVmZmVjdHVhbnQgbGVzIGNoYW5nZW1lbnRzIGQnYWZmaWNoYWdlIGxpw6lzIMOgIGwnYWNoYXQgZCd1biBwcm9kdWl0XHJcbmZ1bmN0aW9uIG1vZGlmeVByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0LCBxdWFudGl0eTogbnVtYmVyLCBjb3N0OiBudW1iZXIpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnRcclxuICAgIGlmICh3b3JsZC5tb25leSA+IGNvc3QpIHtcclxuICAgICAgICAvLyBPbiBham91dGUgbGEgcXVhbnRpdMOpIGFjaGV0w6llXHJcbiAgICAgICAgcHJvZHVjdC5xdWFudGl0ZSArPSBxdWFudGl0eTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF0ZVwiICsgcHJvZHVjdC5pZCkuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBPbiBzb3VzdHJhaXQgbCdhcmdlbnQgZMOpcGVuc8OpXHJcbiAgICAgICAgd29ybGQubW9uZXkgLT0gY29zdDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuXHJcbiAgICAgICAgLy8gU2kgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGVcclxuICAgICAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAvLyBPbiByZWNhbGN1bGUgbGUgbWF4XHJcbiAgICAgICAgICAgIHF1YW50aXR5ID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgICAgIC8vIE9uIGNoYW5nZSBsJ2FmZmljaGFnZSBzdXIgY2hhcXVlIHByb2R1aXQgZW4gZm9uY3Rpb24gZHUgbm91dmVhdSBzb2xkZVxyXG4gICAgICAgICAgICBidXlhYmxlUHJvZHVjdHMod29ybGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG5vdXZlYXUgY2/Du3QgYXByw6hzIGFjaGF0XHJcbiAgICAgICAgbGV0IG5ld0Nvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBxdWFudGl0eSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0obmV3Q29zdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUydpbCBzJ2FnaXQgZHUgMWVyIGFjaGF0IHN1ciB1biBwcm9kdWl0LCBvbiBsJ2FmZmljaGUgZW4gY2xhaXJcclxuICAgICAgICBsZXQgaW1hZ2VQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgIGlmIChpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRQcm9kdWN0XCIpKSB7XHJcbiAgICAgICAgICAgIGltYWdlUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QWRkUHJvZHVjdHM6IGFueVtdID0gWzEsIDEwLCAxMDAsIFwiTWF4XCJdO1xyXG5leHBvcnQgdmFyIGFkZFNlbGVjdGVkOiBhbnkgPSAxO1xyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNyw6lhbnQgbGEgYmFyZSBkZSBtZW51IMOgIGRyb3RpZSBjb250ZW5hbnQgbGUgc8OpbGVjdGV1ciBzdXIgbGEgcXVhbnRpdMOpIGRlIHByb2R1aXRzIMOgIGFjaGV0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlQmFyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9idGVudGlvbiBkdSBjb250YWluZXIgZGVzIHByb2R1aXRzXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZHUgY29udGFpbmVyIGR1IG1lbnVcclxuICAgIGxldCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcclxuICAgIHNpZGVDb250YWluZXIuaWQgPSBcInNpZGVNZW51XCI7XHJcbiAgICAvLyBDZW50cmFnZSBkdSBtZW51IMOgIGRyb2l0ZVxyXG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9zaXRpb24tYWJzb2x1dGVcIiwgXCJ0b3AtNTBcIiwgXCJlbmQtMFwiLCBcInRyYW5zbGF0ZS1taWRkbGUteVwiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZCd1bmUgbGlzdGUgZGUgYm91dG9ucyDDoCBsYSB2ZXJ0aWNhbGVcclxuICAgIGxldCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XHJcbiAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tZ3JvdXAtdmVydGljYWxcIiwgXCJzaWRlQ29udGFpbmVyXCIpO1xyXG4gICAgbGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZ3JvdXBcIik7XHJcblxyXG4gICAgLy8gT24gZ8OpbsOocmUgZGVzIGJvdXRvbnMgZGUgdHlwZSByYWRpb1xyXG4gICAgbGlzdEFkZFByb2R1Y3RzLmZvckVhY2goYWRkTnVtYmVyID0+IHtcclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbCdpbnB1dCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJJbnB1dCk7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuaWQgPSBcImJ1dHRvblwiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5uYW1lID0gXCJidG5yYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcclxuICAgICAgICAvLyBBIGwnaW5pdGlhbGlzYXRpb24sIGwnb3B0aW9uICsxIGVzdCBjZWxsZSBjb2Now6llIHBhciBkw6lmYXV0XHJcbiAgICAgICAgaWYgKGFkZE51bWJlciA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBhZGROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbGUgbGFiZWwgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlckJ1dHRvbik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRCdXR0b25cIiwgXCJhZGRCdXR0b25PdXRsaW5lXCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYWRkTnVtYmVySW5wdXQuaWQpXHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIC8vIEV2ZW50IDogbW9kaWZpY2F0aW9uIGR1IHPDqWxlY3RldXIgYXUgY2xpY1xyXG4gICAgICAgICQoYWRkTnVtYmVyQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkID0gYWRkTnVtYmVyO1xyXG4gICAgICAgICAgICBidXlhYmxlUHJvZHVjdHMod29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBjaGFuZ2VhbnQgbCdhZmZpY2hhZ2UgbGnDqSDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gYnV5YWJsZVByb2R1Y3RzKHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGVzdCB1bmUgdmFsZXVyIGNvbnN0YW50ZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBhZGRTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsZSBqb3VldXIgbidhIHBhcyBhc3NleiBkJ2FyZ2VudCBwb3VyIGFjaGV0ZXIgbGUgcHJvZHVpdCwgb24gZMOpc2FjdGl2ZSBsZSBib3V0b25cclxuICAgICAgICAgICAgaWYgKHdvcmxkLm1vbmV5IDwgY29zdCkge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2lub24gb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRQcm9kdWN0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2kgbCdvcHRpb24gY29uc2lzdGUgw6AgbGEgdmFsZXVyIG1heFxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXg6IG51bWJlciA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgYm91dG9uXHJcbiAgICAgICAgICAgIGxldCBhZGRQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdC5pbm5lckhUTUwgPSBcIitcIiArIG1heDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIGNvw7t0IGQndW4gZ3JvdXBlIGRlIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3N0UHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0LCBhZGROdW1iZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgLy8gbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTtcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dDtcclxuICAgIGxldCBudW1lcmF0b3IgPSAxIC0gTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBhZGROdW1iZXIpO1xyXG4gICAgbGV0IGRlbm9taW5hdG9yID0gMSAtIHByb2R1Y3QuY3JvaXNzYW5jZVxyXG4gICAgbGV0IGNvdXQgPSAodW4gKiBudW1lcmF0b3IpIC8gZGVub21pbmF0b3I7XHJcblxyXG4gICAgLy8gUmV0b3VyIGR1IGNvw7t0IGNhbGN1bMOpXHJcbiAgICByZXR1cm4gY291dDtcclxufVxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIG5vbWJyZSBtYXggZGUgcHJvZHVpdHMgYWNoZXRhYmxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCk6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgLy8gbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTtcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dDtcclxuICAgIGxldCBudW1lcmF0b3I6IG51bWJlciA9IE1hdGgubG9nKC0od29ybGQubW9uZXkgLSB3b3JsZC5tb25leSAqIHByb2R1Y3QuY3JvaXNzYW5jZSAtIHVuKSAvIHVuKTtcclxuICAgIGxldCBkZW5vbWluYXRvcjogbnVtYmVyID0gTWF0aC5sb2cocHJvZHVjdC5jcm9pc3NhbmNlKTtcclxuICAgIGxldCBtYXg6IG51bWJlciA9IChudW1lcmF0b3IgLyBkZW5vbWluYXRvcilcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgbWF4IGRlIHByb2R1aXRzXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtYXgpO1xyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi4vQXBwL0hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDYXNoVXBncmFkZXMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgY3JlYXRpb25Nb2RhbChzZXJ2ZXIsIHdvcmxkKTtcclxuICAgIC8vY3JlYXRpb25Cb2R5Q2FzaChzZXJ2ZXIsIHdvcmxkKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRpb25Nb2RhbChzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENhc2hVcFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWxlY3QgYmFycmVcclxuICAgIGxldCBzZWxlY3RCYXJyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIG1oLmFwcGVuZENoaWxkKHNlbGVjdEJhcnJlKVxyXG4gICAgc2VsZWN0QmFycmUuaWQgPSBcInNlbGVjdEJhcnJlQ2FzaFVwXCJcclxuXHJcbiAgICBsZXQgb3B0QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgc2VsZWN0QmFycmUuYXBwZW5kQ2hpbGQob3B0QWxsKVxyXG4gICAgb3B0QWxsLmlkID0gXCJvcHRQcm9kdWl0XCIgKyA3XHJcbiAgICBvcHRBbGwudmFsdWUgPSBcIlwiICsgN1xyXG4gICAgb3B0QWxsLnRleHQgPSBcIlRvdXMgbGVzIHByb2R1aXRzXCJcclxuICAgIG9wdEFsbC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKVxyXG5cclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgICAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHQpXHJcbiAgICAgICAgb3B0LmlkID0gXCJvcHRQcm9kdWl0XCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgb3B0LnZhbHVlID0gXCJcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBvcHQudGV4dCA9IHByb2R1Y3QubmFtZVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgb3B0R2xvYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIHNlbGVjdEJhcnJlLmFwcGVuZENoaWxkKG9wdEdsb2IpXHJcbiAgICBvcHRHbG9iLmlkID0gXCJvcHRQcm9kdWl0XCIgKyAwXHJcbiAgICBvcHRHbG9iLnZhbHVlID0gXCJcIiArIDBcclxuICAgIG9wdEdsb2IudGV4dCA9IFwiQ2FzaFVwIGdsb2JhdXhcIlxyXG5cclxuICAgIC8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQodCk7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgIHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsTGFiZWxcIik7XHJcbiAgICB0LmlubmVyVGV4dCA9IFwiTGVzIENhc2hVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIEJvZHlcclxuICAgIGxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbiAgICBib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuICAgIGJvZHlNLmlkID0gXCJtb2RhbENhc2hVcEJvZHlcIjtcclxuXHJcbiAgICAkKHNlbGVjdEJhcnJlKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpXHJcbiAgICAgICAgYWZmaWNoYWdlQ2FzaFVwKHBhcnNlSW50KHRoaXMudmFsdWUpLCBzZXJ2ZXIsIHdvcmxkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFmZmljaGFnZUNhc2hVcChpZDogbnVtYmVyLCBzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgYm9keUNhc2hVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDYXNoVXBCb2R5XCIpXHJcbiAgICBib2R5Q2FzaFVwLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAkLmVhY2god29ybGQudXBncmFkZXMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBjYXNoVXApIHtcclxuXHJcbiAgICAgICAgaWYgKGNhc2hVcC5pZGNpYmxlID09IGlkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdENhc2hVcChzZXJ2ZXIsIGNhc2hVcCwgd29ybGQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkID09IDcpIHtcclxuICAgICAgICAgICAgc2VsZWN0Q2FzaFVwKHNlcnZlciwgY2FzaFVwLCB3b3JsZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2VsZWN0Q2FzaFVwKHNlcnZlcjogc3RyaW5nLCBjYXNoVXA6IFBhbGxpZXIsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IHJvd0Nhc2hVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBib2R5Q2FzaFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENhc2hVcEJvZHlcIilcclxuICAgIGJvZHlDYXNoVXAuYXBwZW5kQ2hpbGQocm93Q2FzaFVwKVxyXG4gICAgYm9keUNhc2hVcC5jbGFzc0xpc3QuYWRkKFwicm93XCIpXHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGJvZHlDYXNoVXAuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0zXCIpXHJcblxyXG4gICAgLy9Db2xvbm5lIDEgOiBJbWFnZVxyXG4gICAgbGV0IGltZ0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDb2wpXHJcbiAgICBpbWdDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG5cclxuICAgIGxldCBpY29uQ2FzaFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgaW1nQ29sLmFwcGVuZENoaWxkKGljb25DYXNoVXApXHJcbiAgICBpY29uQ2FzaFVwLnNyYyA9IHNlcnZlciArIGNhc2hVcC5sb2dvXHJcbiAgICBpY29uQ2FzaFVwLmNsYXNzTGlzdC5hZGQoXCJpbWdDYXNoVXBcIilcclxuXHJcbiAgICAvL0NvbG9ubmUgMiA6IERlc2NyaXB0aW9uICggUHJpeCArIE5vbSArIEJvbnVzIClcclxuICAgIGxldCBzZWNvbmRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kQ29sKVxyXG4gICAgc2Vjb25kQ29sLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuXHJcbiAgICBsZXQgcHJpY2VDYXNoVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzZWNvbmRDb2wuYXBwZW5kQ2hpbGQocHJpY2VDYXNoVXApXHJcbiAgICBwcmljZUNhc2hVcC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY2FzaFVwLnNldWlsKSArIFwiJFwiXHJcblxyXG4gICAgbGV0IG5hbWVDYXNoVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzZWNvbmRDb2wuYXBwZW5kQ2hpbGQobmFtZUNhc2hVcClcclxuICAgIG5hbWVDYXNoVXAuaW5uZXJUZXh0ID0gY2FzaFVwLm5hbWVcclxuXHJcbiAgICBsZXQgYm9udXNDYXNoVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzZWNvbmRDb2wuYXBwZW5kQ2hpbGQoYm9udXNDYXNoVXApXHJcbiAgICBib251c0Nhc2hVcC5pbm5lclRleHQgPSBjYXNoVXAudHlwZXJhdGlvICsgXCIgeFwiICsgY2FzaFVwLnJhdGlvXHJcblxyXG4gICAgLy9Db2xvbm5lIDMgOiBCb3V0b24gZCdhY2hhdFxyXG4gICAgbGV0IGJ1dENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXRDb2wpXHJcbiAgICBidXRDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG5cclxuICAgIGxldCBidXR0b25CdXlDYXNoVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBidXRDb2wuYXBwZW5kQ2hpbGQoYnV0dG9uQnV5Q2FzaFVwKVxyXG4gICAgYnV0dG9uQnV5Q2FzaFVwLmlkID0gXCJidXlcIiArIGNhc2hVcC5pZGNpYmxlO1xyXG4gICAgYnV0dG9uQnV5Q2FzaFVwLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiLCBcImJ1dHRvbkJ1eUNhc2hVcFwiKTtcclxuICAgIGJ1dHRvbkJ1eUNhc2hVcC5pbm5lclRleHQgPSBcIkFjaGV0ZSBNb2kgIVwiO1xyXG5cclxuICAgICQoYnV0dG9uQnV5Q2FzaFVwKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJqZSB0ZW50ZSBkJ2FjaGV0ZXIgdW4gY2FzaFVwIDopXCIpO1xyXG4gICAgICAgIGJ1eUNhc2hVcChjYXNoVXAsIHdvcmxkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEFjaGF0IGQndW4gY2FzaFVwZ3JhZGVcclxuZnVuY3Rpb24gYnV5Q2FzaFVwKGNhc2hVcDogUGFsbGllciwgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50IHBvdXIgYWNoZXRlciBsZSBjYXNoIHVwZ3JhZGVcclxuICAgIGlmIChjYXNoVXAuc2V1aWwgPD0gd29ybGQubW9uZXkpIHtcclxuICAgICAgICAvLyBTaSBjJ2VzdCBsZSBjYXMsIG9uIHNvdXN0cmFpdCBzb24gY2/Du3RcclxuICAgICAgICB3b3JsZC5tb25leSAtPSBjYXNoVXAuc2V1aWw7XHJcblxyXG5cclxuICAgICAgICAvL0lsIGZhdXQgbW9kaWZpZXIgbGEgdmFsZXVyIGR1IGNhbGN1bFNjb3JlXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbCBmYXV0IG1vZGlmaWVyIGxhIHZhbGV1ciBkdSBjYWxjdWwgc2NvcmUgYXByw6hzIGwnYWNoYXQgZCd1biBDYXNoVXBcIilcclxuXHJcbiAgICAgICAgLy8gT24gYWZmaWNoZSBlbnN1aXRlIGxlIG5vdXZlYXUgc29sZGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlbWVudCBkdSBib3V0b24gSGlyZSBlbiBhY2hldMOpIGV0IGRpc2FibGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV5XCIgKyBjYXNoVXAuaWRjaWJsZSk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiQWNoZXTDqVwiXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1zZWNvbmRhcnlcIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFzIGFzc2V6IGRlIHNvdXNcIilcclxuICAgIH1cclxufVxyXG5cclxuLy8gQ2FsY3VsZSBkeW5hbWlxdWVtZW50IGxlIG5vbWJyZSBkZSBtYW5hZ2VycyBhY2hldGFibGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBidXlhYmxlQ2FzaFVwKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gVmFyaWFibGVzXHJcbiAgICBsZXQgY2FzaFVwRGlzcG8gPSAwO1xyXG4gICAgbGV0IG5vdGlmQ2FzaFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWRnZUNhc2hVcFwiKTtcclxuXHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBDYXNoVXBcclxuICAgICQuZWFjaCh3b3JsZC51cGdyYWRlcy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIGNhc2hVcCkge1xyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgbGEgcG9zc2liaWxpdMOpIGQnZW4gYWNoZXRlclxyXG4gICAgICAgIGlmIChjYXNoVXAuc2V1aWwgPD0gd29ybGQubW9uZXkgJiYgY2FzaFVwLnVubG9ja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNhc2hVcERpc3BvKys7XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIFMnaWwgbid5IGEgYXVjdW4gQ2FzaFVwIGFjaGV0YWJsZSwgb24gYWZmaWNoZSByaWVuXHJcbiAgICBpZiAoY2FzaFVwRGlzcG8gPT0gMCkge1xyXG4gICAgICAgIG5vdGlmQ2FzaFVwLmlubmVyVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBTaW5vbiBvbiBhZmZpY2hlIGxldXIgcXVhbnRpdMOpIGFjaGV0YWJsZVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbm90aWZDYXNoVXAuaW5uZXJUZXh0ID0gY2FzaFVwRGlzcG8udG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQWZmaWNoYWdlIGR5bmFtaXF1ZW1lbnQgc2kgdW4gbWFuYWdlciBlc3QgYWNoZXRhYmxlXHJcbmZ1bmN0aW9uIHZlcmlmQ2FzaFVwKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gUG91ciBjaGFxdWUgbWFuYWdlclxyXG4gICAgJC5lYWNoKHdvcmxkLnVwZ3JhZGVzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgY2FzaFVwKSB7XHJcbiAgICAgICAgLy8gT24gcsOpY3Vww6hyZSBzb24gYm91dG9uIGQnYWNoYXRcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXlcIiArIGNhc2hVcC5pZGNpYmxlKTtcclxuXHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBhc3NleiBkJ2FyZ2VudCBvdSBxdWUgbGUgbWFuYWdlciBuJ2VzdCBwYXMgZMOpasOgIGFjaGV0w6lcclxuICAgICAgICBpZiAoKGNhc2hVcC5zZXVpbCA+IHdvcmxkLm1vbmV5KSB8fCAoY2FzaFVwLnVubG9ja2VkID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWNoZXTDqVwiO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2lub24gb24gbGUgZMOpc2FjdGl2ZVxyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7IG1hdGNoSWQgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi4vQXBwL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBzZW5kVG9TZXJ2ZXIgfSBmcm9tIFwiLi4vUmVzdENhbGxzXCI7XHJcblxyXG5cclxuLy8gQWZmaWNoYWdlIGRlcyBtYW5hZ2Vyc1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1hbmFnZXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gQ29udGFpbmVyXHJcbiAgICBsZXQgbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxNYW5hZ2VyXCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIERpYWxvZ3VlXHJcbiAgICBsZXQgbWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbS5hcHBlbmRDaGlsZChtZCk7XHJcbiAgICBtZC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGlhbG9nXCIsIFwibW9kYWwtbGdcIik7XHJcbiAgICBtZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZG9jdW1lbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgQ29udGVudFxyXG4gICAgbGV0IG1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1kLmFwcGVuZENoaWxkKG1jKTtcclxuICAgIG1jLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIGhlYWRlclxyXG4gICAgbGV0IG1oID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKG1oKTtcclxuICAgIG1oLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XHJcblxyXG4gICAgLy9Cb3V0b24gRmVybWVyIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZChiKTtcclxuICAgIGIuY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKVxyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLWRpc21pc3NcIiwgXCJtb2RhbFwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xyXG5cclxuICAgIC8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQodCk7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgIHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsTGFiZWxcIik7XHJcbiAgICB0LmlubmVyVGV4dCA9IFwiTGVzIE1hbmFnZXJzXCI7XHJcblxyXG5cclxuICAgIC8vQ3LDqWF0aW9uIEJvZHlcclxuICAgIGxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbiAgICBib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuICAgIGJvZHlNLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWxCb2R5XCIpO1xyXG5cclxuICAgIC8vUmVtcGxpc3NhZ2UgZHUgYm9keSBhdmVjIGxlcyBkaWZmZXJyZW50cyBtYW5hZ2Vyc1xyXG4gICAgbGlzdE1hbmFnZXJzKHNlcnZlciwgd29ybGQpO1xyXG59XHJcblxyXG5cclxuLy8gQWZmaWNoYWdlIGRlIGxhIGxpc3RlIGRlcyBtYW5hZ2Vyc1xyXG5mdW5jdGlvbiBsaXN0TWFuYWdlcnMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQm9keVwiKTtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgcGFsbGllcikge1xyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgICAgICBjb2wuaWQgPSBcIm1hbmFnZXJcIiArIHBhbGxpZXIuaWRjaWJsZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBJbWFnZSBldCBub20gZHUgbWFuYWdlcnNcclxuICAgICAgICBsZXQgaW1hZ2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoaW1hZ2VOYW1lKTtcclxuICAgICAgICBpbWFnZU5hbWUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsvL1wiY29sLTRcIiwgXCJjb2wtbGctMlwiXHJcblxyXG4gICAgICAgIC8vUGFydGllIEltYWdlXHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpbWFnZU5hbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJpbWFnZU1hbmFnZXJzXCIpO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWFnZS5hcHBlbmRDaGlsZChpbWFnZU1hbmFnZXIpO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5pZCA9IFwiaW1nXCIgKyBwYWxsaWVyLmlkY2libGU7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLnNyYyA9IHNlcnZlciArIHBhbGxpZXIubG9nbztcclxuICAgICAgICBpbWFnZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWRcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tIGV0IHByaXhcclxuICAgICAgICBsZXQgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGltYWdlTmFtZS5hcHBlbmRDaGlsZChuYW1lUHJpY2UpO1xyXG4gICAgICAgIG5hbWVQcmljZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpXHJcblxyXG4gICAgICAgIC8vUGFydGllIE5vbVxyXG4gICAgICAgIGxldCBuYW1lTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKG5hbWVNYW5hZ2VyKTtcclxuICAgICAgICBuYW1lTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmlubmVyVGV4dCA9IHBhbGxpZXIubmFtZTtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgUHJpeFxyXG4gICAgICAgIGxldCBwcmljZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZChwcmljZU1hbmFnZXIpO1xyXG4gICAgICAgIHByaWNlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gdHJhbnNmb3JtKHBhbGxpZXIuc2V1aWwpXHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmlubmVySFRNTCA9IGNvc3Q7XHJcblxyXG4gICAgICAgIC8vUGFydGllIGJvdXRvbiBkJ2VtYmF1Y2hlXHJcbiAgICAgICAgbGV0IGhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChoaXJlKTtcclxuICAgICAgICBoaXJlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7IC8vXCJjb2wtNFwiLCBcImNvbC1sZy0yXCJcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGhpcmUuYXBwZW5kQ2hpbGQoYnV0dG9uSGlyZSk7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5pZCA9IFwiaGlyZVwiICsgcGFsbGllci5pZGNpYmxlO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIsIFwiYnV0dG9uSGlyZVwiKTtcclxuICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dCA9IFwiQWNoZXRlIE1vaSAhXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFsbGllci5pZGNpYmxlICsgXCIgXCIgKyBwYWxsaWVyLnVubG9ja2VkKTtcclxuICAgICAgICBpZiAocGFsbGllci51bmxvY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRElTQUJMRURcIilcclxuICAgICAgICAgICAgYnV0dG9uSGlyZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoYnV0dG9uSGlyZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImplIHRlbnRlIGQnYWNoZXRlciB1biBtYW5hZ2VyIDopXCIpO1xyXG4gICAgICAgICAgICBidXlNYW5hZ2VyKHBhbGxpZXIsIHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgaW1hZ2VQcm9kdWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgICAgIGhpcmUuYXBwZW5kQ2hpbGQoaW1hZ2VQcm9kdWN0KVxyXG4gICAgICAgIGltYWdlUHJvZHVjdC5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VQcm9kdWN0TWFuYWdlclwiKVxyXG4gICAgICAgIGxldCBzcmNJbWc9Z2V0SW1hZ2UocGFsbGllci5pZGNpYmxlLHdvcmxkKVxyXG4gICAgICAgIGltYWdlUHJvZHVjdC5zcmM9c2VydmVyK3NyY0ltZzsqL1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZHluYW1pcXVlbWVudCBzaSB1biBtYW5hZ2VyIGVzdCBhY2hldGFibGVcclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmTWFuYWdlcnMod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBtYW5hZ2VyXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgLy8gT24gcsOpY3Vww6hyZSBzb24gYm91dG9uIGQnYWNoYXRcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXJlXCIgKyBwYWxsaWVyLmlkY2libGUpO1xyXG5cclxuICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50IG91IHF1ZSBsZSBtYW5hZ2VyIG4nZXN0IHBhcyBkw6lqw6AgYWNoZXTDqVxyXG4gICAgICAgIGlmICgocGFsbGllci5zZXVpbCA+IHdvcmxkLm1vbmV5KSB8fCAocGFsbGllci51bmxvY2tlZCA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAvLyBTaSBjJ2VzdCBsZSBjYXMsIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFjaGV0w6lcIjtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGxlIGTDqXNhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBDYWxjdWxlIGR5bmFtaXF1ZW1lbnQgbGUgbm9tYnJlIGRlIG1hbmFnZXJzIGFjaGV0YWJsZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGJ1eWFibGVNYW5hZ2Vycyh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFZhcmlhYmxlc1xyXG4gICAgbGV0IG1hbmFnZXJEaXNwbyA9IDA7XHJcbiAgICBsZXQgbm90aWZNYW5hZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWRnZU1hbmFnZXJcIik7XHJcblxyXG4gICAgLy8gUG91ciBjaGFxdWUgbWFuYWdlclxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgbWFuYWdlcikge1xyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgbGEgcG9zc2liaWxpdMOpIGQnZW4gYWNoZXRlclxyXG4gICAgICAgIGlmIChtYW5hZ2VyLnNldWlsIDw9IHdvcmxkLm1vbmV5ICYmIG1hbmFnZXIudW5sb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWFuYWdlckRpc3BvKys7XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIFMnaWwgbid5IGEgYXVjdW4gbWFuYWdlciBhY2hldGFibGUsIG9uIGFmZmljaGUgcmllblxyXG4gICAgaWYgKG1hbmFnZXJEaXNwbyA9PSAwKSB7XHJcbiAgICAgICAgbm90aWZNYW5hZ2VyLmlubmVyVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBTaW5vbiBvbiBhZmZpY2hlIGxldXIgcXVhbnRpdMOpIGFjaGV0YWJsZVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbm90aWZNYW5hZ2VyLmlubmVyVGV4dCA9IG1hbmFnZXJEaXNwby50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQWNoYXQgZCd1biBtYW5hZ2VyXHJcbmZ1bmN0aW9uIGJ1eU1hbmFnZXIobWFuYWdlcjogUGFsbGllciwgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50IHBvdXIgYWNoZXRlciBsZSBtYW5hZ2VyXHJcbiAgICBpZiAobWFuYWdlci5zZXVpbCA8PSB3b3JsZC5tb25leSkge1xyXG4gICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gc291c3RyYWl0IHNvbiBjb8O7dFxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IG1hbmFnZXIuc2V1aWw7XHJcblxyXG4gICAgICAgIC8vIE9uIGFmZmljaGUgZW5zdWl0ZSBsZSBub3V2ZWF1IHNvbGRlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIE9uIGTDqWJsb3F1ZSBsZSBtYW5hZ2VyXHJcbiAgICAgICAgbWFuYWdlci51bmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgbWF0Y2hJZChtYW5hZ2VyLCB3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZW1lbnQgZHUgYm91dG9uIEhpcmUgZW4gYWNoZXTDqSBldCBkaXNhYmxlZFxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmVcIiArIG1hbmFnZXIuaWRjaWJsZSk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiQWNoZXTDqVwiXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1zZWNvbmRhcnlcIik7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuXHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbWFnZShpZDpudW1iZXIsd29ybGQ6V29ybGQpe1xyXG4kLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgscHJvZHVpdCl7XHJcbiAgICBsZXQgc3JjPVwiXCJcclxuICAgIGlmKHByb2R1aXQuaWQ9PWlkKXtcclxuICAgICAgICBzcmM9cHJvZHVpdC5sb2dvXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3VyY2UgaW1hZ2U6XCIrcHJvZHVpdC5sb2dvKVxyXG4gICAgICAgIHJldHVybiBzcmM7XHJcbiAgICB9XHJcbn0pXHJcbn0iLCJpbXBvcnQgeyBmaW5kUHJvZHVjdCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG5cclxuLy8gQWZmaWNoYWdlIGRlcyB1bmxvY2tzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFVubG9ja1wiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWxlY3QgYmFycmVcclxuICAgIGxldCBzZWxlY3RCYXJyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIG1oLmFwcGVuZENoaWxkKHNlbGVjdEJhcnJlKVxyXG4gICAgc2VsZWN0QmFycmUuaWQgPSBcInNlbGVjdEJhcnJlVW5sb2Nrc1wiXHJcblxyXG4gICAgbGV0IG9wdEdsb2JhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIHNlbGVjdEJhcnJlLmFwcGVuZENoaWxkKG9wdEdsb2JhbClcclxuICAgIG9wdEdsb2JhbC5pZCA9IFwib3B0UHJvZHVpdFwiICsgMFxyXG4gICAgb3B0R2xvYmFsLnZhbHVlID0gXCJcIiArIDBcclxuICAgIG9wdEdsb2JhbC50ZXh0ID0gXCJVbmxvY2tzIGdsb2JhdXhcIlxyXG4gICAgb3B0R2xvYmFsLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsXCJcIilcclxuXHJcbiAgICBcclxuXHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICAgICAgc2VsZWN0QmFycmUuYXBwZW5kQ2hpbGQob3B0KVxyXG4gICAgICAgIG9wdC5pZCA9IFwib3B0UHJvZHVpdFwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIG9wdC52YWx1ZSA9IFwiXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgb3B0LnRleHQgPSBwcm9kdWN0Lm5hbWVcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IG9wdEFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIHNlbGVjdEJhcnJlLmFwcGVuZENoaWxkKG9wdEFsbClcclxuICAgIG9wdEFsbC5pZCA9IFwib3B0UHJvZHVpdFwiICsgN1xyXG4gICAgb3B0QWxsLnZhbHVlID0gXCI3XCI7XHJcbiAgICBvcHRBbGwudGV4dCA9IFwiVG91cyBsZXMgcHJvZHVpdHNcIlxyXG4gICAgXHJcbiAgICAvL1RpdHJlIGRlIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XHJcbiAgICB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlNb2RhbExhYmVsXCIpO1xyXG4gICAgdC5pbm5lclRleHQgPSBcIkxlcyBVbmxvY2tzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uaWQgPSBcIm1vZGFsVW5sb2NrQm9keVwiO1xyXG5cclxuIFxyXG4gICAgJChzZWxlY3RCYXJyZSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxyXG4gICAgICAgIGxpc3RVbmxvY2tzKHBhcnNlSW50KHRoaXMudmFsdWUpLCBzZXJ2ZXIsIHdvcmxkKVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGlzdFVubG9ja3MoMCwgc2VydmVyLCB3b3JsZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RVbmxvY2tzKGlkOiBudW1iZXIsIHNlcnZlcjogU3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBib2R5VW5sb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFVubG9ja0JvZHlcIilcclxuICAgIGJvZHlVbmxvY2suaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBncmlkVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYm9keVVubG9jay5hcHBlbmRDaGlsZChncmlkVW5sb2NrKVxyXG4gICAgZ3JpZFVubG9jay5pZCA9IFwiZ3JpZFVubG9ja1wiXHJcbiAgICBncmlkVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0yXCIpXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCB1bmxvY2spIHtcclxuXHJcbiAgICAgICAgaWYgKHVubG9jay5pZGNpYmxlID09IGlkKSB7XHJcbiAgICAgICAgICAgIGFmZmljaGFnZShzZXJ2ZXIsdW5sb2NrKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpZCA9PSA3KSB7XHJcbiAgICAgICAgICAgIGFmZmljaGFnZShzZXJ2ZXIsdW5sb2NrKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFmZmljaGFnZShzZXJ2ZXI6IFN0cmluZywgdW5sb2NrOiBQYWxsaWVyKSB7XHJcbiAgICBsZXQgZ3JpZFVubG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZFVubG9ja1wiKVxyXG4gICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBncmlkVW5sb2NrLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuICAgIGNvbC5pZCA9IFwidW5sb2NrXCIgKyB1bmxvY2suaWRjaWJsZTtcclxuXHJcbiAgICAvL2RpdmlzaW9uIGRlIGxhIGxpZ25lIGVuIGRldXggcGFydGllcyAoSW1hZ2UrRGVzY3JpcHRpb24gLy8gVW5sb2NrZWQgb3Ugbm9uKVxyXG4gICAgbGV0IGNvbEltYWdlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikvL0ltYWdlIERlc2NyaXB0aW9uXHJcbiAgICBsZXQgY29sVW5sb2NrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9BZmZpY2hhZ2UgZXN0IGlsIGTDqXbDqXJvdWlsbMOpID9cclxuICAgIGNvbC5hcHBlbmRDaGlsZChjb2xJbWFnZURlc2MpXHJcbiAgICBjb2wuYXBwZW5kQ2hpbGQoY29sVW5sb2NrZWQpXHJcbiAgICBjb2xJbWFnZURlc2MuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG4gICAgY29sVW5sb2NrZWQuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG5cclxuICAgIC8vQWZmaWNoYWdlIEljb24gVW5sb2NrXHJcbiAgICBsZXQgaWNvblVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChpY29uVW5sb2NrKVxyXG4gICAgaWNvblVubG9jay5zcmMgPSBzZXJ2ZXIgKyB1bmxvY2subG9nb1xyXG4gICAgaWNvblVubG9jay5jbGFzc0xpc3QuYWRkKFwiaW1nVW5sb2NrXCIpXHJcbiAgICBpZiAodW5sb2NrLnVubG9ja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgaWNvblVubG9jay5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRVbmxvY2tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5vbVVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKG5vbVVubG9jaylcclxuICAgIG5vbVVubG9jay5pbm5lclRleHQgPSB1bmxvY2submFtZVxyXG5cclxuICAgIGxldCBkZXNjclVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoZGVzY3JVbmxvY2spXHJcbiAgICBkZXNjclVubG9jay5pbm5lclRleHQgPSBcIkF1Z21lbnRhdGlvbiBkZSBcIiArIHVubG9jay50eXBlcmF0aW8gKyBcIiB4XCIgKyB1bmxvY2sucmF0aW9cclxuXHJcbiAgICBsZXQgc2V1aWxVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKHNldWlsVW5sb2NrKVxyXG4gICAgc2V1aWxVbmxvY2suaW5uZXJUZXh0ID0gXCJTZXVpbDogXCIgKyB1bmxvY2suc2V1aWxcclxufVxyXG5cclxuXHJcbi8vIFbDqXJpZmllIHNpIHVuIHVubG9jayBkb2l0IMOqdHJlIGTDqXbDqXJvdWlsbGVcclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmVW5sb2NrKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gUG91ciB0b3VzIGxlcyB1bmxvY2tzXHJcbiAgICAkLmVhY2god29ybGQuYWxsdW5sb2Nrcy5wYWxsaWVyLCBmdW5jdGlvbihpbmRleCwgdW5sb2NrKXtcclxuICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCd1bmxvY2sgbidlc3QgcGFzIGTDqWrDoCBkw6l2w6lyb3VpbGzDqVxyXG4gICAgICAgIGlmICh1bmxvY2sudW5sb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy8gU2kgYydlc3QgdW4gdW5sb2NrIHBvdXIgdW4gcHJvZHVpdCBwYXJ0aWN1bGllclxyXG4gICAgICAgICAgICBpZiAodW5sb2NrLmlkY2libGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gT24gcsOpY3Vww6hyZSBsZSBwcm9kdWl0XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdDogUHJvZHVjdCA9IGZpbmRQcm9kdWN0KHdvcmxkLCB1bmxvY2suaWRjaWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBkw6lwYXNzw6kgbGUgc2V1aWwgcHJvZHVpdFxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdGUgPj0gdW5sb2NrLnNldWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRMOpdsOpcm91aWxsZXIgbCd1bmxvY2tcclxuICAgICAgICAgICAgICAgICAgICB1bmxvY2sudW5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QubmFtZSArIFwiIGhhcyB1bmxvY2tlZCBhIHhcIiArIHVubG9jay5yYXRpbyArIFwiIFwiICsgdW5sb2NrLnR5cGVyYXRpbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGxpcXVlciBsZXMgY2hhbmdlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godW5sb2NrLnR5cGVyYXRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVklURVNTRVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52aXRlc3NlID0gcHJvZHVjdC52aXRlc3NlIC8gdW5sb2NrLnJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLyB1bmxvY2sucmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdBSU5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucmV2ZW51ID0gcHJvZHVjdC5yZXZlbnUgKiB1bmxvY2sucmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTaSBjJ2VzdCB1biB1bmxvY2sgZ2xvYmFsXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVubG9jay5pZGNpYmxlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0dXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgdG91cyBsZXMgcHJvZHVpdHMgdmFsaWRlbnQgbGVzIHNldWlsc1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdGUgPCB1bmxvY2suc2V1aWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTaSB0b3VzIGxlcyBwcm9kdWl0cyB2YWxpZGVudCBsZXMgc2V1aWxzLCBvbiBhcHBsaXF1ZSBsZSBjaGFuZ2VtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldvcmxkIGhhcyBhIGdsb2JhbCB1bmxvY2sgeFwiICsgdW5sb2NrLnJhdGlvICsgXCIgXCIgKyB1bmxvY2sudHlwZXJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHVubG9jay50eXBlcmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJWSVRFU1NFXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52aXRlc3NlID0gcHJvZHVjdC52aXRlc3NlIC8gdW5sb2NrLnJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSBwcm9kdWN0LnRpbWVsZWZ0IC8gdW5sb2NrLnJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdBSU5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnJldmVudSA9IHByb2R1Y3QucmV2ZW51ICogdW5sb2NrLnJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHNlcnZlclVybCB9IGZyb20gXCIuXCI7XHJcblxyXG4vLyBFbnZvaSBhdSBzZXJ2ZXVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kVG9TZXJ2ZXIodHlwZTogc3RyaW5nLCBjb250ZW50OiBhbnkpIHtcclxuICAgICQuYWpheChzZXJ2ZXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy9cIiArIHR5cGUsIHtcclxuICAgICAgICB0eXBlOiBcIlBVVFwiLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjb250ZW50KSxcclxuICAgICAgICBzdGF0dXNDb2RlOiB7XHJcbiAgICAgICAgICAgIDMwNDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWN0aW9uIG5vbiBwcmlzZSBlbiBjb21wdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gZWNoZWMgZGUgbGEgcmVxdcOqdGVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBsYXN0VXBkYXRlTGlzdCwgc2hvd1Byb2R1Y3RzLCBzdGFydFByb2R1Y3QsIGZpbGxMYXN0VXBkYXRlIH0gZnJvbSBcIi4vQXBwL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIZWFkZXIsIHRyYW5zZm9ybSB9IGZyb20gXCIuL0FwcC9IZWFkZXJcIlxyXG5pbXBvcnQgeyBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL0FwcC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyBhZGRTZWxlY3RlZCwgYnV5YWJsZVByb2R1Y3RzLCBzaG93U2lkZUJhciB9IGZyb20gXCIuL0FwcC9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlNZW51IH0gZnJvbSBcIi4vQXBwL01lbnVcIjtcclxuaW1wb3J0IHsgYnV5YWJsZU1hbmFnZXJzLCBkaXNwbGF5TWFuYWdlciwgdmVyaWZNYW5hZ2VycyB9IGZyb20gXCIuL01vZGFscy9NYW5hZ2Vyc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VW5sb2NrcyB9IGZyb20gXCIuL01vZGFscy9VbmxvY2tzXCI7XHJcbmltcG9ydCB7IGJ1eWFibGVDYXNoVXAsIGRpc3BsYXlDYXNoVXBncmFkZXN9IGZyb20gXCIuL01vZGFscy9DYXNoVXBncmFkZXNcIjtcclxuaW1wb3J0IHsgc2VuZFRvU2VydmVyIH0gZnJvbSBcIi4vUmVzdENhbGxzXCI7XHJcblxyXG5cclxuLy8gVXNlcm5hbWVcclxuZXhwb3J0IHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcblxyXG4vLyBDaGFuZ2VtZW50IGR1IHBzZXVkb1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcm5hbWUobmV3VXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdXNlcm5hbWUgPSBuZXdVc2VybmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgbmV3VXNlcm5hbWUpO1xyXG5cclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XCJYLXVzZXJcIjogdXNlcm5hbWV9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBVcmwgc2VydmV1ciBsb2NhbFxyXG5jb25zdCBzZXJ2ZXJMb2NhbDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4vLyBVcmwgc2VydmV1ciBoZXJva3VcclxuY29uc3Qgc2VydmVySGVyb2t1OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3QuaGVyb2t1YXBwLmNvbS9cIlxyXG5cclxuLy8gVXJsIHNlcnZldXIgdGVzdFxyXG5jb25zdCBzZXJ2ZXJ0ZXN0OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcblxyXG5cclxuLy8gU2VydmV1ciB1dGlsaXPDqVxyXG5leHBvcnQgdmFyIHNlcnZlclVybCA9IHNlcnZlcnRlc3Q7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQ2hhcmdlbWVudCBkdSBwc2V1ZG8gZHUgam91ZXVyXHJcbiAgICBjb25zb2xlLmxvZyh1c2VybmFtZSk7XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XHJcblxyXG4gICAgLy8gQWZmaWNoYWdlIGR1IG1vbmRlIGR1IGpvdWV1clxyXG4gICAgJC5nZXRKU09OKHNlcnZlclVybCArIFwiYWR2ZW50dXJlaXNpcy9nZW5lcmljL3dvcmxkXCIsIGZ1bmN0aW9uICh3b3JsZDogV29ybGQpIHtcclxuICAgICAgICAvLyBBZmZpY2hhZ2UgZHUgbW9uZGUgY2hhcmfDqVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdvcmxkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVElNRUxFRlQgPSBcIiArIHdvcmxkLnByb2R1Y3RzLnByb2R1Y3RbNF0udGltZWxlZnQpO1xyXG4gICAgICAgIGZpbGxMYXN0VXBkYXRlKHdvcmxkKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gYXJnZW50IGRlIGJhc2VcclxuICAgICAgICAvLyB3b3JsZC5tb25leSA9IDIwMDA7XHJcblxyXG4gICAgICAgIC8vIEFmZmljaGFnZSBIVE1MXHJcbiAgICAgICAgZGlzcGxheUhlYWRlcihzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBzaG93UHJvZHVjdHMoc2VydmVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgc2hvd1NpZGVCYXIoc2VydmVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1lbnUod29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNYW5hZ2VyKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlVbmxvY2tzKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlDYXNoVXBncmFkZXMoc2VydmVyVXJsLCB3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbnMgZHluYW1pcXVlc1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsIGR1IHNjb3JlXHJcbiAgICAgICAgICAgIGNhbGNTY29yZShzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmljYXRpb24gYWNoYXRzIG1hbmFnZXJzXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsTWFuYWdlclwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJpZk1hbmFnZXJzKHdvcmxkKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFmZmljaGFnZSBhY2hldGFibGVzXHJcbiAgICAgICAgICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZClcclxuICAgICAgICAgICAgYnV5YWJsZU1hbmFnZXJzKHdvcmxkKVxyXG4gICAgICAgICAgICBidXlhYmxlQ2FzaFVwKHdvcmxkKVxyXG5cclxuICAgICAgICAgICAgLy8gU2kgbCdvcHRpb24gZCdham91dCBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZSwgb24gc3luY2hyb25pc2UgYXZlYyBlbiBmb25jdGlvbiBkdSBzY29yZVxyXG4gICAgICAgICAgICAvL2lmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgIC8vc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIENhbGN1bCBkdSBzY29yZVxyXG5mdW5jdGlvbiBjYWxjU2NvcmUoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gUG91ciBjaGFxdWUgcHJvZHVpdFxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsZSBwcm9kdWl0IGVzdCBlbiBjb3VycyBkZSBwcm9kdWN0aW9uXHJcbiAgICAgICAgaWYgKHByb2R1Y3QudGltZWxlZnQgIT0gMCkge1xyXG4gICAgICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIHRlbXBzIGRlIHByb2R1Y3Rpb24gcmVzdGFudFxyXG4gICAgICAgICAgICBsZXQgdGltZVBhc3NlZDogbnVtYmVyID0gRGF0ZS5ub3coKSAtIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdO1xyXG4gICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC50aW1lbGVmdCAtIHRpbWVQYXNzZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIHBvdXJjZW50YWdlIGRlIHByb2R1Y3Rpb24gcmVzdGFudCBldCBvbiBhY3R1YWxpc2UgbGEgYmFyIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgICAgIGxldCBwb3VyY2VudGFnZTogbnVtYmVyID0gcHJvZHVjdC50aW1lbGVmdCAvIHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC50aW1lbGVmdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG91cmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCBwb3VyY2VudGFnZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsZSBub3V2ZWF1IHRlbXBzIHJlc3RhbnQgZXN0IGluZsOpcmlldXIgb3Ugw6lnYWwgw6AgMFxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC50aW1lbGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBham91dGUgbGUgcmV2ZW51IGR1IHByb2R1aXRcclxuICAgICAgICAgICAgICAgIGxldCByZXZlbnU6IG51bWJlciA9IHByb2R1Y3QucmV2ZW51ICogcHJvZHVjdC5xdWFudGl0ZTtcclxuICAgICAgICAgICAgICAgIGFkZFNjb3JlKHdvcmxkLCByZXZlbnUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uIHLDqWluaXRpYWxpc2UgbGEgcHJvZ3Jlc3Npb24gZGUgbGEgcHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2kgbGUgcHJvZHVpdCBuJ2VzdCBwYXMgZW4gY291cnMgZGUgcHJvZHVjdGlvbiBldCBhIHVuIG1hbmFnZXJcclxuICAgICAgICBlbHNlIGlmICgocHJvZHVjdC50aW1lbGVmdCA9PSAwKSAmJiAocHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQgPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgLy8gT24gbGFuY2UgbGEgcHJvZHVjdGlvbiBkdSBwcm9kdWl0XHJcbiAgICAgICAgICAgIHN0YXJ0UHJvZHVjdChwcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFVwZGF0ZUxpc3RbcHJvZHVjdC5pZF0gPSBEYXRlLm5vdygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBDYWxjdWwgZHUgc2NvcmVcclxuZnVuY3Rpb24gYWRkU2NvcmUod29ybGQ6IFdvcmxkLCBzY29yZTogbnVtYmVyKSB7XHJcbiAgICAvLyBBam91dCBkZSBsJ2FyZ2VudFxyXG4gICAgd29ybGQubW9uZXkgKz0gc2NvcmU7XHJcblxyXG4gICAgLy8gQWpvdXQgZHUgc2NvcmVcclxuICAgIHdvcmxkLnNjb3JlICs9IHNjb3JlO1xyXG5cclxuICAgIC8vIEFmZmljaGUgZHUgbm91dmVhdSBzb2xkZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn1cclxuXHJcblxyXG4vLyBEw6libG9xdWUgbWFuYWdlciBwb3VyIHVuIHByb2R1aXRcclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSWQobWFuYWdlcjogUGFsbGllciwgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKG1hbmFnZXIuaWRjaWJsZSA9PSBwcm9kdWN0LmlkKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QubWFuYWdlclVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWl0OiBcIiArIHByb2R1Y3QubmFtZSArIFwiIHVubG9ja2VkOlwiICsgcHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VuZFRvU2VydmVyKFwibWFuYWdlclwiLCBtYW5hZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbjw8PDw8PDwgSEVBRFxyXG49PT09PT09XHJcblxyXG5cclxuLy8gUmV0cm91dmVyIHVuIHByb2R1aXQgw6AgcGFydGlyIGQndW4gaWRcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9kdWN0KHdvcmxkOiBXb3JsZCwgaWRQcm9kdWN0OiBudW1iZXIpOiBQcm9kdWN0IHtcclxuICAgIGxldCBwOiBQcm9kdWN0ID0gbnVsbDtcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0LmlkLnRvU3RyaW5nKCkgPT0gaWRQcm9kdWN0LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgcCA9IHByb2R1Y3RcclxuICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcDtcclxufVxyXG4+Pj4+Pj4+IGRmYTNjNDljZWM2NTZlYTIxOWY3MGY0NDUzZDljNGFmMTgwMzA5NjhcclxuIiwiaW1wb3J0IHtwcm9ncmVzc0Jhckxpc3R9IGZyb20gXCIuL1Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpIHtcclxuICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uIChsaWduZSlcclxuICAgIGxldCBwcm9kdWN0UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RQcm9ncmVzcyk7XHJcbiAgICBwcm9kdWN0UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGxldCBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuTGluZShwcm9kdWN0UHJvZ3Jlc3MsIHtcclxuICAgICAgICBzdHJva2VXaWR0aDogMTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcclxuICAgICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgICAgICBjb2xvcjogJyNGRkVBODInLFxyXG4gICAgICAgIHRyYWlsQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICB0cmFpbFdpZHRoOiAxLFxyXG4gICAgICAgIHN2Z1N0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH0sXHJcbiAgICAgICAgZnJvbTogeyBjb2xvcjogJyNGRkVBODInIH0sXHJcbiAgICAgICAgdG86IHsgY29sb3I6ICcjRUQ2QTVBJyB9LFxyXG4gICAgICAgIHN0ZXA6IChzdGF0ZSwgYmFyKSA9PiB7XHJcbiAgICAgICAgICAgIGJhci5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2dyZXNzQmFyTGlzdFtwcm9kdWN0LmlkXSA9IGJhcjtcclxuICAgIGJhci5hbmltYXRlKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGlkLCBwb3VyY2VudGFnZSkge1xyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W2lkXS5zZXQocG91cmNlbnRhZ2UpXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==