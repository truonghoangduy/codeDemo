import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/models/items';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listOfBuyedItem: Array<Item> = [];

  leftLogo: string = "menu";

  constructor(private cartServices: CartService,private router:Router) {
  }

  ngOnInit(): void {

  }
  
  goToHome(){
    this.router.navigate(["/home"]);
  }
  // changeleftLogo{

  // }

  checkout() {
    alert(this.cartServices.checkout());
  }

  getCheckoutTitle() {
    return this.listOfBuyedItem.length > 0 ? "Checkout" : "No Item";
  }

  getCheckoutInfomation() {
    // filter out unwanted Item which has 0 in Quantity
    this.listOfBuyedItem = this.cartServices.getDataBase().filter((item) => item.getQuantity() > 0);
    console.log(this.listOfBuyedItem.length);
    // return this.listOfBuyedItem;
  }

}
