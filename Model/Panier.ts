
import Produit from "./Produit";

export default class Panier {

    private _listProduit = localStorage;
    private _total : number;


    constructor() {

    }

    ajouter(prod : Produit){
        var monobjet_json = JSON.stringify(prod);
        this._listProduit.setItem(prod.numProduit.toString(),monobjet_json);

    }

    get listProduit(): Storage {
        return this._listProduit;
    }

    set listProduit(value: Storage) {
        this._listProduit = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }
}