import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  marks = MARKS;
  cars = CARS;

  constructor() { }

  ngOnInit() {
  }

}
