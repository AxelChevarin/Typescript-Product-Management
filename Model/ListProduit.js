"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListProduit = /** @class */ (function () {
    function ListProduit() {
        //on declare un nouveau localStorage qui va nous permettre de stocker nos produit
        this.produiDisp = localStorage;
    }
    //methode ajouter qui permet d'ajouter un objet que l'on converti
    ListProduit.prototype.ajouter = function (prod) {
        var monobjet_json = JSON.stringify(prod);
        this.produiDisp.setItem(prod.numProduit.toString(), monobjet_json);
    };
    //methode qui permet de supprimer un element du localStorage
    ListProduit.prototype.supprimer = function (index) {
        this.produiDisp.removeItem(index.toString());
    };
    Object.defineProperty(ListProduit.prototype, "ProduitDisp", {
        get: function () {
            return this.produiDisp;
        },
        set: function (value) {
            this.produiDisp = value;
        },
        enumerable: true,
        configurable: true
    });
    return ListProduit;
}());
exports.default = ListProduit;
