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
                // Action non prise en compte
            }
        },
        error: function () {
            console.log(content);
        }
    });
}