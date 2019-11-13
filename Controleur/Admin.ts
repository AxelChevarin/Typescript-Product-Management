import Produit from "../Model/Produit";
import * as $ from 'jquery';

import ListeProduit from "../Model/ListProduit";

export default class Admin{

    private _nouveauProduit;
    private listeProd = new ListeProduit();


    //methode qui permet d'ajouter un produit
    ajouterProduit(){

            var nomProduit: string = (document.getElementById("nomProduit") as HTMLInputElement).value; //on recupere la valeur pacer dans l'input pour le nom
            var descriptionProduit: string = (document.getElementById("descriptionProduit") as HTMLInputElement).value; //on recupere la valeur pacer dans l'input pour la description
            var prixProduit: number = parseFloat((<HTMLInputElement> document.getElementById("PrixProduit")).value); //on recupere la valeur pacer dans l'input pour le prix
            let indice = this.listeProd.ProduitDisp.length+1;//on recupère la taille du localstorage on lui rajoute plus 1 afin d'en faire notre indice pour le talbeau
            this._nouveauProduit = new Produit(indice , nomProduit, prixProduit, descriptionProduit);//on déclare un nouveau objet Produit dans lequel on rentre les infos rentrer auparavant
            this.listeProd.ajouter(this._nouveauProduit);//enfin on fait appel à la méthode ajouter de la classe ListeProduit qui va ajouter le Produit dans le tableau

    }

    //methode pour editer un produit
    EditerProduit(indexSelect : number){

        let currentProduit =JSON.parse(this.listeProd.ProduitDisp.getItem(indexSelect.toString()));//on recupère l'indice de l'article qui a ete selectionne
        var nomProduit: string = (document.getElementById("nomProduitEdit") as HTMLInputElement).value;
        var descriptionProduit: string = (document.getElementById("DescriptionProduitEdit") as HTMLInputElement).value;
        var prixProduit: number = parseFloat((<HTMLInputElement> document.getElementById("PrixProduitEdit")).value);
        //on verifie si l'input pour le nom de produit est vide, si il l'est on garde le nom du produit de base,
        if(nomProduit == ""){
            nomProduit = currentProduit._nom;
        }
        //idem que pour le nom de produit
        if(descriptionProduit == ""){
            descriptionProduit = currentProduit._desctiption;

        }
        //idem pour le nom du produit
        if(isNaN(prixProduit)){
            prixProduit = currentProduit._prix;
        }
        //on créer un nouvel objet dans lequel on rentre les informations necessaire
        this._nouveauProduit = new Produit(indexSelect , nomProduit, prixProduit, descriptionProduit);
        //on ajoute le nouveau produit au tableau à l'index du produit qui a ete selectionner pour etre modifier, du coup le nouveau produit prend la place de l'ancien produit dans le tableau
        this.listeProd.ajouter(this._nouveauProduit);
    }


    //Methode pour supprimer un produit
    SupprimerProduit(indexSelect : number){

        //on recupere le produit selectionner
        let produitSupprimer = JSON.parse(this.listeProd.ProduitDisp.getItem(indexSelect.toString()));
        alert("Vous venez de supprimer l'item n° "+ produitSupprimer._numProduit+" - "+produitSupprimer._nom);
        //on fait appel a la methode supprimer de ListeProduit afin de supprimer l'article du talbeau
        this.listeProd.supprimer(indexSelect);
    }



}



export function Administrateur() {
    //declaration de produit
    let test = new Produit(1, "Chaussure", 23, "Chaussure taille x");
    let test2 = new Produit(2, "Telephone", 500, "test");
    let test3 = new Produit(3, "ordinateur", 1200, "test");
    let test4 = new Produit(4, "snow", 50, "test");

    let listeProd = new ListeProduit();

    listeProd.ajouter(test);
    listeProd.ajouter(test2);
    listeProd.ajouter(test3);
    listeProd.ajouter(test4);


    let admin = new Admin();


    //si l'utilisateur clique sur valider pour le champs d'ajout produit alors on fait appel a la methode ajouterProduit de la classe Admin
    $(function () {
        let btn = $("#valider");
        btn.on("click", (e: Event) => admin.ajouterProduit());
    });


    //fonction qui va nous permettre de recupèrer tous les elements du tableau afin de les afficher dans une balise select de InterfaceAdmin.html
    function selectOption(elementAppend) {
        for (let i = 1; i <= localStorage.length; i++) {
            let prod = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()));

            if (prod == null) {
                i = i + 1;
                prod = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()));
            }
            var option = document.createElement("option");
            var valueOption = document.createAttribute("value");
            valueOption.value = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()))._numProduit;
            option.setAttributeNode(valueOption);
            var textnode = document.createTextNode("id : " + prod._numProduit + " - " + prod._nom + " - " + prod._prix + "$CAD");// Create a text node
            option.appendChild(textnode);

            elementAppend.appendChild(option);
        }
    }

    let selectProduitEdit = document.getElementById("produitSelectionerEdit");
    let selectProduitSupp = document.getElementById("produitSelectionerSupp");
    selectOption(selectProduitSupp);
    selectOption(selectProduitEdit);

    $(function () {


        var sel = document.getElementById("produitSelectionerEdit")as HTMLSelectElement;
        let btnSupp = $("#validerEdit");
        btnSupp.on("click", (e: Event) => admin.EditerProduit(sel.selectedIndex + 1));

    }());

    $(function () {


        var sel = document.getElementById("produitSelectionerSupp")as HTMLSelectElement;
        let btnSupp = $("#supprimer");
        btnSupp.on("click", (e: Event) => admin.SupprimerProduit(sel.selectedIndex + 1));

    }());

}











