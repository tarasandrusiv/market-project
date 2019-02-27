import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
import { ActivatedRoute , Router } from '@angular/router';
>>>>>>> 6d1d6ab711f2dca23abace0db9e9f8361cf3e0f7
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
<<<<<<< HEAD
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService
=======
    private router: Router,
    private location: Location,
    private carService: CarService,
    private route: ActivatedRoute
>>>>>>> 6d1d6ab711f2dca23abace0db9e9f8361cf3e0f7
  ) { }

  ngOnInit() {
    this.getCar();
    this.localCount = JSON.parse(localStorage.getItem('car'));
  }

  getCar() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.car = CARS.find(x=> x.id === id);
<<<<<<< HEAD
  }

  goBack() {
    this.location.back()
  }

  addChart(car: Car) {
    if (this.localCount) {
      if (this.localCount.find(x => x.id === car.id)) return;
      this.localCount.push(car);
      localStorage.setItem("car", JSON.stringify(this.localCount))
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
=======
>>>>>>> 6d1d6ab711f2dca23abace0db9e9f8361cf3e0f7
  }

  goBack() {
    this.location.back()
  }

  addChart(car: Car) {
    if (this.localCount) {
      if (this.localCount.find(x => x.id === car.id)){
        this.router.navigateByUrl(`/chart`);
        return;}
      this.localCount.push(car);
      localStorage.setItem("car", JSON.stringify(this.localCount));
    } else{ 
      localStorage.setItem("car", JSON.stringify([car]));
    }
    this.router.navigateByUrl(`/chart`);
  } 
  

}
