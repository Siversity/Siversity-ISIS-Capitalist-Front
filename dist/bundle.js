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
        image.classList.add("row");
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
        // Le Manager a t il déja été acheté ?
        /*
        if (pallier.unlocked == true) {
            buttonHire.classList.add("btn", "btn-secondary");
            buttonHire.setAttribute("disabled", "true");
            buttonHire.innerText = "Acheté";
        }
        else {
            buttonHire.classList.add("btn", "btn-primary", "buttonHire");
            buttonHire.innerText = "Achete Moi !";
            $(buttonHire).click(function () {
                console.log("je tente d'acheter un manager :)");
                acheterManager(pallier,world);
                
            });
        }*/
    });
}
// Un manager est-il achetable ?
function verifManager(world) {
    $.each(world.managers.pallier, function (index, pallier) {
        var button = document.getElementById("hire" + pallier.idcible);
        if (pallier.seuil > world.money) {
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
    console.log(managerDispo);
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
        console.log("le manager est achetable");
        //Soustraction du prix du manager à l'argent du monde
        world.money -= manager.seuil;
        //Manager ==> Unlocked
        manager.unlocked = true;
        (0,___WEBPACK_IMPORTED_MODULE_0__.matchId)(manager.idcible, world);
        //Changement du bouton Hire en Acheté et disabled
        var button = document.getElementById("hire" + manager.idcible);
        button.setAttribute("disabled", "true");
        button.innerText = "Acheté";
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        //Modification Calcscore
        console.log("Modification de CalcScore");
    }
    else {
        console.log("le manager n'est pas achetable \b fin de transation");
    }
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
/* harmony export */   "matchId": () => (/* binding */ matchId),
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
var ourWorld = true;
$(document).ready(function () {
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        currentWorld = world;
        console.log(currentWorld);
        world.money = 20000;
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
        setInterval(function () {
            // On calcule en permanence le score
            calcScore(serveurUrl, currentWorld);
            (0,_App_Modal__WEBPACK_IMPORTED_MODULE_5__.verifManager)(world);
            (0,_App_Modal__WEBPACK_IMPORTED_MODULE_5__.anyNews)(world);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL0hlYWRlci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL01lbnUudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Nb2RhbC50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvU2lkZUJhci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBwcmVtacOocmUgY29sb25lIGF2ZWMgbGUgbm9tIGV0IGxlIGxvZ29cclxuICAgIGxldCBtb25kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZGUpO1xyXG4gICAgbW9uZGUuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcIm1vbmRlXCIsIFwiYmNjRm9udFwiKTtcclxuXHJcbiAgICAvL0xvZ29cclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICAgIGxvZ28uc3JjID0gc2VydmVyICsgd29ybGQubG9nbztcclxuXHJcbiAgICAvL05vbVxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCIgXCIgKyB3b3JsZC5uYW1lO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIHNlY29uZCBlbnTDqnRlLCBsJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmV5Q29sKVxyXG4gICAgbW9uZXlDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIilcclxuXHJcbiAgICAvL0wnYXJnZW50XHJcbiAgICBsZXQgbW9uZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9uZXlDb2wuYXBwZW5kQ2hpbGQobW9uZXkpO1xyXG4gICAgbW9uZXkuaWQgPSBcIndvcmxkTW9uZXlcIjtcclxuICAgIG1vbmV5LmNsYXNzTGlzdC5hZGQoXCJtb25leVwiKTtcclxuICAgIG1vbmV5LmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gZGVybmllciBlbnTDqHRlLCBVc2VyIElEXHJcbiAgICBsZXQgaWRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlkQ29sKTtcclxuICAgIGlkQ29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIpO1xyXG5cclxuICAgIC8vVXNlciBJRFxyXG4gICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZENvbC5hcHBlbmRDaGlsZCh1c2VySWQpO1xyXG4gICAgdXNlcklkLmNsYXNzTGlzdC5hZGQoXCJ1c2VySWRcIik7XHJcbiAgICB1c2VySWQuaW5uZXJIVE1MID0gXCJJRDpcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWxldXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKHZhbGV1ciA8IDEwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMik7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPCAxMDAwMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDApO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyID49IDEwMDAwMDApIHtcclxuICAgICAgICByZXMgPSB2YWxldXIudG9QcmVjaXNpb24oNCk7XHJcbiAgICAgICAgcmVzID0gcmVzLnJlcGxhY2UoL2VcXCsoLiopLywgXCIgMTA8c3VwPiQxPC9zdXA+XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG4vLyBDcsOpYXRpb24gY29udGFpbmVyIGR1IGhlYWRlclxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1lbnUod29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIG5hdmJhclxyXG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIsIFwiZml4ZWQtYm90dG9tXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHVubG9ja3NcclxuICAgIGxldCB1bmxvY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bmxvY2tzKTtcclxuICAgIHVubG9ja3MuY2xhc3NMaXN0LmFkZChcInVubG9ja3NcIik7XHJcbiAgICB1bmxvY2tzLmlubmVySFRNTCA9IFwiVW5sb2Nrc1wiO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIGNhc2ggdXBncmFkZXNcclxuICAgIGxldCBjYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjYXNoKTtcclxuICAgIGNhc2guY2xhc3NMaXN0LmFkZChcImNhc2hcIik7XHJcbiAgICBjYXNoLmlubmVySFRNTCA9IFwiQ2FzaCBVcGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGFuZ2VscyB1cGdyYWRlc1xyXG4gICAgbGV0IGFuZ2VscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYW5nZWxzKTtcclxuICAgIGFuZ2Vscy5jbGFzc0xpc3QuYWRkKFwiYW5nZWxzXCIpO1xyXG4gICAgYW5nZWxzLmlubmVySFRNTCA9IFwiQW5nZWxzIHVwZ3JhZGVzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gbWFuYWdlcnNcclxuICAgIGxldCBtYW5hZ2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWFuYWdlcnMpO1xyXG4gICAgbWFuYWdlcnMuY2xhc3NMaXN0LmFkZChcIm1hbmFnZXJzXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIE1hbmFnZXJcclxuICAgIGxldCBidXR0b25NYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgbWFuYWdlcnMuYXBwZW5kQ2hpbGQoYnV0dG9uTWFuYWdlcik7XHJcbiAgICBidXR0b25NYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJidG5cIixcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICBidXR0b25NYW5hZ2VyLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsXCJtb2RhbFwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLFwiI21vZGFsTWFuYWdlclwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5pbm5lclRleHQ9XCJNYW5hZ2VycyBcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBiYWRnZVxyXG4gICAgbGV0IGJhZGdlTWFuYWdlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBidXR0b25NYW5hZ2VyLmFwcGVuZENoaWxkKGJhZGdlTWFuYWdlcik7XHJcbiAgICBiYWRnZU1hbmFnZXIuaWQ9XCJiYWRnZU1hbmFnZXJcIlxyXG4gICAgYmFkZ2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiLFwiYmctc2Vjb25kYXJ5XCIpO1xyXG4gICAgXHJcblxyXG4gICAgLy9DcsOpYXRpb24gaW52ZXN0b3JzXHJcbiAgICBsZXQgaW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChpbnZlc3RvcnMpO1xyXG4gICAgaW52ZXN0b3JzLmNsYXNzTGlzdC5hZGQoXCJpbnZlc3RvcnNcIik7XHJcbiAgICBpbnZlc3RvcnMuaW5uZXJIVE1MID0gXCJJbnZlc3RvcnNcIjtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgbWF0Y2hJZCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcblxyXG4gICAgbGV0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsTWFuYWdlclwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL1RpdHJlIGRlIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XHJcbiAgICB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlNb2RhbExhYmVsXCIpO1xyXG4gICAgdC5pbm5lclRleHQgPSBcIkxlcyBNYW5hZ2Vyc1wiO1xyXG5cclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBCb2R5XHJcbiAgICBsZXQgYm9keU0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQoYm9keU0pO1xyXG4gICAgYm9keU0uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJvZHlcIik7XHJcbiAgICBib2R5TS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsQm9keVwiKTtcclxuXHJcbiAgICAvL1JlbXBsaXNzYWdlIGR1IGJvZHkgYXZlYyBsZXMgZGlmZmVycmVudHMgbWFuYWdlcnNcclxuICAgIGxpc3RNYW5hZ2VycyhzZXJ2ZXIsIHdvcmxkKTtcclxufVxyXG5mdW5jdGlvbiBsaXN0TWFuYWdlcnMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQm9keVwiKTtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uKGluZGV4LHBhbGxpZXIpe1xyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgICAgICBjb2wuaWQgPSBcIm1hbmFnZXJcIiArIHBhbGxpZXIuaWRjaWJsZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBJbWFnZSBldCBub20gZHUgbWFuYWdlcnNcclxuICAgICAgICBsZXQgaW1hZ2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoaW1hZ2VOYW1lKTtcclxuICAgICAgICBpbWFnZU5hbWUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsvL1wiY29sLTRcIiwgXCJjb2wtbGctMlwiXHJcblxyXG4gICAgICAgIC8vUGFydGllIEltYWdlXHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpbWFnZU5hbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLmFwcGVuZENoaWxkKGltYWdlTWFuYWdlcik7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLmlkID0gXCJpbWdcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICBpbWFnZU1hbmFnZXIuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsdWlkXCIsIFwicm91bmRlZFwiKVxyXG5cclxuICAgICAgICAvL1BhcnRpZSBOb20gZXQgcHJpeFxyXG4gICAgICAgIGxldCBuYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKG5hbWVQcmljZSk7XHJcbiAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tXHJcbiAgICAgICAgbGV0IG5hbWVNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lUHJpY2UuYXBwZW5kQ2hpbGQobmFtZU1hbmFnZXIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbmFtZU1hbmFnZXIuaW5uZXJUZXh0ID0gcGFsbGllci5uYW1lO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBQcml4XHJcbiAgICAgICAgbGV0IHByaWNlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKHByaWNlTWFuYWdlcik7XHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbGV0IGNvc3QgPSB0cmFuc2Zvcm0ocGFsbGllci5zZXVpbClcclxuICAgICAgICBwcmljZU1hbmFnZXIuaW5uZXJIVE1MPWNvc3Q7XHJcblxyXG4gICAgICAgIC8vUGFydGllIGJvdXRvbiBkJ2VtYmF1Y2hlXHJcbiAgICAgICAgbGV0IGhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChoaXJlKTtcclxuICAgICAgICBoaXJlLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7IC8vXCJjb2wtNFwiLCBcImNvbC1sZy0yXCJcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkhpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGhpcmUuYXBwZW5kQ2hpbGQoYnV0dG9uSGlyZSk7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5pZCA9IFwiaGlyZVwiICsgcGFsbGllci5pZGNpYmxlO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIsIFwiYnV0dG9uSGlyZVwiKTtcclxuICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dCA9IFwiQWNoZXRlIE1vaSAhXCI7XHJcbiAgICAgICAgJChidXR0b25IaXJlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiamUgdGVudGUgZCdhY2hldGVyIHVuIG1hbmFnZXIgOilcIik7XHJcbiAgICAgICAgICAgIGFjaGV0ZXJNYW5hZ2VyKHBhbGxpZXIsd29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBMZSBNYW5hZ2VyIGEgdCBpbCBkw6lqYSDDqXTDqSBhY2hldMOpID9cclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmIChwYWxsaWVyLnVubG9ja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICAgICAgYnV0dG9uSGlyZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhpcmUuaW5uZXJUZXh0ID0gXCJBY2hldMOpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b25IaXJlLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiLCBcImJ1dHRvbkhpcmVcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhpcmUuaW5uZXJUZXh0ID0gXCJBY2hldGUgTW9pICFcIjtcclxuICAgICAgICAgICAgJChidXR0b25IaXJlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImplIHRlbnRlIGQnYWNoZXRlciB1biBtYW5hZ2VyIDopXCIpO1xyXG4gICAgICAgICAgICAgICAgYWNoZXRlck1hbmFnZXIocGFsbGllcix3b3JsZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSovXHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gVW4gbWFuYWdlciBlc3QtaWwgYWNoZXRhYmxlID9cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmTWFuYWdlcih3b3JsZDogV29ybGQpIHtcclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIHBhbGxpZXIpIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXJlXCIgKyBwYWxsaWVyLmlkY2libGUpO1xyXG4gICAgICAgIGlmIChwYWxsaWVyLnNldWlsID4gd29ybGQubW9uZXkpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW55TmV3cyh3b3JsZDpXb3JsZCl7XHJcbiAgICBsZXQgbWFuYWdlckRpc3BvID0wO1xyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsZnVuY3Rpb24oaW5kZXgsbWFuYWdlcil7XHJcbiAgICAgICAgaWYobWFuYWdlci5zZXVpbCA8PSB3b3JsZC5tb25leSAmJiBtYW5hZ2VyLnVubG9ja2VkPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIG1hbmFnZXJEaXNwbyArKztcclxuICAgICAgICB9O1xyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKG1hbmFnZXJEaXNwbyk7XHJcbiAgICBsZXQgbm90aWZNYW5hZ2VyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFkZ2VNYW5hZ2VyXCIpO1xyXG4gICAgaWYobWFuYWdlckRpc3BvPT0wKXtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0PW51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIG5vdGlmTWFuYWdlci5pbm5lclRleHQ9XCJcIittYW5hZ2VyRGlzcG87ICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhY2hldGVyTWFuYWdlcihtYW5hZ2VyOiBQYWxsaWVyLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vTGUgbWFuYWdlciBlc3QtaWwgYWNoZXRhYmxlID9cclxuICAgIGlmIChtYW5hZ2VyLnNldWlsIDw9IHdvcmxkLm1vbmV5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZSBtYW5hZ2VyIGVzdCBhY2hldGFibGVcIik7XHJcbiAgICAgICAgLy9Tb3VzdHJhY3Rpb24gZHUgcHJpeCBkdSBtYW5hZ2VyIMOgIGwnYXJnZW50IGR1IG1vbmRlXHJcbiAgICAgICAgd29ybGQubW9uZXktPW1hbmFnZXIuc2V1aWw7XHJcbiAgICAgICAgLy9NYW5hZ2VyID09PiBVbmxvY2tlZFxyXG4gICAgICAgIG1hbmFnZXIudW5sb2NrZWQ9dHJ1ZTtcclxuICAgICAgICBtYXRjaElkKG1hbmFnZXIuaWRjaWJsZSx3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vQ2hhbmdlbWVudCBkdSBib3V0b24gSGlyZSBlbiBBY2hldMOpIGV0IGRpc2FibGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiK21hbmFnZXIuaWRjaWJsZSk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJ0cnVlXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQ9XCJBY2hldMOpXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsXCJidG4tc2Vjb25kYXJ5XCIpO1xyXG4gICAgICAgIC8vTW9kaWZpY2F0aW9uIENhbGNzY29yZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9kaWZpY2F0aW9uIGRlIENhbGNTY29yZVwiKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlIG1hbmFnZXIgbidlc3QgcGFzIGFjaGV0YWJsZSBcXGIgZmluIGRlIHRyYW5zYXRpb25cIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IGFkZFByb2dyZXNzQmFyLCBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XHJcblxyXG5pbXBvcnQgeyBwcm9ncmVzc0Jhckxpc3QsIGxhc3RVcGRhdGVMaXN0IH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7YWRkU2VsZWN0ZWQsIHNldEFkZFByb2R1Y3QsIGdldENvc3RQcm9kdWN0LCBnZXRNYXhQcm9kdWN0fSBmcm9tIFwiLi9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHByaW5jaXBhbGUgZCdhcHBlbCBkZXMgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9kdWN0cyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciAoY29sb25uZSlcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sKTtcclxuICAgICAgICBjb2wuaWQgPSBcInBcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBjb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImRvdWJsZUJvcmRlclByb2R1Y3RcIik7XHJcblxyXG4gICAgICAgIC8vIFRpdHJlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgXCJiY2NGb250XCIpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5pbm5lckhUTUwgPSBwcm9kdWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIC8vIEltYWdlIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdEltYWdlKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInByb2R1Y3RJbWFnZVwiKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHByb2R1Y3RJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuaWQgPSBcImltZ1wiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdEljb25zXCIpXHJcbiAgICAgICAgLy8gU2kgY2UgcHJvZHVpdCBuJ2EgcGFzIMOpdMOpIGTDqWJsb3F1w6ksIG9uIGwnYWZmaWNoZSBlbiBncmlzXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdGUgPT0gMCkge1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZS5zcmMgPSBzZXJ2ZXIgKyBwcm9kdWN0LmxvZ29cclxuICAgICAgICAvLyBBam91dCBldmVudCBwcm9kdWN0aW9uXHJcbiAgICAgICAgJChpbWFnZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGFydFByb2R1Y3QocHJvZHVjdClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFycmUgZGUgcHJvZ3Jlc3Npb25cclxuICAgICAgICBhZGRQcm9ncmVzc0JhcihzZXJ2ZXIsIHByb2R1Y3QsIGNvbCk7XHJcblxyXG4gICAgICAgIC8vIExldmVsIC0tPiBRdWFudGl0w6kgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RRdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UXRlKTtcclxuICAgICAgICBwcm9kdWN0UXRlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0TGV2ZWxcIik7XHJcbiAgICAgICAgbGV0IGxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5hcHBlbmRDaGlsZChsZXZlbCk7XHJcbiAgICAgICAgbGV2ZWwuaWQgPSBcInF0ZVwiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBsZXZlbC5jbGFzc0xpc3QuYWRkKFwiYmNjRm9udFwiKTtcclxuICAgICAgICBsZXZlbC5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdENvbnRhaW5lcik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibXQtM1wiKTtcclxuXHJcbiAgICAgICAgLy8gTmJyIGxldmVsIMOgIGFjaGV0ZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdEFkZCk7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiKTtcclxuICAgICAgICBsZXQgcHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5hcHBlbmRDaGlsZChwcm9kdWN0QnV0dG9uKTtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmlkID0gXCJhZGRcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2R1Y3RcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgJChwcm9kdWN0QnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ2/Du3QgYWpvdXQgbGV2ZWwgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RDb3N0KTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pZCA9IFwiY29zdFwiICsgcHJvZHVjdC5pZDtcclxuICAgICAgICBwcm9kdWN0Q29zdC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiYmNjRm9udFwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb3N0LmlubmVySFRNTCA9IChwcm9kdWN0LmNvdXQgKyBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpKS50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgZGUgbGFuY2VyIGxhIHByb2R1Y3Rpb24gZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gcGV1dCBhY3RpdmVyIGxlIHByb2R1aXRcclxuICAgIGlmICh2ZXJpZlByb2R1Y3QocHJvZHVjdCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhbmNlbWVudCBkZSBsYSBwcm9kdWN0aW9uIGRlIFwiICsgcHJvZHVjdC5uYW1lKTtcclxuICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAxMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IHF1ZSBwcm9kdWl0IGVzdCBhY3RpdmFibGVcclxuZnVuY3Rpb24gdmVyaWZQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBib29sZWFuIHtcclxuICAgIGlmICgocHJvZHVjdC5xdWFudGl0ZSA+IDApICYmIChwcm9kdWN0LnRpbWVsZWZ0ID09IDApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGQnYWpvdXRlciB1bmUgcXVhbnRpdMOpIMOgIHVuIHByb2R1aXRcclxuZnVuY3Rpb24gYWRkUHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIG4nZXN0IHBhcyBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgIT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgY2/Du3RcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIGFkZFNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgbW9kaWZ5UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCwgYWRkU2VsZWN0ZWQsIGNvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbWF4IGFjaGV0YWJsZSBldCBzb24gY291dFxyXG4gICAgICAgIGxldCBtYXggPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIG1heCwgY29zdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBlZmZlY3R1YW50IGxlcyBjaGFuZ2VtZW50cyBkJ2FmZmljaGFnZSBsacOpcyDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBtb2RpZnlQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlciwgY29zdDogbnVtYmVyKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50XHJcbiAgICBpZiAod29ybGQubW9uZXkgPiBjb3N0KSB7XHJcbiAgICAgICAgLy8gT24gYWpvdXRlIGxhIHF1YW50aXTDqSBhY2hldMOpZVxyXG4gICAgICAgIHByb2R1Y3QucXVhbnRpdGUgKz0gcXVhbnRpdHk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdGVcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gT24gc291c3RyYWl0IGwnYXJnZW50IGTDqXBlbnPDqVxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IGNvc3Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICAgICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgLy8gT24gcmVjYWxjdWxlIGxlIG1heFxyXG4gICAgICAgICAgICBxdWFudGl0eSA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAvLyBPbiBjaGFuZ2UgbCdhZmZpY2hhZ2Ugc3VyIGNoYXF1ZSBwcm9kdWl0IGVuIGZvbmN0aW9uIGR1IG5vdXZlYXUgc29sZGVcclxuICAgICAgICAgICAgc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbm91dmVhdSBjb8O7dCBhcHLDqHMgYWNoYXRcclxuICAgICAgICBsZXQgbmV3Q29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIHF1YW50aXR5KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHRyYW5zZm9ybShuZXdDb3N0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTJ2lsIHMnYWdpdCBkdSAxZXIgYWNoYXQgc3VyIHVuIHByb2R1aXQsIG9uIGwnYWZmaWNoZSBlbiBjbGFpclxyXG4gICAgICAgIGxldCBpbWFnZVByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1wiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgaWYgKGltYWdlUHJvZHVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFByb2R1Y3RcIikpIHtcclxuICAgICAgICAgICAgaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFByb2R1Y3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBZGRQcm9kdWN0czogYW55W10gPSBbMSwgMTAsIDEwMCwgXCJNYXhcIl07XHJcbmV4cG9ydCB2YXIgYWRkU2VsZWN0ZWQ6IGFueSA9IDE7XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY3LDqWFudCBsYSBiYXJlIGRlIG1lbnUgw6AgZHJvdGllIGNvbnRlbmFudCBsZSBzw6lsZWN0ZXVyIHN1ciBsYSBxdWFudGl0w6kgZGUgcHJvZHVpdHMgw6AgYWNoZXRlclxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVCYXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgLy8gT2J0ZW50aW9uIGR1IGNvbnRhaW5lciBkZXMgcHJvZHVpdHNcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzXCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkdSBjb250YWluZXIgZHUgbWVudVxyXG4gICAgbGV0IHNpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVDb250YWluZXIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5pZCA9IFwic2lkZU1lbnVcIjtcclxuICAgIC8vIENlbnRyYWdlIGR1IG1lbnUgw6AgZHJvaXRlXHJcbiAgICBzaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvbi1hYnNvbHV0ZVwiLCBcInRvcC01MFwiLCBcImVuZC0wXCIsIFwidHJhbnNsYXRlLW1pZGRsZS15XCIpO1xyXG5cclxuICAgIC8vIENyw6lhdGlvbiBkJ3VuZSBsaXN0ZSBkZSBib3V0b25zIMOgIGxhIHZlcnRpY2FsZVxyXG4gICAgbGV0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2lkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcclxuICAgIGxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1ncm91cC12ZXJ0aWNhbFwiLCBcInNpZGVDb250YWluZXJcIik7XHJcbiAgICBsaXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJncm91cFwiKTtcclxuXHJcbiAgICAvLyBPbiBnw6luw6hyZSBkZXMgYm91dG9ucyBkZSB0eXBlIHJhZGlvXHJcbiAgICBsaXN0QWRkUHJvZHVjdHMuZm9yRWFjaChhZGROdW1iZXIgPT4ge1xyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsJ2lucHV0IGR1IGJvdXRvblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlcklucHV0KTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5pZCA9IFwiYnV0dG9uXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0Lm5hbWUgPSBcImJ0bnJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxyXG4gICAgICAgIC8vIEEgbCdpbml0aWFsaXNhdGlvbiwgbCdvcHRpb24gKzEgZXN0IGNlbGxlIGNvY2jDqWUgcGFyIGTDqWZhdXRcclxuICAgICAgICBpZiAoYWRkTnVtYmVyID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIGFkZE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPbiBjcsOpZSBsZSBsYWJlbCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVyQnV0dG9uKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEJ1dHRvblwiLCBcImFkZEJ1dHRvbk91dGxpbmVcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLnNldEF0dHJpYnV0ZShcImZvclwiLCBhZGROdW1iZXJJbnB1dC5pZClcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uaW5uZXJIVE1MID0gXCIrXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgLy8gRXZlbnQgOiBtb2RpZmljYXRpb24gZHUgc8OpbGVjdGV1ciBhdSBjbGljXHJcbiAgICAgICAgJChhZGROdW1iZXJCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWRkU2VsZWN0ZWQgPSBhZGROdW1iZXI7XHJcbiAgICAgICAgICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIGNoYW5nZWFudCBsJ2FmZmljaGFnZSBsacOpIMOgIGwnYWNoYXQgZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBZGRQcm9kdWN0KHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGVzdCB1bmUgdmFsZXVyIGNvbnN0YW50ZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBhZGRTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTaSBsZSBqb3VldXIgbidhIHBhcyBhc3NleiBkJ2FyZ2VudCBwb3VyIGFjaGV0ZXIgbGUgcHJvZHVpdCwgb24gZMOpc2FjdGl2ZSBsZSBib3V0b25cclxuICAgICAgICAgICAgaWYgKHdvcmxkLm1vbmV5IDwgY29zdCkge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2lub24gb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBjb25zaXN0ZSDDoCBsYSB2YWxldXIgbWF4XHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1heDogbnVtYmVyID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgbWF4O1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgY2/Du3RcclxuICAgICAgICAgICAgbGV0IGNvc3Q6IG51bWJlciA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcbiAgICAgICAgICAgIGxldCBjb3N0UHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc3RcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBjb3N0UHJvZHVjdC5pbm5lckhUTUwgPSB0cmFuc2Zvcm0oY29zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgY2/Du3QgZCd1biBncm91cGUgZGUgcHJvZHVpdHNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvc3RQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QsIGFkZE51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpO1xyXG4gICAgbGV0IG51bWVyYXRvciA9IDEgLSBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIGFkZE51bWJlcik7XHJcbiAgICBsZXQgZGVub21pbmF0b3IgPSAxIC0gcHJvZHVjdC5jcm9pc3NhbmNlXHJcbiAgICBsZXQgY291dCA9ICh1biAqIG51bWVyYXRvcikgLyBkZW5vbWluYXRvcjtcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgY2/Du3QgY2FsY3Vsw6lcclxuICAgIHJldHVybiBjb3V0O1xyXG59XHJcblxyXG4vLyBGb25jdGlvbiBjYWxjdWxhbnQgbGUgbm9tYnJlIG1heCBkZSBwcm9kdWl0cyBhY2hldGFibGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KTogbnVtYmVyIHtcclxuICAgIC8vIENhbGN1bCBkZXMgdGVybWVzXHJcbiAgICBsZXQgdW4gPSBwcm9kdWN0LmNvdXQgKiBNYXRoLnBvdyhwcm9kdWN0LmNyb2lzc2FuY2UsIHByb2R1Y3QucXVhbnRpdGUpOyBcclxuICAgIGxldCBudW1lcmF0b3I6IG51bWJlciA9IE1hdGgubG9nKC0od29ybGQubW9uZXkgLSB3b3JsZC5tb25leSAqIHByb2R1Y3QuY3JvaXNzYW5jZSAtIHVuKSAvIHVuKTtcclxuICAgIGxldCBkZW5vbWluYXRvcjogbnVtYmVyID0gTWF0aC5sb2cocHJvZHVjdC5jcm9pc3NhbmNlKTtcclxuICAgIGxldCBtYXg6IG51bWJlciA9IChudW1lcmF0b3IgLyBkZW5vbWluYXRvcilcclxuXHJcbiAgICAvLyBSZXRvdXIgZHUgbWF4IGRlIHByb2R1aXRzXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtYXgpO1xyXG59IiwiaW1wb3J0IHtXb3JsZCwgUHJvZHVjdCwgUGFsbGllcn0gZnJvbSBcIi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBzaG93UHJvZHVjdHMsIHN0YXJ0UHJvZHVjdCB9IGZyb20gXCIuL0FwcC9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5SGVhZGVyLCB0cmFuc2Zvcm19IGZyb20gXCIuL0FwcC9IZWFkZXJcIlxyXG5pbXBvcnQgeyBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL0FwcC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyBhZGRTZWxlY3RlZCwgc2V0QWRkUHJvZHVjdCwgc2hvd1NpZGVCYXIgfSBmcm9tIFwiLi9BcHAvU2lkZUJhclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gXCIuL0FwcC9NZW51XCI7XHJcbmltcG9ydCB7IGFueU5ld3MsIGRpc3BsYXlNb2RhbCwgdmVyaWZNYW5hZ2VyIH0gZnJvbSBcIi4vQXBwL01vZGFsXCI7XHJcblxyXG5cclxudmFyIHNlcnZldXJVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9pc2lzY2FwaXRhbGlzdC5ray5rdXJhc2F3YS5mci9cIjtcclxudmFyIGN1cnJlbnRXb3JsZDogV29ybGQ7XHJcbnZhciBvdXJXb3JsZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmdldEpTT04oc2VydmV1clVybCArIFwiYWR2ZW50dXJlaXNpcy9nZW5lcmljL3dvcmxkXCIsIGZ1bmN0aW9uICh3b3JsZCkge1xyXG4gICAgICAgIGN1cnJlbnRXb3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXb3JsZClcclxuXHJcblxyXG4gICAgICAgIHdvcmxkLm1vbmV5ID0gMjAwMDA7XHJcblxyXG4gICAgICAgIC8vIHJlbXBsaXIgbGUgbGF5b3V0IGF2ZWMgbGVzIGluZm9ybWF0aW9ucyBnbG9iYWxlc1xyXG4gICAgICAgIC8vIChub20gZHUgbW9uZGUsIGFyZ2VudCB0b3RhbC4uLi4pXHJcbiAgICAgICAgLy8gcHVpcyBib3VjbGVyIHN1ciBjaGFxdWUgcHJvZHVpdFxyXG4gICAgICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXlIZWFkZXIoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIHNob3dQcm9kdWN0cyhzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1lbnUod29ybGQpO1xyXG4gICAgICAgIHNob3dTaWRlQmFyKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5TW9kYWwoc2VydmV1clVybCwgd29ybGQpO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBlbiBwZXJtYW5lbmNlIGxlIHNjb3JlXHJcbiAgICAgICAgICAgIGNhbGNTY29yZShzZXJ2ZXVyVXJsLCBjdXJyZW50V29ybGQpO1xyXG4gICAgICAgICAgICB2ZXJpZk1hbmFnZXIod29ybGQpO1xyXG4gICAgICAgICAgICBhbnlOZXdzKHdvcmxkKTtcclxuICAgICAgICAgICAgLy8gU2kgbCdvcHRpb24gZCdham91dCBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZSwgb24gc3luY2hyb25pc2UgYXZlYyBlbiBmb25jdGlvbiBkdSBzY29yZVxyXG4gICAgICAgICAgICAvL2lmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NCYXJMaXN0OiBhbnlbXSA9IFtdO1xyXG5leHBvcnQgY29uc3QgbGFzdFVwZGF0ZUxpc3QgOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gY2FsY1Njb3JlKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICBpZiAocHJvZHVjdC50aW1lbGVmdCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lUmVtYWluaW5nOiBudW1iZXIgPSBEYXRlLm5vdygpIC0gbGFzdFVwZGF0ZUxpc3RbcHJvZHVjdC5pZF07XHJcbiAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSBwcm9kdWN0LnRpbWVsZWZ0IC0gdGltZVJlbWFpbmluZztcclxuXHJcbiAgICAgICAgICAgIGxldCBwb3VyY2VudGFnZTogbnVtYmVyID0gKHByb2R1Y3QudGltZWxlZnQgKiAxMDApIC8gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCBwb3VyY2VudGFnZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lbGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlIHByb2R1aXQgXCIgKyBwcm9kdWN0Lm5hbWUgKyBcIiBhIHJhcHBvcnTDqSBcIiArIHByb2R1Y3QucmV2ZW51KTtcclxuICAgICAgICAgICAgICAgIGxldCByZXZlbnU6IG51bWJlciA9IHByb2R1Y3QucmV2ZW51O1xyXG4gICAgICAgICAgICAgICAgYWRkU2NvcmUod29ybGQsIHJldmVudSk7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChwcm9kdWN0LnRpbWVsZWZ0PT0wKSAmJiAocHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQ9PXRydWUpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMYW5jZW1lbnQgcHJvZHVpdFwiKTtcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkU2NvcmUod29ybGQ6IFdvcmxkLCBzY29yZTogbnVtYmVyKSB7XHJcbiAgICB3b3JsZC5tb25leSA9IHdvcmxkLm1vbmV5ICsgc2NvcmU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmxkTW9uZXlcIikuaW5uZXJIVE1MID0gdHJhbnNmb3JtKHdvcmxkLm1vbmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSWQoaWQ6bnVtYmVyLHdvcmxkOldvcmxkKXtcclxuICAgIGxldCBpZFByb2R1Y3RcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbihpbmRleCxwcm9kdWN0KXtcclxuICAgICAgICAgaWRQcm9kdWN0ID0gcHJvZHVjdC5pZDtcclxuICAgICAgICBpZihpZFByb2R1Y3Q9PWlkKXtcclxuICAgICAgICAgICAgcHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWl0OiBcIitwcm9kdWN0Lm5hbWUrXCIgdW5sb2NrZWQ6XCIrcHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59IiwiaW1wb3J0IHtwcm9ncmVzc0Jhckxpc3R9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2dyZXNzQmFyKHNlcnZlciwgcHJvZHVjdCwgY29sKSB7XHJcbiAgICAvLyBCYXJyZSBkZSBwcm9ncmVzc2lvbiAobGlnbmUpXHJcbiAgICBsZXQgcHJvZHVjdFByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UHJvZ3Jlc3MpO1xyXG4gICAgcHJvZHVjdFByb2dyZXNzLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBsZXQgYmFyID0gbmV3IFByb2dyZXNzQmFyLkxpbmUocHJvZHVjdFByb2dyZXNzLCB7XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXHJcbiAgICAgICAgZHVyYXRpb246IDE0MDAsXHJcbiAgICAgICAgY29sb3I6ICcjRkZFQTgyJyxcclxuICAgICAgICB0cmFpbENvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgdHJhaWxXaWR0aDogMSxcclxuICAgICAgICBzdmdTdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9LFxyXG4gICAgICAgIGZyb206IHsgY29sb3I6ICcjRkZFQTgyJyB9LFxyXG4gICAgICAgIHRvOiB7IGNvbG9yOiAnI0VENkE1QScgfSxcclxuICAgICAgICBzdGVwOiAoc3RhdGUsIGJhcikgPT4ge1xyXG4gICAgICAgICAgICBiYXIucGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHN0YXRlLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9ncmVzc0Jhckxpc3RbcHJvZHVjdC5pZF0gPSBiYXI7XHJcbiAgICBiYXIuYW5pbWF0ZSgwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzc0JhcihpZCwgcG91cmNlbnRhZ2UpIHtcclxuICAgIHByb2dyZXNzQmFyTGlzdFtpZF0uc2V0KHBvdXJjZW50YWdlIC8gMTAwKVxyXG4gICAgY29uc29sZS5sb2cocG91cmNlbnRhZ2UvMTAwKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=