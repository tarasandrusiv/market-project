import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
<<<<<<< HEAD
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';


=======
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
=======
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae

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
<<<<<<< HEAD
  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) { }
  ngOnInit() {
    this.filteredCars = this.cars;
  }
  sort(markId: number) {
    this.filteredCars = markId ? this.cars.filter(x=> x.markId === markId) : this.cars;
=======
  constructor() { }

  ngOnInit() {
    this.filteredCars = this.cars;
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
  }
  details(car: Car) {
    this.router.navigateByUrl(`/item/${car.id}`)
  }
  
}

=======
  constructor() { }

<<<<<<< HEAD
  ngOnInit() {
    this.filteredCars = this.cars;
  }

=======
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
  details(car: Car) {
    location.replace("/item/" + car.id);
  }
  sort(markId: number) {
    this.filteredCars = markId ? this.cars.filter(x=> x.markId === markId) : this.cars;
    
  }


<<<<<<< HEAD
}
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
=======
}
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
