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
  ) {}

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
    localStorage.setItem('car', JSON.stringify(this.arr));
    this.calculateTotal();
    this.setCount();
    return this.arr;
    
  }
  calculateTotal(){
    this.total = 0;
    if(this.arr){
      this.arr.map(x=> this.total += x.price * x.quantity);
      localStorage.setItem('car', JSON.stringify(this.arr)) 
    }
    this.setCount();
  }
  goToOrder(){
    this.router.navigateByUrl('/order');
  }
  link(chart){
    this.router.navigateByUrl(`item/${chart.id}`)
  }
  setCount(){
    let count = 0;
    if(this.arr){
      this.arr.forEach(x=> count += x.quantity);
    }
    this.carSer.count.next(count);
  }
} 
