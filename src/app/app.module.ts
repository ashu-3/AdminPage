import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { BarchartComponent } from './barchart/barchart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { PiechartComponent } from './piechart/piechart.component';
import { RouterModule } from '@angular/router';
import { TablechartComponent } from './tablechart/tablechart.component';
import { map, catchError } from 'rxjs/operators';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BarchartComponent,
    PiechartComponent,
    TablechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
