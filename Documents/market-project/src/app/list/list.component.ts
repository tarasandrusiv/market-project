import { Component, OnInit } from '@angular/core';
import { CARS } from '../mock-data/mock-cars';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cars = CARS;

  
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  // addChart(car){
  //   let arr = JSON.parse(localStorage.getItem('car'));
  //   console.log(arr)
  //   if(arr) {
  //     if(arr.find(x=> x.id === car.id)) return
  //     arr.push(car)
  //     localStorage.setItem('car', JSON.stringify(arr));
  //   }else{
  //     localStorage.setItem('car', JSON.stringify([car]));
  //   }

  // }
  
  
}
