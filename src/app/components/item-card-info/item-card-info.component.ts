import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/items';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-card-info',
  templateUrl: './item-card-info.component.html',
  styleUrls: ['./item-card-info.component.scss']
})
export class ItemCardInfoComponent implements OnInit {

  @Input() item:Item;
  constructor(private router:Router,private cartServices:CartService) { }

  ngOnInit(): void {
  }
  navigateToItemInfo(id:string){
    this.router.navigate(["/itemInfo/"+id])
  }

  addToCard(n:number){
    this.item.setQuantity(this.item.getQuantity() +n); 
    this.cartServices.addToCart(this.item);
  }
}
