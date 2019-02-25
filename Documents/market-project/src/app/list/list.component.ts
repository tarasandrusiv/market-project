import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
<<<<<<< HEAD
=======
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> 79d6fe7d7cb317f3af6d489dd75de923753a57e6

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  marks = MARKS;
  cars = CARS;
  filteredCars;
<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
    this.filteredCars = this.cars;
  }

  details(car: Car) {
    location.replace("/item/" + car.id);
=======

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.filteredCars = this.cars;
>>>>>>> 79d6fe7d7cb317f3af6d489dd75de923753a57e6
  }
  sort(markId: number) {
    this.filteredCars = markId ? this.cars.filter(x=> x.markId === markId) : this.cars;
    
  }


<<<<<<< HEAD
}
=======
  details(car: Car) {
    this.router.navigateByUrl(`/item/${car.id}`)
  }
  sort(markId: number) {
    this.filteredCars = markId ? this.cars.filter(x=> x.markId === markId) : this.cars;
  }


}
>>>>>>> 79d6fe7d7cb317f3af6d489dd75de923753a57e6
