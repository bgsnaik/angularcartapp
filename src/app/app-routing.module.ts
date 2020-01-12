import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
  import { from } from 'rxjs';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'cart', component: CartComponentComponent },
    { path: 'filter', component: FilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
