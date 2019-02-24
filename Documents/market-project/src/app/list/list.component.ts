import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  marks = MARKS;
  cars = CARS;
  filteredCars;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.filteredCars = this.cars;
  }

  details(car: Car) {
    this.router.navigateByUrl(`/item/${car.id}`)
  }
  sort(markId: number) {
    this.filteredCars = markId ? this.cars.filter(x=> x.markId === markId) : this.cars;
  }


}
