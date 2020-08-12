import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service'
import { Item } from 'src/app/models/items';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  db:Array<Item>;
  constructor(private cartServices:CartService,private router:Router) { }

  ngOnInit(): void {
    this.db = this.cartServices.getDataBase();
  }
  // id = "1234567890"
  // localhost:4200/home -> localhost:4200/item-info/1234567890
  navigateToItemInfo(id:string){
    this.router.navigate(["/item-info/"+id])
  }

  // Page 
  // localhost:4200/item-info/:id

  // DB - > Item == id -> Item -> Render



}
