import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemInfoRoutingModule } from './item-info-routing.module';
import { ItemInfoComponent } from './item-info.component';
import { ItemUIModule } from 'src/app/modules/item-ui/item-ui.module';


@NgModule({
  declarations: [ItemInfoComponent],
  imports: [
    CommonModule,
    ItemInfoRoutingModule,
    ItemUIModule
  ]
})
export class ItemInfoModule { }
