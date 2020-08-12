import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationuiModule } from './modules/navigationui/navigationui.module';
import { NavComponent } from './components/nav/nav.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemUIModule } from './modules/item-ui/item-ui.module';
import { BasicModule } from './modules/basic/basic.module';
import { ItemCardInfoComponent } from './components/item-card-info/item-card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    // ItemCardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BasicModule,
    NavigationuiModule,
    ItemUIModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
