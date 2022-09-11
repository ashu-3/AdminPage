import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { SharedChartService } from '../shared-chart.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  
  constructor(private chartSer: SharedChartService) { }

  title1 = 'Browser market shares at a specific website, 2014';
  type1 = ChartType.PieChart;
  data1 = [
     ['Firefox', 25.8],
     ['IE', 45],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnName1s = ['Browser', 'Percentage'];
  options1 = this.chartSer.pieOptions;
  // width1 = 500;
  // height1 = 300;

  title2 = 'Browser market shares at a specific website, 2014';
  type2 = ChartType.PieChart;
  data2 = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames2 = ['Browser', 'Percentage'];
  options2 = this.chartSer.pieOptions;
  

  ngOnInit(): void {
  }

}
