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
<<<<<<< HEAD
  total = 0; 
  constructor(
    private router:Router,
    private carSer: CarService
  ) {}
=======
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
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('car'));
    this.calculateTotal();
    this.setCount();
  }

  clear(){
    this.arr = localStorage.clear();
    this.setCount();
    this.calculateTotal();
    return this.arr; 
  }
 
  delItem(chart){   
    this.arr = this.arr.filter(arr => arr != chart); 
<<<<<<< HEAD
<<<<<<< HEAD
    localStorage.setItem('car', JSON.stringify(this.arr));
    this.calculateTotal();
    this.setCount();
=======
    localStorage.setItem('car', this.arr);
    this.setCount();
    this.calculateTotal();
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
=======
    localStorage.setItem('car', this.arr);
    this.setCount();
    this.calculateTotal();
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
    return this.arr;
    
  }
  calculateTotal(){
    this.total = 0;
<<<<<<< HEAD
<<<<<<< HEAD
    if(this.arr){
      this.arr.map(x=> this.total += x.price * x.quantity);
      localStorage.setItem('car', JSON.stringify(this.arr)) 
    }
    this.setCount();
=======
    this.arr.map(x=> this.total += x.price * x.quantity); 
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
=======
    this.arr.map(x=> this.total += x.price * x.quantity); 
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
  }
  goToOrder(){
    this.router.navigateByUrl('/order');
  }
  link(chart){
<<<<<<< HEAD
<<<<<<< HEAD
    this.router.navigateByUrl(`item/${chart.id}`)
  }
  setCount(){
    let count = 0;
    if(this.arr){
      this.arr.forEach(x=> count += x.quantity);
    }
    this.carSer.count.next(count);
=======
=======
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
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
<<<<<<< HEAD
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
=======
>>>>>>> 5f3545263be2e31e7531ab1893519dd4b6a0d6ae
  }
} 
