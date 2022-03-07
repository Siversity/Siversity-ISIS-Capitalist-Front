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
    money.innerHTML = transform(world.money);
    //Création dernier entète, User ID
    var idCol = document.createElement("div");
    container.appendChild(idCol);
    idCol.classList.add("col", "bccFont");
    //User ID
    var userId = document.createElement("div");
    idCol.appendChild(userId);
    userId.classList.add("userId");
    userId.innerHTML = "ID:";
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
function displayMenu(world, server) {
    var container = document.getElementById("menu");
    //création navbar
    var navbar = document.createElement("div");
    container.appendChild(navbar);
    navbar.classList.add("navbar", "fixed-bottom");
    //création unlocks
    var unlocks = document.createElement("div");
    navbar.appendChild(unlocks);
    unlocks.classList.add("unlocks");
    unlocks.innerHTML = "Unlocks";
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
    managers.innerHTML = '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalManager">Managers</button>';
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
/* harmony export */   "displayModal": () => (/* binding */ displayModal)
/* harmony export */ });
function displayModal(server, world) {
    var m = document.getElementById("modalManager");
    //Balise Modal Dialogue
    var md = document.createElement("div");
    m.appendChild(md);
    md.classList.add("modal-dialog");
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
    b.classList.add("close");
    b.setAttribute("type", "button");
    b.setAttribute("data-dismiss", "modal");
    b.setAttribute("aria-label", "Close");
    b.innerHTML = '<span aria-hidden="true">&times;</span>'; //&times; ==> X
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
    //listManagers(server,world);
    //Balise Modal Footer
    var mf = document.createElement("div");
    mc.appendChild(mf);
    mf.classList.add("modal-footer");
    //Ajout bouton fermer dans le footer
    var buttonClose = document.createElement("button");
    mf.appendChild(buttonClose);
    buttonClose.classList.add("btn", "btn-default");
    buttonClose.setAttribute("type", "button");
    buttonClose.setAttribute("data-dismiss", "modal");
    buttonClose.innerHTML = "Close !!";
    //m.innerHTML='<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">...</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div>'
}
function listManagers(server, world) {
    var container = document.getElementById("modalBody");
    $.each(world.managers.pallier, function (index, pallier) {
        var ligne = document.createElement("div");
        container.appendChild(ligne);
        ligne.id = "p" + pallier.name;
        ligne.classList.add("row");
        // Titre (ligne)
        var managerName = document.createElement("div");
        ligne.appendChild(managerName);
        managerName.classList.add("row");
        managerName.innerHTML = pallier.name;
        // Image (ligne)
        var managerImage = document.createElement("div");
        ligne.appendChild(managerImage);
        managerImage.classList.add("row");
        var image = document.createElement("img");
        managerImage.appendChild(image);
        image.classList.add("managerImage");
        image.src = server + pallier.logo;
        //Bouton Hire!
        var buttonHire = document.createElement("button");
        ligne.appendChild(buttonHire);
        buttonHire.classList.add("class", "btn", "btn-secondary");
        buttonHire.setAttribute("type", "button");
        buttonHire.innerText = "Achète Moi !";
    });
}


/***/ }),

/***/ "./src/App/Products.ts":
/*!*****************************!*\
  !*** ./src/App/Products.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProducts": () => (/* binding */ showProducts)
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
            }
        });
    }
    // Si l'option consiste à la valeur max
    if (addSelected == "Max") {
        world.products.product.forEach(function (product) {
            var max = getMaxProduct(world, product);
            // Changement affichage bouton
            var addProduct = document.getElementById("add" + product.id);
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
/* harmony export */   "progressBarList": () => (/* binding */ progressBarList)
/* harmony export */ });
/* harmony import */ var _App_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/Products */ "./src/App/Products.ts");
/* harmony import */ var _App_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Header */ "./src/App/Header.ts");
/* harmony import */ var _App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/ProgressBar */ "./src/App/ProgressBar.js");
/* harmony import */ var _App_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/SideBar */ "./src/App/SideBar.ts");
/* harmony import */ var _App_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App/Menu */ "./src/App/Menu.ts");
/* harmony import */ var _App_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App/Modal */ "./src/App/Modal.ts");






