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
/* harmony export */   "lastUpdateList": () => (/* binding */ lastUpdateList),
/* harmony export */   "progressBarList": () => (/* binding */ progressBarList),
/* harmony export */   "showProducts": () => (/* binding */ showProducts),
/* harmony export */   "startProduct": () => (/* binding */ startProduct)
/* harmony export */ });
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "./src/App/ProgressBar.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar */ "./src/App/SideBar.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/App/Header.ts");



var progressBarList = [];
var lastUpdateList = [];
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
        console.log("Lancement de la production de " + product.name);
        product.timeleft = product.vitesse;
        lastUpdateList[product.id] = Date.now();
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
    if (_SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected != "Max") {
        // On calcule le coût
        var cost = (0,_SideBar__WEBPACK_IMPORTED_MODULE_1__.getCostProduct)(product, _SideBar__WEBPACK_IMPORTED_MODULE_1__.addSelected);
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
        if (pallier.seuil > world.money || button.innerText == "Acheté") {
            // Si c'est le cas, on l'active
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
        (0,___WEBPACK_IMPORTED_MODULE_0__.matchId)(manager.idcible, world);
        // Changement du bouton Hire en acheté et disabled
        var button = document.getElementById("hire" + manager.idcible);
        button.innerText = "Acheté";
        button.classList.remove();
        button.classList.add("btn", "btn-secondary");
        button.setAttribute("disabled", "true");
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchId": () => (/* binding */ matchId),
/* harmony export */   "serveurUrl": () => (/* binding */ serveurUrl),
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
// Url serveur
var serveurUrl = "http://localhost:8080/";
// export const serveurUrl: string = "https://isiscapitalist.kk.kurasawa.fr/";
$(document).ready(function () {
    // Chargement du pseudo du joueur
    console.log(username);
    setUsername(username);
    // Affichage du monde du joueur
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        // Affichage du monde chargé
        console.log(world);
        // Initialisation argent de base
        world.money = 0;
        // Affichage HTML
        (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(serveurUrl, world);
        (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.showProducts)(serveurUrl, world);
        (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.showSideBar)(serveurUrl, world);
        (0,_App_Menu__WEBPACK_IMPORTED_MODULE_4__.displayMenu)(world);
        (0,_Modals_Managers__WEBPACK_IMPORTED_MODULE_5__.displayManager)(serveurUrl, world);
        (0,_Modals_Unlocks__WEBPACK_IMPORTED_MODULE_6__.displayUnlocks)(serveurUrl, world);
        // Actions dynamiques
        setInterval(function () {
            // Calcul du score
            calcScore(serveurUrl, world);
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
            var timeRemaining = Date.now() - _App_Products__WEBPACK_IMPORTED_MODULE_0__.lastUpdateList[product.id];
            product.timeleft = product.timeleft - timeRemaining;
            // On calcule le pourcentage de production restant et on actualise la bar de progression
            var pourcentage = (product.timeleft * 100) / product.vitesse;
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
    _Products__WEBPACK_IMPORTED_MODULE_0__.progressBarList[id].set(pourcentage / 100)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUQ7QUFFakQsK0JBQStCO0FBQ3hCLFNBQVMsYUFBYSxDQUFDLE1BQWMsRUFBRSxLQUFZO0lBRXRELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEQsaURBQWlEO0lBQ2pELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRS9DLE1BQU07SUFDTixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUUvQixLQUFLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFbEMsa0NBQWtDO0lBQ2xDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzVDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQy9CLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7SUFFeEMsVUFBVTtJQUNWLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixLQUFLLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztJQUN4QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBRXpCLGtDQUFrQztJQUNsQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFN0I7Ozs7OztNQU1FO0lBRUYsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixTQUFTLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFFckMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLFNBQVMsQ0FBQyxFQUFFLEdBQUcsV0FBVztJQUMxQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4QyxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN4QixTQUFTLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxTQUFTLENBQUMsS0FBSyxHQUFHLDRDQUFRLENBQUM7SUFDM0IsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFFMUIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRW5DLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxXQUFXLENBQUMsRUFBRSxHQUFHLGlCQUFpQixDQUFDO0lBQ25DLFdBQVcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQzlCLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXZDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEQsV0FBVyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztJQUN4QyxXQUFXLENBQUMsU0FBUyxHQUFHLG9DQUFvQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakIsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0k7WUFDRCxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxQixtREFBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsTUFBYztJQUNwQyxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7SUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSTtRQUNiLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCLElBQUksTUFBTSxHQUFHLE9BQU87UUFDckIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkIsSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQ3hCLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3BEO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6R0QsK0JBQStCO0FBQ3hCLFNBQVMsV0FBVyxDQUFDLEtBQVk7SUFDcEMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoRCxpQkFBaUI7SUFDakIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUUvQyxrQkFBa0I7SUFDbEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWpDLGdCQUFnQjtJQUNoQixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNuRCxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxhQUFhLENBQUM7SUFDL0MsWUFBWSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxPQUFPLENBQUM7SUFDbkQsWUFBWSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBQyxjQUFjLENBQUM7SUFDMUQsWUFBWSxDQUFDLFNBQVMsR0FBQyxVQUFVLENBQUM7SUFFbEMsd0JBQXdCO0lBQ3hCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztJQUVqQywwQkFBMEI7SUFDMUIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7SUFFckMsbUJBQW1CO0lBQ25CLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVuQyxnQkFBZ0I7SUFDaEIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDcEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDO0lBQ2hELGFBQWEsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUMsT0FBTyxDQUFDO0lBQ3BELGFBQWEsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUMsZUFBZSxDQUFDO0lBQzVELGFBQWEsQ0FBQyxTQUFTLEdBQUMsV0FBVyxDQUFDO0lBRXBDLGdCQUFnQjtJQUNoQixJQUFJLFlBQVksR0FBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsWUFBWSxDQUFDLEVBQUUsR0FBQyxjQUFjO0lBQzlCLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxjQUFjLENBQUMsQ0FBQztJQUduRCxvQkFBb0I7SUFDcEIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBRXRDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEOEQ7QUFFdUI7QUFDakQ7QUFHOUIsSUFBTSxlQUFlLEdBQVUsRUFBRSxDQUFDO0FBQ2xDLElBQU0sY0FBYyxHQUFjLEVBQUUsQ0FBQztBQUc1QywyQ0FBMkM7QUFDcEMsU0FBUyxZQUFZLENBQUMsTUFBYyxFQUFFLEtBQVk7SUFDckQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU87UUFFbkQsc0JBQXNCO1FBQ3RCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRTtRQUN6QixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUVoRCxnQkFBZ0I7UUFDaEIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlCLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RSxZQUFZLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFdEMsZ0JBQWdCO1FBQ2hCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDOUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ25DLDJEQUEyRDtRQUMzRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDMUM7UUFDRCxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSTtRQUNqQyx5QkFBeUI7UUFDekIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNYLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCx1QkFBdUI7UUFDdkIsNERBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLCtCQUErQjtRQUMvQixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUc5QyxvQkFBb0I7UUFDcEIsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5QyxnQ0FBZ0M7UUFDaEMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BFLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QyxhQUFhLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRTtRQUNyQyxhQUFhLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUM5QixhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFHSCw2QkFBNkI7UUFDN0IsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzNELFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2RyxDQUFDLENBQUMsQ0FBQztJQUNILHlEQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUdELDJEQUEyRDtBQUNwRCxTQUFTLFlBQVksQ0FBQyxPQUFnQjtJQUN6Qyw4Q0FBOEM7SUFDOUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25DLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLDREQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuQztBQUVMLENBQUM7QUFHRCxnREFBZ0Q7QUFDaEQsU0FBUyxZQUFZLENBQUMsT0FBZ0I7SUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7U0FDSTtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQztBQUdELDBEQUEwRDtBQUMxRCxTQUFTLFVBQVUsQ0FBQyxLQUFZLEVBQUUsT0FBZ0I7SUFDOUMsc0RBQXNEO0lBQ3RELElBQUksaURBQVcsSUFBSSxLQUFLLEVBQUU7UUFDdEIscUJBQXFCO1FBQ3JCLElBQUksSUFBSSxHQUFHLHdEQUFjLENBQUMsT0FBTyxFQUFFLGlEQUFXLENBQUMsQ0FBQztRQUVoRCxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxpREFBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsZ0RBQWdEO0lBQ2hELElBQUksaURBQVcsSUFBSSxLQUFLLEVBQUU7UUFDdEIsMENBQTBDO1FBQzFDLElBQUksR0FBRyxHQUFHLHVEQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksSUFBSSxHQUFHLHdEQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLG9DQUFvQztRQUNwQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUM7QUFDTCxDQUFDO0FBR0QsOEVBQThFO0FBQzlFLFNBQVMsYUFBYSxDQUFDLEtBQVksRUFBRSxPQUFnQixFQUFFLFFBQWdCLEVBQUUsSUFBWTtJQUNqRix1Q0FBdUM7SUFDdkMsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRTtRQUNwQixnQ0FBZ0M7UUFDaEMsT0FBTyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7UUFDN0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXBGLGdDQUFnQztRQUNoQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNwQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsR0FBRyxrREFBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6RSxnREFBZ0Q7UUFDaEQsSUFBSSxpREFBVyxJQUFJLEtBQUssRUFBRTtZQUN0QixzQkFBc0I7WUFDdEIsUUFBUSxHQUFHLHVEQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLHdFQUF3RTtZQUN4RSx5REFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO1FBQ0QseUNBQXlDO1FBQ3pDLElBQUksT0FBTyxHQUFHLHdEQUFjLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsa0RBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1RSxpRUFBaUU7UUFDakUsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNwRCxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0o7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S21DO0FBRTdCLElBQU0sZUFBZSxHQUFVLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkQsSUFBSSxXQUFXLEdBQVEsQ0FBQyxDQUFDO0FBR2hDLHdHQUF3RztBQUNqRyxTQUFTLFdBQVcsQ0FBQyxNQUFjLEVBQUUsS0FBWTtJQUNwRCxzQ0FBc0M7SUFDdEMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwRCxnQ0FBZ0M7SUFDaEMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO0lBQzlCLDRCQUE0QjtJQUM1QixhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFFMUYsaURBQWlEO0lBQ2pELElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoRSxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV6QyxzQ0FBc0M7SUFDdEMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxtQkFBUztRQUU3Qiw0QkFBNEI7UUFDNUIsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN6QyxjQUFjLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUM5QixjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxjQUFjLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxjQUFjLENBQUMsWUFBWSxHQUFHLEtBQUs7UUFDbkMsOERBQThEO1FBQzlELElBQUksU0FBUyxJQUFJLEdBQUcsRUFBRTtZQUNsQixjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUVELDZCQUE2QjtRQUM3QixJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9FLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxFQUFFLENBQUM7UUFDdEQsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQzVDLDRDQUE0QztRQUM1QyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3JCLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDeEIsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBR0QsNERBQTREO0FBQ3JELFNBQVMsZUFBZSxDQUFDLEtBQVk7SUFFeEMsdUNBQXVDO0lBQ3ZDLElBQUksV0FBVyxJQUFJLEtBQUssRUFBRTtRQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQU87WUFDbEMsOEJBQThCO1lBQzlCLElBQUksVUFBVSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUUsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO1lBRXpDLDRCQUE0QjtZQUM1QixJQUFJLElBQUksR0FBVyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hELElBQUksV0FBVyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUUsV0FBVyxDQUFDLFNBQVMsR0FBRyxrREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhDLHNGQUFzRjtZQUN0RixJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUNwQixVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMvQztZQUNELG9CQUFvQjtpQkFDZjtnQkFDRCxVQUFVLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUVELHVDQUF1QztJQUN2QyxJQUFJLFdBQVcsSUFBSSxLQUFLLEVBQUU7UUFDdEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFPO1lBQ2xDLElBQUksR0FBRyxHQUFXLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFaEQsOEJBQThCO1lBQzlCLElBQUksVUFBVSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFFakMsNEJBQTRCO1lBQzVCLElBQUksSUFBSSxHQUFXLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEQsSUFBSSxXQUFXLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1RSxXQUFXLENBQUMsU0FBUyxHQUFHLGtEQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7S0FHTjtBQUVMLENBQUM7QUFHRCxxREFBcUQ7QUFDOUMsU0FBUyxjQUFjLENBQUMsT0FBZ0IsRUFBRSxTQUFpQjtJQUM5RCxvQkFBb0I7SUFDcEIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ3hDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztJQUUxQyx5QkFBeUI7SUFDekIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELHlEQUF5RDtBQUNsRCxTQUFTLGFBQWEsQ0FBQyxLQUFZLEVBQUUsT0FBZ0I7SUFDeEQsb0JBQW9CO0lBQ3BCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RSxJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5RixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxJQUFJLEdBQUcsR0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFFM0MsNEJBQTRCO0lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUg0QjtBQUVhO0FBRzFDLHlCQUF5QjtBQUNsQixTQUFTLGNBQWMsQ0FBQyxNQUFjLEVBQUUsS0FBWTtJQUN2RCxZQUFZO0lBQ1osSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVoRCx1QkFBdUI7SUFDdkIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVwQyxzQkFBc0I7SUFDdEIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWxDLHFCQUFxQjtJQUNyQixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFakMsMEJBQTBCO0lBQzFCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV0QyxxQkFBcUI7SUFDckIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO0lBRzdCLGVBQWU7SUFDZixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFdEMsbURBQW1EO0lBQ25ELFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUdELHFDQUFxQztBQUNyQyxTQUFTLFlBQVksQ0FBQyxNQUFjLEVBQUUsS0FBWTtJQUM5QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVyQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLHNCQUFxQjtJQUU3RCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU87UUFDbkQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEQsaUNBQWlDO1FBQ2pDLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBcUI7UUFFcEQsY0FBYztRQUNkLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFNUMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDMUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO1FBRWxELG9CQUFvQjtRQUNwQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM3QyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUU5QixZQUFZO1FBQ1osSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUVyQyxhQUFhO1FBQ2IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLHNEQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUU5QiwwQkFBMEI7UUFDMUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBRWhELElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixVQUFVLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0QsVUFBVSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDdEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDaEQsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVIOzs7Ozt5Q0FLaUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBR0Qsc0RBQXNEO0FBQy9DLFNBQVMsYUFBYSxDQUFDLEtBQVk7SUFDdEMsc0JBQXNCO0lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsT0FBTztRQUNuRCxpQ0FBaUM7UUFDakMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9ELCtFQUErRTtRQUMvRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRTtZQUM3RCwrQkFBK0I7WUFDL0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFDSTtZQUNELHdCQUF3QjtZQUN4QixNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdELHlEQUF5RDtBQUNsRCxTQUFTLGVBQWUsQ0FBQyxLQUFZO0lBQ3hDLFlBQVk7SUFDWixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUzRCxzQkFBc0I7SUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQUssRUFBRSxPQUFPO1FBQ25ELG9EQUFvRDtRQUNwRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRTtZQUMzRCxZQUFZLEVBQUUsQ0FBQztTQUNsQjtRQUFBLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRixzREFBc0Q7SUFDdEQsSUFBSSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ25CLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ2pDO0lBQ0QsMkNBQTJDO1NBQ3RDO1FBQ0QsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDcEQ7QUFDTCxDQUFDO0FBR0QscUJBQXFCO0FBQ3JCLFNBQVMsVUFBVSxDQUFDLE9BQWdCLEVBQUUsS0FBWTtJQUM5QywrREFBK0Q7SUFDL0QsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7UUFDOUIseUNBQXlDO1FBQ3pDLEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU3QixzQ0FBc0M7UUFDdEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEdBQUcsc0RBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekUseUJBQXlCO1FBQ3pCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLDBDQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVoQyxrREFBa0Q7UUFDbEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUMzQixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzQztBQUNMLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxFQUFTLEVBQUMsS0FBVztJQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBSyxFQUFDLE9BQU87UUFDakQsSUFBSSxHQUFHLEdBQUMsRUFBRTtRQUNWLElBQUcsT0FBTyxDQUFDLEVBQUUsSUFBRSxFQUFFLEVBQUM7WUFDZCxHQUFHLEdBQUMsT0FBTyxDQUFDLElBQUk7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN6QyxPQUFPLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQyxDQUFDO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNU1ELHdCQUF3QjtBQUNqQixTQUFTLGNBQWMsQ0FBQyxNQUFjLEVBQUUsS0FBWTtJQUN2RCxZQUFZO0lBQ1osSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUvQyx1QkFBdUI7SUFDdkIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVwQyxzQkFBc0I7SUFDdEIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWxDLHFCQUFxQjtJQUNyQixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFakMsMEJBQTBCO0lBQzFCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV0Qyx1QkFBdUI7SUFDdkIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDbEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDM0IsV0FBVyxDQUFDLEVBQUUsR0FBQyxvQkFBb0I7SUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFTLEtBQUssRUFBQyxPQUFPO1FBQ2pELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxFQUFFLEdBQUMsWUFBWSxHQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzlCLEdBQUcsQ0FBQyxLQUFLLEdBQUMsRUFBRSxHQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDLElBQUk7SUFDekIsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDMUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDNUIsR0FBRyxDQUFDLEVBQUUsR0FBQyxZQUFZLEdBQUMsQ0FBQztJQUNyQixHQUFHLENBQUMsS0FBSyxHQUFDLEVBQUUsR0FBQyxDQUFDO0lBQ2QsR0FBRyxDQUFDLElBQUksR0FBQyxtQkFBbUI7SUFFNUIsQ0FBQyxDQUFFLFdBQVcsQ0FBRSxDQUFDLE1BQU0sQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztJQUdMLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7SUFFNUIsZUFBZTtJQUNmLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUMsRUFBRSxHQUFDLGlCQUFpQixDQUFDO0lBRTNCLG1EQUFtRDtJQUNuRCxzQ0FBc0M7QUFDMUMsQ0FBQztBQUdELFNBQVMsc0JBQXNCLENBQUMsTUFBYyxFQUFFLEtBQVk7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztJQUV2QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEQ7OzsyQ0FHdUM7SUFFdkMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxzQkFBcUI7SUFHN0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBQyxVQUFTLEtBQUssRUFBQyxNQUFNO1FBQ2pELHNDQUFzQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsR0FBRyxDQUFDLEVBQUUsR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUVuQyw2RUFBNkU7UUFDN0UsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMscUJBQW1CO1FBQ25FLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGtDQUFnQztRQUMvRSxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUM3QixHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUM1QixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBR2hDLHVCQUF1QjtRQUN2QixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5QyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUNwQyxVQUFVLENBQUMsR0FBRyxHQUFDLE1BQU0sR0FBQyxNQUFNLENBQUMsSUFBSTtRQUNqQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFckMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDNUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDbkMsU0FBUyxDQUFDLFNBQVMsR0FBQyxNQUFNLENBQUMsSUFBSTtRQUUvQixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFDLGtCQUFrQixHQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQyxLQUFLO1FBRTNFLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ2hELFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3JDLFdBQVcsQ0FBQyxTQUFTLEdBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQyxLQUFLO0lBQ2hELENBQUMsQ0FBQztBQUdOLENBQUM7QUFHRCx3REFBd0Q7QUFDeEQsU0FBUyxXQUFXLENBQUMsRUFBUyxFQUFDLEtBQVc7SUFDdEMsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBSyxFQUFDLE1BQU07UUFDbEQsSUFBRyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBQyxFQUFLLHVHQUF1RztZQUMvSCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTztTQUVuQzthQUNJLElBQUcsTUFBTSxDQUFDLE9BQU8sSUFBRSxDQUFDLEVBQUM7WUFDdEIsdUVBQXVFO1lBQ3ZFLGlHQUFpRztTQUNwRztJQUNMLENBQUMsQ0FBQztBQUVOLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQVUsRUFBQyxHQUFVLEVBQUMsS0FBVztJQUN2RCxxQ0FBcUM7SUFDckMsdUJBQXVCO0lBRXZCLHdEQUF3RDtJQUNwRCw4QkFBOEI7SUFFOUIsR0FBRztJQUVQLElBQUk7QUFHUixDQUFDO0FBR0QsU0FBUyxXQUFXLENBQUMsRUFBUyxFQUFDLE1BQWEsRUFBQyxLQUFXO0lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7SUFFdkMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRTtJQUVqQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLHNCQUFxQjtJQUU3RCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLFVBQVMsS0FBSyxFQUFDLE1BQU07UUFFakQsSUFBRyxNQUFNLENBQUMsT0FBTyxJQUFFLEVBQUUsRUFBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUM7WUFFdkIsc0NBQXNDO1lBQ3RDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixHQUFHLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRW5DLDZFQUE2RTtZQUM3RSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxxQkFBbUI7WUFDbkUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsa0NBQWdDO1lBQy9FLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQzVCLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFHaEMsdUJBQXVCO1lBQ3ZCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzlDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxHQUFHLEdBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2pDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUVyQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUM1QyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUNuQyxTQUFTLENBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQyxJQUFJO1lBRS9CLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ2hELFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxTQUFTLEdBQUMsa0JBQWtCLEdBQUMsTUFBTSxDQUFDLFNBQVMsR0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDLEtBQUs7WUFFM0UsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDaEQsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDckMsV0FBVyxDQUFDLFNBQVMsR0FBQyxTQUFTLEdBQUMsTUFBTSxDQUFDLEtBQUs7U0FDM0M7YUFDSSxJQUFHLEVBQUUsSUFBRSxDQUFDLEVBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUVwQixzQ0FBc0M7WUFDdEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFbkMsNkVBQTZFO1lBQzdFLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLHFCQUFtQjtZQUNuRSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxrQ0FBZ0M7WUFDL0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDN0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDNUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUdoQyx1QkFBdUI7WUFDdkIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDOUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDcEMsVUFBVSxDQUFDLEdBQUcsR0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDLElBQUk7WUFDakMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBRXJDLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQzVDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxTQUFTLEdBQUMsTUFBTSxDQUFDLElBQUk7WUFFL0IsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDaEQsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDckMsV0FBVyxDQUFDLFNBQVMsR0FBQyxrQkFBa0IsR0FBQyxNQUFNLENBQUMsU0FBUyxHQUFDLElBQUksR0FBQyxNQUFNLENBQUMsS0FBSztZQUUzRSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNoRCxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFDLFNBQVMsR0FBQyxNQUFNLENBQUMsS0FBSztTQUMzQztJQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUDJFO0FBQ3JCO0FBQ0o7QUFDdUI7QUFDakM7QUFDMEM7QUFDakM7QUFHbEQsV0FBVztBQUNKLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdkQsdUJBQXVCO0FBQ2hCLFNBQVMsV0FBVyxDQUFDLFdBQW1CO0lBQzNDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFOUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNSLE9BQU8sRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUM7S0FDNUIsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUdELGNBQWM7QUFDUCxJQUFNLFVBQVUsR0FBVyx3QkFBd0IsQ0FBQztBQUMzRCw4RUFBOEU7QUFHOUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNkLGlDQUFpQztJQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0QiwrQkFBK0I7SUFDL0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsNkJBQTZCLEVBQUUsVUFBVSxLQUFZO1FBQ3hFLDRCQUE0QjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUVsQixnQ0FBZ0M7UUFDaEMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFaEIsaUJBQWlCO1FBQ2pCLDBEQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLDJEQUFZLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLHlEQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLHNEQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsZ0VBQWMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsK0RBQWMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMscUJBQXFCO1FBQ3JCLFdBQVcsQ0FBQztZQUNSLGtCQUFrQjtZQUNsQixTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTdCLCtCQUErQjtZQUMvQixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDcEUsK0RBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtZQUVELHVCQUF1QjtZQUN2Qiw2REFBZSxDQUFDLEtBQUssQ0FBQztZQUN0QixpRUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXZCLGtHQUFrRztZQUNsRyw2QkFBNkI7WUFDN0IsdUJBQXVCO1lBQ3ZCLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFWixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBR0gsa0JBQWtCO0FBQ2xCLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxLQUFZO0lBQzNDLHNCQUFzQjtJQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU87UUFDbkQsdURBQXVEO1FBQ3ZELElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDdkIsNENBQTRDO1lBQzVDLElBQUksYUFBYSxHQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyx5REFBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRSxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1lBRXBELHdGQUF3RjtZQUN4RixJQUFJLFdBQVcsR0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNyRSxnRUFBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFeEMsd0RBQXdEO1lBQ3hELElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLGlDQUFpQztnQkFDakMsSUFBSSxNQUFNLEdBQVcsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN2RCxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUV4QixrREFBa0Q7Z0JBQ2xELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixnRUFBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakM7U0FDSjtRQUVELGlFQUFpRTthQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDbkUsb0NBQW9DO1lBQ3BDLDJEQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFHRCxrQkFBa0I7QUFDbEIsU0FBUyxRQUFRLENBQUMsS0FBWSxFQUFFLEtBQWE7SUFDekMsb0JBQW9CO0lBQ3BCLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0lBRXJCLGlCQUFpQjtJQUNqQixLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUVyQiwyQkFBMkI7SUFDM0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEdBQUcsc0RBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUlNLFNBQVMsT0FBTyxDQUFDLEVBQVUsRUFBRSxLQUFZO0lBQzVDLElBQUksU0FBUztJQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsT0FBTztRQUNuRCxTQUFTLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLFNBQVMsSUFBSSxFQUFFLEVBQUU7WUFDakIsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFDSDs7O0dBR0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEt3QztBQUMzQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQsZ0JBQWdCLGtCQUFrQjtBQUNsQyxjQUFjLGtCQUFrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLHNEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxJQUFJLHNEQUFlO0FBQ25CO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL0hlYWRlci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL01lbnUudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9kdWN0cy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1NpZGVCYXIudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL01vZGFscy9NYW5hZ2Vycy50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvTW9kYWxzL1VubG9ja3MudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdXNlcm5hbWUsIHNldFVzZXJuYW1lIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG4vLyBDcsOpYXRpb24gY29udGFpbmVyIGR1IGhlYWRlclxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhlYWRlcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vY3LDqWF0aW9uIHByZW1pw6hyZSBjb2xvbmUgYXZlYyBsZSBub20gZXQgbGUgbG9nb1xyXG4gICAgbGV0IG1vbmRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25kZSk7XHJcbiAgICBtb25kZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwibW9uZGVcIiwgXCJiY2NGb250XCIpO1xyXG5cclxuICAgIC8vTG9nb1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbW9uZGUuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gICAgbG9nby5zcmMgPSBzZXJ2ZXIgKyB3b3JsZC5sb2dvO1xyXG5cclxuICAgIC8vTm9tXHJcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbW9uZGUuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgbmFtZS5pbm5lckhUTUwgPSBcIiBcIiArIHdvcmxkLm5hbWU7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gc2Vjb25kIGVudMOqdGUsIGwnYXJnZW50XHJcbiAgICBsZXQgbW9uZXlDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZXlDb2wpXHJcbiAgICBtb25leUNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiYmNjRm9udFwiKVxyXG5cclxuICAgIC8vTCdhcmdlbnRcclxuICAgIGxldCBtb25leSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb25leUNvbC5hcHBlbmRDaGlsZChtb25leSk7XHJcbiAgICBtb25leS5pZCA9IFwid29ybGRNb25leVwiO1xyXG4gICAgbW9uZXkuY2xhc3NMaXN0LmFkZChcIm1vbmV5XCIpO1xyXG4gICAgbGV0IGFyZ2VudCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbiAgICBtb25leS5pbm5lckhUTUwgPSBhcmdlbnQ7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gZGVybmllciBlbnTDqHRlLCBVc2VyIElEXHJcbiAgICBsZXQgdXNlckNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXNlckNvbCk7XHJcbiAgICB1c2VyQ29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcblxyXG4gICAgLypcclxuICAgIC8vVXNlciBJRFxyXG4gICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZENvbC5hcHBlbmRDaGlsZCh1c2VySWQpO1xyXG4gICAgdXNlcklkLmNsYXNzTGlzdC5hZGQoXCJ1c2VySWRcIik7XHJcbiAgICB1c2VySWQuaW5uZXJIVE1MID0gXCJJRDpcIjtcclxuICAgICovXHJcblxyXG4gICAgbGV0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXNlckNvbC5hcHBlbmRDaGlsZCh1c2VyUm93KTtcclxuICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuXHJcbiAgICBsZXQgbGFiZWxVc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChsYWJlbFVzZXIpO1xyXG4gICAgbGFiZWxVc2VyLmh0bWxGb3IgPSBcImlucHV0VXNlclwiO1xyXG4gICAgbGFiZWxVc2VyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpXHJcblxyXG4gICAgbGV0IGlucHV0VXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHVzZXJSb3cuYXBwZW5kQ2hpbGQoaW5wdXRVc2VyKTtcclxuICAgIGlucHV0VXNlci5pZCA9IFwiaW5wdXRVc2VyXCJcclxuICAgIGlucHV0VXNlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250cm9sXCIpO1xyXG4gICAgaW5wdXRVc2VyLnR5cGUgPSBcInRleHRcIjtcclxuICAgIGlucHV0VXNlci5wbGFjZWhvbGRlciA9IFwiUHNldWRvXCI7XHJcbiAgICBpbnB1dFVzZXIudmFsdWUgPSB1c2VybmFtZTtcclxuICAgIGlucHV0VXNlci5yZWFkT25seSA9IHRydWU7XHJcblxyXG4gICAgbGV0IGJ1dHRvblVzZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXNlclJvdy5hcHBlbmRDaGlsZChidXR0b25Vc2VyRGl2KTtcclxuXHJcbiAgICBsZXQgYnV0dG9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBidXR0b25Vc2VyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbklucHV0KTtcclxuICAgIGJ1dHRvbklucHV0LmlkID0gXCJ1c2VyQnV0dG9uQ2hlY2tcIjtcclxuICAgIGJ1dHRvbklucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBidXR0b25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG5cclxuICAgIGxldCBidXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGJ1dHRvblVzZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uTGFiZWwpO1xyXG4gICAgYnV0dG9uTGFiZWwuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgYnV0dG9uTGFiZWwuaHRtbEZvciA9IFwidXNlckJ1dHRvbkNoZWNrXCI7XHJcbiAgICBidXR0b25MYWJlbC5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdiaSBiaS1jaGVjay1zcXVhcmUnPjwvaT5cIjtcclxuICAgICQoYnV0dG9uTGFiZWwpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoaW5wdXRVc2VyLnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIGlucHV0VXNlci5yZWFkT25seSA9IGZhbHNlOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0VXNlci5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKGlucHV0VXNlci52YWx1ZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsZXVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIGlmICh2YWxldXIgPCAxMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDIpO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyIDwgMTAwMDAwMClcclxuICAgICAgICByZXMgPSB2YWxldXIudG9GaXhlZCgwKTtcclxuICAgIGVsc2UgaWYgKHZhbGV1ciA+PSAxMDAwMDAwKSB7XHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvUHJlY2lzaW9uKDQpO1xyXG4gICAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKC9lXFwrKC4qKS8sIFwiIDEwPHN1cD4kMTwvc3VwPlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBuYXZiYXJcclxuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiLCBcImZpeGVkLWJvdHRvbVwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiB1bmxvY2tzXHJcbiAgICBsZXQgdW5sb2NrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQodW5sb2Nrcyk7XHJcbiAgICB1bmxvY2tzLmNsYXNzTGlzdC5hZGQoXCJ1bmxvY2tzXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIFVubG9ja3NcclxuICAgIGxldCBidXR0b25VbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICB1bmxvY2tzLmFwcGVuZENoaWxkKGJ1dHRvblVubG9jayk7XHJcbiAgICBidXR0b25VbmxvY2suY2xhc3NMaXN0LmFkZChcImJ0blwiLFwiYnRuLXByaW1hcnlcIilcclxuICAgIGJ1dHRvblVubG9jay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLFwibW9kYWxcIilcclxuICAgIGJ1dHRvblVubG9jay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLFwiI21vZGFsVW5sb2NrXCIpXHJcbiAgICBidXR0b25VbmxvY2suaW5uZXJUZXh0PVwiVW5sb2NrcyBcIjtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBjYXNoIHVwZ3JhZGVzXHJcbiAgICBsZXQgY2FzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY2FzaCk7XHJcbiAgICBjYXNoLmNsYXNzTGlzdC5hZGQoXCJjYXNoXCIpO1xyXG4gICAgY2FzaC5pbm5lckhUTUwgPSBcIkNhc2ggVXBncmFkZXNcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBhbmdlbHMgdXBncmFkZXNcclxuICAgIGxldCBhbmdlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFuZ2Vscyk7XHJcbiAgICBhbmdlbHMuY2xhc3NMaXN0LmFkZChcImFuZ2Vsc1wiKTtcclxuICAgIGFuZ2Vscy5pbm5lckhUTUwgPSBcIkFuZ2VscyB1cGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIG1hbmFnZXJzXHJcbiAgICBsZXQgbWFuYWdlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1hbmFnZXJzKTtcclxuICAgIG1hbmFnZXJzLmNsYXNzTGlzdC5hZGQoXCJtYW5hZ2Vyc1wiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBNYW5hZ2VyXHJcbiAgICBsZXQgYnV0dG9uTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIG1hbmFnZXJzLmFwcGVuZENoaWxkKGJ1dHRvbk1hbmFnZXIpO1xyXG4gICAgYnV0dG9uTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgYnV0dG9uTWFuYWdlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRvZ2dsZVwiLFwibW9kYWxcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIixcIiNtb2RhbE1hbmFnZXJcIilcclxuICAgIGJ1dHRvbk1hbmFnZXIuaW5uZXJUZXh0PVwiTWFuYWdlcnMgXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gYmFkZ2VcclxuICAgIGxldCBiYWRnZU1hbmFnZXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgYnV0dG9uTWFuYWdlci5hcHBlbmRDaGlsZChiYWRnZU1hbmFnZXIpO1xyXG4gICAgYmFkZ2VNYW5hZ2VyLmlkPVwiYmFkZ2VNYW5hZ2VyXCJcclxuICAgIGJhZGdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiYmFkZ2VcIixcImJnLXNlY29uZGFyeVwiKTtcclxuICAgIFxyXG5cclxuICAgIC8vQ3LDqWF0aW9uIGludmVzdG9yc1xyXG4gICAgbGV0IGludmVzdG9ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW52ZXN0b3JzKTtcclxuICAgIGludmVzdG9ycy5jbGFzc0xpc3QuYWRkKFwiaW52ZXN0b3JzXCIpO1xyXG4gICAgaW52ZXN0b3JzLmlubmVySFRNTCA9IFwiSW52ZXN0b3JzXCI7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgYWRkUHJvZ3Jlc3NCYXIsIHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcclxuXHJcbmltcG9ydCB7YWRkU2VsZWN0ZWQsIGJ1eWFibGVQcm9kdWN0cywgZ2V0Q29zdFByb2R1Y3QsIGdldE1heFByb2R1Y3R9IGZyb20gXCIuL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQmFyTGlzdDogYW55W10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IGxhc3RVcGRhdGVMaXN0IDogbnVtYmVyW10gPSBbXTtcclxuXHJcblxyXG4vLyBGb25jdGlvbiBwcmluY2lwYWxlIGQnYXBwZWwgZGVzIHByb2R1aXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvZHVjdHMoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmlkID0gXCJwXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJkb3VibGVCb3JkZXJQcm9kdWN0XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsIFwiYmNjRm9udFwiKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdC5uYW1lO1xyXG5cclxuICAgICAgICAvLyBJbWFnZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJwcm9kdWN0SW1hZ2VcIik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwcm9kdWN0SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLmlkID0gXCJpbWdcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RJY29uc1wiKVxyXG4gICAgICAgIC8vIFNpIGNlIHByb2R1aXQgbidhIHBhcyDDqXTDqSBkw6libG9xdcOpLCBvbiBsJ2FmZmljaGUgZW4gZ3Jpc1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXRlID09IDApIHtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcHJvZHVjdC5sb2dvXHJcbiAgICAgICAgLy8gQWpvdXQgZXZlbnQgcHJvZHVjdGlvblxyXG4gICAgICAgICQoaW1hZ2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhcnRQcm9kdWN0KHByb2R1Y3QpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICAgICAgYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpO1xyXG5cclxuICAgICAgICAvLyBMZXZlbCAtLT4gUXVhbnRpdMOpIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0UXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdFF0ZSk7XHJcbiAgICAgICAgcHJvZHVjdFF0ZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdExldmVsXCIpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuYXBwZW5kQ2hpbGQobGV2ZWwpO1xyXG4gICAgICAgIGxldmVsLmlkID0gXCJxdGVcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgbGV2ZWwuY2xhc3NMaXN0LmFkZChcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgbGV2ZWwuaW5uZXJIVE1MID0gcHJvZHVjdC5xdWFudGl0ZS50b1N0cmluZygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChsaWduZSlcclxuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RDb250YWluZXIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcIm10LTNcIik7XHJcblxyXG4gICAgICAgIC8vIE5iciBsZXZlbCDDoCBhY2hldGVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RBZGQpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImQtZmxleFwiLCBcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2R1Y3RBZGQuYXBwZW5kQ2hpbGQocHJvZHVjdEJ1dHRvbik7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5pZCA9IFwiYWRkXCIgKyBwcm9kdWN0LmlkXHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9kdWN0XCIsIFwiYWxpZ24tbWlkZGxlXCIpO1xyXG4gICAgICAgICQocHJvZHVjdEJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuaWQgPSBcImNvc3RcIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSAocHJvZHVjdC5jb3V0ICsgTWF0aC5wb3cocHJvZHVjdC5jcm9pc3NhbmNlLCBwcm9kdWN0LnF1YW50aXRlKSkudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIHBlcm1ldHRhbnQgZGUgbGFuY2VyIGxhIHByb2R1Y3Rpb24gZCd1biBwcm9kdWl0XHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwnb24gcGV1dCBhY3RpdmVyIGxlIHByb2R1aXRcclxuICAgIGlmICh2ZXJpZlByb2R1Y3QocHJvZHVjdCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhbmNlbWVudCBkZSBsYSBwcm9kdWN0aW9uIGRlIFwiICsgcHJvZHVjdC5uYW1lKTtcclxuICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAxMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IHF1ZSBwcm9kdWl0IGVzdCBhY3RpdmFibGVcclxuZnVuY3Rpb24gdmVyaWZQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiBib29sZWFuIHtcclxuICAgIGlmICgocHJvZHVjdC5xdWFudGl0ZSA+IDApICYmIChwcm9kdWN0LnRpbWVsZWZ0ID09IDApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBwZXJtZXR0YW50IGQnYWpvdXRlciB1bmUgcXVhbnRpdMOpIMOgIHVuIHByb2R1aXRcclxuZnVuY3Rpb24gYWRkUHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIG4nZXN0IHBhcyBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgIT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgY2/Du3RcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIGFkZFNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgbW9kaWZ5UHJvZHVjdCh3b3JsZCwgcHJvZHVjdCwgYWRkU2VsZWN0ZWQsIGNvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICBpZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgIC8vIE9uIGNhbGN1bGUgbGUgbWF4IGFjaGV0YWJsZSBldCBzb24gY291dFxyXG4gICAgICAgIGxldCBtYXggPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuICAgICAgICBsZXQgY29zdCA9IGdldENvc3RQcm9kdWN0KHByb2R1Y3QsIG1heCk7XHJcblxyXG4gICAgICAgIC8vIE9uIG1vZGlmaWUgbCdhZmZpY2hhZ2UgZHUgcHJvZHVpdFxyXG4gICAgICAgIG1vZGlmeVByb2R1Y3Qod29ybGQsIHByb2R1Y3QsIG1heCwgY29zdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBGb25jdGlvbiBlZmZlY3R1YW50IGxlcyBjaGFuZ2VtZW50cyBkJ2FmZmljaGFnZSBsacOpcyDDoCBsJ2FjaGF0IGQndW4gcHJvZHVpdFxyXG5mdW5jdGlvbiBtb2RpZnlQcm9kdWN0KHdvcmxkOiBXb3JsZCwgcHJvZHVjdDogUHJvZHVjdCwgcXVhbnRpdHk6IG51bWJlciwgY29zdDogbnVtYmVyKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50XHJcbiAgICBpZiAod29ybGQubW9uZXkgPiBjb3N0KSB7XHJcbiAgICAgICAgLy8gT24gYWpvdXRlIGxhIHF1YW50aXTDqSBhY2hldMOpZVxyXG4gICAgICAgIHByb2R1Y3QucXVhbnRpdGUgKz0gcXVhbnRpdHk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdGVcIiArIHByb2R1Y3QuaWQpLmlubmVySFRNTCA9IHByb2R1Y3QucXVhbnRpdGUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gT24gc291c3RyYWl0IGwnYXJnZW50IGTDqXBlbnPDqVxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IGNvc3Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIFNpIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llIGVzdCBsZSBtYXggYWNoZXRhYmxlXHJcbiAgICAgICAgaWYgKGFkZFNlbGVjdGVkID09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgLy8gT24gcmVjYWxjdWxlIGxlIG1heFxyXG4gICAgICAgICAgICBxdWFudGl0eSA9IGdldE1heFByb2R1Y3Qod29ybGQsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAvLyBPbiBjaGFuZ2UgbCdhZmZpY2hhZ2Ugc3VyIGNoYXF1ZSBwcm9kdWl0IGVuIGZvbmN0aW9uIGR1IG5vdXZlYXUgc29sZGVcclxuICAgICAgICAgICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBub3V2ZWF1IGNvw7t0IGFwcsOocyBhY2hhdFxyXG4gICAgICAgIGxldCBuZXdDb3N0ID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgcXVhbnRpdHkpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCkuaW5uZXJIVE1MID0gdHJhbnNmb3JtKG5ld0Nvc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFMnaWwgcydhZ2l0IGR1IDFlciBhY2hhdCBzdXIgdW4gcHJvZHVpdCwgb24gbCdhZmZpY2hlIGVuIGNsYWlyXHJcbiAgICAgICAgbGV0IGltYWdlUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nXCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICBpZiAoaW1hZ2VQcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkUHJvZHVjdFwiKSkge1xyXG4gICAgICAgICAgICBpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkUHJvZHVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gXCIuL0hlYWRlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEFkZFByb2R1Y3RzOiBhbnlbXSA9IFsxLCAxMCwgMTAwLCBcIk1heFwiXTtcclxuZXhwb3J0IHZhciBhZGRTZWxlY3RlZDogYW55ID0gMTtcclxuXHJcblxyXG4vLyBGb25jdGlvbiBjcsOpYW50IGxhIGJhcmUgZGUgbWVudSDDoCBkcm90aWUgY29udGVuYW50IGxlIHPDqWxlY3RldXIgc3VyIGxhIHF1YW50aXTDqSBkZSBwcm9kdWl0cyDDoCBhY2hldGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZUJhcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBPYnRlbnRpb24gZHUgY29udGFpbmVyIGRlcyBwcm9kdWl0c1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHNcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGR1IGNvbnRhaW5lciBkdSBtZW51XHJcbiAgICBsZXQgc2lkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUNvbnRhaW5lcik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmlkID0gXCJzaWRlTWVudVwiO1xyXG4gICAgLy8gQ2VudHJhZ2UgZHUgbWVudSDDoCBkcm9pdGVcclxuICAgIHNpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvc2l0aW9uLWFic29sdXRlXCIsIFwidG9wLTUwXCIsIFwiZW5kLTBcIiwgXCJ0cmFuc2xhdGUtbWlkZGxlLXlcIik7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIGQndW5lIGxpc3RlIGRlIGJvdXRvbnMgw6AgbGEgdmVydGljYWxlXHJcbiAgICBsZXQgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xyXG4gICAgbGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLWdyb3VwLXZlcnRpY2FsXCIsIFwic2lkZUNvbnRhaW5lclwiKTtcclxuICAgIGxpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImdyb3VwXCIpO1xyXG5cclxuICAgIC8vIE9uIGfDqW7DqHJlIGRlcyBib3V0b25zIGRlIHR5cGUgcmFkaW9cclxuICAgIGxpc3RBZGRQcm9kdWN0cy5mb3JFYWNoKGFkZE51bWJlciA9PiB7XHJcblxyXG4gICAgICAgIC8vIE9uIGNyw6llIGwnaW5wdXQgZHUgYm91dG9uXHJcbiAgICAgICAgbGV0IGFkZE51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVySW5wdXQpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmlkID0gXCJidXR0b25cIiArIGFkZE51bWJlcjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0LmNsYXNzTGlzdC5hZGQoXCJidG4tY2hlY2tcIik7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQubmFtZSA9IFwiYnRucmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5hdXRvY29tcGxldGUgPSBcIm9mZlwiXHJcbiAgICAgICAgLy8gQSBsJ2luaXRpYWxpc2F0aW9uLCBsJ29wdGlvbiArMSBlc3QgY2VsbGUgY29jaMOpZSBwYXIgZMOpZmF1dFxyXG4gICAgICAgIGlmIChhZGROdW1iZXIgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgYWRkTnVtYmVySW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9uIGNyw6llIGxlIGxhYmVsIGR1IGJvdXRvblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbGlzdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGROdW1iZXJCdXR0b24pO1xyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkQnV0dG9uXCIsIFwiYWRkQnV0dG9uT3V0bGluZVwiLCBcImFsaWduLW1pZGRsZVwiKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIGFkZE51bWJlcklucHV0LmlkKVxyXG4gICAgICAgIGFkZE51bWJlckJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIiArIGFkZE51bWJlcjtcclxuICAgICAgICAvLyBFdmVudCA6IG1vZGlmaWNhdGlvbiBkdSBzw6lsZWN0ZXVyIGF1IGNsaWNcclxuICAgICAgICAkKGFkZE51bWJlckJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhZGRTZWxlY3RlZCA9IGFkZE51bWJlcjtcclxuICAgICAgICAgICAgYnV5YWJsZVByb2R1Y3RzKHdvcmxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy8gRm9uY3Rpb24gY2hhbmdlYW50IGwnYWZmaWNoYWdlIGxpw6kgw6AgbCdhY2hhdCBkJ3VuIHByb2R1aXRcclxuZXhwb3J0IGZ1bmN0aW9uIGJ1eWFibGVQcm9kdWN0cyh3b3JsZDogV29ybGQpIHtcclxuXHJcbiAgICAvLyBTaSBsJ29wdGlvbiBlc3QgdW5lIHZhbGV1ciBjb25zdGFudGVcclxuICAgIGlmIChhZGRTZWxlY3RlZCAhPSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBib3V0b25cclxuICAgICAgICAgICAgbGV0IGFkZFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIiArIHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICBhZGRQcm9kdWN0LmlubmVySFRNTCA9IFwiK1wiICsgYWRkU2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgYWRkU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBsZXQgY29zdFByb2R1Y3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIgKyBwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgY29zdFByb2R1Y3QuaW5uZXJIVE1MID0gdHJhbnNmb3JtKGNvc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgam91ZXVyIG4nYSBwYXMgYXNzZXogZCdhcmdlbnQgcG91ciBhY2hldGVyIGxlIHByb2R1aXQsIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uXHJcbiAgICAgICAgICAgIGlmICh3b3JsZC5tb25leSA8IGNvc3QpIHtcclxuICAgICAgICAgICAgICAgIGFkZFByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGwnYWN0aXZlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvZHVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwnb3B0aW9uIGNvbnNpc3RlIMOgIGxhIHZhbGV1ciBtYXhcclxuICAgIGlmIChhZGRTZWxlY3RlZCA9PSBcIk1heFwiKSB7XHJcbiAgICAgICAgd29ybGQucHJvZHVjdHMucHJvZHVjdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSBnZXRNYXhQcm9kdWN0KHdvcmxkLCBwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZW1lbnQgYWZmaWNoYWdlIGJvdXRvblxyXG4gICAgICAgICAgICBsZXQgYWRkUHJvZHVjdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIGFkZFByb2R1Y3QuaW5uZXJIVE1MID0gXCIrXCIgKyBtYXg7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VtZW50IGFmZmljaGFnZSBjb8O7dFxyXG4gICAgICAgICAgICBsZXQgY29zdDogbnVtYmVyID0gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdCwgbWF4KTtcclxuICAgICAgICAgICAgbGV0IGNvc3RQcm9kdWN0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zdFwiICsgcHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGNvc3RQcm9kdWN0LmlubmVySFRNTCA9IHRyYW5zZm9ybShjb3N0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBjb8O7dCBkJ3VuIGdyb3VwZSBkZSBwcm9kdWl0c1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29zdFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCwgYWRkTnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7XHJcbiAgICBsZXQgbnVtZXJhdG9yID0gMSAtIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgYWRkTnVtYmVyKTtcclxuICAgIGxldCBkZW5vbWluYXRvciA9IDEgLSBwcm9kdWN0LmNyb2lzc2FuY2VcclxuICAgIGxldCBjb3V0ID0gKHVuICogbnVtZXJhdG9yKSAvIGRlbm9taW5hdG9yO1xyXG5cclxuICAgIC8vIFJldG91ciBkdSBjb8O7dCBjYWxjdWzDqVxyXG4gICAgcmV0dXJuIGNvdXQ7XHJcbn1cclxuXHJcbi8vIEZvbmN0aW9uIGNhbGN1bGFudCBsZSBub21icmUgbWF4IGRlIHByb2R1aXRzIGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4UHJvZHVjdCh3b3JsZDogV29ybGQsIHByb2R1Y3Q6IFByb2R1Y3QpOiBudW1iZXIge1xyXG4gICAgLy8gQ2FsY3VsIGRlcyB0ZXJtZXNcclxuICAgIGxldCB1biA9IHByb2R1Y3QuY291dCAqIE1hdGgucG93KHByb2R1Y3QuY3JvaXNzYW5jZSwgcHJvZHVjdC5xdWFudGl0ZSk7IFxyXG4gICAgbGV0IG51bWVyYXRvcjogbnVtYmVyID0gTWF0aC5sb2coLSh3b3JsZC5tb25leSAtIHdvcmxkLm1vbmV5ICogcHJvZHVjdC5jcm9pc3NhbmNlIC0gdW4pIC8gdW4pO1xyXG4gICAgbGV0IGRlbm9taW5hdG9yOiBudW1iZXIgPSBNYXRoLmxvZyhwcm9kdWN0LmNyb2lzc2FuY2UpO1xyXG4gICAgbGV0IG1heDogbnVtYmVyID0gKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKVxyXG5cclxuICAgIC8vIFJldG91ciBkdSBtYXggZGUgcHJvZHVpdHNcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG1heCk7XHJcbn0iLCJpbXBvcnQgeyBtYXRjaElkIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFdvcmxkLCBQcm9kdWN0LCBQYWxsaWVyIH0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4uL0FwcC9IZWFkZXJcIjtcclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGVzIG1hbmFnZXJzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWFuYWdlcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgRGlhbG9ndWVcclxuICAgIGxldCBtZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtLmFwcGVuZENoaWxkKG1kKTtcclxuICAgIG1kLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaWFsb2dcIiwgXCJtb2RhbC1sZ1wiKTtcclxuICAgIG1kLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJkb2N1bWVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBDb250ZW50XHJcbiAgICBsZXQgbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWQuYXBwZW5kQ2hpbGQobWMpO1xyXG4gICAgbWMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9CYWxpc2UgTW9kYWwgaGVhZGVyXHJcbiAgICBsZXQgbWggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWMuYXBwZW5kQ2hpbGQobWgpO1xyXG4gICAgbWguY2xhc3NMaXN0LmFkZChcIm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgICAvL0JvdXRvbiBGZXJtZXIgbGEgZmVuw6p0cmVcclxuICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgICBiLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtZGlzbWlzc1wiLCBcIm1vZGFsXCIpO1xyXG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XHJcblxyXG4gICAgLy9UaXRyZSBkZSBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBtaC5hcHBlbmRDaGlsZCh0KTtcclxuICAgIHQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xyXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15TW9kYWxMYWJlbFwiKTtcclxuICAgIHQuaW5uZXJUZXh0ID0gXCJMZXMgTWFuYWdlcnNcIjtcclxuXHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbEJvZHlcIik7XHJcblxyXG4gICAgLy9SZW1wbGlzc2FnZSBkdSBib2R5IGF2ZWMgbGVzIGRpZmZlcnJlbnRzIG1hbmFnZXJzXHJcbiAgICBsaXN0TWFuYWdlcnMoc2VydmVyLCB3b3JsZCk7XHJcbn1cclxuXHJcblxyXG4vLyBBZmZpY2hhZ2UgZGUgbGEgbGlzdGUgZGVzIG1hbmFnZXJzXHJcbmZ1bmN0aW9uIGxpc3RNYW5hZ2VycyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCb2R5XCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJyb3dcIiwgXCJyb3ctY29scy0yXCIpOy8vXCJyb3dcIiwgXCJyb3ctY29scy0yXCJcclxuXHJcbiAgICAkLmVhY2god29ybGQubWFuYWdlcnMucGFsbGllciwgZnVuY3Rpb24gKGluZGV4LCBwYWxsaWVyKSB7XHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwibWFuYWdlclwiICsgcGFsbGllci5pZGNpYmxlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vUGFydGllIEltYWdlIGV0IG5vbSBkdSBtYW5hZ2Vyc1xyXG4gICAgICAgIGxldCBpbWFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChpbWFnZU5hbWUpO1xyXG4gICAgICAgIGltYWdlTmFtZS5jbGFzc0xpc3QuYWRkKFwiY29sXCIpOy8vXCJjb2wtNFwiLCBcImNvbC1sZy0yXCJcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgSW1hZ2VcclxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGltYWdlTmFtZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImltYWdlTWFuYWdlcnNcIik7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZU1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlLmFwcGVuZENoaWxkKGltYWdlTWFuYWdlcik7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyLmlkID0gXCJpbWdcIiArIHBhbGxpZXIuaWRjaWJsZTtcclxuICAgICAgICBpbWFnZU1hbmFnZXIuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvO1xyXG4gICAgICAgIGltYWdlTWFuYWdlci5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsdWlkXCIsIFwicm91bmRlZFwiKVxyXG5cclxuICAgICAgICAvL1BhcnRpZSBOb20gZXQgcHJpeFxyXG4gICAgICAgIGxldCBuYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaW1hZ2VOYW1lLmFwcGVuZENoaWxkKG5hbWVQcmljZSk7XHJcbiAgICAgICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJyb3dcIilcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgTm9tXHJcbiAgICAgICAgbGV0IG5hbWVNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYW1lUHJpY2UuYXBwZW5kQ2hpbGQobmFtZU1hbmFnZXIpO1xyXG4gICAgICAgIG5hbWVNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbmFtZU1hbmFnZXIuaW5uZXJUZXh0ID0gcGFsbGllci5uYW1lO1xyXG5cclxuICAgICAgICAvL1BhcnRpZSBQcml4XHJcbiAgICAgICAgbGV0IHByaWNlTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmFtZVByaWNlLmFwcGVuZENoaWxkKHByaWNlTWFuYWdlcik7XHJcbiAgICAgICAgcHJpY2VNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgbGV0IGNvc3QgPSB0cmFuc2Zvcm0ocGFsbGllci5zZXVpbClcclxuICAgICAgICBwcmljZU1hbmFnZXIuaW5uZXJIVE1MID0gY29zdDtcclxuXHJcbiAgICAgICAgLy9QYXJ0aWUgYm91dG9uIGQnZW1iYXVjaGVcclxuICAgICAgICBsZXQgaGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGhpcmUpO1xyXG4gICAgICAgIGhpcmUuY2xhc3NMaXN0LmFkZChcImNvbFwiKTsgLy9cImNvbC00XCIsIFwiY29sLWxnLTJcIlxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uSGlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgaGlyZS5hcHBlbmRDaGlsZChidXR0b25IaXJlKTtcclxuICAgICAgICBidXR0b25IaXJlLmlkID0gXCJoaXJlXCIgKyBwYWxsaWVyLmlkY2libGU7XHJcbiAgICAgICAgYnV0dG9uSGlyZS5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXByaW1hcnlcIiwgXCJidXR0b25IaXJlXCIpO1xyXG4gICAgICAgIGJ1dHRvbkhpcmUuaW5uZXJUZXh0ID0gXCJBY2hldGUgTW9pICFcIjtcclxuICAgICAgICAkKGJ1dHRvbkhpcmUpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJqZSB0ZW50ZSBkJ2FjaGV0ZXIgdW4gbWFuYWdlciA6KVwiKTtcclxuICAgICAgICAgICAgYnV5TWFuYWdlcihwYWxsaWVyLCB3b3JsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IGltYWdlUHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgICBoaXJlLmFwcGVuZENoaWxkKGltYWdlUHJvZHVjdClcclxuICAgICAgICBpbWFnZVByb2R1Y3QuY2xhc3NMaXN0LmFkZChcImltYWdlUHJvZHVjdE1hbmFnZXJcIilcclxuICAgICAgICBsZXQgc3JjSW1nPWdldEltYWdlKHBhbGxpZXIuaWRjaWJsZSx3b3JsZClcclxuICAgICAgICBpbWFnZVByb2R1Y3Quc3JjPXNlcnZlcitzcmNJbWc7Ki9cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8vIEFmZmljaGFnZSBkeW5hbWlxdWVtZW50IHNpIHVuIG1hbmFnZXIgZXN0IGFjaGV0YWJsZVxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZNYW5hZ2Vycyh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIG1hbmFnZXJcclxuICAgICQuZWFjaCh3b3JsZC5tYW5hZ2Vycy5wYWxsaWVyLCBmdW5jdGlvbiAoaW5kZXgsIHBhbGxpZXIpIHtcclxuICAgICAgICAvLyBPbiByw6ljdXDDqHJlIHNvbiBib3V0b24gZCdhY2hhdFxyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpcmVcIiArIHBhbGxpZXIuaWRjaWJsZSk7XHJcblxyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgYXNzZXogZCdhcmdlbnQgb3UgcXVlIGxlIG1hbmFnZXIgbidlc3QgcGFzIGTDqWrDoCBhY2hldMOpXHJcbiAgICAgICAgaWYgKHBhbGxpZXIuc2V1aWwgPiB3b3JsZC5tb25leSB8fCBidXR0b24uaW5uZXJUZXh0ID09IFwiQWNoZXTDqVwiKSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gbCdhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNpbm9uIG9uIGxlIGTDqXNhY3RpdmVcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4vLyBDYWxjdWxlIGR5bmFtaXF1ZW1lbnQgbGUgbm9tYnJlIGRlIG1hbmFnZXJzIGFjaGV0YWJsZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGJ1eWFibGVNYW5hZ2Vycyh3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFZhcmlhYmxlc1xyXG4gICAgbGV0IG1hbmFnZXJEaXNwbyA9IDA7XHJcbiAgICBsZXQgbm90aWZNYW5hZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWRnZU1hbmFnZXJcIik7XHJcblxyXG4gICAgLy8gUG91ciBjaGFxdWUgbWFuYWdlclxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgbWFuYWdlcikge1xyXG4gICAgICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ29uIGEgbGEgcG9zc2liaWxpdMOpIGQnZW4gYWNoZXRlclxyXG4gICAgICAgIGlmIChtYW5hZ2VyLnNldWlsIDw9IHdvcmxkLm1vbmV5ICYmIG1hbmFnZXIudW5sb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWFuYWdlckRpc3BvKys7XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIFMnaWwgbid5IGEgYXVjdW4gbWFuYWdlciBhY2hldGFibGUsIG9uIGFmZmljaGUgcmllblxyXG4gICAgaWYgKG1hbmFnZXJEaXNwbyA9PSAwKSB7XHJcbiAgICAgICAgbm90aWZNYW5hZ2VyLmlubmVyVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBTaW5vbiBvbiBhZmZpY2hlIGxldXIgcXVhbnRpdMOpIGFjaGV0YWJsZVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbm90aWZNYW5hZ2VyLmlubmVyVGV4dCA9IG1hbmFnZXJEaXNwby50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQWNoYXQgZCd1biBtYW5hZ2VyXHJcbmZ1bmN0aW9uIGJ1eU1hbmFnZXIobWFuYWdlcjogUGFsbGllciwgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCdvbiBhIGFzc2V6IGQnYXJnZW50IHBvdXIgYWNoZXRlciBsZSBtYW5hZ2VyXHJcbiAgICBpZiAobWFuYWdlci5zZXVpbCA8PSB3b3JsZC5tb25leSkge1xyXG4gICAgICAgIC8vIFNpIGMnZXN0IGxlIGNhcywgb24gc291c3RyYWl0IHNvbiBjb8O7dFxyXG4gICAgICAgIHdvcmxkLm1vbmV5IC09IG1hbmFnZXIuc2V1aWw7XHJcblxyXG4gICAgICAgIC8vIE9uIGFmZmljaGUgZW5zdWl0ZSBsZSBub3V2ZWF1IHNvbGRlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgICAgIC8vIE9uIGTDqWJsb3F1ZSBsZSBtYW5hZ2VyXHJcbiAgICAgICAgbWFuYWdlci51bmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgbWF0Y2hJZChtYW5hZ2VyLmlkY2libGUsIHdvcmxkKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlbWVudCBkdSBib3V0b24gSGlyZSBlbiBhY2hldMOpIGV0IGRpc2FibGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlyZVwiICsgbWFuYWdlci5pZGNpYmxlKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJBY2hldMOpXCJcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbWFnZShpZDpudW1iZXIsd29ybGQ6V29ybGQpe1xyXG4kLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24oaW5kZXgscHJvZHVpdCl7XHJcbiAgICBsZXQgc3JjPVwiXCJcclxuICAgIGlmKHByb2R1aXQuaWQ9PWlkKXtcclxuICAgICAgICBzcmM9cHJvZHVpdC5sb2dvXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTb3VyY2UgaW1hZ2U6XCIrcHJvZHVpdC5sb2dvKVxyXG4gICAgICAgIHJldHVybiBzcmM7XHJcbiAgICB9XHJcbn0pXHJcbn0iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG5cclxuLy8gQWZmaWNoYWdlIGRlcyB1bmxvY2tzXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGxldCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFVubG9ja1wiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBEaWFsb2d1ZVxyXG4gICAgbGV0IG1kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG0uYXBwZW5kQ2hpbGQobWQpO1xyXG4gICAgbWQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRpYWxvZ1wiLCBcIm1vZGFsLWxnXCIpO1xyXG4gICAgbWQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRvY3VtZW50XCIpO1xyXG5cclxuICAgIC8vQmFsaXNlIE1vZGFsIENvbnRlbnRcclxuICAgIGxldCBtYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZC5hcHBlbmRDaGlsZChtYyk7XHJcbiAgICBtYy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgICAvL0JhbGlzZSBNb2RhbCBoZWFkZXJcclxuICAgIGxldCBtaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYy5hcHBlbmRDaGlsZChtaCk7XHJcbiAgICBtaC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICAgIC8vQm91dG9uIEZlcm1lciBsYSBmZW7DqnRyZVxyXG4gICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWguYXBwZW5kQ2hpbGQoYik7XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcclxuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1kaXNtaXNzXCIsIFwibW9kYWxcIik7XHJcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJDbG9zZVwiKTtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBzZWxlY3QgYmFycmVcclxuICAgIGxldCBzZWxlY3RCYXJyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgIG1oLmFwcGVuZENoaWxkKHNlbGVjdEJhcnJlKVxyXG4gICAgc2VsZWN0QmFycmUuaWQ9XCJzZWxlY3RCYXJyZVVubG9ja3NcIlxyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uKGluZGV4LHByb2R1Y3Qpe1xyXG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICAgICAgc2VsZWN0QmFycmUuYXBwZW5kQ2hpbGQob3B0KVxyXG4gICAgICAgIG9wdC5pZD1cIm9wdFByb2R1aXRcIitwcm9kdWN0LmlkXHJcbiAgICAgICAgb3B0LnZhbHVlPVwiXCIrcHJvZHVjdC5pZFxyXG4gICAgICAgIG9wdC50ZXh0PXByb2R1Y3QubmFtZVxyXG4gICAgfSlcclxuICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBzZWxlY3RCYXJyZS5hcHBlbmRDaGlsZChvcHQpXHJcbiAgICBvcHQuaWQ9XCJvcHRQcm9kdWl0XCIrMFxyXG4gICAgb3B0LnZhbHVlPVwiXCIrMFxyXG4gICAgb3B0LnRleHQ9XCJUb3VzIGxlcyBwcm9kdWl0c1wiXHJcblxyXG4gICAgJCggc2VsZWN0QmFycmUgKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSlcclxuICAgICAgICBsaXN0VW5sb2NrcyhwYXJzZUludCh0aGlzLnZhbHVlKSxzZXJ2ZXIsd29ybGQpXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1RpdHJlIGRlIGxhIGZlbsOqdHJlXHJcbiAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIG1oLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGVcIik7XHJcbiAgICB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlNb2RhbExhYmVsXCIpO1xyXG4gICAgdC5pbm5lclRleHQgPSBcIkxlcyBVbmxvY2tzXCI7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gQm9keVxyXG4gICAgbGV0IGJvZHlNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1jLmFwcGVuZENoaWxkKGJvZHlNKTtcclxuICAgIGJvZHlNLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1ib2R5XCIpO1xyXG4gICAgYm9keU0uaWQ9XCJtb2RhbFVubG9ja0JvZHlcIjtcclxuXHJcbiAgICAvL1JlbXBsaXNzYWdlIGR1IGJvZHkgYXZlYyBsZXMgZGlmZmVycmVudHMgbWFuYWdlcnNcclxuICAgIC8vZmlsbGluZ0JvZHlNb2RhbFVubG9jayhzZXJ2ZXIsd29ybGQpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmaWxsaW5nQm9keU1vZGFsVW5sb2NrKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVtcGxpc3NhZ2UgbW9kYWwgdW5sb2NrXCIpXHJcblxyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVW5sb2NrQm9keVwiKTtcclxuICAgIC8qXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpOyovXHJcblxyXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInJvdy1jb2xzLTJcIik7Ly9cInJvd1wiLCBcInJvdy1jb2xzLTJcIlxyXG5cclxuXHJcbiAgICAkLmVhY2god29ybGQuYWxsdW5sb2Nrcy5wYWxsaWVyLGZ1bmN0aW9uKGluZGV4LHVubG9jayl7XHJcbiAgICAgICAgLy9DcsOpYXRpb24gZGVzIGxpZ25lcyBkZSBjaGFxdWUgdW5sb2NrXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwidW5sb2NrXCIgKyB1bmxvY2suaWRjaWJsZTtcclxuXHJcbiAgICAgICAgLy9kaXZpc2lvbiBkZSBsYSBsaWduZSBlbiBkZXV4IHBhcnRpZXMgKEltYWdlK0Rlc2NyaXB0aW9uIC8vIFVubG9ja2VkIG91IG5vbilcclxuICAgICAgICBsZXQgY29sSW1hZ2VEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS8vSW1hZ2UgRGVzY3JpcHRpb25cclxuICAgICAgICBsZXQgY29sVW5sb2NrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9BZmZpY2hhZ2UgZXN0IGlsIGTDqXbDqXJvdWlsbMOpID9cclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY29sSW1hZ2VEZXNjKVxyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2xVbmxvY2tlZClcclxuICAgICAgICBjb2xJbWFnZURlc2MuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG4gICAgICAgIGNvbFVubG9ja2VkLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy9BZmZpY2hhZ2UgSWNvbiBVbmxvY2tcclxuICAgICAgICBsZXQgaWNvblVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoaWNvblVubG9jaylcclxuICAgICAgICBpY29uVW5sb2NrLnNyYz1zZXJ2ZXIrdW5sb2NrLmxvZ29cclxuICAgICAgICBpY29uVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJpbWdVbmxvY2tcIilcclxuXHJcbiAgICAgICAgbGV0IG5vbVVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChub21VbmxvY2spXHJcbiAgICAgICAgbm9tVW5sb2NrLmlubmVyVGV4dD11bmxvY2submFtZVxyXG5cclxuICAgICAgICBsZXQgZGVzY3JVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChkZXNjclVubG9jaylcclxuICAgICAgICBkZXNjclVubG9jay5pbm5lclRleHQ9XCJBdWdtZW50YXRpb24gZGUgXCIrdW5sb2NrLnR5cGVyYXRpbytcIiB4XCIrdW5sb2NrLnJhdGlvXHJcblxyXG4gICAgICAgIGxldCBzZXVpbFVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKHNldWlsVW5sb2NrKVxyXG4gICAgICAgIHNldWlsVW5sb2NrLmlubmVyVGV4dD1cIlNldWlsOiBcIit1bmxvY2suc2V1aWxcclxuICAgIH0pXHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8vT24gY2hlcmNoZSDDoCBzYXZvaXIgc2kgdW4gVW5sb2NrIGVzdCBkw6l2ZXJyb3VpbGxhYmxlLnhcclxuZnVuY3Rpb24gdmVyaWZVbmxvY2soaWQ6bnVtYmVyLHdvcmxkOldvcmxkKXtcclxuICAgIC8vbGV0IGlkUHJvZHVjdFxyXG4gICAgLy9pZFByb2R1Y3QgPSB1bmxvY2suaWRjaWJsZTtcclxuICAgICQuZWFjaCh3b3JsZC5hbGx1bmxvY2tzLnBhbGxpZXIsIGZ1bmN0aW9uKGluZGV4LHVubG9jayl7XHJcbiAgICAgICAgaWYodW5sb2NrLmlkY2libGUgIT0gMCl7ICAgIC8vT24gZG9pdCByZWdhcmRlciBpbmRpdmlkdWVsbGVtZW50IHBvdXIgY2hhcXVlIHVubG9jayBzaSBzb24gc2V1aWwgYSDDqXTDqSBhdHRlaW50IHBvdXIgYWN0aXZlciBsZSBib251c1xyXG4gICAgICAgICAgICBsZXQgaWRSZWNoZXJjaGUgPSB1bmxvY2suaWRjaWJsZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih1bmxvY2suaWRjaWJsZT09MCl7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgc2kgdG91cyBsZXMgcHJvZHVpdHMgb250IGF0dGVpbnQgbGUgc2V1aWwgcG91ciBhY3RpdmVyIGwndW5sb2NrXHJcbiAgICAgICAgICAgIC8vIE9uIGRvaXQgcmVnYXJkZXIgc2kgY2hhcXVlIHByb2R1aXQgw6AgYXR0ZWludCBsZSBzZXVpbCBuw6ljZXNzYWlyZSBwb3VyIGVuc3VpdGUgYWN0aXZlciBsZSBib251c1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJpZlNldWlsVW5sb2NrKGlkMTpudW1iZXIsaWQyOm51bWJlcix3b3JsZDpXb3JsZCl7XHJcbiAgICAvL2lkMSA9PT4gaWQgZGUgbCd1bmxvY2sgKGlkUmVjaGVyY8OpKVxyXG4gICAgLy9pZDIgPT0+IGlkIGR1IHByb2R1aXRcclxuXHJcbiAgICAvLyQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LGZ1bmN0aW9uKGluZGV4LHByb2R1Y3Qpe1xyXG4gICAgICAgIC8vaWYoaWRSZWNoZXJjaGU9PXByb2R1Y3QuaWQpe1xyXG5cclxuICAgICAgICAvL31cclxuXHJcbiAgICAvL30pXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpc3RVbmxvY2tzKGlkOm51bWJlcixzZXJ2ZXI6U3RyaW5nLHdvcmxkOldvcmxkKXtcclxuICAgIGNvbnNvbGUubG9nKFwicmVtcGxpc3NhZ2UgbW9kYWwgdW5sb2NrXCIpXHJcblxyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsVW5sb2NrQm9keVwiKTtcclxuICAgIGJvZHkuaW5uZXJIVE1MPVwiXCJcclxuXHJcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicm93LWNvbHMtMlwiKTsvL1wicm93XCIsIFwicm93LWNvbHMtMlwiXHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLmFsbHVubG9ja3MucGFsbGllcixmdW5jdGlvbihpbmRleCx1bmxvY2spe1xyXG5cclxuICAgICAgICBpZih1bmxvY2suaWRjaWJsZT09aWQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj1cIitpZClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy9DcsOpYXRpb24gZGVzIGxpZ25lcyBkZSBjaGFxdWUgdW5sb2NrXHJcbiAgICAgICAgbGV0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwidW5sb2NrXCIgKyB1bmxvY2suaWRjaWJsZTtcclxuXHJcbiAgICAgICAgLy9kaXZpc2lvbiBkZSBsYSBsaWduZSBlbiBkZXV4IHBhcnRpZXMgKEltYWdlK0Rlc2NyaXB0aW9uIC8vIFVubG9ja2VkIG91IG5vbilcclxuICAgICAgICBsZXQgY29sSW1hZ2VEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS8vSW1hZ2UgRGVzY3JpcHRpb25cclxuICAgICAgICBsZXQgY29sVW5sb2NrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9BZmZpY2hhZ2UgZXN0IGlsIGTDqXbDqXJvdWlsbMOpID9cclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY29sSW1hZ2VEZXNjKVxyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2xVbmxvY2tlZClcclxuICAgICAgICBjb2xJbWFnZURlc2MuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG4gICAgICAgIGNvbFVubG9ja2VkLmNsYXNzTGlzdC5hZGQoXCJjb2xcIilcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy9BZmZpY2hhZ2UgSWNvbiBVbmxvY2tcclxuICAgICAgICBsZXQgaWNvblVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoaWNvblVubG9jaylcclxuICAgICAgICBpY29uVW5sb2NrLnNyYz1zZXJ2ZXIrdW5sb2NrLmxvZ29cclxuICAgICAgICBpY29uVW5sb2NrLmNsYXNzTGlzdC5hZGQoXCJpbWdVbmxvY2tcIilcclxuXHJcbiAgICAgICAgbGV0IG5vbVVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChub21VbmxvY2spXHJcbiAgICAgICAgbm9tVW5sb2NrLmlubmVyVGV4dD11bmxvY2submFtZVxyXG5cclxuICAgICAgICBsZXQgZGVzY3JVbmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChkZXNjclVubG9jaylcclxuICAgICAgICBkZXNjclVubG9jay5pbm5lclRleHQ9XCJBdWdtZW50YXRpb24gZGUgXCIrdW5sb2NrLnR5cGVyYXRpbytcIiB4XCIrdW5sb2NrLnJhdGlvXHJcblxyXG4gICAgICAgIGxldCBzZXVpbFVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKHNldWlsVW5sb2NrKVxyXG4gICAgICAgIHNldWlsVW5sb2NrLmlubmVyVGV4dD1cIlNldWlsOiBcIit1bmxvY2suc2V1aWxcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpZD09MCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPVwiKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL0Nyw6lhdGlvbiBkZXMgbGlnbmVzIGRlIGNoYXF1ZSB1bmxvY2tcclxuICAgICAgICBsZXQgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIik7XHJcbiAgICAgICAgY29sLmlkID0gXCJ1bmxvY2tcIiArIHVubG9jay5pZGNpYmxlO1xyXG5cclxuICAgICAgICAvL2RpdmlzaW9uIGRlIGxhIGxpZ25lIGVuIGRldXggcGFydGllcyAoSW1hZ2UrRGVzY3JpcHRpb24gLy8gVW5sb2NrZWQgb3Ugbm9uKVxyXG4gICAgICAgIGxldCBjb2xJbWFnZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLy9JbWFnZSBEZXNjcmlwdGlvblxyXG4gICAgICAgIGxldCBjb2xVbmxvY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikvL0FmZmljaGFnZSBlc3QgaWwgZMOpdsOpcm91aWxsw6kgP1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjb2xJbWFnZURlc2MpXHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNvbFVubG9ja2VkKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5jbGFzc0xpc3QuYWRkKFwiY29sXCIpXHJcbiAgICAgICAgY29sVW5sb2NrZWQuY2xhc3NMaXN0LmFkZChcImNvbFwiKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL0FmZmljaGFnZSBJY29uIFVubG9ja1xyXG4gICAgICAgIGxldCBpY29uVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgICAgIGNvbEltYWdlRGVzYy5hcHBlbmRDaGlsZChpY29uVW5sb2NrKVxyXG4gICAgICAgIGljb25VbmxvY2suc3JjPXNlcnZlcit1bmxvY2subG9nb1xyXG4gICAgICAgIGljb25VbmxvY2suY2xhc3NMaXN0LmFkZChcImltZ1VubG9ja1wiKVxyXG5cclxuICAgICAgICBsZXQgbm9tVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKG5vbVVubG9jaylcclxuICAgICAgICBub21VbmxvY2suaW5uZXJUZXh0PXVubG9jay5uYW1lXHJcblxyXG4gICAgICAgIGxldCBkZXNjclVubG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXHJcbiAgICAgICAgY29sSW1hZ2VEZXNjLmFwcGVuZENoaWxkKGRlc2NyVW5sb2NrKVxyXG4gICAgICAgIGRlc2NyVW5sb2NrLmlubmVyVGV4dD1cIkF1Z21lbnRhdGlvbiBkZSBcIit1bmxvY2sudHlwZXJhdGlvK1wiIHhcIit1bmxvY2sucmF0aW9cclxuXHJcbiAgICAgICAgbGV0IHNldWlsVW5sb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBjb2xJbWFnZURlc2MuYXBwZW5kQ2hpbGQoc2V1aWxVbmxvY2spXHJcbiAgICAgICAgc2V1aWxVbmxvY2suaW5uZXJUZXh0PVwiU2V1aWw6IFwiK3VubG9jay5zZXVpbFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgbGFzdFVwZGF0ZUxpc3QsIHNob3dQcm9kdWN0cywgc3RhcnRQcm9kdWN0IH0gZnJvbSBcIi4vQXBwL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIZWFkZXIsIHRyYW5zZm9ybSB9IGZyb20gXCIuL0FwcC9IZWFkZXJcIlxyXG5pbXBvcnQgeyBzZXRQcm9ncmVzc0JhciB9IGZyb20gXCIuL0FwcC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyBhZGRTZWxlY3RlZCwgYnV5YWJsZVByb2R1Y3RzLCBzaG93U2lkZUJhciB9IGZyb20gXCIuL0FwcC9TaWRlQmFyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlNZW51IH0gZnJvbSBcIi4vQXBwL01lbnVcIjtcclxuaW1wb3J0IHsgYnV5YWJsZU1hbmFnZXJzLCBkaXNwbGF5TWFuYWdlciwgdmVyaWZNYW5hZ2VycyB9IGZyb20gXCIuL01vZGFscy9NYW5hZ2Vyc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VW5sb2NrcyB9IGZyb20gXCIuL01vZGFscy9VbmxvY2tzXCI7XHJcblxyXG5cclxuLy8gVXNlcm5hbWVcclxuZXhwb3J0IHZhciB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcblxyXG4vLyBDaGFuZ2VtZW50IGR1IHBzZXVkb1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcm5hbWUobmV3VXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdXNlcm5hbWUgPSBuZXdVc2VybmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgbmV3VXNlcm5hbWUpO1xyXG5cclxuICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICBoZWFkZXJzOiB7XCJYLXVzZXJcIjogdXNlcm5hbWV9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBVcmwgc2VydmV1clxyXG5leHBvcnQgY29uc3Qgc2VydmV1clVybDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBzZXJ2ZXVyVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQ2hhcmdlbWVudCBkdSBwc2V1ZG8gZHUgam91ZXVyXHJcbiAgICBjb25zb2xlLmxvZyh1c2VybmFtZSk7XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XHJcblxyXG4gICAgLy8gQWZmaWNoYWdlIGR1IG1vbmRlIGR1IGpvdWV1clxyXG4gICAgJC5nZXRKU09OKHNlcnZldXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy93b3JsZFwiLCBmdW5jdGlvbiAod29ybGQ6IFdvcmxkKSB7XHJcbiAgICAgICAgLy8gQWZmaWNoYWdlIGR1IG1vbmRlIGNoYXJnw6lcclxuICAgICAgICBjb25zb2xlLmxvZyh3b3JsZClcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gYXJnZW50IGRlIGJhc2VcclxuICAgICAgICB3b3JsZC5tb25leSA9IDA7XHJcblxyXG4gICAgICAgIC8vIEFmZmljaGFnZSBIVE1MXHJcbiAgICAgICAgZGlzcGxheUhlYWRlcihzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgc2hvd1Byb2R1Y3RzKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBzaG93U2lkZUJhcihzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcbiAgICAgICAgZGlzcGxheU1lbnUod29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNYW5hZ2VyKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBkaXNwbGF5VW5sb2NrcyhzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbnMgZHluYW1pcXVlc1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsIGR1IHNjb3JlXHJcbiAgICAgICAgICAgIGNhbGNTY29yZShzZXJ2ZXVyVXJsLCB3b3JsZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBWw6lyaWZpY2F0aW9uIGFjaGF0cyBtYW5hZ2Vyc1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbE1hbmFnZXJcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdmVyaWZNYW5hZ2Vycyh3b3JsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFmZmljaGFnZSBhY2hldGFibGVzXHJcbiAgICAgICAgICAgIGJ1eWFibGVQcm9kdWN0cyh3b3JsZClcclxuICAgICAgICAgICAgYnV5YWJsZU1hbmFnZXJzKHdvcmxkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpIGwnb3B0aW9uIGQnYWpvdXQgc8OpbGVjdGlvbm7DqWUgZXN0IGxlIG1heCBhY2hldGFibGUsIG9uIHN5bmNocm9uaXNlIGF2ZWMgZW4gZm9uY3Rpb24gZHUgc2NvcmVcclxuICAgICAgICAgICAgLy9pZiAoYWRkU2VsZWN0ZWQgPT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAvL3NldEFkZFByb2R1Y3Qod29ybGQpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBDYWxjdWwgZHUgc2NvcmVcclxuZnVuY3Rpb24gY2FsY1Njb3JlKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIC8vIFBvdXIgY2hhcXVlIHByb2R1aXRcclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuICAgICAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbGUgcHJvZHVpdCBlc3QgZW4gY291cnMgZGUgcHJvZHVjdGlvblxyXG4gICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0ICE9IDApIHtcclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBsZSB0ZW1wcyBkZSBwcm9kdWN0aW9uIHJlc3RhbnRcclxuICAgICAgICAgICAgbGV0IHRpbWVSZW1haW5pbmc6IG51bWJlciA9IERhdGUubm93KCkgLSBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLSB0aW1lUmVtYWluaW5nO1xyXG5cclxuICAgICAgICAgICAgLy8gT24gY2FsY3VsZSBsZSBwb3VyY2VudGFnZSBkZSBwcm9kdWN0aW9uIHJlc3RhbnQgZXQgb24gYWN0dWFsaXNlIGxhIGJhciBkZSBwcm9ncmVzc2lvblxyXG4gICAgICAgICAgICBsZXQgcG91cmNlbnRhZ2U6IG51bWJlciA9IChwcm9kdWN0LnRpbWVsZWZ0ICogMTAwKSAvIHByb2R1Y3Qudml0ZXNzZTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgcG91cmNlbnRhZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2kgbGUgbm91dmVhdSB0ZW1wcyByZXN0YW50IGVzdCBpbmbDqXJpZXVyIG91IMOpZ2FsIMOgIDBcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3QudGltZWxlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gT24gYWpvdXRlIGxlIHJldmVudSBkdSBwcm9kdWl0XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV2ZW51OiBudW1iZXIgPSBwcm9kdWN0LnJldmVudSAqIHByb2R1Y3QucXVhbnRpdGU7XHJcbiAgICAgICAgICAgICAgICBhZGRTY29yZSh3b3JsZCwgcmV2ZW51KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbiByw6lpbml0aWFsaXNlIGxhIHByb2dyZXNzaW9uIGRlIGxhIHByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNpIGxlIHByb2R1aXQgbidlc3QgcGFzIGVuIGNvdXJzIGRlIHByb2R1Y3Rpb24gZXQgYSB1biBtYW5hZ2VyXHJcbiAgICAgICAgZWxzZSBpZiAoKHByb2R1Y3QudGltZWxlZnQgPT0gMCkgJiYgKHByb2R1Y3QubWFuYWdlclVubG9ja2VkID09IHRydWUpKSB7XHJcbiAgICAgICAgICAgIC8vIE9uIGxhbmNlIGxhIHByb2R1Y3Rpb24gZHUgcHJvZHVpdFxyXG4gICAgICAgICAgICBzdGFydFByb2R1Y3QocHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBDYWxjdWwgZHUgc2NvcmVcclxuZnVuY3Rpb24gYWRkU2NvcmUod29ybGQ6IFdvcmxkLCBzY29yZTogbnVtYmVyKSB7XHJcbiAgICAvLyBBam91dCBkZSBsJ2FyZ2VudFxyXG4gICAgd29ybGQubW9uZXkgKz0gc2NvcmU7XHJcblxyXG4gICAgLy8gQWpvdXQgZHUgc2NvcmVcclxuICAgIHdvcmxkLnNjb3JlICs9IHNjb3JlO1xyXG5cclxuICAgIC8vIEFmZmljaGUgZHUgbm91dmVhdSBzb2xkZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSWQoaWQ6IG51bWJlciwgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgaWRQcm9kdWN0XHJcbiAgICAkLmVhY2god29ybGQucHJvZHVjdHMucHJvZHVjdCwgZnVuY3Rpb24gKGluZGV4LCBwcm9kdWN0KSB7XHJcbiAgICAgICAgaWRQcm9kdWN0ID0gcHJvZHVjdC5pZDtcclxuICAgICAgICBpZiAoaWRQcm9kdWN0ID09IGlkKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QubWFuYWdlclVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWl0OiBcIiArIHByb2R1Y3QubmFtZSArIFwiIHVubG9ja2VkOlwiICsgcHJvZHVjdC5tYW5hZ2VyVW5sb2NrZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbihhZGRTZWxlY3RlZDphbnkpe1xyXG4gICAgc3dpdGNoKGFkZFNlbGVjdGVkKSB7IFxyXG4gICAgICAgIGNhc2UgMTogeyBcclxuICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNhc2UgMTA6IHsgXHJcbiAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXNlIDEwMDogeyBcclxuICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICB9IFxyXG4gICAgICAgICBjYXNlIFwiTWF4XCI6IHsgXHJcbiAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgfSBcclxuICAgICAgICBkZWZhdWx0OiB7IFxyXG4gICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgIH0gXHJcbiAgICAgfSBcclxufSovXHJcbi8qXHJcbmZ1bmN0aW9uIGNvbXBhcmFpc29uKHdvcmxkOldvcmxkLG11bHRpcGxpZXI6YW55KXtcclxuXHJcbn0qLyIsImltcG9ydCB7cHJvZ3Jlc3NCYXJMaXN0fSBmcm9tIFwiLi9Qcm9kdWN0c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2dyZXNzQmFyKHNlcnZlciwgcHJvZHVjdCwgY29sKSB7XHJcbiAgICAvLyBCYXJyZSBkZSBwcm9ncmVzc2lvbiAobGlnbmUpXHJcbiAgICBsZXQgcHJvZHVjdFByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0UHJvZ3Jlc3MpO1xyXG4gICAgcHJvZHVjdFByb2dyZXNzLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICBsZXQgYmFyID0gbmV3IFByb2dyZXNzQmFyLkxpbmUocHJvZHVjdFByb2dyZXNzLCB7XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dCcsXHJcbiAgICAgICAgZHVyYXRpb246IDE0MDAsXHJcbiAgICAgICAgY29sb3I6ICcjRkZFQTgyJyxcclxuICAgICAgICB0cmFpbENvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgdHJhaWxXaWR0aDogMSxcclxuICAgICAgICBzdmdTdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9LFxyXG4gICAgICAgIGZyb206IHsgY29sb3I6ICcjRkZFQTgyJyB9LFxyXG4gICAgICAgIHRvOiB7IGNvbG9yOiAnI0VENkE1QScgfSxcclxuICAgICAgICBzdGVwOiAoc3RhdGUsIGJhcikgPT4ge1xyXG4gICAgICAgICAgICBiYXIucGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHN0YXRlLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9ncmVzc0Jhckxpc3RbcHJvZHVjdC5pZF0gPSBiYXI7XHJcbiAgICBiYXIuYW5pbWF0ZSgwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzc0JhcihpZCwgcG91cmNlbnRhZ2UpIHtcclxuICAgIHByb2dyZXNzQmFyTGlzdFtpZF0uc2V0KHBvdXJjZW50YWdlIC8gMTAwKVxyXG4gICAgY29uc29sZS5sb2cocG91cmNlbnRhZ2UvMTAwKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=