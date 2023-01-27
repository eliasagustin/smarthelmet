import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/productViewer/header/header.component';
import { HerpSectionComponent } from './components/productViewer/HeroSection/herp-section/herp-section.component';
import { HeroSectionComponent } from './components/productViewer/hero-section/hero-section.component';
import { ProductFeaturesComponent } from './components/productViewer/product-features/product-features.component';
import { TestimonialsComponent } from './components/productViewer/testimonials/testimonials.component';
import { FooterComponent } from './components/productViewer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerpSectionComponent,
    HeroSectionComponent,
    ProductFeaturesComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
