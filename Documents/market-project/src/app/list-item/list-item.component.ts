import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { MARKS } from '../mock-data/mock-marks';
import { Car } from '../models/car';
import { ActivatedRoute , Router } from '@angular/router';
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
    private router: Router,
    private location: Location,
    private carService: CarService,
    private route: ActivatedRoute
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