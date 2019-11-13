"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListProduit_1 = require("../Model/ListProduit");
function detail(id) {
    var listeProd = new ListProduit_1.default();
    var prod = JSON.parse(listeProd.ProduitDisp.getItem(id.toString()));
    document.getElementById("titre").innerHTML = prod._nom;
    document.getElementById("prix").innerHTML = prod._prix + "$CAD";
    document.getElementById("description").innerHTML = prod._desctiption;
}
exports.detail = detail;
