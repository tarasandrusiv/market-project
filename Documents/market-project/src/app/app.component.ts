import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, AsyncSubject, from, Subscription, observable } from "rxjs";
import { CarService } from './car.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy  {
  localArr : any;
  count: any;
  carSer: CarService;
  countt: any;
  constructor(
    private carService: CarService
  ){
    
    }
  
  ngOnInit(){
    this.localArr = JSON.parse(localStorage.getItem('car'));
    this.setCount();
    this.carService.getCount.subscribe((x) => {
      this.count = x;
    });
  }
  ngOnDestroy(){
  }
  setCount(){
    return this.count = this.localArr.length;
  }

}
