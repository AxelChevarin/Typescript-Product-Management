"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = require("../Model/Produit");
var $ = require("jquery");
var ListProduit_1 = require("../Model/ListProduit");
var Admin = /** @class */ (function () {
    function Admin() {
        this.listeProd = new ListProduit_1.default();
    }
    //methode qui permet d'ajouter un produit
    Admin.prototype.ajouterProduit = function () {
        var nomProduit = document.getElementById("nomProduit").value; //on recupere la valeur pacer dans l'input pour le nom
        var descriptionProduit = document.getElementById("descriptionProduit").value; //on recupere la valeur pacer dans l'input pour la description
        var prixProduit = parseFloat(document.getElementById("PrixProduit").value); //on recupere la valeur pacer dans l'input pour le prix
        var indice = this.listeProd.ProduitDisp.length + 1; //on recupère la taille du localstorage on lui rajoute plus 1 afin d'en faire notre indice pour le talbeau
        this._nouveauProduit = new Produit_1.default(indice, nomProduit, prixProduit, descriptionProduit); //on déclare un nouveau objet Produit dans lequel on rentre les infos rentrer auparavant
        this.listeProd.ajouter(this._nouveauProduit); //enfin on fait appel à la méthode ajouter de la classe ListeProduit qui va ajouter le Produit dans le tableau
    };
    //methode pour editer un produit
    Admin.prototype.EditerProduit = function (indexSelect) {
        var currentProduit = JSON.parse(this.listeProd.ProduitDisp.getItem(indexSelect.toString())); //on recupère l'indice de l'article qui a ete selectionne
        var nomProduit = document.getElementById("nomProduitEdit").value;
        var descriptionProduit = document.getElementById("DescriptionProduitEdit").value;
        var prixProduit = parseFloat(document.getElementById("PrixProduitEdit").value);
        //on verifie si l'input pour le nom de produit est vide, si il l'est on garde le nom du produit de base,
        if (nomProduit == "") {
            nomProduit = currentProduit._nom;
        }
        //idem que pour le nom de produit
        if (descriptionProduit == "") {
            descriptionProduit = currentProduit._desctiption;
        }
        //idem pour le nom du produit
        if (isNaN(prixProduit)) {
            prixProduit = currentProduit._prix;
        }
        //on créer un nouvel objet dans lequel on rentre les informations necessaire
        this._nouveauProduit = new Produit_1.default(indexSelect, nomProduit, prixProduit, descriptionProduit);
        //on ajoute le nouveau produit au tableau à l'index du produit qui a ete selectionner pour etre modifier, du coup le nouveau produit prend la place de l'ancien produit dans le tableau
        this.listeProd.ajouter(this._nouveauProduit);
    };
    //Methode pour supprimer un produit
    Admin.prototype.SupprimerProduit = function (indexSelect) {
        //on recupere le produit selectionner
        var produitSupprimer = JSON.parse(this.listeProd.ProduitDisp.getItem(indexSelect.toString()));
        alert("Vous venez de supprimer l'item n° " + produitSupprimer._numProduit + " - " + produitSupprimer._nom);
        //on fait appel a la methode supprimer de ListeProduit afin de supprimer l'article du talbeau
        this.listeProd.supprimer(indexSelect);
    };
    return Admin;
}());
exports.default = Admin;
function Administrateur() {
    //declaration de produit
    var test = new Produit_1.default(1, "Chaussure", 23, "Chaussure taille x");
    var test2 = new Produit_1.default(2, "Telephone", 500, "test");
    var test3 = new Produit_1.default(3, "ordinateur", 1200, "test");
    var test4 = new Produit_1.default(4, "snow", 50, "test");
    var listeProd = new ListProduit_1.default();
    listeProd.ajouter(test);
    listeProd.ajouter(test2);
    listeProd.ajouter(test3);
    listeProd.ajouter(test4);
    var admin = new Admin();
    //si l'utilisateur clique sur valider pour le champs d'ajout produit alors on fait appel a la methode ajouterProduit de la classe Admin
    $(function () {
        var btn = $("#valider");
        btn.on("click", function (e) { return admin.ajouterProduit(); });
    });
    //fonction qui va nous permettre de recupèrer tous les elements du tableau afin de les afficher dans une balise select de InterfaceAdmin.html
    function selectOption(elementAppend) {
        for (var i = 1; i <= localStorage.length; i++) {
            var prod = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()));
            if (prod == null) {
                i = i + 1;
                prod = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()));
            }
            var option = document.createElement("option");
            var valueOption = document.createAttribute("value");
            valueOption.value = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()))._numProduit;
            option.setAttributeNode(valueOption);
            var textnode = document.createTextNode("id : " + prod._numProduit + " - " + prod._nom + " - " + prod._prix + "$CAD"); // Create a text node
            option.appendChild(textnode);
            elementAppend.appendChild(option);
        }
    }
    var selectProduitEdit = document.getElementById("produitSelectionerEdit");
    var selectProduitSupp = document.getElementById("produitSelectionerSupp");
    selectOption(selectProduitSupp);
    selectOption(selectProduitEdit);
    $(function () {
        var sel = document.getElementById("produitSelectionerEdit");
        var btnSupp = $("#validerEdit");
        btnSupp.on("click", function (e) { return admin.EditerProduit(sel.selectedIndex + 1); });
    }());
    $(function () {
        var sel = document.getElementById("produitSelectionerSupp");
        var btnSupp = $("#supprimer");
        btnSupp.on("click", function (e) { return admin.SupprimerProduit(sel.selectedIndex + 1); });
    }());
}
exports.Administrateur = Administrateur;
