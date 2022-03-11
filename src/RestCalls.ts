import { World, Product, Pallier } from "./Classes/world";
import { serverUrl } from ".";

// Envoi au serveur
export function sendToServer(type: string, content: any) {
    $.ajax(serverUrl + "adventureisis/generic/" + type, {
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