import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CartService} from '../../services/cart.service';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {

  constructor(private routerActivated:ActivatedRoute,private cartServices:CartService) { }

  item:Item;
  ngOnInit(): void {
    this.routerActivated.params.subscribe((params)=>{
      console.log(params["id"]);
      this.item=this.cartServices.findItem(params["id"]);

    })
  }

}
