import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  localArr : any;
  count: any;
  constructor(
    private carService: CarService
  ){}
  ngOnInit(){
    this.localArr = JSON.parse(localStorage.getItem('car'));
    this.setCount();
    this.carService.getCount.subscribe((x) => {
      this.count = x;
    });
  }
  setCount(){
    if(this.localArr != undefined){
      return this.count = this.localArr.length;
    }
    return this.count = 0;
  }
}
