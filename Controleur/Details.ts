import ListProduit from "../Model/ListProduit";


export function detail(id : number){

    let listeProd = new ListProduit();

    let prod = JSON.parse(listeProd.ProduitDisp.getItem(id.toString()));
    document.getElementById("titre").innerHTML = prod._nom;
    document.getElementById("prix").innerHTML = prod._prix+"$CAD";
    document.getElementById("description").innerHTML = prod._desctiption;


}