import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaxoecomponentComponent } from './maxoecomponent/maxoecomponent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PeppiecomponentComponent } from './peppiecomponent/peppiecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaxoecomponentComponent,
    HomepageComponent,
    PeppiecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
