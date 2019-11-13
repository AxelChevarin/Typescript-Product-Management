import ListProduit from "../Model/ListProduit";
import Panier from "../Model/Panier";


export function ajoutPanier(id : number){

    let listeProd = new ListProduit();
    let listPanier = new Panier();
    let prod = JSON.parse(listeProd.ProduitDisp.getItem(id.toString()));
    listPanier.ajouter(prod);




}