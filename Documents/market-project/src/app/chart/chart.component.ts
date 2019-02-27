import { Component, OnInit} from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { Router } from '@angular/router';
import { CarService } from '../car.service';


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
  
  calculateTotal(){
    this.total = 0;
    if(this.arr){
      this.arr.map(x=> this.total += x.price * x.quantity);
      localStorage.setItem('car', JSON.stringify(this.arr)) }
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
      this.carSer.count.next(count);
    }
  } 
}