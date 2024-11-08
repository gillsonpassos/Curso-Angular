import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
=======
import { CardsModule } from './cards/cards.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    CardsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
>>>>>>> 101e0d6ac5e1169d130980c444b3611d1b2254ec
  bootstrap: [AppComponent]
})
export class AppModule { }
