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
    navbar.classList.add("navbar");
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
    managers.innerHTML = '<button class="modalManager">Managers</button>';
    //Création investors
    var investors = document.createElement("div");
    navbar.appendChild(investors);
    investors.classList.add("investors");
    investors.innerHTML = "Investors";
    //Création Modal
    var modalManager = document.getElementById("modal-bg");
    modalManager.innerHTML = '<div class="modal" id="modal"></div>';
    listManagers(world, server);
}
function listManagers(world, server) {
    var container = document.getElementById("modal");
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
    });
}
/*
<div id="managers" class="modal fade">
 <div>



 </div>

 <div class="modal-dialog" role="document">
 <div class="modal-content">
 <div class="modal-header">
 <button type="button" class="close" data-dismiss="modal"
aria-label="Close"><span aria-hidden="true">&times;</span>
 </button>
 <h4 class="modal-title" id="myModalLabel">Titre principal</h4>
 </div>
 <div class="modal-body">
 </div>
 <div class="modal-footer">
 <button type="button" class="btn btn-default"
data-dismiss="modal">Close
 </button>
 </div>
 </div>
 </div>
</div>

*/ 


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
        image.classList.add("productIcons");
        if (product.quantite == 0) {
            console.log("Pas débloqué");
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
        productButton.innerHTML = "+" + 1;
        // Coût ajout level (colonne)
        var productCost = document.createElement("div");
        productContainer.appendChild(productCost);
        productCost.classList.add("col", "bccFont", "text-center");
        productCost.innerHTML = product.cout.toString();
    });
}
function startProduct(product) {
    if (verifProduct(product)) {
        console.log("Lancement de la production de " + product.name);
        product.timeleft = product.vitesse;
        ___WEBPACK_IMPORTED_MODULE_1__.lastUpdateList[product.id] = Date.now();
        (0,_ProgressBar__WEBPACK_IMPORTED_MODULE_0__.setProgressBar)(product.id, 100);
    }
}
function verifProduct(product) {
    if ((product.quantite > 0) && (product.timeleft == 0)) {
        return true;
    }
    else {
        return false;
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
/* harmony export */   "listAddProducts": () => (/* binding */ listAddProducts),
/* harmony export */   "showSideBar": () => (/* binding */ showSideBar)
/* harmony export */ });
var listAddProducts = ["+1", "+10", "+100", "+Max"];
function showSideBar(server, world) {
    var container = document.getElementById("products");
    var sideContainer = document.createElement("div");
    container.appendChild(sideContainer);
    sideContainer.id = "sideMenu";
    sideContainer.classList.add("position-absolute", "top-50", "end-0", "translate-middle-y");
    var listButton = document.createElement("div");
    sideContainer.appendChild(listButton);
    listButton.classList.add("btn-group-vertical", "sideContainer");
    listButton.setAttribute("role", "group");
    listAddProducts.forEach(function (addNumber) {
        var addNumberInput = document.createElement("input");
        listButton.appendChild(addNumberInput);
        addNumberInput.id = "button" + addNumber;
        addNumberInput.type = "radio";
        addNumberInput.classList.add("btn-check");
        addNumberInput.name = "btnradio";
        addNumberInput.autocomplete = "off";
        if (addNumber == "+1") {
            addNumberInput.setAttribute("checked", "");
        }
        var addNumberButton = document.createElement("label");
        listButton.appendChild(addNumberButton);
        addNumberButton.classList.add("addButton", "addButtonOutline", "align-middle");
        addNumberButton.setAttribute("for", addNumberInput.id);
        addNumberButton.innerHTML = addNumber;
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
/* harmony export */   "lastUpdateList": () => (/* binding */ lastUpdateList),
/* harmony export */   "progressBarList": () => (/* binding */ progressBarList)
/* harmony export */ });
/* harmony import */ var _App_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/Products */ "./src/App/Products.ts");
/* harmony import */ var _App_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Header */ "./src/App/Header.ts");
/* harmony import */ var _App_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/ProgressBar */ "./src/App/ProgressBar.js");
/* harmony import */ var _App_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/SideBar */ "./src/App/SideBar.ts");
/* harmony import */ var _App_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App/Menu */ "./src/App/Menu.ts");





