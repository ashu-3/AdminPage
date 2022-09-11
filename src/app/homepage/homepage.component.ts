import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarchartComponent } from '../barchart/barchart.component';
import { PiechartComponent } from '../piechart/piechart.component';
import { navbarData } from './navbar-data';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  status: boolean = true;
  themeSelected: boolean = true;
  theme = 'light-theme';
  themeText = 'dark theme';
  isSmallMobileDevice: MediaQueryList = window.matchMedia("(max-width: 920px)");

  //sidebar
  navOptions = navbarData;

  //dynamic component
  dynamicComponent:any = BarchartComponent;

  constructor(public router : Router) {
    
   }

  ngOnInit(): void {
    if(this.isSmallMobileDevice.matches) {
      this.status = false;
    }

    console.log(this.navOptions);
  }


  toggleShow() {
    this.status = !this.status;
  }

  toggleTheme() {
      this.themeSelected = !this.themeSelected;
      if(this.themeSelected==false) {
        this.themeText = 'light theme';
        this.theme = 'dark-theme';
      }
      else {
        this.themeText = 'dark theme';
        this.theme = 'light-theme';
      }
  }

  assignComponent(component: string) {
    console.log(component);
    if(component == 'barchart') {
      this.dynamicComponent = BarchartComponent;
    }
    else {
      this.dynamicComponent = PiechartComponent
    }
  }

  
}
