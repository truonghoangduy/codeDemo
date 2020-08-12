import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ItemCardInfoComponent } from 'src/app/components/item-card-info/item-card-info.component';



@NgModule({
  declarations: [ItemCardComponent,ItemCardInfoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
    
  ],
  exports:[ItemCardComponent,ItemCardInfoComponent]
})
export class ItemUIModule { }
