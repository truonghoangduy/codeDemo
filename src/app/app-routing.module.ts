import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
{ path: 'itemInfo/:id', loadChildren: () => import('./pages/item-info/item-info.module').then(m => m.ItemInfoModule) }, 
{ path: 'itemInfo', loadChildren: () => import('./pages/item-info/item-info.module').then(m => m.ItemInfoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
