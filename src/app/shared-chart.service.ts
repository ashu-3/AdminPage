import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedChartService {
  pieOptions = {   
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true 
  };

  barOptions = {   
    // colors: ['#e0440e', '#e6693e', '#ec8f6e', '#7a3821', '#f6c7b6'],
    is3D: true,
    'title':'My Big Pie Chart',
  };

  constructor() { }
}
