import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
import { ActivatedRoute , Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  car: Car;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.car = CARS.find(x=> x.id === id);
  }

  goBack() {
    this.location.back()
  }

  addChart(car: Car) {
    let arr = JSON.parse(localStorage.getItem("car"));
    console.log(arr)
    if (arr) {
      if (arr.find(x => x.id === car.id)) {
        this.router.navigateByUrl('/chart');
        return;}
      arr.push(car);
      localStorage.setItem("car", JSON.stringify(arr))
    } else{ 
      localStorage.setItem("car", JSON.stringify([car]))
    }
    this.router.navigateByUrl('/chart');
  } 

}