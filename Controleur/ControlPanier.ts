import Produit from "../Model/Produit";
import Panier from "../Model/Panier";

export default class ControlPanier {

    private _listProduitPanier : Produit[];



    constructor() {
    }


    transformer() : void {
        let panierProduit = new Panier();
        for (let i = 1; i <= panierProduit.listProduit.length; i++) {
            let prod = JSON.parse(panierProduit.listProduit.getItem(i.toString()));
            this._listProduitPanier[i] = prod;
        }
    }


    AfficherLePanier() : void{
            this.transformer();
        if(this._listProduitPanier.length==0){
            var location = document.getElementById('PrixTotal');
            var div = document.createElement("div");
            div.innerHTML = "<div class=\"col-md-12 col-xs-12 col-sm-12 text-center\">\n" +
                "                           <div class=\"thumbnail\">\n" +
                "                                            <div class=\"caption\">\n" +
                "                                                <p>Votre panier est vide!</p>\n" +
                "                                            </div>\n" +
                "                               </a>\n" +
                "                               </div>\n" +
                "                       </div>";

            location.appendChild(div);
        }
        else {
            this.AfficherItem();
            this.AfficherTotal();
            this.AfficherPayement();
        }
    }

    AfficherItem() : void{
        for (let i in this._listProduitPanier){
            this._listProduitPanier[i].affichePanier();
        }
    }

    AfficherTotal() : void{
        var T=0;


        for (let i in this._listProduitPanier){
            T+=this._listProduitPanier[i].prix;
        }

        var location = document.getElementById('PrixTotal');
        var div = document.createElement("div");
        div.innerHTML = "<div class=\"col-md-4 col-xs-12 col-sm-12 text-right\">\n" +
            "                           <div class=\"thumbnail\">\n" +
            "                                            <div class=\"caption\">\n" +
            "                                                <p>Prix:   "+ T+" CAD</p>\n" +
            "                                            </div>\n" +
            "                               </a>\n" +
            "                               </div>\n" +
            "                       </div>";

        location.appendChild(div);

        var TaxeT=T*0.15;
        var div2 = document.createElement("div");
        div2.innerHTML = "<div class=\"col-md-4 col-xs-12 col-sm-12 text-right\">\n" +
            "                           <div class=\"thumbnail\">\n" +
            "                                            <div class=\"caption\">\n" +
            "                                                <p>Taxe:   "+ TaxeT+" CAD</p>\n" +
            "                                            </div>\n" +''
        "                               </a>\n" +
        "                               </div>\n" +
        "                       </div>";
        location.appendChild(div2);

        var Totale= TaxeT+ T;
        var div3 = document.createElement("div");
        div3.innerHTML = "<div class=\"col-md-4 col-xs-12 col-sm-12 text-right\">\n" +
            "                           <div class=\"thumbnail\">\n" +
            "                                            <div class=\"caption\">\n" +
            "                                                <p>Total:  "+ Totale+" CAD</p>\n" +
            "                                            </div>\n" +
            "                               </a>\n" +
            "                               </div>\n" +
            "                       </div>";
        location.appendChild(div3);
    }



    AfficherPayement(): void{
        var location = document.getElementById('Paiement');
        var div = document.createElement("div");
        div.innerHTML = "<div class=\"col-md-12 col-xs-12 col-sm-12 text-center\">\n" +
            "                           <div class=\"thumbnail\">\n" +
            "                                            <div class=\"caption\">\n" +
            "                                                <form>Votre Prénom: <input type='text' name='Prenom'>   Votre nom: <input type='text' name='Nom'><input type='submit' action='payement()' onclick='payement();'></form>" +
            "                                            </div>\n" +
            "                               </a>\n" +
            "                               </div>\n" +
            "                       </div>";

        location.appendChild(div);

    }




}