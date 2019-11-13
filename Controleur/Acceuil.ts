import * as $ from 'jquery';
import ListProduit from "../Model/ListProduit";
import Produit from "../Model/Produit";
import Admin from "../Controleur/Admin";


export function Acceuil(){

    let test = new Produit(1, "Chaussure", 23, "Chaussure taille x");
    let test2 = new Produit(2, "Telephone", 500, "test");
    let test3 = new Produit(3, "ordinateur", 1200, "test");
    let test4 = new Produit(4, "snow", 50, "test");

    let listeProd = new ListProduit();
    /*let idBtn1 = test.afficheProduit();
    let idbtn2 = test2.afficheProduit();
    let idbtn3 = test3.afficheProduit();
    let idbtn4 = test4.afficheProduit();*/

    for (let i = 1; i <= listeProd.ProduitDisp.length; i++) {
        let prod = JSON.parse(listeProd.ProduitDisp.getItem(i.toString()));
        let nom = prod._nom;
        let prix = prod._prix;
        let numProduit = prod._numProduit;
        afficheProduit(nom, prix,numProduit);
    }

}

function afficheProduit(nom : string, prix : number, numProduit : number) : string{

    var location = document.getElementById('listProd');
    var div = document.createElement("div");
    div.innerHTML = "<div class=\"col-md-3 col-xs-12 col-sm-6\">\n" +
        "                           <div class=\"thumbnail\">\n" +
        "                               <a href=\"Details.html?id="+numProduit+"\">\n" +
        "                                   <img src=\"http://lorempixel.com/80/80/\" alt=\"Lights\" style=\"width:100%\" class=\"img-responsive\">\n" +
        "                                            <div class=\"caption\">\n" +
        "                                                <p>"+ nom +"</p></a>\n" +
        "                                                <p><b>"+ prix +" $CAD</b></p>\n" +
        "                                            </div>\n" +
        "                               \n" +
        "                                   <button type=\"button\" class=\"btn btn-success\" id=\"" + numProduit +"\"><span class=\"glyphicon glyphicon-shopping-cart\"></span></button>\n" +
        "                               </div>\n" +
        "                       </div>" +
        "<script>document.getElementById(\""+ numProduit+ "\").addEventListener('click', function() { " +
        "window.Action.ajoutPanier("+numProduit+");})</script>";

    location.appendChild(div);
    let idBtn : string;
    idBtn = "btn"+ numProduit;
    return idBtn;
}