var serveurUrl = "https://isiscapitalist.kk.kurasawa.fr/";
var currentWorld;
$(document).ready(function () {
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        currentWorld = world;
        console.log(currentWorld);
        // remplir le layout avec les informations globales
        // (nom du monde, argent total....)
        // puis boucler sur chaque produit
        $.each(world.products.product, function (index, product) {
        });
        (0,_App_Header__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(serveurUrl, world);
        (0,_App_Products__WEBPACK_IMPORTED_MODULE_0__.showProducts)(serveurUrl, world);
        (0,_App_Menu__WEBPACK_IMPORTED_MODULE_4__.displayMenu)(world, serveurUrl);
        (0,_App_SideBar__WEBPACK_IMPORTED_MODULE_3__.showSideBar)(serveurUrl, world);
        setInterval(function () { calcScore(serveurUrl, currentWorld); }, 100);
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
                addScore(world, product.revenu);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvSGVhZGVyLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvTWVudS50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvQXBwL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL3RwdGVzdC8uL3NyYy9BcHAvU2lkZUJhci50cyIsIndlYnBhY2s6Ly90cHRlc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHB0ZXN0Ly4vc3JjL0FwcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHB0ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cHRlc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RwdGVzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5cclxuLy8gQ3LDqWF0aW9uIGNvbnRhaW5lciBkdSBoZWFkZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIZWFkZXIoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBwcmVtacOocmUgY29sb25lIGF2ZWMgbGUgbm9tIGV0IGxlIGxvZ29cclxuICAgIGxldCBtb25kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9uZGUpO1xyXG4gICAgbW9uZGUuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcIm1vbmRlXCIsIFwiYmNjRm9udFwiKTtcclxuXHJcbiAgICAvL0xvZ29cclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICAgIGxvZ28uc3JjID0gc2VydmVyICsgd29ybGQubG9nbztcclxuXHJcbiAgICAvL05vbVxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1vbmRlLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gXCIgXCIgKyB3b3JsZC5uYW1lO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIHNlY29uZCBlbnTDqnRlLCBsJ2FyZ2VudFxyXG4gICAgbGV0IG1vbmV5Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbmV5Q29sKVxyXG4gICAgbW9uZXlDb2wuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIilcclxuXHJcbiAgICAvL0wnYXJnZW50XHJcbiAgICBsZXQgbW9uZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9uZXlDb2wuYXBwZW5kQ2hpbGQobW9uZXkpO1xyXG4gICAgbW9uZXkuaWQgPSBcIndvcmxkTW9uZXlcIjtcclxuICAgIG1vbmV5LmNsYXNzTGlzdC5hZGQoXCJtb25leVwiKTtcclxuICAgIG1vbmV5LmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcblxyXG4gICAgLy9DcsOpYXRpb24gZGVybmllciBlbnTDqHRlLCBVc2VyIElEXHJcbiAgICBsZXQgaWRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlkQ29sKTtcclxuICAgIGlkQ29sLmNsYXNzTGlzdC5hZGQoXCJjb2xcIiwgXCJiY2NGb250XCIpO1xyXG5cclxuICAgIC8vVXNlciBJRFxyXG4gICAgbGV0IHVzZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZENvbC5hcHBlbmRDaGlsZCh1c2VySWQpO1xyXG4gICAgdXNlcklkLmNsYXNzTGlzdC5hZGQoXCJ1c2VySWRcIik7XHJcbiAgICB1c2VySWQuaW5uZXJIVE1MID0gXCJJRDpcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWxldXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKHZhbGV1ciA8IDEwMDApXHJcbiAgICAgICAgcmVzID0gdmFsZXVyLnRvRml4ZWQoMik7XHJcbiAgICBlbHNlIGlmICh2YWxldXIgPCAxMDAwMDAwKVxyXG4gICAgICAgIHJlcyA9IHZhbGV1ci50b0ZpeGVkKDApO1xyXG4gICAgZWxzZSBpZiAodmFsZXVyID49IDEwMDAwMDApIHtcclxuICAgICAgICByZXMgPSB2YWxldXIudG9QcmVjaXNpb24oNCk7XHJcbiAgICAgICAgcmVzID0gcmVzLnJlcGxhY2UoL2VcXCsoLiopLywgXCIgMTA8c3VwPiQxPC9zdXA+XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZCwgUHJvZHVjdCwgUGFsbGllciB9IGZyb20gXCIuLi9DbGFzc2VzL3dvcmxkXCI7XHJcblxyXG4vLyBDcsOpYXRpb24gY29udGFpbmVyIGR1IGhlYWRlclxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1lbnUod29ybGQ6IFdvcmxkLCBzZXJ2ZXI6IHN0cmluZykge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBuYXZiYXJcclxuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiB1bmxvY2tzXHJcbiAgICBsZXQgdW5sb2NrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQodW5sb2Nrcyk7XHJcbiAgICB1bmxvY2tzLmNsYXNzTGlzdC5hZGQoXCJ1bmxvY2tzXCIpO1xyXG4gICAgdW5sb2Nrcy5pbm5lckhUTUwgPSBcIlVubG9ja3NcIjtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBjYXNoIHVwZ3JhZGVzXHJcbiAgICBsZXQgY2FzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY2FzaCk7XHJcbiAgICBjYXNoLmNsYXNzTGlzdC5hZGQoXCJjYXNoXCIpO1xyXG4gICAgY2FzaC5pbm5lckhUTUwgPSBcIkNhc2ggVXBncmFkZXNcIjtcclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBhbmdlbHMgdXBncmFkZXNcclxuICAgIGxldCBhbmdlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFuZ2Vscyk7XHJcbiAgICBhbmdlbHMuY2xhc3NMaXN0LmFkZChcImFuZ2Vsc1wiKTtcclxuICAgIGFuZ2Vscy5pbm5lckhUTUwgPSBcIkFuZ2VscyB1cGdyYWRlc1wiO1xyXG5cclxuICAgIC8vQ3LDqWF0aW9uIG1hbmFnZXJzXHJcbiAgICBsZXQgbWFuYWdlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1hbmFnZXJzKTtcclxuICAgIG1hbmFnZXJzLmNsYXNzTGlzdC5hZGQoXCJtYW5hZ2Vyc1wiKTtcclxuICAgIG1hbmFnZXJzLmlubmVySFRNTCA9ICc8YnV0dG9uIGNsYXNzPVwibW9kYWxNYW5hZ2VyXCI+TWFuYWdlcnM8L2J1dHRvbj4nO1xyXG5cclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBpbnZlc3RvcnNcclxuICAgIGxldCBpbnZlc3RvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGludmVzdG9ycyk7XHJcbiAgICBpbnZlc3RvcnMuY2xhc3NMaXN0LmFkZChcImludmVzdG9yc1wiKTtcclxuICAgIGludmVzdG9ycy5pbm5lckhUTUwgPSBcIkludmVzdG9yc1wiO1xyXG5cclxuXHJcbiAgICAvL0Nyw6lhdGlvbiBNb2RhbFxyXG4gICAgbGV0IG1vZGFsTWFuYWdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYmdcIik7XHJcbiAgICBtb2RhbE1hbmFnZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtb2RhbFwiIGlkPVwibW9kYWxcIj48L2Rpdj4nO1xyXG4gICAgbGlzdE1hbmFnZXJzKHdvcmxkLHNlcnZlcik7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0TWFuYWdlcnMod29ybGQ6IFdvcmxkLCBzZXJ2ZXI6IHN0cmluZykge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XHJcblxyXG4gICAgJC5lYWNoKHdvcmxkLm1hbmFnZXJzLnBhbGxpZXIsIGZ1bmN0aW9uIChpbmRleCwgcGFsbGllcikge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGxpZ25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlnbmUpO1xyXG4gICAgICAgIGxpZ25lLmlkID0gXCJwXCIgKyBwYWxsaWVyLm5hbWVcclxuICAgICAgICBsaWduZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRyZSAobGlnbmUpXHJcbiAgICAgICAgbGV0IG1hbmFnZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsaWduZS5hcHBlbmRDaGlsZChtYW5hZ2VyTmFtZSk7XHJcbiAgICAgICAgbWFuYWdlck5hbWUuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgICAgICBtYW5hZ2VyTmFtZS5pbm5lckhUTUwgPSBwYWxsaWVyLm5hbWU7XHJcblxyXG4gICAgICAgIC8vIEltYWdlIChsaWduZSlcclxuICAgICAgICBsZXQgbWFuYWdlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsaWduZS5hcHBlbmRDaGlsZChtYW5hZ2VySW1hZ2UpO1xyXG4gICAgICAgIG1hbmFnZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgbWFuYWdlckltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFuYWdlckltYWdlXCIpXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VydmVyICsgcGFsbGllci5sb2dvXHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuLypcclxuPGRpdiBpZD1cIm1hbmFnZXJzXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCI+XHJcbiA8ZGl2PlxyXG5cclxuXHJcblxyXG4gPC9kaXY+XHJcblxyXG4gPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbmFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiA8L2J1dHRvbj5cclxuIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJteU1vZGFsTGFiZWxcIj5UaXRyZSBwcmluY2lwYWw8L2g0PlxyXG4gPC9kaXY+XHJcbiA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gPC9kaXY+XHJcbiA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXHJcbmRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2VcclxuIDwvYnV0dG9uPlxyXG4gPC9kaXY+XHJcbiA8L2Rpdj5cclxuIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiovIiwiaW1wb3J0IHsgV29ybGQsIFByb2R1Y3QsIFBhbGxpZXIgfSBmcm9tIFwiLi4vQ2xhc3Nlcy93b3JsZFwiO1xyXG5pbXBvcnQgeyBhZGRQcm9ncmVzc0Jhciwgc2V0UHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuaW1wb3J0IHsgcHJvZ3Jlc3NCYXJMaXN0LCBsYXN0VXBkYXRlTGlzdCB9IGZyb20gXCIuLlwiO1xyXG5cclxuLy8gRm9uY3Rpb24gcHJpbmNpcGFsZSBkJ2FwcGVsIGRlcyBwcm9kdWl0c1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2R1Y3RzKHNlcnZlcjogc3RyaW5nLCB3b3JsZDogV29ybGQpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RzXCIpO1xyXG5cclxuICAgICQuZWFjaCh3b3JsZC5wcm9kdWN0cy5wcm9kdWN0LCBmdW5jdGlvbiAoaW5kZXgsIHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2wpO1xyXG4gICAgICAgIGNvbC5pZCA9IFwicFwiICsgcHJvZHVjdC5pZFxyXG4gICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZG91YmxlQm9yZGVyUHJvZHVjdFwiKTtcclxuXHJcbiAgICAgICAgLy8gVGl0cmUgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0VGl0bGUpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiLCBcImJjY0ZvbnRcIik7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmlubmVySFRNTCA9IHByb2R1Y3QubmFtZTtcclxuXHJcbiAgICAgICAgLy8gSW1hZ2UgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChwcm9kdWN0SW1hZ2UpO1xyXG4gICAgICAgIHByb2R1Y3RJbWFnZS5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwicHJvZHVjdEltYWdlXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgcHJvZHVjdEltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdEljb25zXCIpXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucXVhbnRpdGUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcyBkw6libG9xdcOpXCIpXHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFByb2R1Y3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlLnNyYyA9IHNlcnZlciArIHByb2R1Y3QubG9nb1xyXG4gICAgICAgIC8vIEFqb3V0IGV2ZW50IHByb2R1Y3Rpb25cclxuICAgICAgICAkKGltYWdlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UHJvZHVjdChwcm9kdWN0KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCYXJyZSBkZSBwcm9ncmVzc2lvblxyXG4gICAgICAgIGFkZFByb2dyZXNzQmFyKHNlcnZlciwgcHJvZHVjdCwgY29sKTtcclxuXHJcbiAgICAgICAgLy8gTGV2ZWwgLS0+IFF1YW50aXTDqSAoY29sb25uZSlcclxuICAgICAgICBsZXQgcHJvZHVjdFF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RRdGUpO1xyXG4gICAgICAgIHByb2R1Y3RRdGUuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcInByb2R1Y3RMZXZlbFwiKTtcclxuICAgICAgICBsZXQgbGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBwcm9kdWN0UXRlLmFwcGVuZENoaWxkKGxldmVsKTtcclxuICAgICAgICBsZXZlbC5jbGFzc0xpc3QuYWRkKFwiYmNjRm9udFwiKTtcclxuICAgICAgICBsZXZlbC5pbm5lckhUTUwgPSBwcm9kdWN0LnF1YW50aXRlLnRvU3RyaW5nKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgKGxpZ25lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQocHJvZHVjdENvbnRhaW5lcik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibXQtM1wiKTtcclxuXHJcbiAgICAgICAgLy8gTmJyIGxldmVsIMOgIGFjaGV0ZXIgKGNvbG9ubmUpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdEFkZCk7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5jbGFzc0xpc3QuYWRkKFwiY29sXCIsIFwiZC1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiKTtcclxuICAgICAgICBsZXQgcHJvZHVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcHJvZHVjdEFkZC5hcHBlbmRDaGlsZChwcm9kdWN0QnV0dG9uKTtcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLmlkID0gXCJhZGRcIiArIHByb2R1Y3QuaWRcclxuICAgICAgICBwcm9kdWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHByb2R1Y3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFByb2R1Y3RcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgcHJvZHVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIiArIDE7XHJcblxyXG4gICAgICAgIC8vIENvw7t0IGFqb3V0IGxldmVsIChjb2xvbm5lKVxyXG4gICAgICAgIGxldCBwcm9kdWN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29zdCk7XHJcbiAgICAgICAgcHJvZHVjdENvc3QuY2xhc3NMaXN0LmFkZChcImNvbFwiLCBcImJjY0ZvbnRcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICBwcm9kdWN0Q29zdC5pbm5lckhUTUwgPSBwcm9kdWN0LmNvdXQudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3RhcnRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIGlmICh2ZXJpZlByb2R1Y3QocHJvZHVjdCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhbmNlbWVudCBkZSBsYSBwcm9kdWN0aW9uIGRlIFwiICsgcHJvZHVjdC5uYW1lKTtcclxuICAgICAgICBwcm9kdWN0LnRpbWVsZWZ0ID0gcHJvZHVjdC52aXRlc3NlO1xyXG4gICAgICAgIGxhc3RVcGRhdGVMaXN0W3Byb2R1Y3QuaWRdID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRQcm9ncmVzc0Jhcihwcm9kdWN0LmlkLCAxMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcmlmUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHByb2R1Y3QucXVhbnRpdGUgPiAwKSAmJiAocHJvZHVjdC50aW1lbGVmdCA9PSAwKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtXb3JsZCwgUHJvZHVjdCwgUGFsbGllcn0gZnJvbSBcIi4uL0NsYXNzZXMvd29ybGRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QWRkUHJvZHVjdHM6IHN0cmluZ1tdID0gW1wiKzFcIiwgXCIrMTBcIiwgXCIrMTAwXCIsIFwiK01heFwiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZUJhcihzZXJ2ZXI6IHN0cmluZywgd29ybGQ6IFdvcmxkKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbiAgICBsZXQgc2lkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUNvbnRhaW5lcik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmlkID0gXCJzaWRlTWVudVwiO1xyXG4gICAgc2lkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9zaXRpb24tYWJzb2x1dGVcIiwgXCJ0b3AtNTBcIiwgXCJlbmQtMFwiLCBcInRyYW5zbGF0ZS1taWRkbGUteVwiKTtcclxuXHJcbiAgICBsZXQgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xyXG4gICAgbGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLWdyb3VwLXZlcnRpY2FsXCIsIFwic2lkZUNvbnRhaW5lclwiKTtcclxuICAgIGxpc3RCdXR0b24uc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImdyb3VwXCIpO1xyXG5cclxuICAgIGxpc3RBZGRQcm9kdWN0cy5mb3JFYWNoKGFkZE51bWJlciA9PiB7XHJcblxyXG4gICAgICAgIGxldCBhZGROdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsaXN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZE51bWJlcklucHV0KTtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5pZCA9IFwiYnV0dG9uXCIgKyBhZGROdW1iZXI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICBhZGROdW1iZXJJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNoZWNrXCIpO1xyXG4gICAgICAgIGFkZE51bWJlcklucHV0Lm5hbWUgPSBcImJ0bnJhZGlvXCI7XHJcbiAgICAgICAgYWRkTnVtYmVySW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxyXG4gICAgICAgIGlmIChhZGROdW1iZXIgPT0gXCIrMVwiKSB7XHJcbiAgICAgICAgICAgIGFkZE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWRkTnVtYmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkTnVtYmVyQnV0dG9uKTtcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEJ1dHRvblwiLCBcImFkZEJ1dHRvbk91dGxpbmVcIiwgXCJhbGlnbi1taWRkbGVcIik7XHJcbiAgICAgICAgYWRkTnVtYmVyQnV0dG9uLnNldEF0dHJpYnV0ZShcImZvclwiLCBhZGROdW1iZXJJbnB1dC5pZClcclxuICAgICAgICBhZGROdW1iZXJCdXR0b24uaW5uZXJIVE1MID0gYWRkTnVtYmVyO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG5cclxufSIsImltcG9ydCB7V29ybGQsIFByb2R1Y3QsIFBhbGxpZXJ9IGZyb20gXCIuL0NsYXNzZXMvd29ybGRcIjtcclxuaW1wb3J0IHsgc2hvd1Byb2R1Y3RzIH0gZnJvbSBcIi4vQXBwL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIZWFkZXIsIHRyYW5zZm9ybX0gZnJvbSBcIi4vQXBwL0hlYWRlclwiXHJcbmltcG9ydCB7IHNldFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vQXBwL1Byb2dyZXNzQmFyXCI7XHJcbmltcG9ydCB7IHNob3dTaWRlQmFyIH0gZnJvbSBcIi4vQXBwL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9BcHAvTWVudVwiO1xyXG5cclxuXHJcbnZhciBzZXJ2ZXVyVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vaXNpc2NhcGl0YWxpc3Qua2sua3VyYXNhd2EuZnIvXCI7XHJcbnZhciBjdXJyZW50V29ybGQ6IFdvcmxkO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJC5nZXRKU09OKHNlcnZldXJVcmwgKyBcImFkdmVudHVyZWlzaXMvZ2VuZXJpYy93b3JsZFwiLCBmdW5jdGlvbiAod29ybGQpIHtcclxuICAgICAgICBjdXJyZW50V29ybGQgPSB3b3JsZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50V29ybGQpXHJcbiAgICAgICAgLy8gcmVtcGxpciBsZSBsYXlvdXQgYXZlYyBsZXMgaW5mb3JtYXRpb25zIGdsb2JhbGVzXHJcbiAgICAgICAgLy8gKG5vbSBkdSBtb25kZSwgYXJnZW50IHRvdGFsLi4uLilcclxuICAgICAgICAvLyBwdWlzIGJvdWNsZXIgc3VyIGNoYXF1ZSBwcm9kdWl0XHJcbiAgICAgICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwbGF5SGVhZGVyKHNlcnZldXJVcmwsIHdvcmxkKTtcclxuICAgICAgICBzaG93UHJvZHVjdHMoc2VydmV1clVybCwgd29ybGQpO1xyXG4gICAgICAgIGRpc3BsYXlNZW51KHdvcmxkLHNlcnZldXJVcmwpXHJcbiAgICAgICAgc2hvd1NpZGVCYXIoc2VydmV1clVybCwgd29ybGQpO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgY2FsY1Njb3JlKHNlcnZldXJVcmwsIGN1cnJlbnRXb3JsZCk7IH0sIDEwMCk7XHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9ncmVzc0Jhckxpc3Q6IGFueVtdID0gW107XHJcbmV4cG9ydCBjb25zdCBsYXN0VXBkYXRlTGlzdCA6IG51bWJlcltdID0gW107XHJcblxyXG5mdW5jdGlvbiBjYWxjU2NvcmUoc2VydmVyOiBzdHJpbmcsIHdvcmxkOiBXb3JsZCkge1xyXG4gICAgJC5lYWNoKHdvcmxkLnByb2R1Y3RzLnByb2R1Y3QsIGZ1bmN0aW9uIChpbmRleCwgcHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0LnRpbWVsZWZ0ICE9IDApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVSZW1haW5pbmc6IG51bWJlciA9IERhdGUubm93KCkgLSBsYXN0VXBkYXRlTGlzdFtwcm9kdWN0LmlkXTtcclxuICAgICAgICAgICAgcHJvZHVjdC50aW1lbGVmdCA9IHByb2R1Y3QudGltZWxlZnQgLSB0aW1lUmVtYWluaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvdXJjZW50YWdlOiBudW1iZXIgPSAocHJvZHVjdC50aW1lbGVmdCAqIDEwMCkgLyBwcm9kdWN0LnZpdGVzc2U7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKHByb2R1Y3QuaWQsIHBvdXJjZW50YWdlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVsZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGUgcHJvZHVpdCBcIiArIHByb2R1Y3QubmFtZSArIFwiIGEgcmFwcG9ydMOpIFwiICsgcHJvZHVjdC5yZXZlbnUpO1xyXG4gICAgICAgICAgICAgICAgYWRkU2NvcmUod29ybGQsIHByb2R1Y3QucmV2ZW51KTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudGltZWxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3NCYXIocHJvZHVjdC5pZCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFNjb3JlKHdvcmxkOiBXb3JsZCwgc2NvcmU6IG51bWJlcikge1xyXG4gICAgd29ybGQubW9uZXkgPSB3b3JsZC5tb25leSArIHNjb3JlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JsZE1vbmV5XCIpLmlubmVySFRNTCA9IHRyYW5zZm9ybSh3b3JsZC5tb25leSk7XHJcbn0iLCJpbXBvcnQge3Byb2dyZXNzQmFyTGlzdH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZ3Jlc3NCYXIoc2VydmVyLCBwcm9kdWN0LCBjb2wpIHtcclxuICAgIC8vIEJhcnJlIGRlIHByb2dyZXNzaW9uIChsaWduZSlcclxuICAgIGxldCBwcm9kdWN0UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29sLmFwcGVuZENoaWxkKHByb2R1Y3RQcm9ncmVzcyk7XHJcbiAgICBwcm9kdWN0UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIGxldCBiYXIgPSBuZXcgUHJvZ3Jlc3NCYXIuTGluZShwcm9kdWN0UHJvZ3Jlc3MsIHtcclxuICAgICAgICBzdHJva2VXaWR0aDogMTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0JyxcclxuICAgICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgICAgICBjb2xvcjogJyNGRkVBODInLFxyXG4gICAgICAgIHRyYWlsQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICB0cmFpbFdpZHRoOiAxLFxyXG4gICAgICAgIHN2Z1N0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH0sXHJcbiAgICAgICAgZnJvbTogeyBjb2xvcjogJyNGRkVBODInIH0sXHJcbiAgICAgICAgdG86IHsgY29sb3I6ICcjRUQ2QTVBJyB9LFxyXG4gICAgICAgIHN0ZXA6IChzdGF0ZSwgYmFyKSA9PiB7XHJcbiAgICAgICAgICAgIGJhci5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb2dyZXNzQmFyTGlzdFtwcm9kdWN0LmlkXSA9IGJhcjtcclxuICAgIGJhci5hbmltYXRlKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGlkLCBwb3VyY2VudGFnZSkge1xyXG4gICAgcHJvZ3Jlc3NCYXJMaXN0W2lkXS5zZXQocG91cmNlbnRhZ2UgLyAxMDApXHJcbiAgICBjb25zb2xlLmxvZyhwb3VyY2VudGFnZS8xMDApXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==