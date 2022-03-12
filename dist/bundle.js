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
    container.appendChild(buttonUserDiv);
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
    var buttonAngel = document.createElement("button");
    angels.appendChild(buttonAngel);
    buttonAngel.classList.add("btn", "btn-primary");
    buttonAngel.setAttribute("data-bs-toggle", "modal");
    buttonAngel.setAttribute("data-bs-target", "#modalAngel");
    buttonAngel.innerText = "Angels ";
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

var listbutton = [];
function displayCashUpgrades(server, world) {
    creationModal(server, world);
    //creationBodyCash(server, world)
}
function creationModal(server, world) {
    // Container
    var m = document.getElementById("modalCashUp");
    $(m).on('hidden.bs.modal', function () {
        $('#selectBarreCashUp').val(0);
        affichageCashUp(0, server, world);
    });
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
    optAll.id = "optProduit" + -1;
    optAll.value = "-1";
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
        else if (id == -1) {
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
    if (cashUp.seuil > world.money) {
        buttonBuyCashUp.setAttribute("disabled", "true");
    }
    else {
        buttonBuyCashUp.removeAttribute("disabled");
    }
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");


// Affichage des unlocks
function displayUnlocks(server, world) {
    // Container
    var m = document.getElementById("modalUnlock");
    //Balise Modal Dialogue
    var md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog", "modal-lg");
    md.setAttribute("role", "document");
    $(m).on('hidden.bs.modal', function () {
        $('#selectBarreUnlocks').val(0);
        listUnlocks(0, server, world);
    });
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
    optAll.id = "optProduit" + -1;
    optAll.value = "-1";
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
        else if (id == -1) {
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
                var product = (0,_index__WEBPACK_IMPORTED_MODULE_0__.findProduct)(world, unlock.idcible);
                // On vérifie que l'on a dépassé le seuil produit
                if (product.quantite >= unlock.seuil) {
                    // Dévérouiller l'unlock
                    unlock.unlocked = true;
                    console.log(product.name + " has unlocked a x" + unlock.ratio + " " + unlock.typeratio);
                    // Appliquer les changements
                    (0,_index__WEBPACK_IMPORTED_MODULE_0__.applyBonusProduct)(product, unlock.ratio, unlock.typeratio);
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
                    unlock.unlocked = true;
                    console.log("World has a global unlock x" + unlock.ratio + " " + unlock.typeratio);
                    $.each(world.products.product, function (index, product) {
                        (0,_index__WEBPACK_IMPORTED_MODULE_0__.applyBonusProduct)(product, unlock.ratio, unlock.typeratio);
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
/* harmony export */   "applyBonusProduct": () => (/* binding */ applyBonusProduct),
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
var serverUrl = serverTest;
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
// Applique un bonus 
function applyBonusProduct(product, ratio, type) {
    switch (type) {
        case "VITESSE":
            product.vitesse = product.vitesse / ratio;
            product.timeleft = product.timeleft / ratio;
        case "GAIN":
            product.revenu = product.revenu * ratio;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksc0RBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksc0RBQWU7QUFDbkI7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL0hlYWRlci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL01lbnUudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9kdWN0cy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1NpZGVCYXIudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL01vZGFscy9DYXNoVXBncmFkZXMudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL01vZGFscy9NYW5hZ2Vycy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvTW9kYWxzL1VubG9ja3MudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL1Jlc3RDYWxscy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSBmcm9tIFwiLi5cIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gcHJlbWnDqHJlIGNvbG9uZSBhdmVjIGxlIG5vbSBldCBsZSBsb2dvXHJcbiAgICBsZXQgbW9uZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmRlKTtcclxuICAgIG1vbmRlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJtb25kZVwiLCBcImJjY0ZvbnRcIik7XHJcblxyXG4gICAgLy9Mb2dvXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgICBsb2dvLnNyYyA9IHNlcnZlciArIHdvcmxkLmxvZ287XHJcblxyXG4gICAgLy9Ob21cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiIFwiICsgd29ybGQubmFtZTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWNvbmQgZW50w6p0ZSwgbCdhcmdlbnRcclxuICAgIGxldCBtb25leUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25leUNvbClcclxuICAgIG1vbmV5Q29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIpXHJcblxyXG4gICAgLy9MJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vbmV5Q29sLmFwcGVuZENoaWxkKG1vbmV5KTtcclxuICAgIG1vbmV5LmlkID0gXCJ3b3JsZE1vbmV5XCI7XHJcbiAgICBtb25leS5jbGFzc0xpc3QuYWRkKFwibW9uZXlcIik7XHJcbiAgICBsZXQgYXJnZW50ID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuICAgIG1vbmV5LmlubmVySFRNTCA9IGFyZ2VudDtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBkZXJuaWVyIGVudMOodGUsIFVzZXIgSURcclxuICAgIGxldCB1c2VyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyQ29sKTtcclxuICAgIHVzZXJDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcclxuXHJcbiAgICBsZXQgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB1c2VyQ29sLmFwcGVuZENoaWxkKHVzZXJSb3cpO1xyXG4gICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG5cclxuICAgIGxldCBsYWJlbFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGxhYmVsVXNlcik7XHJcbiAgICBsYWJlbFVzZXIuaHRtbEZvciA9IFwiaW5wdXRVc2VyXCI7XHJcbiAgICBsYWJlbFVzZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tbGFiZWxcIilcclxuXHJcbiAgICBsZXQgaW5wdXRVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChpbnB1dFVzZXIpO1xyXG4gICAgaW5wdXRVc2VyLmlkID0gXCJpbnB1dFVzZXJcIlxyXG4gICAgaW5wdXRVc2VyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRyb2xcIik7XHJcbiAgICBpbnB1dFVzZXIudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgaW5wdXRVc2VyLnBsYWNlaG9sZGVyID0gXCJQc2V1ZG9cIjtcclxuICAgIGlucHV0VXNlci52YWx1ZSA9IHVzZXJuYW1lO1xyXG4gICAgaW5wdXRVc2VyLnJlYWRPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgYnV0dG9uVXNlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uVXNlckRpdik7XHJcblxyXG4gICAgbGV0IGJ1dHRvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgYnV0dG9uVXNlckRpdi5hcHBlbmRDaGlsZChidXR0b25JbnB1dCk7XHJcbiAgICBidXR0b25JbnB1dC5pZCA9IFwidXNlckJ1dHRvbkNoZWNrXCI7XHJcbiAgICBidXR0b25JbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgYnV0dG9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuXHJcbiAgICBsZXQgYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBidXR0b25Vc2VyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkxhYmVsKTtcclxuICAgIGJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKTtcclxuICAgIGJ1dHRvbkxhYmVsLmh0bWxGb3IgPSBcInVzZXJCdXR0b25DaGVja1wiO1xyXG4gICAgYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nYmkgYmktY2hlY2stc3F1YXJlJz48L2k+XCI7XHJcbiAgICAkKGJ1dHRvbkxhYmVsKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VXNlci5yZWFkT25seSkge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSBmYWxzZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZShpbnB1dFVzZXIudmFsdWUpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHZhbGV1cjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAodmFsZXVyIDwgMTAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgyKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA8IDEwMDAwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMCk7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPj0gMTAwMDAwMCkge1xyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b1ByZWNpc2lvbig0KTtcclxuICAgICAgICByZXMgPSByZXMucmVwbGFjZSgvZVxcKyguKikvLCBcIiAxMDxzdXA+JDE8L3N1cD5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudSh3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gbmF2YmFyXHJcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIiwgXCJmaXhlZC1ib3R0b21cIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gdW5sb2Nrc1xyXG4gICAgbGV0IHVubG9ja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHVubG9ja3MpO1xyXG4gICAgdW5sb2Nrcy5jbGFzc0xpc3QuYWRkKFwidW5sb2Nrc1wiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBVbmxvY2tzXHJcbiAgICBsZXQgYnV0dG9uVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgdW5sb2Nrcy5hcHBlbmRDaGlsZChidXR0b25VbmxvY2spO1xyXG4gICAgYnV0dG9uVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgYnV0dG9uVW5sb2NrLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsIFwibW9kYWxcIilcclxuICAgIGJ1dHRvblVubG9jay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNtb2RhbFVubG9ja1wiKVxyXG4gICAgYnV0dG9uVW5sb2NrLmlubmVyVGV4dCA9IFwiVW5sb2NrcyBcIjtcclxuXHJcblxyXG4gICAgLy9jcsOpYXRpb24gY2FzaCB1cGdyYWRlc1xyXG4gICAgbGV0IGNhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNhc2gpO1xyXG4gICAgY2FzaC5jbGFzc0xpc3QuYWRkKFwiY2FzaFwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBVcGdyYWRlc1xyXG4gICAgbGV0IGJ1dHRvbkNhc2hVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGNhc2guYXBwZW5kQ2hpbGQoYnV0dG9uQ2FzaFVwKTtcclxuICAgIGJ1dHRvbkNhc2hVcC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIilcclxuICAgIGJ1dHRvbkNhc2hVcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLCBcIm1vZGFsXCIpXHJcbiAgICBidXR0b25DYXNoVXAuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbW9kYWxDYXNoVXBcIilcclxuICAgIGJ1dHRvbkNhc2hVcC5pbm5lclRleHQgPSBcIkNhc2hVcGdyYWRlcyBcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBiYWRnZVxyXG4gICAgbGV0IGJhZGdlQ2FzaFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBidXR0b25DYXNoVXAuYXBwZW5kQ2hpbGQoYmFkZ2VDYXNoVXApO1xyXG4gICAgYmFkZ2VDYXNoVXAuaWQgPSBcImJhZGdlQ2FzaFVwXCJcclxuICAgIGJhZGdlQ2FzaFVwLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiLCBcImJnLXNlY29uZGFyeVwiKTtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gYW5nZWxzIHVwZ3JhZGVzXHJcbiAgICBsZXQgYW5nZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhbmdlbHMpO1xyXG4gICAgYW5nZWxzLmNsYXNzTGlzdC5hZGQoXCJhbmdlbHNcIik7XHJcblxyXG4gICAgbGV0IGJ1dHRvbkFuZ2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgYW5nZWxzLmFwcGVuZENoaWxkKGJ1dHRvbkFuZ2VsKTtcclxuICAgIGJ1dHRvbkFuZ2VsLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgYnV0dG9uQW5nZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIiwgXCJtb2RhbFwiKVxyXG4gICAgYnV0dG9uQW5nZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjbW9kYWxBbmdlbFwiKVxyXG4gICAgYnV0dG9uQW5nZWwuaW5uZXJUZXh0ID0gXCJBbmdlbHMgXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gbWFuYWdlcnNcclxuICAgIGxldCBtYW5hZ2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWFuYWdlcnMpO1xyXG4gICAgbWFuYWdlcnMuY2xhc3NMaXN0LmFkZChcIm1hbmFnZXJzXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIE1hbmFnZXJcclxuICAgIGxldCBidXR0b25NYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgbWFuYWdlcnMuYXBwZW5kQ2hpbGQoYnV0dG9uTWFuYWdlcik7XHJcbiAgICBidXR0b25NYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLCBcIm1vZGFsXCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIsIFwiI21vZGFsTWFuYWdlclwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5pbm5lclRleHQgPSBcIk1hbmFnZXJzIFwiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGJhZGdlXHJcbiAgICBsZXQgYmFkZ2VNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBidXR0b25NYW5hZ2VyLmFwcGVuZENoaWxkKGJhZGdlTWFuYWdlcik7XHJcbiAgICBiYWRnZU1hbmFnZXIuaWQgPSBcImJhZGdlTWFuYWdlclwiXHJcbiAgICBiYWRnZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImJhZGdlXCIsIFwiYmctc2Vjb25kYXJ5XCIpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IGFkZFByb2dyZXNzQmFyLCBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XHJcblxyXG5pbXBvcnQge2FkZFNlbGVjdGVkLCBidXlhYmxlUHJvZHVjdHMsIGdldENvc3RQcm9kdWN0LCBnZXRNYXhQcm9kdWN0fSBmcm9tIFwiLi9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBzZW5kVG9TZXJ2ZXIgfSBmcm9tIFwiLi4vUmVzdENhbGxzXCI7XHJcbmltcG9ydCB7IHZlcmlmVW5sb2NrIH0gZnJvbSBcIi4uL01vZGFscy9VbmxvY2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyTGlzdDogYW55W10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IGxhc3RVcGRhdGVMaXN0IDogbnVtYmVyW10gPSBbXTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbExhc3RVcGRhdGUod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtpXSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwcmluY2lwYWxlIGQnYXBwZWwgZGVzIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZHVjdHMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmlkID0gXCJwXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkb3VibGVCb3JkZXJQcm9kdWN0XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwiYmNjRm9udFwiKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdC5uYW1lO1xyXG5cclxuICAgICAgICAvLyBJbWFnZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0SW1hZ2VcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmlkID0gXCJpbWdcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RJY29uc1wiKVxyXG4gICAgICAgIC8vIFNpIGNlIHByb2R1aXQgbidhIHBhcyDDqXTDqSBkw6libG9xdcOpLCBvbiBsJ2FmZmljaGUgZW4gZ3Jpc1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlID09IDApIHtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcHJvZHVjdC5sb2dvXHJcbiAgICAgICAgLy8gQWpvdXQgZXZlbnQgcHJvZHVjdGlvblxyXG4gICAgICAgICQoaW1hZ2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpO1xyXG5cclxuICAgICAgICAvLyBMZXZlbCAtLT4gUXVhbnRpdMOpIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0UXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFF0ZSk7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdExldmVsXCIpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuYXBwZW5kQ2hpbGQobGV2ZWwpO1xyXG4gICAgICAgIGxldmVsLmlkID0gXCJxdGVcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgbGV2ZWwuY2xhc3NMaXN0LmFkZChcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgbGV2ZWwuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RDb250YWluZXIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcIm10LTNcIik7XHJcblxyXG4gICAgICAgIC8vIE5iciBsZXZlbCDDoCBhY2hldGVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RBZGQpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuYXBwZW5kQ2hpbGQocHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5pZCA9IFwiYWRkXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9kdWN0XCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgICQocHJvZHVjdEJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaWQgPSBcImNvc3RcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAvLyBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSAocHJvZHVjdC5jb3V0ICsgTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKSkudG9TdHJpbmcoKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSBwcm9kdWN0LmNvdXQudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgZGUgbGFuY2VyIGxhIHByb2R1Y3Rpb24gZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gcGV1dCBhY3RpdmVyIGxlIHByb2R1aXRcclxuICAgIGlmICh2ZXJpZlByb2R1Y3QocHJvZHVjdCkpIHtcclxuICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAxMDApO1xyXG4gICAgICAgIHNlbmRUb1NlcnZlcihcInByb2R1Y3RcIiwgcHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgcXVlIHByb2R1aXQgZXN0IGFjdGl2YWJsZVxyXG5mdW5jdGlvbiB2ZXJpZlByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKChwcm9kdWN0LnF1YW50aXRlID4gMCkgJiYgKHByb2R1Y3QudGltZWxlZnQgPT0gMCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgZCdham91dGVyIHVuZSBxdWFudGl0w6kgw6AgdW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBhZGRQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gU2kgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWUgbidlc3QgcGFzIGxlIG1heCBhY2hldGFibGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBjb8O7dFxyXG4gICAgICAgIGxldCBjb3N0ID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG4gICAgICAgIHByb2R1Y3QuY291dCA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgYWRkU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAvLyBPbiBtb2RpZmllIGwnYWZmaWNoYWdlIGR1IHByb2R1aXRcclxuICAgICAgICBtb2RpZnlQcm9kdWN0KHdvcmxkLCBwcm9kdWN0LCBhZGRTZWxlY3RlZCwgY29zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2kgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBtYXggYWNoZXRhYmxlIGV0IHNvbiBjb3V0XHJcbiAgICAgICAgbGV0IG1heCA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgbWF4KTtcclxuXHJcbiAgICAgICAgcHJvZHVjdC5jb3V0ID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBtYXgpO1xyXG5cclxuICAgICAgICAvLyBPbiBtb2RpZmllIGwnYWZmaWNoYWdlIGR1IHByb2R1aXRcclxuICAgICAgICBtb2RpZnlQcm9kdWN0KHdvcmxkLCBwcm9kdWN0LCBtYXgsIGNvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcmlmVW5sb2NrKHdvcmxkKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3Qudml0ZXNzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0LnRpbWVsZWZ0KTtcclxuXHJcbiAgICAvLyBPbiBlbnZvaWUgbGVzIGRvbm7DqWVzIGF1IHNlcnZldXJcclxuICAgIHNlbmRUb1NlcnZlcihcInByb2R1Y3RcIiwgcHJvZHVjdCk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBlZmZlY3R1YW50IGxlcyBjaGFuZ2VtZW50cyBkJ2FmZmljaGFnZSBsacOpcyDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBtb2RpZnlQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlciwgY29zdDogbnVtYmVyKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50XHJcbiAgICBpZiAod29ybGQubW9uZXkgPiBjb3N0KSB7XHJcbiAgICAgICAgLy8gT24gYWpvdXRlIGxhIHF1YW50aXTDqSBhY2hldMOpZVxyXG4gICAgICAgIHByb2R1Y3QucXVhbnRpdGUgKz0gcXVhbnRpdHk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdGVcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gT24gc291c3RyYWl0IGwnYXJnZW50IGTDqXBlbnPDqVxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IGNvc3Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICAgICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgLy8gT24gcmVjYWxjdWxlIGxlIG1heFxyXG4gICAgICAgICAgICBxdWFudGl0eSA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAvLyBPbiBjaGFuZ2UgbCdhZmZpY2hhZ2Ugc3VyIGNoYXF1ZSBwcm9kdWl0IGVuIGZvbmN0aW9uIGR1IG5vdXZlYXUgc29sZGVcclxuICAgICAgICAgICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBub3V2ZWF1IGNvw7t0IGFwcsOocyBhY2hhdFxyXG4gICAgICAgIGxldCBuZXdDb3N0ID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgcXVhbnRpdHkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCkuaW5uZXJIVE1MID0gdHJhbnNmb3JtKG5ld0Nvc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFMnaWwgcydhZ2l0IGR1IDFlciBhY2hhdCBzdXIgdW4gcHJvZHVpdCwgb24gbCdhZmZpY2hlIGVuIGNsYWlyXHJcbiAgICAgICAgbGV0IGltYWdlUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICBpZiAoaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkUHJvZHVjdFwiKSkge1xyXG4gICAgICAgICAgICBpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEFkZFByb2R1Y3RzOiBhbnlbXSA9IFsxLCAxMCwgMTAwLCBcIk1heFwiXTtcclxuZXhwb3J0IHZhciBhZGRTZWxlY3RlZDogYW55ID0gMTtcclxuXHJcblxyXG4vLyBGb25jdGlvbiBjcsOpYW50IGxhIGJhcmUgZGUgbWVudSDDoCBkcm90aWUgY29udGVuYW50IGxlIHPDqWxlY3RldXIgc3VyIGxhIHF1YW50aXTDqSBkZSBwcm9kdWl0cyDDoCBhY2hldGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZUJhcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBPYnRlbnRpb24gZHUgY29udGFpbmVyIGRlcyBwcm9kdWl0c1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGR1IGNvbnRhaW5lciBkdSBtZW51XHJcbiAgICBsZXQgc2lkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUNvbnRhaW5lcik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmlkID0gXCJzaWRlTWVudVwiO1xyXG4gICAgLy8gQ2VudHJhZ2UgZHUgbWVudSDDoCBkcm9pdGVcclxuICAgIHNpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvc2l0aW9uLWFic29sdXRlXCIsIFwidG9wLTUwXCIsIFwiZW5kLTBcIiwgXCJ0cmFuc2xhdGUtbWlkZGxlLXlcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGQndW5lIGxpc3RlIGRlIGJvdXRvbnMgw6AgbGEgdmVydGljYWxlXHJcbiAgICBsZXQgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xyXG4gICAgbGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLWdyb3VwLXZlcnRpY2FsXCIsIFwic2lkZUNvbnRhaW5lclwiKTtcclxuICAgIGxpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImdyb3VwXCIpO1xyXG5cclxuICAgIC8vIE9uIGfDqW7DqHJlIGRlcyBib3V0b25zIGRlIHR5cGUgcmFkaW9cclxuICAgIGxpc3RBZGRQcm9kdWN0cy5mb3JFYWNoKGFkZE51bWJlciA9PiB7XHJcblxyXG4gICAgICAgIC8vIE9uIGNyw6llIGwnaW5wdXQgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVySW5wdXQpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmlkID0gXCJidXR0b25cIiArIGFkZE51bWJlcjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmNsYXNzTGlzdC5hZGQoXCJidG4tY2hlY2tcIik7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQubmFtZSA9IFwiYnRucmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5hdXRvY29tcGxldGUgPSBcIm9mZlwiXHJcbiAgICAgICAgLy8gQSBsJ2luaXRpYWxpc2F0aW9uLCBsJ29wdGlvbiArMSBlc3QgY2VsbGUgY29jaMOpZSBwYXIgZMOpZmF1dFxyXG4gICAgICAgIGlmIChhZGROdW1iZXIgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgYWRkTnVtYmVySW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9uIGNyw6llIGxlIGxhYmVsIGR1IGJvdXRvblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJCdXR0b24pO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkQnV0dG9uXCIsIFwiYWRkQnV0dG9uT3V0bGluZVwiLCBcImFsaWduLW1pZGRsZVwiKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIGFkZE51bWJlcklucHV0LmlkKVxyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIiArIGFkZE51bWJlcjtcclxuICAgICAgICAvLyBFdmVudCA6IG1vZGlmaWNhdGlvbiBkdSBzw6lsZWN0ZXVyIGF1IGNsaWNcclxuICAgICAgICAkKGFkZE51bWJlckJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhZGRTZWxlY3RlZCA9IGFkZE51bWJlcjtcclxuICAgICAgICAgICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY2hhbmdlYW50IGwnYWZmaWNoYWdlIGxpw6kgw6AgbCdhY2hhdCBkJ3VuIHByb2R1aXRcclxuZXhwb3J0IGZ1bmN0aW9uIGJ1eWFibGVQcm9kdWN0cyh3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBlc3QgdW5lIHZhbGV1ciBjb25zdGFudGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgYWRkU2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgam91ZXVyIG4nYSBwYXMgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIHByb2R1aXQsIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uXHJcbiAgICAgICAgICAgIGlmICh3b3JsZC5tb25leSA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgIGFkZFByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGNvbnNpc3RlIMOgIGxhIHZhbGV1ciBtYXhcclxuICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBtYXg7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgbWF4KTtcclxuICAgICAgICAgICAgbGV0IGNvc3RQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGNvc3RQcm9kdWN0LmlubmVySFRNTCA9IHRyYW5zZm9ybShjb3N0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBjb8O7dCBkJ3VuIGdyb3VwZSBkZSBwcm9kdWl0c1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCwgYWRkTnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIC8vIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7XHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQ7XHJcbiAgICBsZXQgbnVtZXJhdG9yID0gMSAtIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgYWRkTnVtYmVyKTtcclxuICAgIGxldCBkZW5vbWluYXRvciA9IDEgLSBwcm9kdWN0LmNyb2lzc2FuY2VcclxuICAgIGxldCBjb3V0ID0gKHVuICogbnVtZXJhdG9yKSAvIGRlbm9taW5hdG9yO1xyXG5cclxuICAgIC8vIFJldG91ciBkdSBjb8O7dCBjYWxjdWzDqVxyXG4gICAgcmV0dXJuIGNvdXQ7XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBub21icmUgbWF4IGRlIHByb2R1aXRzIGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIC8vIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7XHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQ7XHJcbiAgICBsZXQgbnVtZXJhdG9yOiBudW1iZXIgPSBNYXRoLmxvZygtKHdvcmxkLm1vbmV5IC0gd29ybGQubW9uZXkgKiBwcm9kdWN0LmNyb2lzc2FuY2UgLSB1bikgLyB1bik7XHJcbiAgICBsZXQgZGVub21pbmF0b3I6IG51bWJlciA9IE1hdGgubG9nKHByb2R1Y3QuY3JvaXNzYW5jZSk7XHJcbiAgICBsZXQgbWF4OiBudW1iZXIgPSAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpXHJcblxyXG4gICAgLy8gUmV0b3VyIGR1IG1heCBkZSBwcm9kdWl0c1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IobWF4KTtcclxufSIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4uL0FwcC9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IGxpc3RidXR0b246IHN0cmluZ1tdID0gW11cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q2FzaFVwZ3JhZGVzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGNyZWF0aW9uTW9kYWwoc2VydmVyLCB3b3JsZCk7XHJcbiAgICAvL2NyZWF0aW9uQm9keUNhc2goc2VydmVyLCB3b3JsZClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0aW9uTW9kYWwoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gQ29udGFpbmVyXHJcbiAgICBsZXQgbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDYXNoVXBcIik7XHJcblxyXG4gICAgJChtKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNzZWxlY3RCYXJyZUNhc2hVcCcpLnZhbCgwKVxyXG4gICAgICAgIGFmZmljaGFnZUNhc2hVcCgwLHNlcnZlcix3b3JsZClcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWxlY3QgYmFycmVcclxuICAgIGxldCBzZWxlY3RCYXJyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIG1oLmFwcGVuZENoaWxkKHNlbGVjdEJhcnJlKVxyXG4gICAgc2VsZWN0QmFycmUuaWQgPSBcInNlbGVjdEJhcnJlQ2FzaFVwXCJcclxuXHJcbiAgICBsZXQgb3B0QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgc2VsZWN0QmFycmUuYXBwZW5kQ2hpbGQob3B0QWxsKVxyXG4gICAgb3B0QWxsLmlkID0gXCJvcHRQcm9kdWl0XCIgKyAtMVxyXG4gICAgb3B0QWxsLnZhbHVlID0gXCItMVwiXHJcbiAgICBvcHRBbGwudGV4dCA9IFwiVG91cyBsZXMgcHJvZHVpdHNcIlxyXG4gICAgb3B0QWxsLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgICAgIHNlbGVjdEJhcnJlLmFwcGVuZENoaWxkKG9wdClcclxuICAgICAgICBvcHQuaWQgPSBcIm9wdFByb2R1aXRcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBvcHQudmFsdWUgPSBcIlwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIG9wdC50ZXh0ID0gcHJvZHVjdC5uYW1lXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBvcHRHbG9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgc2VsZWN0QmFycmUuYXBwZW5kQ2hpbGQob3B0R2xvYilcclxuICAgIG9wdEdsb2IuaWQgPSBcIm9wdFByb2R1aXRcIiArIDBcclxuICAgIG9wdEdsb2IudmFsdWUgPSBcIlwiICsgMFxyXG4gICAgb3B0R2xvYi50ZXh0ID0gXCJDYXNoVXAgZ2xvYmF1eFwiXHJcblxyXG5cclxuICAgIC8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQodCk7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxuICAgIHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteU1vZGFsTGFiZWxcIik7XHJcbiAgICB0LmlubmVyVGV4dCA9IFwiTGVzIENhc2hVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIEJvZHlcclxuICAgIGxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbiAgICBib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuICAgIGJvZHlNLmlkID0gXCJtb2RhbENhc2hVcEJvZHlcIjtcclxuXHJcbiAgICAkKHNlbGVjdEJhcnJlKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpXHJcbiAgICAgICAgYWZmaWNoYWdlQ2FzaFVwKHBhcnNlSW50KHRoaXMudmFsdWUpLCBzZXJ2ZXIsIHdvcmxkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFmZmljaGFnZUNhc2hVcChpZDogbnVtYmVyLCBzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgYm9keUNhc2hVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDYXNoVXBCb2R5XCIpXHJcbiAgICBib2R5Q2FzaFVwLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAkLmVhY2god29ybGQudXBncmFkZXMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBjYXNoVXApIHtcclxuXHJcbiAgICAgICAgaWYgKGNhc2hVcC5pZGNpYmxlID09IGlkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdENhc2hVcChzZXJ2ZXIsIGNhc2hVcCwgd29ybGQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlkID09IC0xKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdENhc2hVcChzZXJ2ZXIsIGNhc2hVcCwgd29ybGQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdENhc2hVcChzZXJ2ZXI6IHN0cmluZywgY2FzaFVwOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCByb3dDYXNoVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgYm9keUNhc2hVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDYXNoVXBCb2R5XCIpXHJcbiAgICBib2R5Q2FzaFVwLmFwcGVuZENoaWxkKHJvd0Nhc2hVcClcclxuICAgIGJvZHlDYXNoVXAuY2xhc3NMaXN0LmFkZChcInJvd1wiKVxyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBib2R5Q2FzaFVwLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtM1wiKVxyXG5cclxuICAgIC8vQ29sb25uZSAxIDogSW1hZ2VcclxuICAgIGxldCBpbWdDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29sKVxyXG4gICAgaW1nQ29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuXHJcbiAgICBsZXQgaWNvbkNhc2hVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGltZ0NvbC5hcHBlbmRDaGlsZChpY29uQ2FzaFVwKVxyXG4gICAgaWNvbkNhc2hVcC5zcmMgPSBzZXJ2ZXIgKyBjYXNoVXAubG9nb1xyXG4gICAgaWNvbkNhc2hVcC5jbGFzc0xpc3QuYWRkKFwiaW1nQ2FzaFVwXCIpXHJcblxyXG4gICAgLy9Db2xvbm5lIDIgOiBEZXNjcmlwdGlvbiAoIFByaXggKyBOb20gKyBCb251cyApXHJcbiAgICBsZXQgc2Vjb25kQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZENvbClcclxuICAgIHNlY29uZENvbC5jbGFzc0xpc3QuYWRkKFwicm93XCIpXHJcblxyXG4gICAgbGV0IHByaWNlQ2FzaFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgc2Vjb25kQ29sLmFwcGVuZENoaWxkKHByaWNlQ2FzaFVwKVxyXG4gICAgcHJpY2VDYXNoVXAuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNhc2hVcC5zZXVpbCkgKyBcIiRcIlxyXG5cclxuICAgIGxldCBuYW1lQ2FzaFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgc2Vjb25kQ29sLmFwcGVuZENoaWxkKG5hbWVDYXNoVXApXHJcbiAgICBuYW1lQ2FzaFVwLmlubmVyVGV4dCA9IGNhc2hVcC5uYW1lXHJcblxyXG4gICAgbGV0IGJvbnVzQ2FzaFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgc2Vjb25kQ29sLmFwcGVuZENoaWxkKGJvbnVzQ2FzaFVwKVxyXG4gICAgYm9udXNDYXNoVXAuaW5uZXJUZXh0ID0gY2FzaFVwLnR5cGVyYXRpbyArIFwiIHhcIiArIGNhc2hVcC5yYXRpb1xyXG5cclxuICAgIC8vQ29sb25uZSAzIDogQm91dG9uIGQnYWNoYXRcclxuICAgIGxldCBidXRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0Q29sKVxyXG4gICAgYnV0Q29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuXHJcbiAgICBsZXQgYnV0dG9uQnV5Q2FzaFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgYnV0Q29sLmFwcGVuZENoaWxkKGJ1dHRvbkJ1eUNhc2hVcClcclxuICAgIGJ1dHRvbkJ1eUNhc2hVcC5pZCA9IFwiYnV5XCIgKyBjYXNoVXAuaWRjaWJsZTtcclxuICAgIGJ1dHRvbkJ1eUNhc2hVcC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25CdXlDYXNoVXBcIik7XHJcbiAgICBidXR0b25CdXlDYXNoVXAuaW5uZXJUZXh0ID0gXCJBY2hldGUgTW9pICFcIjtcclxuXHJcblxyXG4gICAgaWYgKGNhc2hVcC5zZXVpbCA+IHdvcmxkLm1vbmV5KSB7XHJcbiAgICAgICAgYnV0dG9uQnV5Q2FzaFVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uQnV5Q2FzaFVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgJChidXR0b25CdXlDYXNoVXApLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImplIHRlbnRlIGQnYWNoZXRlciB1biBjYXNoVXAgOilcIik7XHJcbiAgICAgICAgYnV5Q2FzaFVwKGNhc2hVcCwgd29ybGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQWNoYXQgZCd1biBjYXNoVXBncmFkZVxyXG5mdW5jdGlvbiBidXlDYXNoVXAoY2FzaFVwOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIGNhc2ggdXBncmFkZVxyXG4gICAgaWYgKGNhc2hVcC5zZXVpbCA8PSB3b3JsZC5tb25leSkge1xyXG4gICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gc291c3RyYWl0IHNvbiBjb8O7dFxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IGNhc2hVcC5zZXVpbDtcclxuXHJcblxyXG4gICAgICAgIC8vSWwgZmF1dCBtb2RpZmllciBsYSB2YWxldXIgZHUgY2FsY3VsU2NvcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklsIGZhdXQgbW9kaWZpZXIgbGEgdmFsZXVyIGR1IGNhbGN1bCBzY29yZSBhcHLDqHMgbCdhY2hhdCBkJ3VuIENhc2hVcFwiKVxyXG5cclxuICAgICAgICAvLyBPbiBhZmZpY2hlIGVuc3VpdGUgbGUgbm91dmVhdSBzb2xkZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2VtZW50IGR1IGJvdXRvbiBIaXJlIGVuIGFjaGV0w6kgZXQgZGlzYWJsZWRcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXlcIiArIGNhc2hVcC5pZGNpYmxlKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJBY2hldMOpXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXMgYXNzZXogZGUgc291c1wiKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDYWxjdWxlIGR5bmFtaXF1ZW1lbnQgbGUgbm9tYnJlIGRlIG1hbmFnZXJzIGFjaGV0YWJsZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGJ1eWFibGVDYXNoVXAod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBWYXJpYWJsZXNcclxuICAgIGxldCBjYXNoVXBEaXNwbyA9IDA7XHJcbiAgICBsZXQgbm90aWZDYXNoVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZGdlQ2FzaFVwXCIpO1xyXG5cclxuICAgIC8vIFBvdXIgY2hhcXVlIENhc2hVcFxyXG4gICAgJC5lYWNoKHdvcmxkLnVwZ3JhZGVzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgY2FzaFVwKSB7XHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBsYSBwb3NzaWJpbGl0w6kgZCdlbiBhY2hldGVyXHJcbiAgICAgICAgaWYgKGNhc2hVcC5zZXVpbCA8PSB3b3JsZC5tb25leSAmJiBjYXNoVXAudW5sb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY2FzaFVwRGlzcG8rKztcclxuICAgICAgICB9O1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBTJ2lsIG4neSBhIGF1Y3VuIENhc2hVcCBhY2hldGFibGUsIG9uIGFmZmljaGUgcmllblxyXG4gICAgaWYgKGNhc2hVcERpc3BvID09IDApIHtcclxuICAgICAgICBub3RpZkNhc2hVcC5pbm5lclRleHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gU2lub24gb24gYWZmaWNoZSBsZXVyIHF1YW50aXTDqSBhY2hldGFibGVcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5vdGlmQ2FzaFVwLmlubmVyVGV4dCA9IGNhc2hVcERpc3BvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFmZmljaGFnZSBkeW5hbWlxdWVtZW50IHNpIHVuIG1hbmFnZXIgZXN0IGFjaGV0YWJsZVxyXG5mdW5jdGlvbiB2ZXJpZkNhc2hVcCh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIG1hbmFnZXJcclxuICAgICQuZWFjaCh3b3JsZC51cGdyYWRlcy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIGNhc2hVcCkge1xyXG4gICAgICAgIC8vIE9uIHLDqWN1cMOocmUgc29uIGJvdXRvbiBkJ2FjaGF0XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV5XCIgKyBjYXNoVXAuaWRjaWJsZSk7XHJcblxyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgb3UgcXVlIGxlIG1hbmFnZXIgbidlc3QgcGFzIGTDqWrDoCBhY2hldMOpXHJcbiAgICAgICAgaWYgKChjYXNoVXAuc2V1aWwgPiB3b3JsZC5tb25leSkgfHwgKGNhc2hVcC51bmxvY2tlZCA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAvLyBTaSBjJ2VzdCBsZSBjYXMsIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFjaGV0w6lcIjtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGxlIGTDqXNhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgbWF0Y2hJZCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuLi9BcHAvSGVhZGVyXCI7XHJcbmltcG9ydCB7IHNlbmRUb1NlcnZlciB9IGZyb20gXCIuLi9SZXN0Q2FsbHNcIjtcclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGVzIG1hbmFnZXJzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWFuYWdlcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgRGlhbG9ndWVcclxuICAgIGxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtLmFwcGVuZENoaWxkKG1kKTtcclxuICAgIG1kLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaWFsb2dcIiwgXCJtb2RhbC1sZ1wiKTtcclxuICAgIG1kLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJkb2N1bWVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBDb250ZW50XHJcbiAgICBsZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWQuYXBwZW5kQ2hpbGQobWMpO1xyXG4gICAgbWMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbiAgICBsZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQobWgpO1xyXG4gICAgbWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxuICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgICBiLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XHJcblxyXG4gICAgLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZCh0KTtcclxuICAgIHQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxuICAgIHQuaW5uZXJUZXh0ID0gXCJMZXMgTWFuYWdlcnNcIjtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbEJvZHlcIik7XHJcblxyXG4gICAgLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbiAgICBsaXN0TWFuYWdlcnMoc2VydmVyLCB3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGUgbGEgbGlzdGUgZGVzIG1hbmFnZXJzXHJcbmZ1bmN0aW9uIGxpc3RNYW5hZ2VycyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCb2R5XCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0yXCIpOy8vXCJyb3dcIiwgXCJyb3ctY29scy0yXCJcclxuXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwibWFuYWdlclwiICsgcGFsbGllci5pZGNpYmxlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vUGFydGllIEltYWdlIGV0IG5vbSBkdSBtYW5hZ2Vyc1xyXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChpbWFnZU5hbWUpO1xyXG4gICAgICAgIGltYWdlTmFtZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIpOy8vXCJjb2wtNFwiLCBcImNvbC1sZy0yXCJcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgSW1hZ2VcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGltYWdlTmFtZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImltYWdlTWFuYWdlcnNcIik7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLmFwcGVuZENoaWxkKGltYWdlTWFuYWdlcik7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLmlkID0gXCJpbWdcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICBpbWFnZU1hbmFnZXIuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsdWlkXCIsIFwicm91bmRlZFwiKVxyXG5cclxuICAgICAgICAvL1BhcnRpZSBOb20gZXQgcHJpeFxyXG4gICAgICAgIGxldCBuYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKG5hbWVQcmljZSk7XHJcbiAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tXHJcbiAgICAgICAgbGV0IG5hbWVNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lUHJpY2UuYXBwZW5kQ2hpbGQobmFtZU1hbmFnZXIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbmFtZU1hbmFnZXIuaW5uZXJUZXh0ID0gcGFsbGllci5uYW1lO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBQcml4XHJcbiAgICAgICAgbGV0IHByaWNlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKHByaWNlTWFuYWdlcik7XHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbGV0IGNvc3QgPSB0cmFuc2Zvcm0ocGFsbGllci5zZXVpbClcclxuICAgICAgICBwcmljZU1hbmFnZXIuaW5uZXJIVE1MID0gY29zdDtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgYm91dG9uIGQnZW1iYXVjaGVcclxuICAgICAgICBsZXQgaGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGhpcmUpO1xyXG4gICAgICAgIGhpcmUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsgLy9cImNvbC00XCIsIFwiY29sLWxnLTJcIlxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgaGlyZS5hcHBlbmRDaGlsZChidXR0b25IaXJlKTtcclxuICAgICAgICBidXR0b25IaXJlLmlkID0gXCJoaXJlXCIgKyBwYWxsaWVyLmlkY2libGU7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25IaXJlXCIpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuaW5uZXJUZXh0ID0gXCJBY2hldGUgTW9pICFcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYWxsaWVyLmlkY2libGUgKyBcIiBcIiArIHBhbGxpZXIudW5sb2NrZWQpO1xyXG4gICAgICAgIGlmIChwYWxsaWVyLnVubG9ja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJESVNBQkxFRFwiKVxyXG4gICAgICAgICAgICBidXR0b25IaXJlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChidXR0b25IaXJlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiamUgdGVudGUgZCdhY2hldGVyIHVuIG1hbmFnZXIgOilcIik7XHJcbiAgICAgICAgICAgIGJ1eU1hbmFnZXIocGFsbGllciwgd29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBpbWFnZVByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgaGlyZS5hcHBlbmRDaGlsZChpbWFnZVByb2R1Y3QpXHJcbiAgICAgICAgaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5hZGQoXCJpbWFnZVByb2R1Y3RNYW5hZ2VyXCIpXHJcbiAgICAgICAgbGV0IHNyY0ltZz1nZXRJbWFnZShwYWxsaWVyLmlkY2libGUsd29ybGQpXHJcbiAgICAgICAgaW1hZ2VQcm9kdWN0LnNyYz1zZXJ2ZXIrc3JjSW1nOyovXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vIEFmZmljaGFnZSBkeW5hbWlxdWVtZW50IHNpIHVuIG1hbmFnZXIgZXN0IGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZNYW5hZ2Vycyh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIG1hbmFnZXJcclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIHBhbGxpZXIpIHtcclxuICAgICAgICAvLyBPbiByw6ljdXDDqHJlIHNvbiBib3V0b24gZCdhY2hhdFxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZSk7XHJcblxyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgb3UgcXVlIGxlIG1hbmFnZXIgbidlc3QgcGFzIGTDqWrDoCBhY2hldMOpXHJcbiAgICAgICAgaWYgKChwYWxsaWVyLnNldWlsID4gd29ybGQubW9uZXkpIHx8IChwYWxsaWVyLnVubG9ja2VkID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWNoZXTDqVwiO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2lub24gb24gbGUgZMOpc2FjdGl2ZVxyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vIENhbGN1bGUgZHluYW1pcXVlbWVudCBsZSBub21icmUgZGUgbWFuYWdlcnMgYWNoZXRhYmxlc1xyXG5leHBvcnQgZnVuY3Rpb24gYnV5YWJsZU1hbmFnZXJzKHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gVmFyaWFibGVzXHJcbiAgICBsZXQgbWFuYWdlckRpc3BvID0gMDtcclxuICAgIGxldCBub3RpZk1hbmFnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZGdlTWFuYWdlclwiKTtcclxuXHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBtYW5hZ2VyXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBtYW5hZ2VyKSB7XHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBsYSBwb3NzaWJpbGl0w6kgZCdlbiBhY2hldGVyXHJcbiAgICAgICAgaWYgKG1hbmFnZXIuc2V1aWwgPD0gd29ybGQubW9uZXkgJiYgbWFuYWdlci51bmxvY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtYW5hZ2VyRGlzcG8rKztcclxuICAgICAgICB9O1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gUydpbCBuJ3kgYSBhdWN1biBtYW5hZ2VyIGFjaGV0YWJsZSwgb24gYWZmaWNoZSByaWVuXHJcbiAgICBpZiAobWFuYWdlckRpc3BvID09IDApIHtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIFNpbm9uIG9uIGFmZmljaGUgbGV1ciBxdWFudGl0w6kgYWNoZXRhYmxlXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0ID0gbWFuYWdlckRpc3BvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBBY2hhdCBkJ3VuIG1hbmFnZXJcclxuZnVuY3Rpb24gYnV5TWFuYWdlcihtYW5hZ2VyOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIG1hbmFnZXJcclxuICAgIGlmIChtYW5hZ2VyLnNldWlsIDw9IHdvcmxkLm1vbmV5KSB7XHJcbiAgICAgICAgLy8gU2kgYydlc3QgbGUgY2FzLCBvbiBzb3VzdHJhaXQgc29uIGNvw7t0XHJcbiAgICAgICAgd29ybGQubW9uZXkgLT0gbWFuYWdlci5zZXVpbDtcclxuXHJcbiAgICAgICAgLy8gT24gYWZmaWNoZSBlbnN1aXRlIGxlIG5vdXZlYXUgc29sZGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuXHJcbiAgICAgICAgLy8gT24gZMOpYmxvcXVlIGxlIG1hbmFnZXJcclxuICAgICAgICBtYW5hZ2VyLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBtYXRjaElkKG1hbmFnZXIsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlbWVudCBkdSBib3V0b24gSGlyZSBlbiBhY2hldMOpIGV0IGRpc2FibGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiICsgbWFuYWdlci5pZGNpYmxlKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJBY2hldMOpXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEltYWdlKGlkOm51bWJlcix3b3JsZDpXb3JsZCl7XHJcbiQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCxwcm9kdWl0KXtcclxuICAgIGxldCBzcmM9XCJcIlxyXG4gICAgaWYocHJvZHVpdC5pZD09aWQpe1xyXG4gICAgICAgIHNyYz1wcm9kdWl0LmxvZ29cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvdXJjZSBpbWFnZTpcIitwcm9kdWl0LmxvZ28pXHJcbiAgICAgICAgcmV0dXJuIHNyYztcclxuICAgIH1cclxufSlcclxufSIsImltcG9ydCB7IGZpbmRQcm9kdWN0IH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHthcHBseUJvbnVzUHJvZHVjdH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5cclxuLy8gQWZmaWNoYWdlIGRlcyB1bmxvY2tzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFVubG9ja1wiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgICQobSkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjc2VsZWN0QmFycmVVbmxvY2tzJykudmFsKDApO1xyXG4gICAgICAgIGxpc3RVbmxvY2tzKDAsIHNlcnZlciwgd29ybGQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBDb250ZW50XHJcbiAgICBsZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWQuYXBwZW5kQ2hpbGQobWMpO1xyXG4gICAgbWMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbiAgICBsZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQobWgpO1xyXG4gICAgbWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxuICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgICBiLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gc2VsZWN0IGJhcnJlXHJcbiAgICBsZXQgc2VsZWN0QmFycmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXHJcbiAgICBtaC5hcHBlbmRDaGlsZChzZWxlY3RCYXJyZSlcclxuICAgIHNlbGVjdEJhcnJlLmlkID0gXCJzZWxlY3RCYXJyZVVubG9ja3NcIlxyXG5cclxuICAgIGxldCBvcHRHbG9iYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHRHbG9iYWwpXHJcbiAgICBvcHRHbG9iYWwuaWQgPSBcIm9wdFByb2R1aXRcIiArIDBcclxuICAgIG9wdEdsb2JhbC52YWx1ZSA9IFwiXCIgKyAwXHJcbiAgICBvcHRHbG9iYWwudGV4dCA9IFwiVW5sb2NrcyBnbG9iYXV4XCJcclxuICAgIG9wdEdsb2JhbC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwiXCIpXHJcblxyXG4gICAgXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgICAgIHNlbGVjdEJhcnJlLmFwcGVuZENoaWxkKG9wdClcclxuICAgICAgICBvcHQuaWQgPSBcIm9wdFByb2R1aXRcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBvcHQudmFsdWUgPSBcIlwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIG9wdC50ZXh0ID0gcHJvZHVjdC5uYW1lXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBvcHRBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHRBbGwpXHJcbiAgICBvcHRBbGwuaWQgPSBcIm9wdFByb2R1aXRcIiArIC0xXHJcbiAgICBvcHRBbGwudmFsdWUgPSBcIi0xXCI7XHJcbiAgICBvcHRBbGwudGV4dCA9IFwiVG91cyBsZXMgcHJvZHVpdHNcIlxyXG4gICAgXHJcbiAgICAvL1RpdHJlIGRlIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XHJcbiAgICB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlNb2RhbExhYmVsXCIpO1xyXG4gICAgdC5pbm5lclRleHQgPSBcIkxlcyBVbmxvY2tzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uaWQgPSBcIm1vZGFsVW5sb2NrQm9keVwiO1xyXG5cclxuIFxyXG4gICAgJChzZWxlY3RCYXJyZSkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxyXG4gICAgICAgIGxpc3RVbmxvY2tzKHBhcnNlSW50KHRoaXMudmFsdWUpLCBzZXJ2ZXIsIHdvcmxkKVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGlzdFVubG9ja3MoMCwgc2VydmVyLCB3b3JsZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RVbmxvY2tzKGlkOiBudW1iZXIsIHNlcnZlcjogU3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBib2R5VW5sb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFVubG9ja0JvZHlcIilcclxuICAgIGJvZHlVbmxvY2suaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBncmlkVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYm9keVVubG9jay5hcHBlbmRDaGlsZChncmlkVW5sb2NrKVxyXG4gICAgZ3JpZFVubG9jay5pZCA9IFwiZ3JpZFVubG9ja1wiXHJcbiAgICBncmlkVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0yXCIpXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCB1bmxvY2spIHtcclxuXHJcbiAgICAgICAgaWYgKHVubG9jay5pZGNpYmxlID09IGlkKSB7XHJcbiAgICAgICAgICAgIGFmZmljaGFnZShzZXJ2ZXIsdW5sb2NrKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpZCA9PSAtMSkge1xyXG4gICAgICAgICAgICBhZmZpY2hhZ2Uoc2VydmVyLHVubG9jaylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZmZpY2hhZ2Uoc2VydmVyOiBTdHJpbmcsIHVubG9jazogUGFsbGllcikge1xyXG4gICAgbGV0IGdyaWRVbmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRVbmxvY2tcIilcclxuICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ3JpZFVubG9jay5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICBjb2wuaWQgPSBcInVubG9ja1wiICsgdW5sb2NrLmlkY2libGU7XHJcblxyXG4gICAgLy9kaXZpc2lvbiBkZSBsYSBsaWduZSBlbiBkZXV4IHBhcnRpZXMgKEltYWdlK0Rlc2NyaXB0aW9uIC8vIFVubG9ja2VkIG91IG5vbilcclxuICAgIGxldCBjb2xJbWFnZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9JbWFnZSBEZXNjcmlwdGlvblxyXG4gICAgbGV0IGNvbFVubG9ja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS8vQWZmaWNoYWdlIGVzdCBpbCBkw6l2w6lyb3VpbGzDqSA/XHJcbiAgICBjb2wuYXBwZW5kQ2hpbGQoY29sSW1hZ2VEZXNjKVxyXG4gICAgY29sLmFwcGVuZENoaWxkKGNvbFVubG9ja2VkKVxyXG4gICAgY29sSW1hZ2VEZXNjLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuICAgIGNvbFVubG9ja2VkLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuXHJcbiAgICAvL0FmZmljaGFnZSBJY29uIFVubG9ja1xyXG4gICAgbGV0IGljb25VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoaWNvblVubG9jaylcclxuICAgIGljb25VbmxvY2suc3JjID0gc2VydmVyICsgdW5sb2NrLmxvZ29cclxuICAgIGljb25VbmxvY2suY2xhc3NMaXN0LmFkZChcImltZ1VubG9ja1wiKVxyXG4gICAgaWYgKHVubG9jay51bmxvY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgIGljb25VbmxvY2suY2xhc3NMaXN0LmFkZChcImRpc2FibGVkVW5sb2NrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBub21VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChub21VbmxvY2spXHJcbiAgICBub21VbmxvY2suaW5uZXJUZXh0ID0gdW5sb2NrLm5hbWVcclxuXHJcbiAgICBsZXQgZGVzY3JVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGRlc2NyVW5sb2NrKVxyXG4gICAgZGVzY3JVbmxvY2suaW5uZXJUZXh0ID0gXCJBdWdtZW50YXRpb24gZGUgXCIgKyB1bmxvY2sudHlwZXJhdGlvICsgXCIgeFwiICsgdW5sb2NrLnJhdGlvXHJcblxyXG4gICAgbGV0IHNldWlsVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChzZXVpbFVubG9jaylcclxuICAgIHNldWlsVW5sb2NrLmlubmVyVGV4dCA9IFwiU2V1aWw6IFwiICsgdW5sb2NrLnNldWlsXHJcbn1cclxuXHJcblxyXG4vLyBWw6lyaWZpZSBzaSB1biB1bmxvY2sgZG9pdCDDqnRyZSBkw6l2w6lyb3VpbGxlXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZlVubG9jayh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgdG91cyBsZXMgdW5sb2Nrc1xyXG4gICAgJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllciwgZnVuY3Rpb24oaW5kZXgsIHVubG9jayl7XHJcbiAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIGwndW5sb2NrIG4nZXN0IHBhcyBkw6lqw6AgZMOpdsOpcm91aWxsw6lcclxuICAgICAgICBpZiAodW5sb2NrLnVubG9ja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGMnZXN0IHVuIHVubG9jayBwb3VyIHVuIHByb2R1aXQgcGFydGljdWxpZXJcclxuICAgICAgICAgICAgaWYgKHVubG9jay5pZGNpYmxlICE9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIE9uIHLDqWN1cMOocmUgbGUgcHJvZHVpdFxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3Q6IFByb2R1Y3QgPSBmaW5kUHJvZHVjdCh3b3JsZCwgdW5sb2NrLmlkY2libGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgZMOpcGFzc8OpIGxlIHNldWlsIHByb2R1aXRcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlID49IHVubG9jay5zZXVpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIETDqXbDqXJvdWlsbGVyIGwndW5sb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgdW5sb2NrLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0Lm5hbWUgKyBcIiBoYXMgdW5sb2NrZWQgYSB4XCIgKyB1bmxvY2sucmF0aW8gKyBcIiBcIiArIHVubG9jay50eXBlcmF0aW8pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBsaXF1ZXIgbGVzIGNoYW5nZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlCb251c1Byb2R1Y3QocHJvZHVjdCwgdW5sb2NrLnJhdGlvLCB1bmxvY2sudHlwZXJhdGlvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2kgYydlc3QgdW4gdW5sb2NrIGdsb2JhbFxyXG4gICAgICAgICAgICBlbHNlIGlmICh1bmxvY2suaWRjaWJsZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gT24gdsOpcmlmaWUgcXVlIHRvdXMgbGVzIHByb2R1aXRzIHZhbGlkZW50IGxlcyBzZXVpbHNcclxuICAgICAgICAgICAgICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlIDwgdW5sb2NrLnNldWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2kgdG91cyBsZXMgcHJvZHVpdHMgdmFsaWRlbnQgbGVzIHNldWlscywgb24gYXBwbGlxdWUgbGUgY2hhbmdlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5sb2NrLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldvcmxkIGhhcyBhIGdsb2JhbCB1bmxvY2sgeFwiICsgdW5sb2NrLnJhdGlvICsgXCIgXCIgKyB1bmxvY2sudHlwZXJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlCb251c1Byb2R1Y3QocHJvZHVjdCwgdW5sb2NrLnJhdGlvLCB1bmxvY2sudHlwZXJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHNlcnZlclVybCB9IGZyb20gXCIuXCI7XHJcblxyXG4vLyBFbnZvaSBhdSBzZXJ2ZXVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kVG9TZXJ2ZXIodHlwZTogc3RyaW5nLCBjb250ZW50OiBhbnkpIHtcclxuICAgICQuYWpheChzZXJ2ZXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy9cIiArIHR5cGUsIHtcclxuICAgICAgICB0eXBlOiBcIlBVVFwiLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjb250ZW50KSxcclxuICAgICAgICBzdGF0dXNDb2RlOiB7XHJcbiAgICAgICAgICAgIDMwNDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWN0aW9uIG5vbiBwcmlzZSBlbiBjb21wdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gZWNoZWMgZGUgbGEgcmVxdcOqdGVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBsYXN0VXBkYXRlTGlzdCwgc2hvd1Byb2R1Y3RzLCBzdGFydFByb2R1Y3QsIGZpbGxMYXN0VXBkYXRlIH0gZnJvbSBcIi4vQXBwL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIZWFkZXIsIHRyYW5zZm9ybSB9IGZyb20gXCIuL0FwcC9IZWFkZXJcIlxyXG5pbXBvcnQgeyBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL0FwcC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyBhZGRTZWxlY3RlZCwgYnV5YWJsZVByb2R1Y3RzLCBzaG93U2lkZUJhciB9IGZyb20gXCIuL0FwcC9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlNZW51IH0gZnJvbSBcIi4vQXBwL01lbnVcIjtcclxuaW1wb3J0IHsgYnV5YWJsZU1hbmFnZXJzLCBkaXNwbGF5TWFuYWdlciwgdmVyaWZNYW5hZ2VycyB9IGZyb20gXCIuL01vZGFscy9NYW5hZ2Vyc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VW5sb2NrcyB9IGZyb20gXCIuL01vZGFscy9VbmxvY2tzXCI7XHJcbmltcG9ydCB7IGJ1eWFibGVDYXNoVXAsIGRpc3BsYXlDYXNoVXBncmFkZXN9IGZyb20gXCIuL01vZGFscy9DYXNoVXBncmFkZXNcIjtcclxuaW1wb3J0IHsgc2VuZFRvU2VydmVyIH0gZnJvbSBcIi4vUmVzdENhbGxzXCI7XHJcblxyXG5cclxuLy8gVXNlcm5hbWVcclxuZXhwb3J0IHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcblxyXG4vLyBDaGFuZ2VtZW50IGR1IHBzZXVkb1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcm5hbWUobmV3VXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdXNlcm5hbWUgPSBuZXdVc2VybmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgbmV3VXNlcm5hbWUpO1xyXG5cclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XCJYLXVzZXJcIjogdXNlcm5hbWV9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBVcmwgc2VydmV1ciBsb2NhbFxyXG5jb25zdCBzZXJ2ZXJMb2NhbDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcblxyXG4vLyBVcmwgc2VydmV1ciBoZXJva3VcclxuY29uc3Qgc2VydmVySGVyb2t1OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3QuaGVyb2t1YXBwLmNvbS9cIlxyXG5cclxuLy8gVXJsIHNlcnZldXIgdGVzdFxyXG5jb25zdCBzZXJ2ZXJUZXN0OiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcblxyXG5cclxuLy8gU2VydmV1ciB1dGlsaXPDqVxyXG5leHBvcnQgdmFyIHNlcnZlclVybCA9IHNlcnZlclRlc3Q7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQ2hhcmdlbWVudCBkdSBwc2V1ZG8gZHUgam91ZXVyXHJcbiAgICBjb25zb2xlLmxvZyh1c2VybmFtZSk7XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XHJcblxyXG4gICAgLy8gQWZmaWNoYWdlIGR1IG1vbmRlIGR1IGpvdWV1clxyXG4gICAgJC5nZXRKU09OKHNlcnZlclVybCArIFwiYWR2ZW50dXJlaXNpcy9nZW5lcmljL3dvcmxkXCIsIGZ1bmN0aW9uICh3b3JsZDogV29ybGQpIHtcclxuICAgICAgICAvLyBBZmZpY2hhZ2UgZHUgbW9uZGUgY2hhcmfDqVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdvcmxkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVElNRUxFRlQgPSBcIiArIHdvcmxkLnByb2R1Y3RzLnByb2R1Y3RbNF0udGltZWxlZnQpO1xyXG4gICAgICAgIGZpbGxMYXN0VXBkYXRlKHdvcmxkKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gYXJnZW50IGRlIGJhc2VcclxuICAgICAgICAvLyB3b3JsZC5tb25leSA9IDIwMDA7XHJcblxyXG4gICAgICAgIC8vIEFmZmljaGFnZSBIVE1MXHJcbiAgICAgICAgZGlzcGxheUhlYWRlcihzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBzaG93UHJvZHVjdHMoc2VydmVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgc2hvd1NpZGVCYXIoc2VydmVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1lbnUod29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNYW5hZ2VyKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlVbmxvY2tzKHNlcnZlclVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlDYXNoVXBncmFkZXMoc2VydmVyVXJsLCB3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbnMgZHluYW1pcXVlc1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsIGR1IHNjb3JlXHJcbiAgICAgICAgICAgIGNhbGNTY29yZShzZXJ2ZXJVcmwsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmljYXRpb24gYWNoYXRzIG1hbmFnZXJzXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsTWFuYWdlclwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJpZk1hbmFnZXJzKHdvcmxkKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFmZmljaGFnZSBhY2hldGFibGVzXHJcbiAgICAgICAgICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZClcclxuICAgICAgICAgICAgYnV5YWJsZU1hbmFnZXJzKHdvcmxkKVxyXG4gICAgICAgICAgICBidXlhYmxlQ2FzaFVwKHdvcmxkKVxyXG5cclxuICAgICAgICAgICAgLy8gU2kgbCdvcHRpb24gZCdham91dCBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZSwgb24gc3luY2hyb25pc2UgYXZlYyBlbiBmb25jdGlvbiBkdSBzY29yZVxyXG4gICAgICAgICAgICAvL2lmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgIC8vc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIENhbGN1bCBkdSBzY29yZVxyXG5mdW5jdGlvbiBjYWxjU2NvcmUoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gUG91ciBjaGFxdWUgcHJvZHVpdFxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsZSBwcm9kdWl0IGVzdCBlbiBjb3VycyBkZSBwcm9kdWN0aW9uXHJcbiAgICAgICAgaWYgKHByb2R1Y3QudGltZWxlZnQgIT0gMCkge1xyXG4gICAgICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIHRlbXBzIGRlIHByb2R1Y3Rpb24gcmVzdGFudFxyXG4gICAgICAgICAgICBsZXQgdGltZVBhc3NlZDogbnVtYmVyID0gRGF0ZS5ub3coKSAtIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdO1xyXG4gICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC50aW1lbGVmdCAtIHRpbWVQYXNzZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIHBvdXJjZW50YWdlIGRlIHByb2R1Y3Rpb24gcmVzdGFudCBldCBvbiBhY3R1YWxpc2UgbGEgYmFyIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgICAgIGxldCBwb3VyY2VudGFnZTogbnVtYmVyID0gcHJvZHVjdC50aW1lbGVmdCAvIHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC50aW1lbGVmdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG91cmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCBwb3VyY2VudGFnZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsZSBub3V2ZWF1IHRlbXBzIHJlc3RhbnQgZXN0IGluZsOpcmlldXIgb3Ugw6lnYWwgw6AgMFxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC50aW1lbGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBham91dGUgbGUgcmV2ZW51IGR1IHByb2R1aXRcclxuICAgICAgICAgICAgICAgIGxldCByZXZlbnU6IG51bWJlciA9IHByb2R1Y3QucmV2ZW51ICogcHJvZHVjdC5xdWFudGl0ZTtcclxuICAgICAgICAgICAgICAgIGFkZFNjb3JlKHdvcmxkLCByZXZlbnUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uIHLDqWluaXRpYWxpc2UgbGEgcHJvZ3Jlc3Npb24gZGUgbGEgcHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2kgbGUgcHJvZHVpdCBuJ2VzdCBwYXMgZW4gY291cnMgZGUgcHJvZHVjdGlvbiBldCBhIHVuIG1hbmFnZXJcclxuICAgICAgICBlbHNlIGlmICgocHJvZHVjdC50aW1lbGVmdCA9PSAwKSAmJiAocHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQgPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgLy8gT24gbGFuY2UgbGEgcHJvZHVjdGlvbiBkdSBwcm9kdWl0XHJcbiAgICAgICAgICAgIHN0YXJ0UHJvZHVjdChwcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFVwZGF0ZUxpc3RbcHJvZHVjdC5pZF0gPSBEYXRlLm5vdygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBDYWxjdWwgZHUgc2NvcmVcclxuZnVuY3Rpb24gYWRkU2NvcmUod29ybGQ6IFdvcmxkLCBzY29yZTogbnVtYmVyKSB7XHJcbiAgICAvLyBBam91dCBkZSBsJ2FyZ2VudFxyXG4gICAgd29ybGQubW9uZXkgKz0gc2NvcmU7XHJcblxyXG4gICAgLy8gQWpvdXQgZHUgc2NvcmVcclxuICAgIHdvcmxkLnNjb3JlICs9IHNjb3JlO1xyXG5cclxuICAgIC8vIEFmZmljaGUgZHUgbm91dmVhdSBzb2xkZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn1cclxuXHJcblxyXG4vLyBEw6libG9xdWUgbWFuYWdlciBwb3VyIHVuIHByb2R1aXRcclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSWQobWFuYWdlcjogUGFsbGllciwgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKG1hbmFnZXIuaWRjaWJsZSA9PSBwcm9kdWN0LmlkKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QubWFuYWdlclVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWl0OiBcIiArIHByb2R1Y3QubmFtZSArIFwiIHVubG9ja2VkOlwiICsgcHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VuZFRvU2VydmVyKFwibWFuYWdlclwiLCBtYW5hZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gUmV0cm91dmVyIHVuIHByb2R1aXQgw6AgcGFydGlyIGQndW4gaWRcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9kdWN0KHdvcmxkOiBXb3JsZCwgaWRQcm9kdWN0OiBudW1iZXIpOiBQcm9kdWN0IHtcclxuICAgIGxldCBwOiBQcm9kdWN0ID0gbnVsbDtcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0LmlkLnRvU3RyaW5nKCkgPT0gaWRQcm9kdWN0LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgcCA9IHByb2R1Y3RcclxuICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcDtcclxufVxyXG5cclxuXHJcbi8vIEFwcGxpcXVlIHVuIGJvbnVzIFxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlCb251c1Byb2R1Y3QocHJvZHVjdDogUHJvZHVjdCwgcmF0aW86IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2godHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJWSVRFU1NFXCI6XHJcbiAgICAgICAgICAgIHByb2R1Y3Qudml0ZXNzZSA9IHByb2R1Y3Qudml0ZXNzZSAvIHJhdGlvO1xyXG4gICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC50aW1lbGVmdCAvIHJhdGlvO1xyXG4gICAgICAgIGNhc2UgXCJHQUlOXCI6XHJcbiAgICAgICAgICAgIHByb2R1Y3QucmV2ZW51ID0gcHJvZHVjdC5yZXZlbnUgKiByYXRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge3Byb2dyZXNzQmFyTGlzdH0gZnJvbSBcIi4vUHJvZHVjdHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9ncmVzc0JhcihzZXJ2ZXIsIHByb2R1Y3QsIGNvbCkge1xyXG4gICAgLy8gQmFycmUgZGUgcHJvZ3Jlc3Npb24gKGxpZ25lKVxyXG4gICAgbGV0IHByb2R1Y3RQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFByb2dyZXNzKTtcclxuICAgIHByb2R1Y3RQcm9ncmVzcy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgbGV0IGJhciA9IG5ldyBQcm9ncmVzc0Jhci5MaW5lKHByb2R1Y3RQcm9ncmVzcywge1xyXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxMCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxNDAwLFxyXG4gICAgICAgIGNvbG9yOiAnI0ZGRUE4MicsXHJcbiAgICAgICAgdHJhaWxDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgIHRyYWlsV2lkdGg6IDEsXHJcbiAgICAgICAgc3ZnU3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfSxcclxuICAgICAgICBmcm9tOiB7IGNvbG9yOiAnI0ZGRUE4MicgfSxcclxuICAgICAgICB0bzogeyBjb2xvcjogJyNFRDZBNUEnIH0sXHJcbiAgICAgICAgc3RlcDogKHN0YXRlLCBiYXIpID0+IHtcclxuICAgICAgICAgICAgYmFyLnBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCBzdGF0ZS5jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W3Byb2R1Y3QuaWRdID0gYmFyO1xyXG4gICAgYmFyLmFuaW1hdGUoMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvZ3Jlc3NCYXIoaWQsIHBvdXJjZW50YWdlKSB7XHJcbiAgICBwcm9ncmVzc0Jhckxpc3RbaWRdLnNldChwb3VyY2VudGFnZSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9