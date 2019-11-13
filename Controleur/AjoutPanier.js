"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListProduit_1 = require("../Model/ListProduit");
var Panier_1 = require("../Model/Panier");
function ajoutPanier(id) {
    var listeProd = new ListProduit_1.default();
    var listPanier = new Panier_1.default();
    var prod = JSON.parse(listeProd.ProduitDisp.getItem(id.toString()));
    listPanier.ajouter(prod);
}
exports.ajoutPanier = ajoutPanier;
