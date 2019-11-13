"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit = /** @class */ (function () {
    function Produit(numProduit, nom, prix, desctiption) {
        this._numProduit = numProduit;
        this._nom = nom;
        this._prix = prix;
        this._desctiption = desctiption;
    }
    Produit.prototype.affichePanier = function () {
        var location = document.getElementById('listPanier1');
        var div = document.createElement("div");
        div.innerHTML = "<div class=\"col-md-3 col-xs-12 col-sm-6\">\n" +
            "                           <div class=\"thumbnail\">\n" +
            "                               <a href=\"w3images/lights.jpg\">\n" +
            "                                   <img src=\"w3images/lights.jpg\" alt=\"Lights\" style=\"width:100%\" class=\"img-responsive\">\n" +
            "                                            <div class=\"caption\">\n" +
            "                                                <p>\"" + this._nom + "\"</p>\n" +
            "                                                <p><b>\"" + this._prix + "\"</b></p>\n" +
            "                                            </div>\n" +
            "                               </a>\n" +
            "                               </div>\n" +
            "                       </div>";
        location.appendChild(div);
        var idBtn;
        idBtn = "btn" + this._numProduit;
        return idBtn;
    };
    Object.defineProperty(Produit.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produit.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (value) {
            this._prix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produit.prototype, "desctiption", {
        get: function () {
            return this._desctiption;
        },
        set: function (value) {
            this._desctiption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produit.prototype, "numProduit", {
        get: function () {
            return this._numProduit;
        },
        set: function (value) {
            this._numProduit = value;
        },
        enumerable: true,
        configurable: true
    });
    return Produit;
}());
exports.default = Produit;
