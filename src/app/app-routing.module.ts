import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  {path:"barchart",component:BarchartComponent},
  {path:"piechart",component:PiechartComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"adminHome",component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
