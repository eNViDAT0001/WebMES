export class CartModel{
    isSelected = false;
    constructor({id, providerID, providerName}){
        this.id = id;
        this.providerName = providerName;
        this.providerID = providerID;
    }
}

