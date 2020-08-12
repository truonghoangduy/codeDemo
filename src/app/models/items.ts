
export class Item {
    private name:string;
    private breed:string;
    private content:string;
    private photoURL:string;
    private price:number;
    private quantity:number;
    constructor(itemName:string,itemBreed:string,itemContent:string,itemPhotoURL:string,itemPrice:number) {
        this.name = itemName;
        this.breed= itemBreed;
        this.content = itemContent;
        this.photoURL = itemPhotoURL;
        this.price = itemPrice;
        this.quantity = 0;
    }

    public getName(){
        return this.name;
    }

    public getBreed(){
        return this.breed;
    }

    public getContent(){
        return this.content;
    }
    public getPhotoURL(){
        return this.photoURL;
    }

    public getPrice(){
        return this.price;
    }

    public getQuantity(){
        return this.quantity;
    }

    public setQuantity(n:number){
        this.quantity = n
        if (this.getQuantity() < 0) {
            this.quantity = 0
        }
    }

}