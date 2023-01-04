import {goTo, returnCloseButtons} from "./buttons-cancel-return.js"

const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{

    goTo(".comercio", ".objetivo");
    returnCloseButtons(".button-return", ".button-close", ".button-salir");
    

})

