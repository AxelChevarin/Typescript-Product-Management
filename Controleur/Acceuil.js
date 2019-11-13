"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListProduit_1 = require("../Model/ListProduit");
var Produit_1 = require("../Model/Produit");
function Acceuil() {
    var test = new Produit_1.default(1, "Chaussure", 23, "Chaussure taille x");
    var test2 = new Produit_1.default(2, "Telephone", 500, "test");
    var test3 = new Produit_1.default(3, "ordinateur", 1200, "test");
    var test4 = new Produit_1.default(4, "snow", 50, "test");
    var listeProd = new ListProduit_1.default();
    /*let idBtn1 = test.afficheProduit();
    let idbtn2 = test2.afficheProduit();
    let idbtn3 = test3.afficheProduit();
    let idbtn4 = test4.afficheProduit();*/
    for (var i = 1; i <= listeProd.ProduitDisp.length; i++) {
        var prod = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()));
        var nom = prod._nom;
        var prix = prod._prix;
        var numProduit = prod._numProduit;
        afficheProduit(nom, prix, numProduit);
    }
}
exports.Acceuil = Acceuil;
function afficheProduit(nom, prix, numProduit) {
    var location = document.getElementById('listProd');
    var div = document.createElement("div");
    div.innerHTML = "<div class=\"col-md-3 col-xs-12 col-sm-6\">\n" +
        "                           <div class=\"thumbnail\">\n" +
        "                               <a href=\"Details.html?id=" + numProduit + "\">\n" +
        "                                   <img src=\"http://lorempixel.com/80/80/\" alt=\"Lights\" style=\"width:100%\" class=\"img-responsive\">\n" +
        "                                            <div class=\"caption\">\n" +
        "                                                <p>" + nom + "</p></a>\n" +
        "                                                <p><b>" + prix + " $CAD</b></p>\n" +
        "                                            </div>\n" +
        "                               \n" +
        "                                   <button type=\"button\" class=\"btn btn-success\" id=\"" + numProduit + "\"><span class=\"glyphicon glyphicon-shopping-cart\"></span></button>\n" +
        "                               </div>\n" +
        "                       </div>" +
        "<script>document.getElementById(\"" + numProduit + "\").addEventListener('click', function() { " +
        "window.Action.ajoutPanier(" + numProduit + ");})</script>";
    location.appendChild(div);
    var idBtn;
    idBtn = "btn" + numProduit;
    return idBtn;
}
