import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ZttComponentComponent } from './ztt-component/ztt-component.component';
import {MailService} from "./mail.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    HomeComponent,
    ProductDetailComponent,
    ZttComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailService,
  {provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
