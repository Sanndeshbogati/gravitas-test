import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataDetailsComponent } from './data-details/data-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"data_details",component:DataDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
