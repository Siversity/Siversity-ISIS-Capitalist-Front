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
    buttonClose.classList.add("btn btn-default");
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
        buttonHire.classList.add("class", "btn btn-secondary");
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
        setInterval(function () { console.log("test"); }, 100);
        setInterval(function () {
            console.log("test");
            // On calcule en permanence le score
            calcScore(serveurUrl, currentWorld);
            // Si l'option d'ajout sélectionnée est le max achetable, on synchronise avec en fonction du score
            if (_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.addSelected == "Max") {
                (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.setAddProduct)(world);
            }
        }, 100);
    });
});
var progressBarList = [];
var lastUpdateList = [];
function calcScore(server, world) {
    $.each(world.products.product, function (index, product) {
        console.log("test");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDN0UsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXdDO0FBQ3pDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRCxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksbURBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksbURBQWU7QUFDbkI7QUFDQTs7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvSGVhZGVyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvTWVudS50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL01vZGFsLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvUHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9TaWRlQmFyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG4vLyBDcsOpYXRpb24gY29udGFpbmVyIGR1IGhlYWRlclxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhlYWRlcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHByZW1pw6hyZSBjb2xvbmUgYXZlYyBsZSBub20gZXQgbGUgbG9nb1xyXG4gICAgbGV0IG1vbmRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25kZSk7XHJcbiAgICBtb25kZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwibW9uZGVcIiwgXCJiY2NGb250XCIpO1xyXG5cclxuICAgIC8vTG9nb1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbW9uZGUuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gICAgbG9nby5zcmMgPSBzZXJ2ZXIgKyB3b3JsZC5sb2dvO1xyXG5cclxuICAgIC8vTm9tXHJcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbW9uZGUuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgbmFtZS5pbm5lckhUTUwgPSBcIiBcIiArIHdvcmxkLm5hbWU7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gc2Vjb25kIGVudMOqdGUsIGwnYXJnZW50XHJcbiAgICBsZXQgbW9uZXlDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZXlDb2wpXHJcbiAgICBtb25leUNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiYmNjRm9udFwiKVxyXG5cclxuICAgIC8vTCdhcmdlbnRcclxuICAgIGxldCBtb25leSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb25leUNvbC5hcHBlbmRDaGlsZChtb25leSk7XHJcbiAgICBtb25leS5pZCA9IFwid29ybGRNb25leVwiO1xyXG4gICAgbW9uZXkuY2xhc3NMaXN0LmFkZChcIm1vbmV5XCIpO1xyXG4gICAgbW9uZXkuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBkZXJuaWVyIGVudMOodGUsIFVzZXIgSURcclxuICAgIGxldCBpZENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWRDb2wpO1xyXG4gICAgaWRDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIik7XHJcblxyXG4gICAgLy9Vc2VyIElEXHJcbiAgICBsZXQgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlkQ29sLmFwcGVuZENoaWxkKHVzZXJJZCk7XHJcbiAgICB1c2VySWQuY2xhc3NMaXN0LmFkZChcInVzZXJJZFwiKTtcclxuICAgIHVzZXJJZC5pbm5lckhUTUwgPSBcIklEOlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHZhbGV1cjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAodmFsZXVyIDwgMTAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgyKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA8IDEwMDAwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMCk7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPj0gMTAwMDAwMCkge1xyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b1ByZWNpc2lvbig0KTtcclxuICAgICAgICByZXMgPSByZXMucmVwbGFjZSgvZVxcKyguKikvLCBcIiAxMDxzdXA+JDE8L3N1cD5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudSh3b3JsZDogV29ybGQsIHNlcnZlcjogc3RyaW5nKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIG5hdmJhclxyXG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIsIFwiZml4ZWQtYm90dG9tXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHVubG9ja3NcclxuICAgIGxldCB1bmxvY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bmxvY2tzKTtcclxuICAgIHVubG9ja3MuY2xhc3NMaXN0LmFkZChcInVubG9ja3NcIik7XHJcbiAgICB1bmxvY2tzLmlubmVySFRNTCA9IFwiVW5sb2Nrc1wiO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIGNhc2ggdXBncmFkZXNcclxuICAgIGxldCBjYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjYXNoKTtcclxuICAgIGNhc2guY2xhc3NMaXN0LmFkZChcImNhc2hcIik7XHJcbiAgICBjYXNoLmlubmVySFRNTCA9IFwiQ2FzaCBVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGFuZ2VscyB1cGdyYWRlc1xyXG4gICAgbGV0IGFuZ2VscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYW5nZWxzKTtcclxuICAgIGFuZ2Vscy5jbGFzc0xpc3QuYWRkKFwiYW5nZWxzXCIpO1xyXG4gICAgYW5nZWxzLmlubmVySFRNTCA9IFwiQW5nZWxzIHVwZ3JhZGVzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gbWFuYWdlcnNcclxuICAgIGxldCBtYW5hZ2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWFuYWdlcnMpO1xyXG4gICAgbWFuYWdlcnMuY2xhc3NMaXN0LmFkZChcIm1hbmFnZXJzXCIpO1xyXG4gICAgbWFuYWdlcnMuaW5uZXJIVE1MID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI21vZGFsTWFuYWdlclwiPk1hbmFnZXJzPC9idXR0b24+JztcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gaW52ZXN0b3JzXHJcbiAgICBsZXQgaW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChpbnZlc3RvcnMpO1xyXG4gICAgaW52ZXN0b3JzLmNsYXNzTGlzdC5hZGQoXCJpbnZlc3RvcnNcIik7XHJcbiAgICBpbnZlc3RvcnMuaW5uZXJIVE1MID0gXCJJbnZlc3RvcnNcIjtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChzZXJ2ZXI6IHN0cmluZyx3b3JsZDogV29ybGQgKSB7XHJcblxyXG5cclxuXHJcbmxldCBtID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsTWFuYWdlclwiKTtcclxuXHJcbi8vQmFsaXNlIE1vZGFsIERpYWxvZ3VlXHJcbmxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm0uYXBwZW5kQ2hpbGQobWQpO1xyXG5tZC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGlhbG9nXCIpO1xyXG5tZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkb2N1bWVudFwiKTtcclxuXHJcbi8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxubGV0IG1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWQuYXBwZW5kQ2hpbGQobWMpO1xyXG5tYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbi8vQmFsaXNlIE1vZGFsIGhlYWRlclxyXG5sZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYy5hcHBlbmRDaGlsZChtaCk7XHJcbm1oLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XHJcblxyXG4vL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxubGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5taC5hcHBlbmRDaGlsZChiKTtcclxuYi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIilcclxuYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIik7XHJcbmIuc2V0QXR0cmlidXRlKFwiZGF0YS1kaXNtaXNzXCIsXCJtb2RhbFwiKTtcclxuYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJDbG9zZVwiKTtcclxuYi5pbm5lckhUTUw9JzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+JyAgOyAvLyZ0aW1lczsgPT0+IFhcclxuXHJcbi8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxubGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbm1oLmFwcGVuZENoaWxkKHQpO1xyXG50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibXlNb2RhbExhYmVsXCIpO1xyXG50LmlubmVyVGV4dD1cIkxlcyBNYW5hZ2Vyc1wiO1xyXG5cclxuXHJcbi8vQ3LDqWF0aW9uIEJvZHlcclxubGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWMuYXBwZW5kQ2hpbGQoYm9keU0pO1xyXG5ib2R5TS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYm9keVwiKTtcclxuYm9keU0uc2V0QXR0cmlidXRlKFwiaWRcIixcIm1vZGFsQm9keVwiKTtcclxuXHJcbi8vUmVtcGxpc3NhZ2UgZHUgYm9keSBhdmVjIGxlcyBkaWZmZXJyZW50cyBtYW5hZ2Vyc1xyXG4vL2xpc3RNYW5hZ2VycyhzZXJ2ZXIsd29ybGQpO1xyXG5cclxuLy9CYWxpc2UgTW9kYWwgRm9vdGVyXHJcbmxldCBtZiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWMuYXBwZW5kQ2hpbGQobWYpO1xyXG5tZi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZm9vdGVyXCIpO1xyXG5cclxuLy9Bam91dCBib3V0b24gZmVybWVyIGRhbnMgbGUgZm9vdGVyXHJcbmxldCBidXR0b25DbG9zZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5tZi5hcHBlbmRDaGlsZChidXR0b25DbG9zZSk7XHJcbmJ1dHRvbkNsb3NlLmNsYXNzTGlzdC5hZGQoXCJidG4gYnRuLWRlZmF1bHRcIik7XHJcbmJ1dHRvbkNsb3NlLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcclxuYnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1kaXNtaXNzXCIsXCJtb2RhbFwiKTtcclxuYnV0dG9uQ2xvc2UuaW5uZXJIVE1MPVwiQ2xvc2UgISFcIjtcclxuXHJcbi8vbS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj48ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj48aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5Nb2RhbCB0aXRsZTwvaDU+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPi4uLjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpc3RNYW5hZ2VycyhzZXJ2ZXI6IHN0cmluZyx3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQm9keVwiKTtcclxuXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcblxyXG5cclxuICAgICAgICBsZXQgbGlnbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaWduZSk7XHJcbiAgICAgICAgbGlnbmUuaWQgPSBcInBcIiArIHBhbGxpZXIubmFtZVxyXG4gICAgICAgIGxpZ25lLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdHJlIChsaWduZSlcclxuICAgICAgICBsZXQgbWFuYWdlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxpZ25lLmFwcGVuZENoaWxkKG1hbmFnZXJOYW1lKTtcclxuICAgICAgICBtYW5hZ2VyTmFtZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIG1hbmFnZXJOYW1lLmlubmVySFRNTCA9IHBhbGxpZXIubmFtZTtcclxuXHJcbiAgICAgICAgLy8gSW1hZ2UgKGxpZ25lKVxyXG4gICAgICAgIGxldCBtYW5hZ2VySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxpZ25lLmFwcGVuZENoaWxkKG1hbmFnZXJJbWFnZSk7XHJcbiAgICAgICAgbWFuYWdlckltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBtYW5hZ2VySW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtYW5hZ2VySW1hZ2VcIilcclxuICAgICAgICBpbWFnZS5zcmMgPSBzZXJ2ZXIgKyBwYWxsaWVyLmxvZ29cclxuXHJcbiAgICAgICAgLy9Cb3V0b24gSGlyZSFcclxuICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbGlnbmUuYXBwZW5kQ2hpbGQoYnV0dG9uSGlyZSk7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiY2xhc3NcIixcImJ0biBidG4tc2Vjb25kYXJ5XCIpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuaW5uZXJUZXh0PVwiQWNow6h0ZSBNb2kgIVwiO1xyXG5cclxuICAgIH0pXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgYWRkUHJvZ3Jlc3NCYXIsIHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcclxuXHJcbmltcG9ydCB7IHByb2dyZXNzQmFyTGlzdCwgbGFzdFVwZGF0ZUxpc3QgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHthZGRTZWxlY3RlZCwgc2V0QWRkUHJvZHVjdCwgZ2V0Q29zdFByb2R1Y3QsIGdldE1heFByb2R1Y3R9IGZyb20gXCIuL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcHJpbmNpcGFsZSBkJ2FwcGVsIGRlcyBwcm9kdWl0c1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2R1Y3RzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzXCIpO1xyXG5cclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwicFwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZG91YmxlQm9yZGVyUHJvZHVjdFwiKTtcclxuXHJcbiAgICAgICAgLy8gVGl0cmUgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0VGl0bGUpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiLCBcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmlubmVySFRNTCA9IHByb2R1Y3QubmFtZTtcclxuXHJcbiAgICAgICAgLy8gSW1hZ2UgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0SW1hZ2UpO1xyXG4gICAgICAgIHByb2R1Y3RJbWFnZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdEltYWdlXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5pZCA9IFwiaW1nXCIgKyBwcm9kdWN0LmlkO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0SWNvbnNcIilcclxuICAgICAgICAvLyBTaSBjZSBwcm9kdWl0IG4nYSBwYXMgw6l0w6kgZMOpYmxvcXXDqSwgb24gbCdhZmZpY2hlIGVuIGdyaXNcclxuICAgICAgICBpZiAocHJvZHVjdC5xdWFudGl0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFByb2R1Y3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlLnNyYyA9IHNlcnZlciArIHByb2R1Y3QubG9nb1xyXG4gICAgICAgIC8vIEFqb3V0IGV2ZW50IHByb2R1Y3Rpb25cclxuICAgICAgICAkKGltYWdlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UHJvZHVjdChwcm9kdWN0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCYXJyZSBkZSBwcm9ncmVzc2lvblxyXG4gICAgICAgIGFkZFByb2dyZXNzQmFyKHNlcnZlciwgcHJvZHVjdCwgY29sKTtcclxuXHJcbiAgICAgICAgLy8gTGV2ZWwgLS0+IFF1YW50aXTDqSAoY29sb25uZSlcclxuICAgICAgICBsZXQgcHJvZHVjdFF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RRdGUpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInByb2R1Y3RMZXZlbFwiKTtcclxuICAgICAgICBsZXQgbGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBwcm9kdWN0UXRlLmFwcGVuZENoaWxkKGxldmVsKTtcclxuICAgICAgICBsZXZlbC5pZCA9IFwicXRlXCIgKyBwcm9kdWN0LmlkO1xyXG4gICAgICAgIGxldmVsLmNsYXNzTGlzdC5hZGQoXCJiY2NGb250XCIpO1xyXG4gICAgICAgIGxldmVsLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0Q29udGFpbmVyKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJtdC0zXCIpO1xyXG5cclxuICAgICAgICAvLyBOYnIgbGV2ZWwgw6AgYWNoZXRlciAoY29sb25uZSlcclxuICAgICAgICBsZXQgcHJvZHVjdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0QWRkKTtcclxuICAgICAgICBwcm9kdWN0QWRkLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkLWZsZXhcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIpO1xyXG4gICAgICAgIGxldCBwcm9kdWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcm9kdWN0QWRkLmFwcGVuZENoaWxkKHByb2R1Y3RCdXR0b24pO1xyXG4gICAgICAgIHByb2R1Y3RCdXR0b24uaWQgPSBcImFkZFwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIHByb2R1Y3RCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvZHVjdFwiLCBcImFsaWduLW1pZGRsZVwiKTtcclxuICAgICAgICAkKHByb2R1Y3RCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBDb8O7dCBham91dCBsZXZlbCAoY29sb25uZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdENvc3QpO1xyXG4gICAgICAgIHByb2R1Y3RDb3N0LmlkID0gXCJjb3N0XCIgKyBwcm9kdWN0LmlkO1xyXG4gICAgICAgIHByb2R1Y3RDb3N0LmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaW5uZXJIVE1MID0gKHByb2R1Y3QuY291dCArIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSkpLnRvU3RyaW5nKCk7XHJcbiAgICB9KTtcclxuICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkZSBsYW5jZXIgbGEgcHJvZHVjdGlvbiBkJ3VuIHByb2R1aXRcclxuZnVuY3Rpb24gc3RhcnRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIHBldXQgYWN0aXZlciBsZSBwcm9kdWl0XHJcbiAgICBpZiAodmVyaWZQcm9kdWN0KHByb2R1Y3QpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMYW5jZW1lbnQgZGUgbGEgcHJvZHVjdGlvbiBkZSBcIiArIHByb2R1Y3QubmFtZSk7XHJcbiAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMTAwKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBxdWUgcHJvZHVpdCBlc3QgYWN0aXZhYmxlXHJcbmZ1bmN0aW9uIHZlcmlmUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHByb2R1Y3QucXVhbnRpdGUgPiAwKSAmJiAocHJvZHVjdC50aW1lbGVmdCA9PSAwKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkJ2Fqb3V0ZXIgdW5lIHF1YW50aXTDqSDDoCB1biBwcm9kdWl0XHJcbmZ1bmN0aW9uIGFkZFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBuJ2VzdCBwYXMgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIGNvw7t0XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIGFkZFNlbGVjdGVkLCBjb3N0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG1heCBhY2hldGFibGUgZXQgc29uIGNvdXRcclxuICAgICAgICBsZXQgbWF4ID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG5cclxuICAgICAgICAvLyBPbiBtb2RpZmllIGwnYWZmaWNoYWdlIGR1IHByb2R1aXRcclxuICAgICAgICBtb2RpZnlQcm9kdWN0KHdvcmxkLCBwcm9kdWN0LCBtYXgsIGNvc3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gZWZmZWN0dWFudCBsZXMgY2hhbmdlbWVudHMgZCdhZmZpY2hhZ2UgbGnDqXMgw6AgbCdhY2hhdCBkJ3VuIHByb2R1aXRcclxuZnVuY3Rpb24gbW9kaWZ5UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QsIHF1YW50aXR5OiBudW1iZXIsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBhc3NleiBkJ2FyZ2VudFxyXG4gICAgaWYgKHdvcmxkLm1vbmV5ID4gY29zdCkge1xyXG4gICAgICAgIC8vIE9uIGFqb3V0ZSBsYSBxdWFudGl0w6kgYWNoZXTDqWVcclxuICAgICAgICBwcm9kdWN0LnF1YW50aXRlICs9IHF1YW50aXR5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXRlXCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIE9uIHNvdXN0cmFpdCBsJ2FyZ2VudCBkw6lwZW5zw6lcclxuICAgICAgICB3b3JsZC5tb25leSAtPSBjb3N0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgICAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIHJlY2FsY3VsZSBsZSBtYXhcclxuICAgICAgICAgICAgcXVhbnRpdHkgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICAgICAgLy8gT24gY2hhbmdlIGwnYWZmaWNoYWdlIHN1ciBjaGFxdWUgcHJvZHVpdCBlbiBmb25jdGlvbiBkdSBub3V2ZWF1IHNvbGRlXHJcbiAgICAgICAgICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG5vdXZlYXUgY2/Du3QgYXByw6hzIGFjaGF0XHJcbiAgICAgICAgbGV0IG5ld0Nvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBxdWFudGl0eSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0obmV3Q29zdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUydpbCBzJ2FnaXQgZHUgMWVyIGFjaGF0IHN1ciB1biBwcm9kdWl0LCBvbiBsJ2FmZmljaGUgZW4gY2xhaXJcclxuICAgICAgICBsZXQgaW1hZ2VQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgIGlmIChpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRQcm9kdWN0XCIpKSB7XHJcbiAgICAgICAgICAgIGltYWdlUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QWRkUHJvZHVjdHM6IGFueVtdID0gWzEsIDEwLCAxMDAsIFwiTWF4XCJdO1xyXG5leHBvcnQgdmFyIGFkZFNlbGVjdGVkOiBhbnkgPSAxO1xyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNyw6lhbnQgbGEgYmFyZSBkZSBtZW51IMOgIGRyb3RpZSBjb250ZW5hbnQgbGUgc8OpbGVjdGV1ciBzdXIgbGEgcXVhbnRpdMOpIGRlIHByb2R1aXRzIMOgIGFjaGV0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlQmFyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9idGVudGlvbiBkdSBjb250YWluZXIgZGVzIHByb2R1aXRzXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZHUgY29udGFpbmVyIGR1IG1lbnVcclxuICAgIGxldCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcclxuICAgIHNpZGVDb250YWluZXIuaWQgPSBcInNpZGVNZW51XCI7XHJcbiAgICAvLyBDZW50cmFnZSBkdSBtZW51IMOgIGRyb2l0ZVxyXG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9zaXRpb24tYWJzb2x1dGVcIiwgXCJ0b3AtNTBcIiwgXCJlbmQtMFwiLCBcInRyYW5zbGF0ZS1taWRkbGUteVwiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZCd1bmUgbGlzdGUgZGUgYm91dG9ucyDDoCBsYSB2ZXJ0aWNhbGVcclxuICAgIGxldCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XHJcbiAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tZ3JvdXAtdmVydGljYWxcIiwgXCJzaWRlQ29udGFpbmVyXCIpO1xyXG4gICAgbGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZ3JvdXBcIik7XHJcblxyXG4gICAgLy8gT24gZ8OpbsOocmUgZGVzIGJvdXRvbnMgZGUgdHlwZSByYWRpb1xyXG4gICAgbGlzdEFkZFByb2R1Y3RzLmZvckVhY2goYWRkTnVtYmVyID0+IHtcclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbCdpbnB1dCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJJbnB1dCk7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuaWQgPSBcImJ1dHRvblwiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5uYW1lID0gXCJidG5yYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcclxuICAgICAgICAvLyBBIGwnaW5pdGlhbGlzYXRpb24sIGwnb3B0aW9uICsxIGVzdCBjZWxsZSBjb2Now6llIHBhciBkw6lmYXV0XHJcbiAgICAgICAgaWYgKGFkZE51bWJlciA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBhZGROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbGUgbGFiZWwgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlckJ1dHRvbik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRCdXR0b25cIiwgXCJhZGRCdXR0b25PdXRsaW5lXCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYWRkTnVtYmVySW5wdXQuaWQpXHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIC8vIEV2ZW50IDogbW9kaWZpY2F0aW9uIGR1IHPDqWxlY3RldXIgYXUgY2xpY1xyXG4gICAgICAgICQoYWRkTnVtYmVyQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkID0gYWRkTnVtYmVyO1xyXG4gICAgICAgICAgICBzZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBGb25jdGlvbiBjaGFuZ2VhbnQgbCdhZmZpY2hhZ2UgbGnDqSDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdCh3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBlc3QgdW5lIHZhbGV1ciBjb25zdGFudGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgYWRkU2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgam91ZXVyIG4nYSBwYXMgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIHByb2R1aXQsIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uXHJcbiAgICAgICAgICAgIGlmICh3b3JsZC5tb25leSA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgIGFkZFByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2kgbCdvcHRpb24gY29uc2lzdGUgw6AgbGEgdmFsZXVyIG1heFxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXg6IG51bWJlciA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgYm91dG9uXHJcbiAgICAgICAgICAgIGxldCBhZGRQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdC5pbm5lckhUTUwgPSBcIitcIiArIG1heDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIGNvw7t0IGQndW4gZ3JvdXBlIGRlIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3N0UHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0LCBhZGROdW1iZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTtcclxuICAgIGxldCBudW1lcmF0b3IgPSAxIC0gTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBhZGROdW1iZXIpO1xyXG4gICAgbGV0IGRlbm9taW5hdG9yID0gMSAtIHByb2R1Y3QuY3JvaXNzYW5jZVxyXG4gICAgbGV0IGNvdXQgPSAodW4gKiBudW1lcmF0b3IpIC8gZGVub21pbmF0b3I7XHJcblxyXG4gICAgLy8gUmV0b3VyIGR1IGNvw7t0IGNhbGN1bMOpXHJcbiAgICByZXR1cm4gY291dDtcclxufVxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIG5vbWJyZSBtYXggZGUgcHJvZHVpdHMgYWNoZXRhYmxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCk6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTsgXHJcbiAgICBsZXQgbnVtZXJhdG9yOiBudW1iZXIgPSBNYXRoLmxvZygtKHdvcmxkLm1vbmV5IC0gd29ybGQubW9uZXkgKiBwcm9kdWN0LmNyb2lzc2FuY2UgLSB1bikgLyB1bik7XHJcbiAgICBsZXQgZGVub21pbmF0b3I6IG51bWJlciA9IE1hdGgubG9nKHByb2R1Y3QuY3JvaXNzYW5jZSk7XHJcbiAgICBsZXQgbWF4OiBudW1iZXIgPSAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpXHJcblxyXG4gICAgLy8gUmV0b3VyIGR1IG1heCBkZSBwcm9kdWl0c1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IobWF4KTtcclxufSIsImltcG9ydCB7V29ybGQsIFByb2R1Y3QsIFBhbGxpZXJ9IGZyb20gXCIuL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgc2hvd1Byb2R1Y3RzIH0gZnJvbSBcIi4vQXBwL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIZWFkZXIsIHRyYW5zZm9ybX0gZnJvbSBcIi4vQXBwL0hlYWRlclwiXHJcbmltcG9ydCB7IHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vQXBwL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCB7IGFkZFNlbGVjdGVkLCBzZXRBZGRQcm9kdWN0LCBzaG93U2lkZUJhciB9IGZyb20gXCIuL0FwcC9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlNZW51IH0gZnJvbSBcIi4vQXBwL01lbnVcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1vZGFsIH0gZnJvbSBcIi4vQXBwL01vZGFsXCI7XHJcblxyXG5cclxudmFyIHNlcnZldXJVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9pc2lzY2FwaXRhbGlzdC5ray5rdXJhc2F3YS5mci9cIjtcclxudmFyIGN1cnJlbnRXb3JsZDogV29ybGQ7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmdldEpTT04oc2VydmV1clVybCArIFwiYWR2ZW50dXJlaXNpcy9nZW5lcmljL3dvcmxkXCIsIGZ1bmN0aW9uICh3b3JsZCkge1xyXG4gICAgICAgIGN1cnJlbnRXb3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXb3JsZClcclxuXHJcblxyXG4gICAgICAgIHdvcmxkLm1vbmV5ID0gMjAwO1xyXG5cclxuICAgICAgICAvLyByZW1wbGlyIGxlIGxheW91dCBhdmVjIGxlcyBpbmZvcm1hdGlvbnMgZ2xvYmFsZXNcclxuICAgICAgICAvLyAobm9tIGR1IG1vbmRlLCBhcmdlbnQgdG90YWwuLi4uKVxyXG4gICAgICAgIC8vIHB1aXMgYm91Y2xlciBzdXIgY2hhcXVlIHByb2R1aXRcclxuICAgICAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXNwbGF5SGVhZGVyKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBzaG93UHJvZHVjdHMoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNZW51KHdvcmxkLHNlcnZldXJVcmwpXHJcbiAgICAgICAgc2hvd1NpZGVCYXIoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNb2RhbChzZXJ2ZXVyVXJsLCB3b3JsZClcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKFwidGVzdFwiKTsgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKVxyXG4gICAgICAgICAgICAvLyBPbiBjYWxjdWxlIGVuIHBlcm1hbmVuY2UgbGUgc2NvcmVcclxuICAgICAgICAgICAgY2FsY1Njb3JlKHNlcnZldXJVcmwsIGN1cnJlbnRXb3JsZCk7XHJcbiAgICAgICAgICAgIC8vIFNpIGwnb3B0aW9uIGQnYWpvdXQgc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGUsIG9uIHN5bmNocm9uaXNlIGF2ZWMgZW4gZm9uY3Rpb24gZHUgc2NvcmVcclxuICAgICAgICAgICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyTGlzdDogYW55W10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IGxhc3RVcGRhdGVMaXN0IDogbnVtYmVyW10gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNhbGNTY29yZShzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0ICE9IDApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVSZW1haW5pbmc6IG51bWJlciA9IERhdGUubm93KCkgLSBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLSB0aW1lUmVtYWluaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvdXJjZW50YWdlOiBudW1iZXIgPSAocHJvZHVjdC50aW1lbGVmdCAqIDEwMCkgLyBwcm9kdWN0LnZpdGVzc2U7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIHBvdXJjZW50YWdlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVsZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGUgcHJvZHVpdCBcIiArIHByb2R1Y3QubmFtZSArIFwiIGEgcmFwcG9ydMOpIFwiICsgcHJvZHVjdC5yZXZlbnUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldmVudTogbnVtYmVyID0gcHJvZHVjdC5yZXZlbnU7XHJcbiAgICAgICAgICAgICAgICBhZGRTY29yZSh3b3JsZCwgcmV2ZW51KTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFNjb3JlKHdvcmxkOiBXb3JsZCwgc2NvcmU6IG51bWJlcikge1xyXG4gICAgd29ybGQubW9uZXkgPSB3b3JsZC5tb25leSArIHNjb3JlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn0iLCJpbXBvcnQge3Byb2dyZXNzQmFyTGlzdH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpIHtcclxuICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uIChsaWduZSlcclxuICAgIGxldCBwcm9kdWN0UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RQcm9ncmVzcyk7XHJcbiAgICBwcm9kdWN0UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGxldCBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuTGluZShwcm9kdWN0UHJvZ3Jlc3MsIHtcclxuICAgICAgICBzdHJva2VXaWR0aDogMTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcclxuICAgICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgICAgICBjb2xvcjogJyNGRkVBODInLFxyXG4gICAgICAgIHRyYWlsQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICB0cmFpbFdpZHRoOiAxLFxyXG4gICAgICAgIHN2Z1N0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH0sXHJcbiAgICAgICAgZnJvbTogeyBjb2xvcjogJyNGRkVBODInIH0sXHJcbiAgICAgICAgdG86IHsgY29sb3I6ICcjRUQ2QTVBJyB9LFxyXG4gICAgICAgIHN0ZXA6IChzdGF0ZSwgYmFyKSA9PiB7XHJcbiAgICAgICAgICAgIGJhci5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2dyZXNzQmFyTGlzdFtwcm9kdWN0LmlkXSA9IGJhcjtcclxuICAgIGJhci5hbmltYXRlKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGlkLCBwb3VyY2VudGFnZSkge1xyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W2lkXS5zZXQocG91cmNlbnRhZ2UgLyAxMDApXHJcbiAgICBjb25zb2xlLmxvZyhwb3VyY2VudGFnZS8xMDApXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==