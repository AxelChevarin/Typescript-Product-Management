"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Panier = /** @class */ (function () {
    function Panier() {
        this._listProduit = localStorage;
    }
    Panier.prototype.ajouter = function (prod) {
        var monobjet_json = JSON.stringify(prod);
        this._listProduit.setItem(prod.numProduit.toString(), monobjet_json);
    };
    Object.defineProperty(Panier.prototype, "listProduit", {
        get: function () {
            return this._listProduit;
        },
        set: function (value) {
            this._listProduit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Panier.prototype, "total", {
        get: function () {
            return this._total;
        },
        set: function (value) {
            this._total = value;
        },
        enumerable: true,
        configurable: true
    });
    return Panier;
}());
exports.default = Panier;
