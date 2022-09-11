import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from "angular-google-charts";
import { SharedChartService } from '../shared-chart.service';

declare let google:any

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor(public router: Router, private chartser:SharedChartService) { }

  title1 = 'Browser market shares at a specific website, 2014';
  type1 = ChartType.BarChart;
  data1 = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnName1s = ['Browser', 'Percentage'];
  options1 = this.chartser.barOptions;
  // width1 = 550;
  // height1 = 450;
 

  title2 = 'Browser market shares at a specific website, 2014';
  type2 = ChartType.BarChart;
  data2 = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames2 = ['Browser', 'Percentage'];
  options2 = this.chartser.barOptions;
  // width2 = 550;
  // height2 = 450;  

  

  ngOnInit(): void {
    
  }

 
  

}
