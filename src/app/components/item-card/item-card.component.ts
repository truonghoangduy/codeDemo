import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../models/items'
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item:Item;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToItemInfo(id:string){
    this.router.navigate(["/itemInfo/"+id])
  }

}
