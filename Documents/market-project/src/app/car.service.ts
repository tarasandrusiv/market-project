import { Injectable } from '@angular/core';
import { CARS } from './mock-data/mock-cars';
import { MARKS } from './mock-data/mock-marks';
import { Car } from './models/car';
import { Mark } from './models/mark';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars():Car[] {
    return CARS;
  }

  getCarById(id: number):Car {
    return CARS.find(x=> x.id === id);
  }

  getCarByMarkId(id: number):Car {
    return CARS.find(x=> x.markId === id);
  }

  getMarks():Mark[] {
    return MARKS;
  }

}
