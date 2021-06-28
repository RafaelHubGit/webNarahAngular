import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NarahComponent } from './pages/narah/narah.component';
import { PuntoventaComponent } from './pages/puntoventa/puntoventa.component';

@NgModule({
  declarations: [
    AppComponent,  
    NarahComponent, PuntoventaComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
