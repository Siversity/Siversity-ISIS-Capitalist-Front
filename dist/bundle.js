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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBSyxFQUFDLE9BQU87UUFDaEQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBRyxTQUFTLElBQUUsRUFBRSxFQUFDO1lBQ2IsT0FBTyxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsT0FBTyxDQUFDLElBQUksR0FBQyxZQUFZLEdBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQyxDQUFDO0FBRU4sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR3dDO0FBQ3pDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRCxnQkFBZ0Isa0JBQWtCO0FBQ2xDLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksbURBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLElBQUksbURBQWU7QUFDbkI7QUFDQTs7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvSGVhZGVyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvTWVudS50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL01vZGFsLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvUHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9TaWRlQmFyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBwcmVtacOocmUgY29sb25lIGF2ZWMgbGUgbm9tIGV0IGxlIGxvZ29cclxuICAgIGxldCBtb25kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZGUpO1xyXG4gICAgbW9uZGUuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcIm1vbmRlXCIsIFwiYmNjRm9udFwiKTtcclxuXHJcbiAgICAvL0xvZ29cclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICAgIGxvZ28uc3JjID0gc2VydmVyICsgd29ybGQubG9nbztcclxuXHJcbiAgICAvL05vbVxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCIgXCIgKyB3b3JsZC5uYW1lO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIHNlY29uZCBlbnTDqnRlLCBsJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmV5Q29sKVxyXG4gICAgbW9uZXlDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIilcclxuXHJcbiAgICAvL0wnYXJnZW50XHJcbiAgICBsZXQgbW9uZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9uZXlDb2wuYXBwZW5kQ2hpbGQobW9uZXkpO1xyXG4gICAgbW9uZXkuaWQgPSBcIndvcmxkTW9uZXlcIjtcclxuICAgIG1vbmV5LmNsYXNzTGlzdC5hZGQoXCJtb25leVwiKTtcclxuICAgIG1vbmV5LmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gZGVybmllciBlbnTDqHRlLCBVc2VyIElEXHJcbiAgICBsZXQgdXNlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXNlckNvbCk7XHJcbiAgICB1c2VyQ29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcblxyXG4gICAgLypcclxuICAgIC8vVXNlciBJRFxyXG4gICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZENvbC5hcHBlbmRDaGlsZCh1c2VySWQpO1xyXG4gICAgdXNlcklkLmNsYXNzTGlzdC5hZGQoXCJ1c2VySWRcIik7XHJcbiAgICB1c2VySWQuaW5uZXJIVE1MID0gXCJJRDpcIjtcclxuICAgICovXHJcblxyXG4gICAgbGV0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXNlckNvbC5hcHBlbmRDaGlsZCh1c2VyUm93KTtcclxuICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuXHJcbiAgICBsZXQgbGFiZWxVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChsYWJlbFVzZXIpO1xyXG4gICAgbGFiZWxVc2VyLmh0bWxGb3IgPSBcImlucHV0VXNlclwiO1xyXG4gICAgbGFiZWxVc2VyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpXHJcblxyXG4gICAgbGV0IGlucHV0VXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQoaW5wdXRVc2VyKTtcclxuICAgIGlucHV0VXNlci5pZCA9IFwiaW5wdXRVc2VyXCJcclxuICAgIGlucHV0VXNlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xyXG4gICAgaW5wdXRVc2VyLnR5cGUgPSBcInRleHRcIjtcclxuICAgIGlucHV0VXNlci5wbGFjZWhvbGRlciA9IFwiUHNldWRvXCI7XHJcbiAgICBpbnB1dFVzZXIudmFsdWUgPSB1c2VybmFtZTtcclxuICAgIGlucHV0VXNlci5yZWFkT25seSA9IHRydWU7XHJcblxyXG4gICAgbGV0IGJ1dHRvblVzZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChidXR0b25Vc2VyRGl2KTtcclxuXHJcbiAgICBsZXQgYnV0dG9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBidXR0b25Vc2VyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbklucHV0KTtcclxuICAgIGJ1dHRvbklucHV0LmlkID0gXCJ1c2VyQnV0dG9uQ2hlY2tcIjtcclxuICAgIGJ1dHRvbklucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBidXR0b25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG5cclxuICAgIGxldCBidXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGJ1dHRvblVzZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uTGFiZWwpO1xyXG4gICAgYnV0dG9uTGFiZWwuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgYnV0dG9uTGFiZWwuaHRtbEZvciA9IFwidXNlckJ1dHRvbkNoZWNrXCI7XHJcbiAgICBidXR0b25MYWJlbC5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdiaSBiaS1jaGVjay1zcXVhcmUnPjwvaT5cIjtcclxuICAgICQoYnV0dG9uTGFiZWwpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoaW5wdXRVc2VyLnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIGlucHV0VXNlci5yZWFkT25seSA9IGZhbHNlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0VXNlci5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGlucHV0VXNlci52YWx1ZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsZXVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIGlmICh2YWxldXIgPCAxMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDIpO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyIDwgMTAwMDAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgwKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA+PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvUHJlY2lzaW9uKDQpO1xyXG4gICAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKC9lXFwrKC4qKS8sIFwiIDEwPHN1cD4kMTwvc3VwPlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBuYXZiYXJcclxuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiLCBcImZpeGVkLWJvdHRvbVwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiB1bmxvY2tzXHJcbiAgICBsZXQgdW5sb2NrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQodW5sb2Nrcyk7XHJcbiAgICB1bmxvY2tzLmNsYXNzTGlzdC5hZGQoXCJ1bmxvY2tzXCIpO1xyXG4gICAgdW5sb2Nrcy5pbm5lckhUTUwgPSBcIlVubG9ja3NcIjtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBjYXNoIHVwZ3JhZGVzXHJcbiAgICBsZXQgY2FzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY2FzaCk7XHJcbiAgICBjYXNoLmNsYXNzTGlzdC5hZGQoXCJjYXNoXCIpO1xyXG4gICAgY2FzaC5pbm5lckhUTUwgPSBcIkNhc2ggVXBncmFkZXNcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBhbmdlbHMgdXBncmFkZXNcclxuICAgIGxldCBhbmdlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFuZ2Vscyk7XHJcbiAgICBhbmdlbHMuY2xhc3NMaXN0LmFkZChcImFuZ2Vsc1wiKTtcclxuICAgIGFuZ2Vscy5pbm5lckhUTUwgPSBcIkFuZ2VscyB1cGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIG1hbmFnZXJzXHJcbiAgICBsZXQgbWFuYWdlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1hbmFnZXJzKTtcclxuICAgIG1hbmFnZXJzLmNsYXNzTGlzdC5hZGQoXCJtYW5hZ2Vyc1wiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBNYW5hZ2VyXHJcbiAgICBsZXQgYnV0dG9uTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIG1hbmFnZXJzLmFwcGVuZENoaWxkKGJ1dHRvbk1hbmFnZXIpO1xyXG4gICAgYnV0dG9uTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLFwibW9kYWxcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIixcIiNtb2RhbE1hbmFnZXJcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuaW5uZXJUZXh0PVwiTWFuYWdlcnMgXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gYmFkZ2VcclxuICAgIGxldCBiYWRnZU1hbmFnZXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYnV0dG9uTWFuYWdlci5hcHBlbmRDaGlsZChiYWRnZU1hbmFnZXIpO1xyXG4gICAgYmFkZ2VNYW5hZ2VyLmlkPVwiYmFkZ2VNYW5hZ2VyXCJcclxuICAgIGJhZGdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiYmFkZ2VcIixcImJnLXNlY29uZGFyeVwiKTtcclxuICAgIFxyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGludmVzdG9yc1xyXG4gICAgbGV0IGludmVzdG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW52ZXN0b3JzKTtcclxuICAgIGludmVzdG9ycy5jbGFzc0xpc3QuYWRkKFwiaW52ZXN0b3JzXCIpO1xyXG4gICAgaW52ZXN0b3JzLmlubmVySFRNTCA9IFwiSW52ZXN0b3JzXCI7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IG1hdGNoSWQgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TW9kYWwoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgRGlhbG9ndWVcclxuICAgIGxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtLmFwcGVuZENoaWxkKG1kKTtcclxuICAgIG1kLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaWFsb2dcIiwgXCJtb2RhbC1sZ1wiKTtcclxuICAgIG1kLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJkb2N1bWVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBDb250ZW50XHJcbiAgICBsZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWQuYXBwZW5kQ2hpbGQobWMpO1xyXG4gICAgbWMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbiAgICBsZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQobWgpO1xyXG4gICAgbWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxuICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgICBiLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XHJcblxyXG4gICAgLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZCh0KTtcclxuICAgIHQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxuICAgIHQuaW5uZXJUZXh0ID0gXCJMZXMgTWFuYWdlcnNcIjtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbEJvZHlcIik7XHJcblxyXG4gICAgLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbiAgICBsaXN0TWFuYWdlcnMoc2VydmVyLCB3b3JsZCk7XHJcbn1cclxuZnVuY3Rpb24gbGlzdE1hbmFnZXJzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEJvZHlcIik7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInJvdy1jb2xzLTJcIik7Ly9cInJvd1wiLCBcInJvdy1jb2xzLTJcIlxyXG5cclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbihpbmRleCxwYWxsaWVyKXtcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICAgICAgY29sLmlkID0gXCJtYW5hZ2VyXCIgKyBwYWxsaWVyLmlkY2libGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgSW1hZ2UgZXQgbm9tIGR1IG1hbmFnZXJzXHJcbiAgICAgICAgbGV0IGltYWdlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGltYWdlTmFtZSk7XHJcbiAgICAgICAgaW1hZ2VOYW1lLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7Ly9cImNvbC00XCIsIFwiY29sLWxnLTJcIlxyXG5cclxuICAgICAgICAvL1BhcnRpZSBJbWFnZVxyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWFnZS5hcHBlbmRDaGlsZChpbWFnZU1hbmFnZXIpO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5pZCA9IFwiaW1nXCIgKyBwYWxsaWVyLmlkY2libGU7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLnNyYyA9IHNlcnZlciArIHBhbGxpZXIubG9nbztcclxuICAgICAgICBpbWFnZU1hbmFnZXIuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWRcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tIGV0IHByaXhcclxuICAgICAgICBsZXQgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGltYWdlTmFtZS5hcHBlbmRDaGlsZChuYW1lUHJpY2UpO1xyXG4gICAgICAgIG5hbWVQcmljZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpXHJcblxyXG4gICAgICAgIC8vUGFydGllIE5vbVxyXG4gICAgICAgIGxldCBuYW1lTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKG5hbWVNYW5hZ2VyKTtcclxuICAgICAgICBuYW1lTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmlubmVyVGV4dCA9IHBhbGxpZXIubmFtZTtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgUHJpeFxyXG4gICAgICAgIGxldCBwcmljZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5hbWVQcmljZS5hcHBlbmRDaGlsZChwcmljZU1hbmFnZXIpO1xyXG4gICAgICAgIHByaWNlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIGxldCBjb3N0ID0gdHJhbnNmb3JtKHBhbGxpZXIuc2V1aWwpXHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmlubmVySFRNTD1jb3N0O1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBib3V0b24gZCdlbWJhdWNoZVxyXG4gICAgICAgIGxldCBoaXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoaGlyZSk7XHJcbiAgICAgICAgaGlyZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIpOyAvL1wiY29sLTRcIiwgXCJjb2wtbGctMlwiXHJcblxyXG4gICAgICAgIGxldCBidXR0b25IaXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBoaXJlLmFwcGVuZENoaWxkKGJ1dHRvbkhpcmUpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuaWQgPSBcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICBidXR0b25IaXJlLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tcHJpbWFyeVwiLCBcImJ1dHRvbkhpcmVcIik7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5pbm5lclRleHQgPSBcIkFjaGV0ZSBNb2kgIVwiO1xyXG4gICAgICAgICQoYnV0dG9uSGlyZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImplIHRlbnRlIGQnYWNoZXRlciB1biBtYW5hZ2VyIDopXCIpO1xyXG4gICAgICAgICAgICBhY2hldGVyTWFuYWdlcihwYWxsaWVyLHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTGUgTWFuYWdlciBhIHQgaWwgZMOpamEgw6l0w6kgYWNoZXTDqSA/XHJcbiAgICAgICAgLypcclxuICAgICAgICBpZiAocGFsbGllci51bmxvY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhpcmUuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1zZWNvbmRhcnlcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbkhpcmUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dCA9IFwiQWNoZXTDqVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25IaXJlXCIpO1xyXG4gICAgICAgICAgICBidXR0b25IaXJlLmlubmVyVGV4dCA9IFwiQWNoZXRlIE1vaSAhXCI7XHJcbiAgICAgICAgICAgICQoYnV0dG9uSGlyZSkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJqZSB0ZW50ZSBkJ2FjaGV0ZXIgdW4gbWFuYWdlciA6KVwiKTtcclxuICAgICAgICAgICAgICAgIGFjaGV0ZXJNYW5hZ2VyKHBhbGxpZXIsd29ybGQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0qL1xyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIFVuIG1hbmFnZXIgZXN0LWlsIGFjaGV0YWJsZSA/XHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZk1hbmFnZXIod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiICsgcGFsbGllci5pZGNpYmxlKTtcclxuICAgICAgICBpZiAocGFsbGllci5zZXVpbCA+IHdvcmxkLm1vbmV5KSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFueU5ld3Mod29ybGQ6V29ybGQpe1xyXG4gICAgbGV0IG1hbmFnZXJEaXNwbyA9MDtcclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLGZ1bmN0aW9uKGluZGV4LG1hbmFnZXIpe1xyXG4gICAgICAgIGlmKG1hbmFnZXIuc2V1aWwgPD0gd29ybGQubW9uZXkgJiYgbWFuYWdlci51bmxvY2tlZD09ZmFsc2Upe1xyXG4gICAgICAgICAgICBtYW5hZ2VyRGlzcG8gKys7XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhtYW5hZ2VyRGlzcG8pO1xyXG4gICAgbGV0IG5vdGlmTWFuYWdlcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZGdlTWFuYWdlclwiKTtcclxuICAgIGlmKG1hbmFnZXJEaXNwbz09MCl7XHJcbiAgICAgICAgbm90aWZNYW5hZ2VyLmlubmVyVGV4dD1udWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBub3RpZk1hbmFnZXIuaW5uZXJUZXh0PVwiXCIrbWFuYWdlckRpc3BvOyAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWNoZXRlck1hbmFnZXIobWFuYWdlcjogUGFsbGllciwgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvL0xlIG1hbmFnZXIgZXN0LWlsIGFjaGV0YWJsZSA/XHJcbiAgICBpZiAobWFuYWdlci5zZXVpbCA8PSB3b3JsZC5tb25leSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGUgbWFuYWdlciBlc3QgYWNoZXRhYmxlXCIpO1xyXG4gICAgICAgIC8vU291c3RyYWN0aW9uIGR1IHByaXggZHUgbWFuYWdlciDDoCBsJ2FyZ2VudCBkdSBtb25kZVxyXG4gICAgICAgIHdvcmxkLm1vbmV5LT1tYW5hZ2VyLnNldWlsO1xyXG4gICAgICAgIC8vTWFuYWdlciA9PT4gVW5sb2NrZWRcclxuICAgICAgICBtYW5hZ2VyLnVubG9ja2VkPXRydWU7XHJcbiAgICAgICAgbWF0Y2hJZChtYW5hZ2VyLmlkY2libGUsd29ybGQpO1xyXG5cclxuICAgICAgICAvL0NoYW5nZW1lbnQgZHUgYm91dG9uIEhpcmUgZW4gQWNoZXTDqSBldCBkaXNhYmxlZFxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmVcIittYW5hZ2VyLmlkY2libGUpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwidHJ1ZVwiKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0PVwiQWNoZXTDqVwiXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiLFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICAvL01vZGlmaWNhdGlvbiBDYWxjc2NvcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vZGlmaWNhdGlvbiBkZSBDYWxjU2NvcmVcIilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZSBtYW5hZ2VyIG4nZXN0IHBhcyBhY2hldGFibGUgXFxiIGZpbiBkZSB0cmFuc2F0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBhZGRQcm9ncmVzc0Jhciwgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJMaXN0LCBsYXN0VXBkYXRlTGlzdCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQge2FkZFNlbGVjdGVkLCBzZXRBZGRQcm9kdWN0LCBnZXRDb3N0UHJvZHVjdCwgZ2V0TWF4UHJvZHVjdH0gZnJvbSBcIi4vU2lkZUJhclwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcblxyXG4vLyBGb25jdGlvbiBwcmluY2lwYWxlIGQnYXBwZWwgZGVzIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZHVjdHMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmlkID0gXCJwXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkb3VibGVCb3JkZXJQcm9kdWN0XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwiYmNjRm9udFwiKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdC5uYW1lO1xyXG5cclxuICAgICAgICAvLyBJbWFnZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0SW1hZ2VcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmlkID0gXCJpbWdcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RJY29uc1wiKVxyXG4gICAgICAgIC8vIFNpIGNlIHByb2R1aXQgbidhIHBhcyDDqXTDqSBkw6libG9xdcOpLCBvbiBsJ2FmZmljaGUgZW4gZ3Jpc1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlID09IDApIHtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcHJvZHVjdC5sb2dvXHJcbiAgICAgICAgLy8gQWpvdXQgZXZlbnQgcHJvZHVjdGlvblxyXG4gICAgICAgICQoaW1hZ2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpO1xyXG5cclxuICAgICAgICAvLyBMZXZlbCAtLT4gUXVhbnRpdMOpIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0UXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFF0ZSk7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdExldmVsXCIpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuYXBwZW5kQ2hpbGQobGV2ZWwpO1xyXG4gICAgICAgIGxldmVsLmlkID0gXCJxdGVcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgbGV2ZWwuY2xhc3NMaXN0LmFkZChcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgbGV2ZWwuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RDb250YWluZXIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcIm10LTNcIik7XHJcblxyXG4gICAgICAgIC8vIE5iciBsZXZlbCDDoCBhY2hldGVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RBZGQpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuYXBwZW5kQ2hpbGQocHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5pZCA9IFwiYWRkXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9kdWN0XCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgICQocHJvZHVjdEJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaWQgPSBcImNvc3RcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSAocHJvZHVjdC5jb3V0ICsgTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKSkudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgc2V0QWRkUHJvZHVjdCh3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGRlIGxhbmNlciBsYSBwcm9kdWN0aW9uIGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIHBldXQgYWN0aXZlciBsZSBwcm9kdWl0XHJcbiAgICBpZiAodmVyaWZQcm9kdWN0KHByb2R1Y3QpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMYW5jZW1lbnQgZGUgbGEgcHJvZHVjdGlvbiBkZSBcIiArIHByb2R1Y3QubmFtZSk7XHJcbiAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMTAwKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBxdWUgcHJvZHVpdCBlc3QgYWN0aXZhYmxlXHJcbmZ1bmN0aW9uIHZlcmlmUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHByb2R1Y3QucXVhbnRpdGUgPiAwKSAmJiAocHJvZHVjdC50aW1lbGVmdCA9PSAwKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcGVybWV0dGFudCBkJ2Fqb3V0ZXIgdW5lIHF1YW50aXTDqSDDoCB1biBwcm9kdWl0XHJcbmZ1bmN0aW9uIGFkZFByb2R1Y3Qod29ybGQ6IFdvcmxkLCBwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBuJ2VzdCBwYXMgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkICE9IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIGNvw7t0XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBhZGRTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIGFkZFNlbGVjdGVkLCBjb3N0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG1heCBhY2hldGFibGUgZXQgc29uIGNvdXRcclxuICAgICAgICBsZXQgbWF4ID0gZ2V0TWF4UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCk7XHJcbiAgICAgICAgbGV0IGNvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG5cclxuICAgICAgICAvLyBPbiBtb2RpZmllIGwnYWZmaWNoYWdlIGR1IHByb2R1aXRcclxuICAgICAgICBtb2RpZnlQcm9kdWN0KHdvcmxkLCBwcm9kdWN0LCBtYXgsIGNvc3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gZWZmZWN0dWFudCBsZXMgY2hhbmdlbWVudHMgZCdhZmZpY2hhZ2UgbGnDqXMgw6AgbCdhY2hhdCBkJ3VuIHByb2R1aXRcclxuZnVuY3Rpb24gbW9kaWZ5UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QsIHF1YW50aXR5OiBudW1iZXIsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gYSBhc3NleiBkJ2FyZ2VudFxyXG4gICAgaWYgKHdvcmxkLm1vbmV5ID4gY29zdCkge1xyXG4gICAgICAgIC8vIE9uIGFqb3V0ZSBsYSBxdWFudGl0w6kgYWNoZXTDqWVcclxuICAgICAgICBwcm9kdWN0LnF1YW50aXRlICs9IHF1YW50aXR5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXRlXCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIE9uIHNvdXN0cmFpdCBsJ2FyZ2VudCBkw6lwZW5zw6lcclxuICAgICAgICB3b3JsZC5tb25leSAtPSBjb3N0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ybGRNb25leVwiKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0od29ybGQubW9uZXkpO1xyXG5cclxuICAgICAgICAvLyBTaSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZSBlc3QgbGUgbWF4IGFjaGV0YWJsZVxyXG4gICAgICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIHJlY2FsY3VsZSBsZSBtYXhcclxuICAgICAgICAgICAgcXVhbnRpdHkgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICAgICAgLy8gT24gY2hhbmdlIGwnYWZmaWNoYWdlIHN1ciBjaGFxdWUgcHJvZHVpdCBlbiBmb25jdGlvbiBkdSBub3V2ZWF1IHNvbGRlXHJcbiAgICAgICAgICAgIHNldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPbiBjYWxjdWxlIGxlIG5vdXZlYXUgY2/Du3QgYXByw6hzIGFjaGF0XHJcbiAgICAgICAgbGV0IG5ld0Nvc3QgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBxdWFudGl0eSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKS5pbm5lckhUTUwgPSB0cmFuc2Zvcm0obmV3Q29zdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUydpbCBzJ2FnaXQgZHUgMWVyIGFjaGF0IHN1ciB1biBwcm9kdWl0LCBvbiBsJ2FmZmljaGUgZW4gY2xhaXJcclxuICAgICAgICBsZXQgaW1hZ2VQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgIGlmIChpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRQcm9kdWN0XCIpKSB7XHJcbiAgICAgICAgICAgIGltYWdlUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QWRkUHJvZHVjdHM6IGFueVtdID0gWzEsIDEwLCAxMDAsIFwiTWF4XCJdO1xyXG5leHBvcnQgdmFyIGFkZFNlbGVjdGVkOiBhbnkgPSAxO1xyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNyw6lhbnQgbGEgYmFyZSBkZSBtZW51IMOgIGRyb3RpZSBjb250ZW5hbnQgbGUgc8OpbGVjdGV1ciBzdXIgbGEgcXVhbnRpdMOpIGRlIHByb2R1aXRzIMOgIGFjaGV0ZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlQmFyKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIE9idGVudGlvbiBkdSBjb250YWluZXIgZGVzIHByb2R1aXRzXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZHUgY29udGFpbmVyIGR1IG1lbnVcclxuICAgIGxldCBzaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcclxuICAgIHNpZGVDb250YWluZXIuaWQgPSBcInNpZGVNZW51XCI7XHJcbiAgICAvLyBDZW50cmFnZSBkdSBtZW51IMOgIGRyb2l0ZVxyXG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9zaXRpb24tYWJzb2x1dGVcIiwgXCJ0b3AtNTBcIiwgXCJlbmQtMFwiLCBcInRyYW5zbGF0ZS1taWRkbGUteVwiKTtcclxuXHJcbiAgICAvLyBDcsOpYXRpb24gZCd1bmUgbGlzdGUgZGUgYm91dG9ucyDDoCBsYSB2ZXJ0aWNhbGVcclxuICAgIGxldCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XHJcbiAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tZ3JvdXAtdmVydGljYWxcIiwgXCJzaWRlQ29udGFpbmVyXCIpO1xyXG4gICAgbGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZ3JvdXBcIik7XHJcblxyXG4gICAgLy8gT24gZ8OpbsOocmUgZGVzIGJvdXRvbnMgZGUgdHlwZSByYWRpb1xyXG4gICAgbGlzdEFkZFByb2R1Y3RzLmZvckVhY2goYWRkTnVtYmVyID0+IHtcclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbCdpbnB1dCBkdSBib3V0b25cclxuICAgICAgICBsZXQgYWRkTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJJbnB1dCk7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuaWQgPSBcImJ1dHRvblwiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuY2xhc3NMaXN0LmFkZChcImJ0bi1jaGVja1wiKTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5uYW1lID0gXCJidG5yYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcclxuICAgICAgICAvLyBBIGwnaW5pdGlhbGlzYXRpb24sIGwnb3B0aW9uICsxIGVzdCBjZWxsZSBjb2Now6llIHBhciBkw6lmYXV0XHJcbiAgICAgICAgaWYgKGFkZE51bWJlciA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBhZGROdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT24gY3LDqWUgbGUgbGFiZWwgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlckJ1dHRvbik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRCdXR0b25cIiwgXCJhZGRCdXR0b25PdXRsaW5lXCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYWRkTnVtYmVySW5wdXQuaWQpXHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiICsgYWRkTnVtYmVyO1xyXG4gICAgICAgIC8vIEV2ZW50IDogbW9kaWZpY2F0aW9uIGR1IHPDqWxlY3RldXIgYXUgY2xpY1xyXG4gICAgICAgICQoYWRkTnVtYmVyQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkID0gYWRkTnVtYmVyO1xyXG4gICAgICAgICAgICBzZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBGb25jdGlvbiBjaGFuZ2VhbnQgbCdhZmZpY2hhZ2UgbGnDqSDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdCh3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBlc3QgdW5lIHZhbGV1ciBjb25zdGFudGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgYWRkU2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgam91ZXVyIG4nYSBwYXMgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIHByb2R1aXQsIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uXHJcbiAgICAgICAgICAgIGlmICh3b3JsZC5tb25leSA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgIGFkZFByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2kgbCdvcHRpb24gY29uc2lzdGUgw6AgbGEgdmFsZXVyIG1heFxyXG4gICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICB3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXg6IG51bWJlciA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlbWVudCBhZmZpY2hhZ2UgYm91dG9uXHJcbiAgICAgICAgICAgIGxldCBhZGRQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgYWRkUHJvZHVjdC5pbm5lckhUTUwgPSBcIitcIiArIG1heDtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGNvw7t0XHJcbiAgICAgICAgICAgIGxldCBjb3N0OiBudW1iZXIgPSBnZXRDb3N0UHJvZHVjdChwcm9kdWN0LCBtYXgpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIGNvw7t0IGQndW4gZ3JvdXBlIGRlIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3N0UHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0LCBhZGROdW1iZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTtcclxuICAgIGxldCBudW1lcmF0b3IgPSAxIC0gTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBhZGROdW1iZXIpO1xyXG4gICAgbGV0IGRlbm9taW5hdG9yID0gMSAtIHByb2R1Y3QuY3JvaXNzYW5jZVxyXG4gICAgbGV0IGNvdXQgPSAodW4gKiBudW1lcmF0b3IpIC8gZGVub21pbmF0b3I7XHJcblxyXG4gICAgLy8gUmV0b3VyIGR1IGNvw7t0IGNhbGN1bMOpXHJcbiAgICByZXR1cm4gY291dDtcclxufVxyXG5cclxuLy8gRm9uY3Rpb24gY2FsY3VsYW50IGxlIG5vbWJyZSBtYXggZGUgcHJvZHVpdHMgYWNoZXRhYmxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCk6IG51bWJlciB7XHJcbiAgICAvLyBDYWxjdWwgZGVzIHRlcm1lc1xyXG4gICAgbGV0IHVuID0gcHJvZHVjdC5jb3V0ICogTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKTsgXHJcbiAgICBsZXQgbnVtZXJhdG9yOiBudW1iZXIgPSBNYXRoLmxvZygtKHdvcmxkLm1vbmV5IC0gd29ybGQubW9uZXkgKiBwcm9kdWN0LmNyb2lzc2FuY2UgLSB1bikgLyB1bik7XHJcbiAgICBsZXQgZGVub21pbmF0b3I6IG51bWJlciA9IE1hdGgubG9nKHByb2R1Y3QuY3JvaXNzYW5jZSk7XHJcbiAgICBsZXQgbWF4OiBudW1iZXIgPSAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpXHJcblxyXG4gICAgLy8gUmV0b3VyIGR1IG1heCBkZSBwcm9kdWl0c1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IobWF4KTtcclxufSIsImltcG9ydCB7V29ybGQsIFByb2R1Y3QsIFBhbGxpZXJ9IGZyb20gXCIuL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgc2hvd1Byb2R1Y3RzLCBzdGFydFByb2R1Y3QgfSBmcm9tIFwiLi9BcHAvUHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhlYWRlciwgdHJhbnNmb3JtfSBmcm9tIFwiLi9BcHAvSGVhZGVyXCJcclxuaW1wb3J0IHsgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9BcHAvUHJvZ3Jlc3NCYXJcIjtcclxuaW1wb3J0IHsgYWRkU2VsZWN0ZWQsIHNldEFkZFByb2R1Y3QsIHNob3dTaWRlQmFyIH0gZnJvbSBcIi4vQXBwL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9BcHAvTWVudVwiO1xyXG5pbXBvcnQgeyBhbnlOZXdzLCBkaXNwbGF5TW9kYWwsIHZlcmlmTWFuYWdlciB9IGZyb20gXCIuL0FwcC9Nb2RhbFwiO1xyXG5cclxuXHJcbnZhciBzZXJ2ZXVyVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcbnZhciBjdXJyZW50V29ybGQ6IFdvcmxkO1xyXG52YXIgb3VyV29ybGQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuZXhwb3J0IHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VybmFtZShuZXdVc2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICB1c2VybmFtZSA9IG5ld1VzZXJuYW1lO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCBuZXdVc2VybmFtZSk7XHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJC5nZXRKU09OKHNlcnZldXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy93b3JsZFwiLCBmdW5jdGlvbiAod29ybGQpIHtcclxuICAgICAgICBjdXJyZW50V29ybGQgPSB3b3JsZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V29ybGQpXHJcblxyXG5cclxuICAgICAgICB3b3JsZC5tb25leSA9IDIwMDAwO1xyXG5cclxuICAgICAgICAvLyByZW1wbGlyIGxlIGxheW91dCBhdmVjIGxlcyBpbmZvcm1hdGlvbnMgZ2xvYmFsZXNcclxuICAgICAgICAvLyAobm9tIGR1IG1vbmRlLCBhcmdlbnQgdG90YWwuLi4uKVxyXG4gICAgICAgIC8vIHB1aXMgYm91Y2xlciBzdXIgY2hhcXVlIHByb2R1aXRcclxuICAgICAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXNwbGF5SGVhZGVyKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBzaG93UHJvZHVjdHMoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNZW51KHdvcmxkKTtcclxuICAgICAgICBzaG93U2lkZUJhcihzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1vZGFsKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIGNhbGN1bGUgZW4gcGVybWFuZW5jZSBsZSBzY29yZVxyXG4gICAgICAgICAgICBjYWxjU2NvcmUoc2VydmV1clVybCwgY3VycmVudFdvcmxkKTtcclxuICAgICAgICAgICAgdmVyaWZNYW5hZ2VyKHdvcmxkKTtcclxuICAgICAgICAgICAgYW55TmV3cyh3b3JsZCk7XHJcbiAgICAgICAgICAgIC8vIFNpIGwnb3B0aW9uIGQnYWpvdXQgc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGUsIG9uIHN5bmNocm9uaXNlIGF2ZWMgZW4gZm9uY3Rpb24gZHUgc2NvcmVcclxuICAgICAgICAgICAgLy9pZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAgICAgLy9zZXRBZGRQcm9kdWN0KHdvcmxkKTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyTGlzdDogYW55W10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IGxhc3RVcGRhdGVMaXN0IDogbnVtYmVyW10gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNhbGNTY29yZShzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QudGltZWxlZnQgIT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgdGltZVJlbWFpbmluZzogbnVtYmVyID0gRGF0ZS5ub3coKSAtIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdO1xyXG4gICAgICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC50aW1lbGVmdCAtIHRpbWVSZW1haW5pbmc7XHJcblxyXG4gICAgICAgICAgICBsZXQgcG91cmNlbnRhZ2U6IG51bWJlciA9IChwcm9kdWN0LnRpbWVsZWZ0ICogMTAwKSAvIHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgcG91cmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZWxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZSBwcm9kdWl0IFwiICsgcHJvZHVjdC5uYW1lICsgXCIgYSByYXBwb3J0w6kgXCIgKyBwcm9kdWN0LnJldmVudSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV2ZW51OiBudW1iZXIgPSBwcm9kdWN0LnJldmVudTtcclxuICAgICAgICAgICAgICAgIGFkZFNjb3JlKHdvcmxkLCByZXZlbnUpO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgocHJvZHVjdC50aW1lbGVmdD09MCkgJiYgKHByb2R1Y3QubWFuYWdlclVubG9ja2VkPT10cnVlKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGFuY2VtZW50IHByb2R1aXRcIik7XHJcbiAgICAgICAgICAgIHN0YXJ0UHJvZHVjdChwcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFNjb3JlKHdvcmxkOiBXb3JsZCwgc2NvcmU6IG51bWJlcikge1xyXG4gICAgd29ybGQubW9uZXkgPSB3b3JsZC5tb25leSArIHNjb3JlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaElkKGlkOm51bWJlcix3b3JsZDpXb3JsZCl7XHJcbiAgICBsZXQgaWRQcm9kdWN0XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgscHJvZHVjdCl7XHJcbiAgICAgICAgIGlkUHJvZHVjdCA9IHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaWYoaWRQcm9kdWN0PT1pZCl7XHJcbiAgICAgICAgICAgIHByb2R1Y3QubWFuYWdlclVubG9ja2VkPXRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVpdDogXCIrcHJvZHVjdC5uYW1lK1wiIHVubG9ja2VkOlwiK3Byb2R1Y3QubWFuYWdlclVubG9ja2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufSIsImltcG9ydCB7cHJvZ3Jlc3NCYXJMaXN0fSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9ncmVzc0JhcihzZXJ2ZXIsIHByb2R1Y3QsIGNvbCkge1xyXG4gICAgLy8gQmFycmUgZGUgcHJvZ3Jlc3Npb24gKGxpZ25lKVxyXG4gICAgbGV0IHByb2R1Y3RQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFByb2dyZXNzKTtcclxuICAgIHByb2R1Y3RQcm9ncmVzcy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgbGV0IGJhciA9IG5ldyBQcm9ncmVzc0Jhci5MaW5lKHByb2R1Y3RQcm9ncmVzcywge1xyXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxMCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxNDAwLFxyXG4gICAgICAgIGNvbG9yOiAnI0ZGRUE4MicsXHJcbiAgICAgICAgdHJhaWxDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgIHRyYWlsV2lkdGg6IDEsXHJcbiAgICAgICAgc3ZnU3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfSxcclxuICAgICAgICBmcm9tOiB7IGNvbG9yOiAnI0ZGRUE4MicgfSxcclxuICAgICAgICB0bzogeyBjb2xvcjogJyNFRDZBNUEnIH0sXHJcbiAgICAgICAgc3RlcDogKHN0YXRlLCBiYXIpID0+IHtcclxuICAgICAgICAgICAgYmFyLnBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCBzdGF0ZS5jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W3Byb2R1Y3QuaWRdID0gYmFyO1xyXG4gICAgYmFyLmFuaW1hdGUoMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvZ3Jlc3NCYXIoaWQsIHBvdXJjZW50YWdlKSB7XHJcbiAgICBwcm9ncmVzc0Jhckxpc3RbaWRdLnNldChwb3VyY2VudGFnZSAvIDEwMClcclxuICAgIGNvbnNvbGUubG9nKHBvdXJjZW50YWdlLzEwMClcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9