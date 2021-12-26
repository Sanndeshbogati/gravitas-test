import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DataDetailsComponent } from './data-details/data-details.component';
import{ MatToolbarModule} from '@angular/material/toolbar';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ChartsModule,
    BrowserAnimationsModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
