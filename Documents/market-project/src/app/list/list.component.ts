import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cars = CARS;
  
  constructor() { }

  ngOnInit() {
  }
  addChart(cars){
    localStorage.setItem('car', JSON.stringify(cars));
  }
  
  
}
