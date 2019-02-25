import { Component, OnInit} from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { isNgTemplate, analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { CarService } from '../car.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  cars = CARS;
  len = this.cars.length;
  arr: any;
  total = 0;
  
  
  constructor(
    private router:Router,
    private carSer: CarService
  ) { 
    
    localStorage.setItem('car', JSON.stringify([
  { 
      id: 11, 
      model: "Golf", 
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      price: 579891,
      photo: "./assets/Golf.png",
      markId: 300,
      quantity: 1
  },
  { 
      id: 12, 
      model: "Passat", 
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      price: 878302,
      photo: "./assets/Passat.png",
      markId: 300,
      quantity: 1
  },
  { 
      id: 13, 
      model: "Polo sedan", 
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      price: 374679,
      photo: "./assets/Polo-sedan.png",
      markId: 300,
      quantity: 1
  },
  { 
      id: 14, 
      model: "Touareg", 
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      price: 1673219,
      photo: "./assets/Touareg.png",
      markId: 300,
      quantity: 1
  }
    ])); 
  }

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('car'));
    this.calculateTotal();
  }

  clear(){
    this.arr = localStorage.clear();
    this.setCount();
    this.calculateTotal();
    return this.arr; 
  }
 
  delItem(chart){   
    this.arr = this.arr.filter(arr => arr != chart); 
    localStorage.setItem('car', this.arr);
    this.setCount();
    this.calculateTotal();
    return this.arr;
    
  }
  calculateTotal(){
    this.total = 0;
    this.arr.map(x=> this.total += x.price * x.quantity); 
  }
  goToOrder(){
    this.router.navigateByUrl('/order');
  }
  link(chart){
    this.router.navigateByUrl('item/' + chart.id)
  }
  setCount(){
    let count;
    if(this.arr != undefined){
       count = this.arr.length;
    }else{
      count = 0;
    }
    this.carSer.setCount(count);
  }
} 
