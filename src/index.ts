import { showProducts } from "./App/Products";
import { displayHeader} from "./App/Header"

var serveurUrl = "https://isiscapitalist.kk.kurasawa.fr/";
var currentWorld;

$(document).ready(function () {
    $.getJSON(serveurUrl + "adventureisis/generic/world", function (world) {
        currentWorld = world;
        console.log(currentWorld)
        // remplir le layout avec les informations globales
        // (nom du monde, argent total....)
        // puis boucler sur chaque produit
        $.each(world.products.product, function (index, product) {
            // remplir le layout avec les infos de chaque produit
            console.log(product.name)
        });
        displayHeader(world, serveurUrl);
        showProducts(serveurUrl, world);

    });
});