import { Component, OnInit} from '@angular/core';
import { CARS } from '../mock-data/mock-cars';
import { isNgTemplate, analyzeAndValidateNgModules } from '@angular/compiler';



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
  
  quantityNum = document.getElementById('quantity-num"');
  quantityPlus = document.getElementsByClassName('quantity-arrow-plus');
  quantityMin = document.getElementsByClassName('quantity-arrow-minus');
  constructor() { 
    localStorage.setItem('car', JSON.stringify([
      { 
        id:32, 
        model: 'Susuki VitaraV2', 
        description: 'ALLGRIP 4WD:Система повного привода , Трансмісія: 6-ступенчатая автомат, ALLGRIP 4WD: 1. Режим Auto; 2. Режим Sport',
        price: 528000,
        photo: "./assets/Jimny.png",
        markId: 100,
        quantity: 0
      },
      { 
        id:30, 
        model: 'Susuki Vitara', 
        description: 'Двигун: 1.4 BOOSTERJET, Трансмісія: 6-ступенчатая автоматическая коробка передач, ALLGRIP 4WD: 1. Режим Auto; 2. Режим Sport, Освітлення: Денні ходові фари',
        price: 449900,
        photo: "./assets/Vitara.png",
        markId: 100,
        quantity: 0
      },
      { 
        id:31, 
        model: 'Susuki SX4', 
        description: 'ALLGRIP 4WD:Система повного привода , Трансмісія: 6-ступенчатая автомат, ALLGRIP 4WD: 1. Режим Auto; 2. Режим Sport',
        price: 4493242,
        photo: "./assets/SX4.png",
        markId: 100,
        quantity: 0
      }
    ])); 
  }

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('car'));
  }

  clear(){
    this.arr = localStorage.clear();
    
    this.total -= this.total;
  }
 
  delItem(chart){    
    this.arr = this.arr.filter(arr => arr != chart);
    localStorage.setItem('cars', this.arr)
    this.calculateTotal();
  }

  calculateTotal(){
    this.total = 0;
    this.arr.map(x=> this.total += x.price * x.quantity); // change to reduce
    // this.total += this.arr.reduce(x => 0 + x.price * x.quantity);
  }
  goToOrder(){
    location.replace('order');
    // localStorage.setItem('buy', JSON.stringify());
  }
} 
