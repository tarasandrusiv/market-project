import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  cars = CARS;
 
  constructor() { }

  ngOnInit() {
    this.chartList();
  }

  chartList(){
    if( JSON.parse(localStorage.getItem('car'))!== null){
      let charts = JSON.parse(localStorage.getItem('car'));
    }
    
  }
}