var serveurUrl = "https://isiscapitalist.kk.kurasawa.fr/";
var currentWorld;
$(document).ready(function () {
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        currentWorld = world;
        console.log(currentWorld);
        world.money = 200;
        // remplir le layout avec les informations globales
        // (nom du monde, argent total....)
        // puis boucler sur chaque produit
        $.each(world.products.product, function (index, product) {
        });
        (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(serveurUrl, world);
        (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.showProducts)(serveurUrl, world);
        (0,_App_Menu__WEBPACK_IMPORTED_MODULE_4__.displayMenu)(world, serveurUrl);
        (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.showSideBar)(serveurUrl, world);
        (0,_App_Modal__WEBPACK_IMPORTED_MODULE_5__.displayModal)(serveurUrl, world);
        setInterval(function () {
            // On calcule en permanence le score
            calcScore(serveurUrl, currentWorld);
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
    });
}
function addScore(world, score) {
    world.money = world.money + score;
    document.getElementById("worldMoney").innerHTML = (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.transform)(world.money);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMO0FBQ0EsSUFBSSxtREFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxtREFBZTtBQUNuQjtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9NZW51LnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvTW9kYWwudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9kdWN0cy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1NpZGVCYXIudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gcHJlbWnDqHJlIGNvbG9uZSBhdmVjIGxlIG5vbSBldCBsZSBsb2dvXHJcbiAgICBsZXQgbW9uZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmRlKTtcclxuICAgIG1vbmRlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJtb25kZVwiLCBcImJjY0ZvbnRcIik7XHJcblxyXG4gICAgLy9Mb2dvXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgICBsb2dvLnNyYyA9IHNlcnZlciArIHdvcmxkLmxvZ287XHJcblxyXG4gICAgLy9Ob21cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiIFwiICsgd29ybGQubmFtZTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWNvbmQgZW50w6p0ZSwgbCdhcmdlbnRcclxuICAgIGxldCBtb25leUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25leUNvbClcclxuICAgIG1vbmV5Q29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIpXHJcblxyXG4gICAgLy9MJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vbmV5Q29sLmFwcGVuZENoaWxkKG1vbmV5KTtcclxuICAgIG1vbmV5LmlkID0gXCJ3b3JsZE1vbmV5XCI7XHJcbiAgICBtb25leS5jbGFzc0xpc3QuYWRkKFwibW9uZXlcIik7XHJcbiAgICBtb25leS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGRlcm5pZXIgZW50w6h0ZSwgVXNlciBJRFxyXG4gICAgbGV0IGlkQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpZENvbCk7XHJcbiAgICBpZENvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiYmNjRm9udFwiKTtcclxuXHJcbiAgICAvL1VzZXIgSURcclxuICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWRDb2wuYXBwZW5kQ2hpbGQodXNlcklkKTtcclxuICAgIHVzZXJJZC5jbGFzc0xpc3QuYWRkKFwidXNlcklkXCIpO1xyXG4gICAgdXNlcklkLmlubmVySFRNTCA9IFwiSUQ6XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsZXVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIGlmICh2YWxldXIgPCAxMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDIpO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyIDwgMTAwMDAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgwKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA+PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvUHJlY2lzaW9uKDQpO1xyXG4gICAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKC9lXFwrKC4qKS8sIFwiIDEwPHN1cD4kMTwvc3VwPlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KHdvcmxkOiBXb3JsZCwgc2VydmVyOiBzdHJpbmcpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gbmF2YmFyXHJcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIiwgXCJmaXhlZC1ib3R0b21cIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gdW5sb2Nrc1xyXG4gICAgbGV0IHVubG9ja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKHVubG9ja3MpO1xyXG4gICAgdW5sb2Nrcy5jbGFzc0xpc3QuYWRkKFwidW5sb2Nrc1wiKTtcclxuICAgIHVubG9ja3MuaW5uZXJIVE1MID0gXCJVbmxvY2tzXCI7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gY2FzaCB1cGdyYWRlc1xyXG4gICAgbGV0IGNhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNhc2gpO1xyXG4gICAgY2FzaC5jbGFzc0xpc3QuYWRkKFwiY2FzaFwiKTtcclxuICAgIGNhc2guaW5uZXJIVE1MID0gXCJDYXNoIFVwZ3JhZGVzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gYW5nZWxzIHVwZ3JhZGVzXHJcbiAgICBsZXQgYW5nZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhbmdlbHMpO1xyXG4gICAgYW5nZWxzLmNsYXNzTGlzdC5hZGQoXCJhbmdlbHNcIik7XHJcbiAgICBhbmdlbHMuaW5uZXJIVE1MID0gXCJBbmdlbHMgdXBncmFkZXNcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBtYW5hZ2Vyc1xyXG4gICAgbGV0IG1hbmFnZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtYW5hZ2Vycyk7XHJcbiAgICBtYW5hZ2Vycy5jbGFzc0xpc3QuYWRkKFwibWFuYWdlcnNcIik7XHJcbiAgICBtYW5hZ2Vycy5pbm5lckhUTUwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjbW9kYWxNYW5hZ2VyXCI+TWFuYWdlcnM8L2J1dHRvbj4nO1xyXG5cclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBpbnZlc3RvcnNcclxuICAgIGxldCBpbnZlc3RvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGludmVzdG9ycyk7XHJcbiAgICBpbnZlc3RvcnMuY2xhc3NMaXN0LmFkZChcImludmVzdG9yc1wiKTtcclxuICAgIGludmVzdG9ycy5pbm5lckhUTUwgPSBcIkludmVzdG9yc1wiO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1vZGFsKHNlcnZlcjogc3RyaW5nLHdvcmxkOiBXb3JsZCApIHtcclxuXHJcblxyXG5cclxubGV0IG0gPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxNYW5hZ2VyXCIpO1xyXG5cclxuLy9CYWxpc2UgTW9kYWwgRGlhbG9ndWVcclxubGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubS5hcHBlbmRDaGlsZChtZCk7XHJcbm1kLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaWFsb2dcIik7XHJcbm1kLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRvY3VtZW50XCIpO1xyXG5cclxuLy9CYWxpc2UgTW9kYWwgQ29udGVudFxyXG5sZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZC5hcHBlbmRDaGlsZChtYyk7XHJcbm1jLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG5cclxuLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbmxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1jLmFwcGVuZENoaWxkKG1oKTtcclxubWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbi8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG5sZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm1oLmFwcGVuZENoaWxkKGIpO1xyXG5iLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKVxyXG5iLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcclxuYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRpc21pc3NcIixcIm1vZGFsXCIpO1xyXG5iLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIkNsb3NlXCIpO1xyXG5iLmlubmVySFRNTD0nPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICA7IC8vJnRpbWVzOyA9PT4gWFxyXG5cclxuLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG5sZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxubWguYXBwZW5kQ2hpbGQodCk7XHJcbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG50LnNldEF0dHJpYnV0ZShcImlkXCIsXCJteU1vZGFsTGFiZWxcIik7XHJcbnQuaW5uZXJUZXh0PVwiTGVzIE1hbmFnZXJzXCI7XHJcblxyXG5cclxuLy9DcsOpYXRpb24gQm9keVxyXG5sZXQgYm9keU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYy5hcHBlbmRDaGlsZChib2R5TSk7XHJcbmJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG5ib2R5TS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibW9kYWxCb2R5XCIpO1xyXG5cclxuLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbi8vbGlzdE1hbmFnZXJzKHNlcnZlcix3b3JsZCk7XHJcblxyXG4vL0JhbGlzZSBNb2RhbCBGb290ZXJcclxubGV0IG1mID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYy5hcHBlbmRDaGlsZChtZik7XHJcbm1mLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1mb290ZXJcIik7XHJcblxyXG4vL0Fqb3V0IGJvdXRvbiBmZXJtZXIgZGFucyBsZSBmb290ZXJcclxubGV0IGJ1dHRvbkNsb3NlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbm1mLmFwcGVuZENoaWxkKGJ1dHRvbkNsb3NlKTtcclxuYnV0dG9uQ2xvc2UuY2xhc3NMaXN0LmFkZChcImJ0blwiLFwiYnRuLWRlZmF1bHRcIik7XHJcbmJ1dHRvbkNsb3NlLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcclxuYnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1kaXNtaXNzXCIsXCJtb2RhbFwiKTtcclxuYnV0dG9uQ2xvc2UuaW5uZXJIVE1MPVwiQ2xvc2UgISFcIjtcclxuXHJcbi8vbS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj48ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj48aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5Nb2RhbCB0aXRsZTwvaDU+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPi4uLjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpc3RNYW5hZ2VycyhzZXJ2ZXI6IHN0cmluZyx3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQm9keVwiKTtcclxuXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcblxyXG5cclxuICAgICAgICBsZXQgbGlnbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaWduZSk7XHJcbiAgICAgICAgbGlnbmUuaWQgPSBcInBcIiArIHBhbGxpZXIubmFtZVxyXG4gICAgICAgIGxpZ25lLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdHJlIChsaWduZSlcclxuICAgICAgICBsZXQgbWFuYWdlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxpZ25lLmFwcGVuZENoaWxkKG1hbmFnZXJOYW1lKTtcclxuICAgICAgICBtYW5hZ2VyTmFtZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIG1hbmFnZXJOYW1lLmlubmVySFRNTCA9IHBhbGxpZXIubmFtZTtcclxuXHJcbiAgICAgICAgLy8gSW1hZ2UgKGxpZ25lKVxyXG4gICAgICAgIGxldCBtYW5hZ2VySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxpZ25lLmFwcGVuZENoaWxkKG1hbmFnZXJJbWFnZSk7XHJcbiAgICAgICAgbWFuYWdlckltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBtYW5hZ2VySW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtYW5hZ2VySW1hZ2VcIilcclxuICAgICAgICBpbWFnZS5zcmMgPSBzZXJ2ZXIgKyBwYWxsaWVyLmxvZ29cclxuXHJcbiAgICAgICAgLy9Cb3V0b24gSGlyZSFcclxuICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGlnbmUuYXBwZW5kQ2hpbGQoYnV0dG9uSGlyZSk7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiY2xhc3NcIixcImJ0blwiLFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b25IaXJlLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dD1cIkFjaMOodGUgTW9pICFcIjtcclxuXHJcbiAgICB9KVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IGFkZFByb2dyZXNzQmFyLCBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XHJcblxyXG5pbXBvcnQgeyBwcm9ncmVzc0Jhckxpc3QsIGxhc3RVcGRhdGVMaXN0IH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7YWRkU2VsZWN0ZWQsIHNldEFkZFByb2R1Y3QsIGdldENvc3RQcm9kdWN0LCBnZXRNYXhQcm9kdWN0fSBmcm9tIFwiLi9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHByaW5jaXBhbGUgZCdhcHBlbCBkZXMgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9kdWN0cyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciAoY29sb25uZSlcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuaWQgPSBcInBcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImRvdWJsZUJvcmRlclByb2R1Y3RcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdHJlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgXCJiY2NGb250XCIpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5pbm5lckhUTUwgPSBwcm9kdWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIC8vIEltYWdlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdEltYWdlKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInByb2R1Y3RJbWFnZVwiKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHByb2R1Y3RJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuaWQgPSBcImltZ1wiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdEljb25zXCIpXHJcbiAgICAgICAgLy8gU2kgY2UgcHJvZHVpdCBuJ2EgcGFzIMOpdMOpIGTDqWJsb3F1w6ksIG9uIGwnYWZmaWNoZSBlbiBncmlzXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdGUgPT0gMCkge1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZS5zcmMgPSBzZXJ2ZXIgKyBwcm9kdWN0LmxvZ29cclxuICAgICAgICAvLyBBam91dCBldmVudCBwcm9kdWN0aW9uXHJcbiAgICAgICAgJChpbWFnZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGFydFByb2R1Y3QocHJvZHVjdClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFycmUgZGUgcHJvZ3Jlc3Npb25cclxuICAgICAgICBhZGRQcm9ncmVzc0JhcihzZXJ2ZXIsIHByb2R1Y3QsIGNvbCk7XHJcblxyXG4gICAgICAgIC8vIExldmVsIC0tPiBRdWFudGl0w6kgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RRdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UXRlKTtcclxuICAgICAgICBwcm9kdWN0UXRlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0TGV2ZWxcIik7XHJcbiAgICAgICAgbGV0IGxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5hcHBlbmRDaGlsZChsZXZlbCk7XHJcbiAgICAgICAgbGV2ZWwuaWQgPSBcInF0ZVwiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBsZXZlbC5jbGFzc0xpc3QuYWRkKFwiYmNjRm9udFwiKTtcclxuICAgICAgICBsZXZlbC5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdENvbnRhaW5lcik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibXQtM1wiKTtcclxuXHJcbiAgICAgICAgLy8gTmJyIGxldmVsIMOgIGFjaGV0ZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdEFkZCk7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiKTtcclxuICAgICAgICBsZXQgcHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5hcHBlbmRDaGlsZChwcm9kdWN0QnV0dG9uKTtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmlkID0gXCJhZGRcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2R1Y3RcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgJChwcm9kdWN0QnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaWQgPSBcImNvc3RcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSAocHJvZHVjdC5jb3V0ICsgTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKSkudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGRlIGxhbmNlciBsYSBwcm9kdWN0aW9uIGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBzdGFydFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gcGV1dCBhY3RpdmVyIGxlIHByb2R1aXRcclxuICAgIGlmICh2ZXJpZlByb2R1Y3QocHJvZHVjdCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhbmNlbWVudCBkZSBsYSBwcm9kdWN0aW9uIGRlIFwiICsgcHJvZHVjdC5uYW1lKTtcclxuICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAxMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IHF1ZSBwcm9kdWl0IGVzdCBhY3RpdmFibGVcclxuZnVuY3Rpb24gdmVyaWZQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBib29sZWFuIHtcclxuICAgIGlmICgocHJvZHVjdC5xdWFudGl0ZSA+IDApICYmIChwcm9kdWN0LnRpbWVsZWZ0ID09IDApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGQnYWpvdXRlciB1bmUgcXVhbnRpdMOpIMOgIHVuIHByb2R1aXRcclxuZnVuY3Rpb24gYWRkUHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIG4nZXN0IHBhcyBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgIT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgY2/Du3RcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIGFkZFNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgbW9kaWZ5UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCwgYWRkU2VsZWN0ZWQsIGNvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbWF4IGFjaGV0YWJsZSBldCBzb24gY291dFxyXG4gICAgICAgIGxldCBtYXggPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIG1heCwgY29zdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBlZmZlY3R1YW50IGxlcyBjaGFuZ2VtZW50cyBkJ2FmZmljaGFnZSBsacOpcyDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBtb2RpZnlQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlciwgY29zdDogbnVtYmVyKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50XHJcbiAgICBpZiAod29ybGQubW9uZXkgPiBjb3N0KSB7XHJcbiAgICAgICAgLy8gT24gYWpvdXRlIGxhIHF1YW50aXTDqSBhY2hldMOpZVxyXG4gICAgICAgIHByb2R1Y3QucXVhbnRpdGUgKz0gcXVhbnRpdHk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdGVcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gT24gc291c3RyYWl0IGwnYXJnZW50IGTDqXBlbnPDqVxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IGNvc3Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICAgICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgLy8gT24gcmVjYWxjdWxlIGxlIG1heFxyXG4gICAgICAgICAgICBxdWFudGl0eSA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAvLyBPbiBjaGFuZ2UgbCdhZmZpY2hhZ2Ugc3VyIGNoYXF1ZSBwcm9kdWl0IGVuIGZvbmN0aW9uIGR1IG5vdXZlYXUgc29sZGVcclxuICAgICAgICAgICAgc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbm91dmVhdSBjb8O7dCBhcHLDqHMgYWNoYXRcclxuICAgICAgICBsZXQgbmV3Q29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIHF1YW50aXR5KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHRyYW5zZm9ybShuZXdDb3N0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTJ2lsIHMnYWdpdCBkdSAxZXIgYWNoYXQgc3VyIHVuIHByb2R1aXQsIG9uIGwnYWZmaWNoZSBlbiBjbGFpclxyXG4gICAgICAgIGxldCBpbWFnZVByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1wiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgaWYgKGltYWdlUHJvZHVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFByb2R1Y3RcIikpIHtcclxuICAgICAgICAgICAgaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFByb2R1Y3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBZGRQcm9kdWN0czogYW55W10gPSBbMSwgMTAsIDEwMCwgXCJNYXhcIl07XHJcbmV4cG9ydCB2YXIgYWRkU2VsZWN0ZWQ6IGFueSA9IDE7XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY3LDqWFudCBsYSBiYXJlIGRlIG1lbnUgw6AgZHJvdGllIGNvbnRlbmFudCBsZSBzw6lsZWN0ZXVyIHN1ciBsYSBxdWFudGl0w6kgZGUgcHJvZHVpdHMgw6AgYWNoZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVCYXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gT2J0ZW50aW9uIGR1IGNvbnRhaW5lciBkZXMgcHJvZHVpdHNcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzXCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkdSBjb250YWluZXIgZHUgbWVudVxyXG4gICAgbGV0IHNpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVDb250YWluZXIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5pZCA9IFwic2lkZU1lbnVcIjtcclxuICAgIC8vIENlbnRyYWdlIGR1IG1lbnUgw6AgZHJvaXRlXHJcbiAgICBzaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvbi1hYnNvbHV0ZVwiLCBcInRvcC01MFwiLCBcImVuZC0wXCIsIFwidHJhbnNsYXRlLW1pZGRsZS15XCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkJ3VuZSBsaXN0ZSBkZSBib3V0b25zIMOgIGxhIHZlcnRpY2FsZVxyXG4gICAgbGV0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcclxuICAgIGxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1ncm91cC12ZXJ0aWNhbFwiLCBcInNpZGVDb250YWluZXJcIik7XHJcbiAgICBsaXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJncm91cFwiKTtcclxuXHJcbiAgICAvLyBPbiBnw6luw6hyZSBkZXMgYm91dG9ucyBkZSB0eXBlIHJhZGlvXHJcbiAgICBsaXN0QWRkUHJvZHVjdHMuZm9yRWFjaChhZGROdW1iZXIgPT4ge1xyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsJ2lucHV0IGR1IGJvdXRvblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlcklucHV0KTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5pZCA9IFwiYnV0dG9uXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0Lm5hbWUgPSBcImJ0bnJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxyXG4gICAgICAgIC8vIEEgbCdpbml0aWFsaXNhdGlvbiwgbCdvcHRpb24gKzEgZXN0IGNlbGxlIGNvY2jDqWUgcGFyIGTDqWZhdXRcclxuICAgICAgICBpZiAoYWRkTnVtYmVyID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGFkZE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsZSBsYWJlbCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVyQnV0dG9uKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEJ1dHRvblwiLCBcImFkZEJ1dHRvbk91dGxpbmVcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLnNldEF0dHJpYnV0ZShcImZvclwiLCBhZGROdW1iZXJJbnB1dC5pZClcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uaW5uZXJIVE1MID0gXCIrXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgLy8gRXZlbnQgOiBtb2RpZmljYXRpb24gZHUgc8OpbGVjdGV1ciBhdSBjbGljXHJcbiAgICAgICAgJChhZGROdW1iZXJCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWRkU2VsZWN0ZWQgPSBhZGROdW1iZXI7XHJcbiAgICAgICAgICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIGNoYW5nZWFudCBsJ2FmZmljaGFnZSBsacOpIMOgIGwnYWNoYXQgZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBZGRQcm9kdWN0KHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGVzdCB1bmUgdmFsZXVyIGNvbnN0YW50ZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBhZGRTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsZSBqb3VldXIgbidhIHBhcyBhc3NleiBkJ2FyZ2VudCBwb3VyIGFjaGV0ZXIgbGUgcHJvZHVpdCwgb24gZMOpc2FjdGl2ZSBsZSBib3V0b25cclxuICAgICAgICAgICAgaWYgKHdvcmxkLm1vbmV5IDwgY29zdCkge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2lub24gb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBjb25zaXN0ZSDDoCBsYSB2YWxldXIgbWF4XHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1heDogbnVtYmVyID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgbWF4O1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgY2/Du3RcclxuICAgICAgICAgICAgbGV0IGNvc3Q6IG51bWJlciA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgY2/Du3QgZCd1biBncm91cGUgZGUgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvc3RQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QsIGFkZE51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpO1xyXG4gICAgbGV0IG51bWVyYXRvciA9IDEgLSBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIGFkZE51bWJlcik7XHJcbiAgICBsZXQgZGVub21pbmF0b3IgPSAxIC0gcHJvZHVjdC5jcm9pc3NhbmNlXHJcbiAgICBsZXQgY291dCA9ICh1biAqIG51bWVyYXRvcikgLyBkZW5vbWluYXRvcjtcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgY2/Du3QgY2FsY3Vsw6lcclxuICAgIHJldHVybiBjb3V0O1xyXG59XHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgbm9tYnJlIG1heCBkZSBwcm9kdWl0cyBhY2hldGFibGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpOyBcclxuICAgIGxldCBudW1lcmF0b3I6IG51bWJlciA9IE1hdGgubG9nKC0od29ybGQubW9uZXkgLSB3b3JsZC5tb25leSAqIHByb2R1Y3QuY3JvaXNzYW5jZSAtIHVuKSAvIHVuKTtcclxuICAgIGxldCBkZW5vbWluYXRvcjogbnVtYmVyID0gTWF0aC5sb2cocHJvZHVjdC5jcm9pc3NhbmNlKTtcclxuICAgIGxldCBtYXg6IG51bWJlciA9IChudW1lcmF0b3IgLyBkZW5vbWluYXRvcilcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgbWF4IGRlIHByb2R1aXRzXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtYXgpO1xyXG59IiwiaW1wb3J0IHtXb3JsZCwgUHJvZHVjdCwgUGFsbGllcn0gZnJvbSBcIi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBzaG93UHJvZHVjdHMgfSBmcm9tIFwiLi9BcHAvUHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhlYWRlciwgdHJhbnNmb3JtfSBmcm9tIFwiLi9BcHAvSGVhZGVyXCJcclxuaW1wb3J0IHsgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9BcHAvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHsgYWRkU2VsZWN0ZWQsIHNldEFkZFByb2R1Y3QsIHNob3dTaWRlQmFyIH0gZnJvbSBcIi4vQXBwL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9BcHAvTWVudVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5TW9kYWwgfSBmcm9tIFwiLi9BcHAvTW9kYWxcIjtcclxuXHJcblxyXG52YXIgc2VydmV1clVybDogc3RyaW5nID0gXCJodHRwczovL2lzaXNjYXBpdGFsaXN0LmtrLmt1cmFzYXdhLmZyL1wiO1xyXG52YXIgY3VycmVudFdvcmxkOiBXb3JsZDtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQuZ2V0SlNPTihzZXJ2ZXVyVXJsICsgXCJhZHZlbnR1cmVpc2lzL2dlbmVyaWMvd29ybGRcIiwgZnVuY3Rpb24gKHdvcmxkKSB7XHJcbiAgICAgICAgY3VycmVudFdvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdvcmxkKVxyXG5cclxuXHJcbiAgICAgICAgd29ybGQubW9uZXkgPSAyMDA7XHJcblxyXG5cclxuICAgICAgICAvLyByZW1wbGlyIGxlIGxheW91dCBhdmVjIGxlcyBpbmZvcm1hdGlvbnMgZ2xvYmFsZXNcclxuICAgICAgICAvLyAobm9tIGR1IG1vbmRlLCBhcmdlbnQgdG90YWwuLi4uKVxyXG4gICAgICAgIC8vIHB1aXMgYm91Y2xlciBzdXIgY2hhcXVlIHByb2R1aXRcclxuICAgICAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXNwbGF5SGVhZGVyKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBzaG93UHJvZHVjdHMoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNZW51KHdvcmxkLHNlcnZldXJVcmwpXHJcbiAgICAgICAgc2hvd1NpZGVCYXIoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNb2RhbChzZXJ2ZXVyVXJsLCB3b3JsZClcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIGNhbGN1bGUgZW4gcGVybWFuZW5jZSBsZSBzY29yZVxyXG4gICAgICAgICAgICBjYWxjU2NvcmUoc2VydmV1clVybCwgY3VycmVudFdvcmxkKTtcclxuICAgICAgICAgICAgLy8gU2kgbCdvcHRpb24gZCdham91dCBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZSwgb24gc3luY2hyb25pc2UgYXZlYyBlbiBmb25jdGlvbiBkdSBzY29yZVxyXG4gICAgICAgICAgICAvL2lmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJMaXN0OiBhbnlbXSA9IFtdO1xyXG5leHBvcnQgY29uc3QgbGFzdFVwZGF0ZUxpc3QgOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gY2FsY1Njb3JlKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICBpZiAocHJvZHVjdC50aW1lbGVmdCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lUmVtYWluaW5nOiBudW1iZXIgPSBEYXRlLm5vdygpIC0gbGFzdFVwZGF0ZUxpc3RbcHJvZHVjdC5pZF07XHJcbiAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSBwcm9kdWN0LnRpbWVsZWZ0IC0gdGltZVJlbWFpbmluZztcclxuXHJcbiAgICAgICAgICAgIGxldCBwb3VyY2VudGFnZTogbnVtYmVyID0gKHByb2R1Y3QudGltZWxlZnQgKiAxMDApIC8gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCBwb3VyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lbGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlIHByb2R1aXQgXCIgKyBwcm9kdWN0Lm5hbWUgKyBcIiBhIHJhcHBvcnTDqSBcIiArIHByb2R1Y3QucmV2ZW51KTtcclxuICAgICAgICAgICAgICAgIGxldCByZXZlbnU6IG51bWJlciA9IHByb2R1Y3QucmV2ZW51O1xyXG4gICAgICAgICAgICAgICAgYWRkU2NvcmUod29ybGQsIHJldmVudSk7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRTY29yZSh3b3JsZDogV29ybGQsIHNjb3JlOiBudW1iZXIpIHtcclxuICAgIHdvcmxkLm1vbmV5ID0gd29ybGQubW9uZXkgKyBzY29yZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG59IiwiaW1wb3J0IHtwcm9ncmVzc0Jhckxpc3R9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2dyZXNzQmFyKHNlcnZlciwgcHJvZHVjdCwgY29sKSB7XHJcbiAgICAvLyBCYXJyZSBkZSBwcm9ncmVzc2lvbiAobGlnbmUpXHJcbiAgICBsZXQgcHJvZHVjdFByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UHJvZ3Jlc3MpO1xyXG4gICAgcHJvZHVjdFByb2dyZXNzLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBsZXQgYmFyID0gbmV3IFByb2dyZXNzQmFyLkxpbmUocHJvZHVjdFByb2dyZXNzLCB7XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXHJcbiAgICAgICAgZHVyYXRpb246IDE0MDAsXHJcbiAgICAgICAgY29sb3I6ICcjRkZFQTgyJyxcclxuICAgICAgICB0cmFpbENvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgdHJhaWxXaWR0aDogMSxcclxuICAgICAgICBzdmdTdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9LFxyXG4gICAgICAgIGZyb206IHsgY29sb3I6ICcjRkZFQTgyJyB9LFxyXG4gICAgICAgIHRvOiB7IGNvbG9yOiAnI0VENkE1QScgfSxcclxuICAgICAgICBzdGVwOiAoc3RhdGUsIGJhcikgPT4ge1xyXG4gICAgICAgICAgICBiYXIucGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHN0YXRlLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9ncmVzc0Jhckxpc3RbcHJvZHVjdC5pZF0gPSBiYXI7XHJcbiAgICBiYXIuYW5pbWF0ZSgwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzc0JhcihpZCwgcG91cmNlbnRhZ2UpIHtcclxuICAgIHByb2dyZXNzQmFyTGlzdFtpZF0uc2V0KHBvdXJjZW50YWdlIC8gMTAwKVxyXG4gICAgY29uc29sZS5sb2cocG91cmNlbnRhZ2UvMTAwKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=