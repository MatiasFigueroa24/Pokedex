import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NabvarComponent } from './Components/nabvar/nabvar.component';
import { SearchComponent } from './Components/search/search.component';
import { TarjetasComponent } from './Components/tarjetas/tarjetas.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NabvarComponent,
    SearchComponent,
    TarjetasComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
