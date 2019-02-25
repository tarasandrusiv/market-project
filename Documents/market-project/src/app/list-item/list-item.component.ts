import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  car: Car;
  localCount: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.getCar();
    this.localCount = JSON.parse(localStorage.getItem('car'));
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
      if (arr.find(x => x.id === car.id)) return;
      arr.push(car);
      localStorage.setItem("car", JSON.stringify(arr))
      this.setCount();
    } else{ 
      localStorage.setItem("car", JSON.stringify([car]))
      this.setCount();
    }
  } 
  setCount(){
    let count;
    if(this.localCount != undefined){
       count = this.localCount.length;
    }else{
      count = 0;
    }
    this.carService.setCount(count);
  }

}
