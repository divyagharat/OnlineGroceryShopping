export class Item {
    item_id:number;
    itemName:String;
    item_quantity:number;
    item_cost:number;
  imageURL: any;
    
    constructor(
    item_id:number,  
    itemName:String,
    item_quantity:number,
    item_cost:number,
    ){
        this.item_id=item_id
        this.itemName=itemName;
        this.item_quantity=item_quantity;
        this.item_cost=item_cost;
    }
}

