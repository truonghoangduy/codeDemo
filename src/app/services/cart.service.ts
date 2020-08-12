import { Injectable } from '@angular/core';
import { Item } from '../models/items'
@Injectable({
  providedIn: 'root'
})

export class CartService {
  fakecontent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, But also the leap into electronic";
  db: Array<Item> = [
    new Item("Mellon", "Dog", this.fakecontent, "https://material.angular.io/assets/img/examples/shiba2.jpg", 2),
    new Item("Dog", "Dog", this.fakecontent, "https://media.apnarm.net.au/media/images/2020/03/18/v3imagesbin1084acc28c79e2b71b023d2b3b765223-of8z3fhc4ieuw4lm0u2_t1880.jpg", 10),
    new Item("Cat", "Cat", this.fakecontent, "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg", 40),
    new Item("Chicken", "Chicken", this.fakecontent, "https://www.signalfirestudios.com/shirt/wp-content/uploads/2016/11/Hentie-preview.jpg", 5)
  ];
  cartDBForCheckout: Array<Item>;
  constructor() {
    this.cartDBForCheckout = this.db;
  }

  public addToCart(itemAdded:Item){
    for (let item of this.db) {
      if (item.getName() == itemAdded.getName()) {
        item.setQuantity(itemAdded.getQuantity());
        break;
      }
    }
  }

  public findItem(id:string):Item{
    var matchItem:Item;
    for (let item of this.db) {
      if (item.getName() == id) {
        matchItem = item;
      }
    }
    return matchItem;
  }

  public getDataBase(){
    return this.db;
  }

  public checkout():number{
    var total = 0;
    for (let item of this.db) {
      total+=item.getPrice() * item.getQuantity();
    }
    return total;
  }
}
