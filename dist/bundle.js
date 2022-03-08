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
    money.innerHTML = transform(world.money);
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
    listManagers(server, world);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL0hlYWRlci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL01lbnUudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Nb2RhbC50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvU2lkZUJhci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGVhZGVyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgLy9jcsOpYXRpb24gcHJlbWnDqHJlIGNvbG9uZSBhdmVjIGxlIG5vbSBldCBsZSBsb2dvXHJcbiAgICBsZXQgbW9uZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmRlKTtcclxuICAgIG1vbmRlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJtb25kZVwiLCBcImJjY0ZvbnRcIik7XHJcblxyXG4gICAgLy9Mb2dvXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgICBsb2dvLnNyYyA9IHNlcnZlciArIHdvcmxkLmxvZ287XHJcblxyXG4gICAgLy9Ob21cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtb25kZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IFwiIFwiICsgd29ybGQubmFtZTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWNvbmQgZW50w6p0ZSwgbCdhcmdlbnRcclxuICAgIGxldCBtb25leUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25leUNvbClcclxuICAgIG1vbmV5Q29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIpXHJcblxyXG4gICAgLy9MJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vbmV5Q29sLmFwcGVuZENoaWxkKG1vbmV5KTtcclxuICAgIG1vbmV5LmlkID0gXCJ3b3JsZE1vbmV5XCI7XHJcbiAgICBtb25leS5jbGFzc0xpc3QuYWRkKFwibW9uZXlcIik7XHJcbiAgICBtb25leS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGRlcm5pZXIgZW50w6h0ZSwgVXNlciBJRFxyXG4gICAgbGV0IHVzZXJDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJDb2wpO1xyXG4gICAgdXNlckNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG5cclxuICAgIC8qXHJcbiAgICAvL1VzZXIgSURcclxuICAgIGxldCB1c2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWRDb2wuYXBwZW5kQ2hpbGQodXNlcklkKTtcclxuICAgIHVzZXJJZC5jbGFzc0xpc3QuYWRkKFwidXNlcklkXCIpO1xyXG4gICAgdXNlcklkLmlubmVySFRNTCA9IFwiSUQ6XCI7XHJcbiAgICAqL1xyXG5cclxuICAgIGxldCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHVzZXJDb2wuYXBwZW5kQ2hpbGQodXNlclJvdyk7XHJcbiAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcblxyXG4gICAgbGV0IGxhYmVsVXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQobGFiZWxVc2VyKTtcclxuICAgIGxhYmVsVXNlci5odG1sRm9yID0gXCJpbnB1dFVzZXJcIjtcclxuICAgIGxhYmVsVXNlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1sYWJlbFwiKVxyXG5cclxuICAgIGxldCBpbnB1dFVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB1c2VyUm93LmFwcGVuZENoaWxkKGlucHV0VXNlcik7XHJcbiAgICBpbnB1dFVzZXIuaWQgPSBcImlucHV0VXNlclwiXHJcbiAgICBpbnB1dFVzZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udHJvbFwiKTtcclxuICAgIGlucHV0VXNlci50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBpbnB1dFVzZXIucGxhY2Vob2xkZXIgPSBcIlBzZXVkb1wiO1xyXG4gICAgaW5wdXRVc2VyLnZhbHVlID0gdXNlcm5hbWU7XHJcbiAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSB0cnVlO1xyXG5cclxuICAgIGxldCBidXR0b25Vc2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uVXNlckRpdik7XHJcblxyXG4gICAgbGV0IGJ1dHRvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgYnV0dG9uVXNlckRpdi5hcHBlbmRDaGlsZChidXR0b25JbnB1dCk7XHJcbiAgICBidXR0b25JbnB1dC5pZCA9IFwidXNlckJ1dHRvbkNoZWNrXCI7XHJcbiAgICBidXR0b25JbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgYnV0dG9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuXHJcbiAgICBsZXQgYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBidXR0b25Vc2VyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkxhYmVsKTtcclxuICAgIGJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiKTtcclxuICAgIGJ1dHRvbkxhYmVsLmh0bWxGb3IgPSBcInVzZXJCdXR0b25DaGVja1wiO1xyXG4gICAgYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nYmkgYmktY2hlY2stc3F1YXJlJz48L2k+XCI7XHJcbiAgICAkKGJ1dHRvbkxhYmVsKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VXNlci5yZWFkT25seSkge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSBmYWxzZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dFVzZXIucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZShpbnB1dFVzZXIudmFsdWUpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKHZhbGV1cjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAodmFsZXVyIDwgMTAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgyKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA8IDEwMDAwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMCk7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPj0gMTAwMDAwMCkge1xyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b1ByZWNpc2lvbig0KTtcclxuICAgICAgICByZXMgPSByZXMucmVwbGFjZSgvZVxcKyguKikvLCBcIiAxMDxzdXA+JDE8L3N1cD5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcbi8vIENyw6lhdGlvbiBjb250YWluZXIgZHUgaGVhZGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudSh3b3JsZDogV29ybGQsIHNlcnZlcjogc3RyaW5nKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIG5hdmJhclxyXG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIsIFwiZml4ZWQtYm90dG9tXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHVubG9ja3NcclxuICAgIGxldCB1bmxvY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bmxvY2tzKTtcclxuICAgIHVubG9ja3MuY2xhc3NMaXN0LmFkZChcInVubG9ja3NcIik7XHJcbiAgICB1bmxvY2tzLmlubmVySFRNTCA9IFwiVW5sb2Nrc1wiO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIGNhc2ggdXBncmFkZXNcclxuICAgIGxldCBjYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjYXNoKTtcclxuICAgIGNhc2guY2xhc3NMaXN0LmFkZChcImNhc2hcIik7XHJcbiAgICBjYXNoLmlubmVySFRNTCA9IFwiQ2FzaCBVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGFuZ2VscyB1cGdyYWRlc1xyXG4gICAgbGV0IGFuZ2VscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYW5nZWxzKTtcclxuICAgIGFuZ2Vscy5jbGFzc0xpc3QuYWRkKFwiYW5nZWxzXCIpO1xyXG4gICAgYW5nZWxzLmlubmVySFRNTCA9IFwiQW5nZWxzIHVwZ3JhZGVzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gbWFuYWdlcnNcclxuICAgIGxldCBtYW5hZ2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWFuYWdlcnMpO1xyXG4gICAgbWFuYWdlcnMuY2xhc3NMaXN0LmFkZChcIm1hbmFnZXJzXCIpO1xyXG4gICAgbWFuYWdlcnMuaW5uZXJIVE1MID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI21vZGFsTWFuYWdlclwiPk1hbmFnZXJzPC9idXR0b24+JztcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gaW52ZXN0b3JzXHJcbiAgICBsZXQgaW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChpbnZlc3RvcnMpO1xyXG4gICAgaW52ZXN0b3JzLmNsYXNzTGlzdC5hZGQoXCJpbnZlc3RvcnNcIik7XHJcbiAgICBpbnZlc3RvcnMuaW5uZXJIVE1MID0gXCJJbnZlc3RvcnNcIjtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChzZXJ2ZXI6IHN0cmluZyx3b3JsZDogV29ybGQgKSB7XHJcblxyXG5cclxuXHJcbmxldCBtID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsTWFuYWdlclwiKTtcclxuXHJcbi8vQmFsaXNlIE1vZGFsIERpYWxvZ3VlXHJcbmxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm0uYXBwZW5kQ2hpbGQobWQpO1xyXG5tZC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGlhbG9nXCIpO1xyXG5tZC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkb2N1bWVudFwiKTtcclxuXHJcbi8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxubGV0IG1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWQuYXBwZW5kQ2hpbGQobWMpO1xyXG5tYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbi8vQmFsaXNlIE1vZGFsIGhlYWRlclxyXG5sZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYy5hcHBlbmRDaGlsZChtaCk7XHJcbm1oLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1oZWFkZXJcIik7XHJcblxyXG4vL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxubGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5taC5hcHBlbmRDaGlsZChiKTtcclxuYi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIilcclxuYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG5iLnNldEF0dHJpYnV0ZShcImRhdGEtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG5iLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuYi5pbm5lckhUTUw9JzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+JyAgOyAvLyZ0aW1lczsgPT0+IFhcclxuXHJcbi8vVGl0cmUgZGUgbGEgZmVuw6p0cmVcclxubGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbm1oLmFwcGVuZENoaWxkKHQpO1xyXG50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZVwiKTtcclxudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxudC5pbm5lclRleHQ9XCJMZXMgTWFuYWdlcnNcIjtcclxuXHJcblxyXG4vL0Nyw6lhdGlvbiBCb2R5XHJcbmxldCBib2R5TSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuYm9keU0uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJvZHlcIik7XHJcbmJvZHlNLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWxCb2R5XCIpO1xyXG5cclxuLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbmxpc3RNYW5hZ2VycyhzZXJ2ZXIsd29ybGQpO1xyXG5cclxuLy9CYWxpc2UgTW9kYWwgRm9vdGVyXHJcbmxldCBtZiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWMuYXBwZW5kQ2hpbGQobWYpO1xyXG5tZi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZm9vdGVyXCIpO1xyXG5cclxuLy9Bam91dCBib3V0b24gZmVybWVyIGRhbnMgbGUgZm9vdGVyXHJcbmxldCBidXR0b25DbG9zZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5tZi5hcHBlbmRDaGlsZChidXR0b25DbG9zZSk7XHJcbmJ1dHRvbkNsb3NlLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tZGVmYXVsdFwiKTtcclxuYnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuYnV0dG9uQ2xvc2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbmJ1dHRvbkNsb3NlLmlubmVySFRNTD1cIkNsb3NlICEhXCI7XHJcblxyXG4vL20uaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+PGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+TW9kYWwgdGl0bGU8L2g1PjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj4uLi48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlNhdmUgY2hhbmdlczwvYnV0dG9uPjwvZGl2PjwvZGl2PjwvZGl2PidcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsaXN0TWFuYWdlcnMoc2VydmVyOiBzdHJpbmcsd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJvZHlcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgcGFsbGllcikge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGxpZ25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlnbmUpO1xyXG4gICAgICAgIGxpZ25lLmlkID0gXCJwXCIgKyBwYWxsaWVyLm5hbWVcclxuICAgICAgICBsaWduZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IG1hbmFnZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsaWduZS5hcHBlbmRDaGlsZChtYW5hZ2VyTmFtZSk7XHJcbiAgICAgICAgbWFuYWdlck5hbWUuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgICAgICBtYW5hZ2VyTmFtZS5pbm5lckhUTUwgPSBwYWxsaWVyLm5hbWU7XHJcblxyXG4gICAgICAgIC8vIEltYWdlIChsaWduZSlcclxuICAgICAgICBsZXQgbWFuYWdlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsaWduZS5hcHBlbmRDaGlsZChtYW5hZ2VySW1hZ2UpO1xyXG4gICAgICAgIG1hbmFnZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbWFuYWdlckltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFuYWdlckltYWdlXCIpXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvXHJcblxyXG4gICAgICAgIC8vQm91dG9uIEhpcmUhXHJcbiAgICAgICAgbGV0IGJ1dHRvbkhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxpZ25lLmFwcGVuZENoaWxkKGJ1dHRvbkhpcmUpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuY2xhc3NMaXN0LmFkZChcImNsYXNzXCIsIFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b25IaXJlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5pbm5lclRleHQ9XCJBY2jDqHRlIE1vaSAhXCI7XHJcblxyXG4gICAgfSlcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBhZGRQcm9ncmVzc0Jhciwgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJMaXN0LCBsYXN0VXBkYXRlTGlzdCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQge2FkZFNlbGVjdGVkLCBzZXRBZGRQcm9kdWN0LCBnZXRDb3N0UHJvZHVjdCwgZ2V0TWF4UHJvZHVjdH0gZnJvbSBcIi4vU2lkZUJhclwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcblxyXG4vLyBGb25jdGlvbiBwcmluY2lwYWxlIGQnYXBwZWwgZGVzIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZHVjdHMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmlkID0gXCJwXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkb3VibGVCb3JkZXJQcm9kdWN0XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwiYmNjRm9udFwiKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdC5uYW1lO1xyXG5cclxuICAgICAgICAvLyBJbWFnZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0SW1hZ2VcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmlkID0gXCJpbWdcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RJY29uc1wiKVxyXG4gICAgICAgIC8vIFNpIGNlIHByb2R1aXQgbidhIHBhcyDDqXTDqSBkw6libG9xdcOpLCBvbiBsJ2FmZmljaGUgZW4gZ3Jpc1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlID09IDApIHtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcHJvZHVjdC5sb2dvXHJcbiAgICAgICAgLy8gQWpvdXQgZXZlbnQgcHJvZHVjdGlvblxyXG4gICAgICAgICQoaW1hZ2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpO1xyXG5cclxuICAgICAgICAvLyBMZXZlbCAtLT4gUXVhbnRpdMOpIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0UXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFF0ZSk7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdExldmVsXCIpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuYXBwZW5kQ2hpbGQobGV2ZWwpO1xyXG4gICAgICAgIGxldmVsLmlkID0gXCJxdGVcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgbGV2ZWwuY2xhc3NMaXN0LmFkZChcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgbGV2ZWwuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RDb250YWluZXIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcIm10LTNcIik7XHJcblxyXG4gICAgICAgIC8vIE5iciBsZXZlbCDDoCBhY2hldGVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RBZGQpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuYXBwZW5kQ2hpbGQocHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5pZCA9IFwiYWRkXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9kdWN0XCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgICQocHJvZHVjdEJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaWQgPSBcImNvc3RcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSAocHJvZHVjdC5jb3V0ICsgTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKSkudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGRlIGxhbmNlciBsYSBwcm9kdWN0aW9uIGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBzdGFydFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gcGV1dCBhY3RpdmVyIGxlIHByb2R1aXRcclxuICAgIGlmICh2ZXJpZlByb2R1Y3QocHJvZHVjdCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhbmNlbWVudCBkZSBsYSBwcm9kdWN0aW9uIGRlIFwiICsgcHJvZHVjdC5uYW1lKTtcclxuICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAxMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IHF1ZSBwcm9kdWl0IGVzdCBhY3RpdmFibGVcclxuZnVuY3Rpb24gdmVyaWZQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBib29sZWFuIHtcclxuICAgIGlmICgocHJvZHVjdC5xdWFudGl0ZSA+IDApICYmIChwcm9kdWN0LnRpbWVsZWZ0ID09IDApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGQnYWpvdXRlciB1bmUgcXVhbnRpdMOpIMOgIHVuIHByb2R1aXRcclxuZnVuY3Rpb24gYWRkUHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIG4nZXN0IHBhcyBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgIT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgY2/Du3RcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIGFkZFNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgbW9kaWZ5UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCwgYWRkU2VsZWN0ZWQsIGNvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbWF4IGFjaGV0YWJsZSBldCBzb24gY291dFxyXG4gICAgICAgIGxldCBtYXggPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIG1heCwgY29zdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBlZmZlY3R1YW50IGxlcyBjaGFuZ2VtZW50cyBkJ2FmZmljaGFnZSBsacOpcyDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBtb2RpZnlQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlciwgY29zdDogbnVtYmVyKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50XHJcbiAgICBpZiAod29ybGQubW9uZXkgPiBjb3N0KSB7XHJcbiAgICAgICAgLy8gT24gYWpvdXRlIGxhIHF1YW50aXTDqSBhY2hldMOpZVxyXG4gICAgICAgIHByb2R1Y3QucXVhbnRpdGUgKz0gcXVhbnRpdHk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdGVcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gT24gc291c3RyYWl0IGwnYXJnZW50IGTDqXBlbnPDqVxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IGNvc3Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICAgICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgLy8gT24gcmVjYWxjdWxlIGxlIG1heFxyXG4gICAgICAgICAgICBxdWFudGl0eSA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAvLyBPbiBjaGFuZ2UgbCdhZmZpY2hhZ2Ugc3VyIGNoYXF1ZSBwcm9kdWl0IGVuIGZvbmN0aW9uIGR1IG5vdXZlYXUgc29sZGVcclxuICAgICAgICAgICAgc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbm91dmVhdSBjb8O7dCBhcHLDqHMgYWNoYXRcclxuICAgICAgICBsZXQgbmV3Q29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIHF1YW50aXR5KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHRyYW5zZm9ybShuZXdDb3N0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTJ2lsIHMnYWdpdCBkdSAxZXIgYWNoYXQgc3VyIHVuIHByb2R1aXQsIG9uIGwnYWZmaWNoZSBlbiBjbGFpclxyXG4gICAgICAgIGxldCBpbWFnZVByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1wiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgaWYgKGltYWdlUHJvZHVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFByb2R1Y3RcIikpIHtcclxuICAgICAgICAgICAgaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFByb2R1Y3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBZGRQcm9kdWN0czogYW55W10gPSBbMSwgMTAsIDEwMCwgXCJNYXhcIl07XHJcbmV4cG9ydCB2YXIgYWRkU2VsZWN0ZWQ6IGFueSA9IDE7XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY3LDqWFudCBsYSBiYXJlIGRlIG1lbnUgw6AgZHJvdGllIGNvbnRlbmFudCBsZSBzw6lsZWN0ZXVyIHN1ciBsYSBxdWFudGl0w6kgZGUgcHJvZHVpdHMgw6AgYWNoZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVCYXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gT2J0ZW50aW9uIGR1IGNvbnRhaW5lciBkZXMgcHJvZHVpdHNcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzXCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkdSBjb250YWluZXIgZHUgbWVudVxyXG4gICAgbGV0IHNpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVDb250YWluZXIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5pZCA9IFwic2lkZU1lbnVcIjtcclxuICAgIC8vIENlbnRyYWdlIGR1IG1lbnUgw6AgZHJvaXRlXHJcbiAgICBzaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvbi1hYnNvbHV0ZVwiLCBcInRvcC01MFwiLCBcImVuZC0wXCIsIFwidHJhbnNsYXRlLW1pZGRsZS15XCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkJ3VuZSBsaXN0ZSBkZSBib3V0b25zIMOgIGxhIHZlcnRpY2FsZVxyXG4gICAgbGV0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcclxuICAgIGxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1ncm91cC12ZXJ0aWNhbFwiLCBcInNpZGVDb250YWluZXJcIik7XHJcbiAgICBsaXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJncm91cFwiKTtcclxuXHJcbiAgICAvLyBPbiBnw6luw6hyZSBkZXMgYm91dG9ucyBkZSB0eXBlIHJhZGlvXHJcbiAgICBsaXN0QWRkUHJvZHVjdHMuZm9yRWFjaChhZGROdW1iZXIgPT4ge1xyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsJ2lucHV0IGR1IGJvdXRvblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlcklucHV0KTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5pZCA9IFwiYnV0dG9uXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0Lm5hbWUgPSBcImJ0bnJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxyXG4gICAgICAgIC8vIEEgbCdpbml0aWFsaXNhdGlvbiwgbCdvcHRpb24gKzEgZXN0IGNlbGxlIGNvY2jDqWUgcGFyIGTDqWZhdXRcclxuICAgICAgICBpZiAoYWRkTnVtYmVyID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGFkZE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsZSBsYWJlbCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVyQnV0dG9uKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEJ1dHRvblwiLCBcImFkZEJ1dHRvbk91dGxpbmVcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLnNldEF0dHJpYnV0ZShcImZvclwiLCBhZGROdW1iZXJJbnB1dC5pZClcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uaW5uZXJIVE1MID0gXCIrXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgLy8gRXZlbnQgOiBtb2RpZmljYXRpb24gZHUgc8OpbGVjdGV1ciBhdSBjbGljXHJcbiAgICAgICAgJChhZGROdW1iZXJCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWRkU2VsZWN0ZWQgPSBhZGROdW1iZXI7XHJcbiAgICAgICAgICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIGNoYW5nZWFudCBsJ2FmZmljaGFnZSBsacOpIMOgIGwnYWNoYXQgZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBZGRQcm9kdWN0KHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGVzdCB1bmUgdmFsZXVyIGNvbnN0YW50ZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBhZGRTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsZSBqb3VldXIgbidhIHBhcyBhc3NleiBkJ2FyZ2VudCBwb3VyIGFjaGV0ZXIgbGUgcHJvZHVpdCwgb24gZMOpc2FjdGl2ZSBsZSBib3V0b25cclxuICAgICAgICAgICAgaWYgKHdvcmxkLm1vbmV5IDwgY29zdCkge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2lub24gb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBjb25zaXN0ZSDDoCBsYSB2YWxldXIgbWF4XHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1heDogbnVtYmVyID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgbWF4O1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgY2/Du3RcclxuICAgICAgICAgICAgbGV0IGNvc3Q6IG51bWJlciA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgY2/Du3QgZCd1biBncm91cGUgZGUgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvc3RQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QsIGFkZE51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpO1xyXG4gICAgbGV0IG51bWVyYXRvciA9IDEgLSBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIGFkZE51bWJlcik7XHJcbiAgICBsZXQgZGVub21pbmF0b3IgPSAxIC0gcHJvZHVjdC5jcm9pc3NhbmNlXHJcbiAgICBsZXQgY291dCA9ICh1biAqIG51bWVyYXRvcikgLyBkZW5vbWluYXRvcjtcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgY2/Du3QgY2FsY3Vsw6lcclxuICAgIHJldHVybiBjb3V0O1xyXG59XHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgbm9tYnJlIG1heCBkZSBwcm9kdWl0cyBhY2hldGFibGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpOyBcclxuICAgIGxldCBudW1lcmF0b3I6IG51bWJlciA9IE1hdGgubG9nKC0od29ybGQubW9uZXkgLSB3b3JsZC5tb25leSAqIHByb2R1Y3QuY3JvaXNzYW5jZSAtIHVuKSAvIHVuKTtcclxuICAgIGxldCBkZW5vbWluYXRvcjogbnVtYmVyID0gTWF0aC5sb2cocHJvZHVjdC5jcm9pc3NhbmNlKTtcclxuICAgIGxldCBtYXg6IG51bWJlciA9IChudW1lcmF0b3IgLyBkZW5vbWluYXRvcilcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgbWF4IGRlIHByb2R1aXRzXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtYXgpO1xyXG59IiwiaW1wb3J0IHtXb3JsZCwgUHJvZHVjdCwgUGFsbGllcn0gZnJvbSBcIi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBzaG93UHJvZHVjdHMgfSBmcm9tIFwiLi9BcHAvUHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhlYWRlciwgdHJhbnNmb3JtfSBmcm9tIFwiLi9BcHAvSGVhZGVyXCJcclxuaW1wb3J0IHsgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9BcHAvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHsgYWRkU2VsZWN0ZWQsIHNldEFkZFByb2R1Y3QsIHNob3dTaWRlQmFyIH0gZnJvbSBcIi4vQXBwL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9BcHAvTWVudVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5TW9kYWwgfSBmcm9tIFwiLi9BcHAvTW9kYWxcIjtcclxuXHJcblxyXG52YXIgc2VydmV1clVybDogc3RyaW5nID0gXCJodHRwczovL2lzaXNjYXBpdGFsaXN0LmtrLmt1cmFzYXdhLmZyL1wiO1xyXG52YXIgY3VycmVudFdvcmxkOiBXb3JsZDtcclxudmFyIG91cldvcmxkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCB2YXIgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcm5hbWUobmV3VXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdXNlcm5hbWUgPSBuZXdVc2VybmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgbmV3VXNlcm5hbWUpO1xyXG59XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQuZ2V0SlNPTihzZXJ2ZXVyVXJsICsgXCJhZHZlbnR1cmVpc2lzL2dlbmVyaWMvd29ybGRcIiwgZnVuY3Rpb24gKHdvcmxkKSB7XHJcbiAgICAgICAgY3VycmVudFdvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFdvcmxkKVxyXG5cclxuXHJcbiAgICAgICAgd29ybGQubW9uZXkgPSAyMDA7XHJcblxyXG4gICAgICAgIC8vIHJlbXBsaXIgbGUgbGF5b3V0IGF2ZWMgbGVzIGluZm9ybWF0aW9ucyBnbG9iYWxlc1xyXG4gICAgICAgIC8vIChub20gZHUgbW9uZGUsIGFyZ2VudCB0b3RhbC4uLi4pXHJcbiAgICAgICAgLy8gcHVpcyBib3VjbGVyIHN1ciBjaGFxdWUgcHJvZHVpdFxyXG4gICAgICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXlIZWFkZXIoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIHNob3dQcm9kdWN0cyhzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1lbnUod29ybGQsc2VydmV1clVybClcclxuICAgICAgICBzaG93U2lkZUJhcihzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1vZGFsKHNlcnZldXJVcmwsIHdvcmxkKVxyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBlbiBwZXJtYW5lbmNlIGxlIHNjb3JlXHJcbiAgICAgICAgICAgIGNhbGNTY29yZShzZXJ2ZXVyVXJsLCBjdXJyZW50V29ybGQpO1xyXG4gICAgICAgICAgICAvLyBTaSBsJ29wdGlvbiBkJ2Fqb3V0IHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlLCBvbiBzeW5jaHJvbmlzZSBhdmVjIGVuIGZvbmN0aW9uIGR1IHNjb3JlXHJcbiAgICAgICAgICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9ncmVzc0Jhckxpc3Q6IGFueVtdID0gW107XHJcbmV4cG9ydCBjb25zdCBsYXN0VXBkYXRlTGlzdCA6IG51bWJlcltdID0gW107XHJcblxyXG5mdW5jdGlvbiBjYWxjU2NvcmUoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0ICE9IDApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVSZW1haW5pbmc6IG51bWJlciA9IERhdGUubm93KCkgLSBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLSB0aW1lUmVtYWluaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvdXJjZW50YWdlOiBudW1iZXIgPSAocHJvZHVjdC50aW1lbGVmdCAqIDEwMCkgLyBwcm9kdWN0LnZpdGVzc2U7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIHBvdXJjZW50YWdlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVsZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGUgcHJvZHVpdCBcIiArIHByb2R1Y3QubmFtZSArIFwiIGEgcmFwcG9ydMOpIFwiICsgcHJvZHVjdC5yZXZlbnUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldmVudTogbnVtYmVyID0gcHJvZHVjdC5yZXZlbnU7XHJcbiAgICAgICAgICAgICAgICBhZGRTY29yZSh3b3JsZCwgcmV2ZW51KTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFNjb3JlKHdvcmxkOiBXb3JsZCwgc2NvcmU6IG51bWJlcikge1xyXG4gICAgd29ybGQubW9uZXkgPSB3b3JsZC5tb25leSArIHNjb3JlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn0iLCJpbXBvcnQge3Byb2dyZXNzQmFyTGlzdH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpIHtcclxuICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uIChsaWduZSlcclxuICAgIGxldCBwcm9kdWN0UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RQcm9ncmVzcyk7XHJcbiAgICBwcm9kdWN0UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGxldCBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuTGluZShwcm9kdWN0UHJvZ3Jlc3MsIHtcclxuICAgICAgICBzdHJva2VXaWR0aDogMTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcclxuICAgICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgICAgICBjb2xvcjogJyNGRkVBODInLFxyXG4gICAgICAgIHRyYWlsQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICB0cmFpbFdpZHRoOiAxLFxyXG4gICAgICAgIHN2Z1N0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH0sXHJcbiAgICAgICAgZnJvbTogeyBjb2xvcjogJyNGRkVBODInIH0sXHJcbiAgICAgICAgdG86IHsgY29sb3I6ICcjRUQ2QTVBJyB9LFxyXG4gICAgICAgIHN0ZXA6IChzdGF0ZSwgYmFyKSA9PiB7XHJcbiAgICAgICAgICAgIGJhci5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2dyZXNzQmFyTGlzdFtwcm9kdWN0LmlkXSA9IGJhcjtcclxuICAgIGJhci5hbmltYXRlKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGlkLCBwb3VyY2VudGFnZSkge1xyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W2lkXS5zZXQocG91cmNlbnRhZ2UgLyAxMDApXHJcbiAgICBjb25zb2xlLmxvZyhwb3VyY2VudGFnZS8xMDApXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==