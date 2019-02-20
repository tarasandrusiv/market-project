import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  marks = MARKS;
  cars = CARS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
  }

}
