export default class Produit {

    private _numProduit : number;
    private _nom : string;
   private _prix : number;
   private _desctiption : string;


    constructor(numProduit : number,nom: string, prix: number, desctiption: string) {
        this._numProduit = numProduit;
        this._nom = nom;
        this._prix = prix;
        this._desctiption = desctiption;
    }

    affichePanier() : string{


        var location = document.getElementById('listPanier1');
        var div = document.createElement("div");
        div.innerHTML = "<div class=\"col-md-3 col-xs-12 col-sm-6\">\n" +
            "                           <div class=\"thumbnail\">\n" +
            "                               <a href=\"w3images/lights.jpg\">\n" +
            "                                   <img src=\"w3images/lights.jpg\" alt=\"Lights\" style=\"width:100%\" class=\"img-responsive\">\n" +
            "                                            <div class=\"caption\">\n" +
            "                                                <p>\""+ this._nom +"\"</p>\n" +
            "                                                <p><b>\""+ this._prix +"\"</b></p>\n" +
            "                                            </div>\n" +
            "                               </a>\n" +
            "                               </div>\n" +
            "                       </div>";

        location.appendChild(div);
        let idBtn : string;
        idBtn = "btn"+ this._numProduit;
        return idBtn;
    }


    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prix(): number {
        return this._prix;
    }

    set prix(value: number) {
        this._prix = value;
    }

    get desctiption(): string {
        return this._desctiption;
    }

    set desctiption(value: string) {
        this._desctiption = value;
    }

    get numProduit():number{
        return this._numProduit;
    }
    set numProduit(value : number){
        this._numProduit = value;
    }

}