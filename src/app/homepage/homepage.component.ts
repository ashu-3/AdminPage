import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public router : Router) {
    
   }

  ngOnInit(): void {
    if(this.isSmallMobileDevice.matches) {
      this.status = false;
    }
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

    barchart() {
      console.log("within bar")
      this.router.navigate(['/barchart'])
    }
  
}
