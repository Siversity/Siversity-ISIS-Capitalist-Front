import { World, Product, Pallier } from "./Classes/world";
import { serverUrl } from ".";


export var pocketMoney: number;


export type ajaxRequest = {
    type: string,
    content: Product | Pallier
}

export var ajaxRequests: ajaxRequest[] = [];



export function nextAjaxCall() {
    if (ajaxRequests.length) {
        console.log("Fire request")
        sendToServer(ajaxRequests.shift());
    }
    console.log(ajaxRequests.length + " request in queue");
}


// Envoi au serveur
export function sendToServer({ type, content }: ajaxRequest) {

    $.ajax(serverUrl + "adventureisis/generic/" + type, {
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(content),
        statusCode: {
            304: function () {
                console.log("Echec du reset");
            }
        },
        error: function () {
            console.log("Echec de la requete");
        }
    });
}


// Reset world
export function resetWorld() {
    $.ajax(serverUrl + "adventureisis/generic/world", {
        type: "DELETE",
        statusCode: {
            304: function () {
                console.log("Echec du reset");
            }
        },
        error: function () {
            console.log("Echec de la requete");
        }
    }).done(function () { location.reload(); });
}