import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsSearchPipe } from './products-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponentComponent,
    SearchComponentComponent,
    CartComponentComponent,
    FilterComponent,
    ProductsSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
