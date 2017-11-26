import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import ProductItemComponent from "./components/product-item/product-item";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import {ProductService} from "./services/product-service";
import {ONLINE_AUCTION_SERVICES} from './services/services';
import HomeComponent from "./components/home/home";
import ProductDetailComponent from "./components/product-detail/product-detail";
import AboutComponent from "./components/about/about";
import FeaturedComponent from "./components/featured/featured";
import ContactComponent from "./components/contact/contact";

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule,
                    FormsModule, HttpModule,
                    RouterModule.forRoot([
                        {path: '',                    component: HomeComponent},
                        {path: 'products/:productId', component: ProductDetailComponent},
                        {path: 'about',               component: AboutComponent},
                        {path: 'featured',            component: FeaturedComponent},
                        {path: 'contact',             component: ContactComponent},
    ]) ],
    declarations: [ ApplicationComponent,
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    HomeComponent,
                    ProductDetailComponent,
                    ProductItemComponent,
                    SearchComponent,
                    StarsComponent,
                    AboutComponent,
                    FeaturedComponent,
                    ContactComponent],
    providers:    [ProductService,
                   ONLINE_AUCTION_SERVICES,
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }