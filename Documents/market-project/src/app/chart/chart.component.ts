import { Component, OnInit} from '@angular/core';
import { CARS } from '../mock-data/mock-cars';



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
        id:33, 
        model: 'Susuki VitaraV3', 
        description: 'ALLGRIP 4WD:Система повного привода , Трансмісія: 6-ступенчатая автомат, ALLGRIP 4WD: 1. Режим Auto; 2. Режим Sport',
        price: 528760,
        photo: "./assets/VitaraS2.png",
        markId: 100,
        quantity: 0
      }
    ])); 
  }

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('car'));
  }

  clear(){
    let li = document.getElementsByClassName('chartList');
    let div = document.getElementById('chart');
    localStorage.clear();
    div.parentNode.removeChild(div);
  }
  quantityMinus(chart){
    if(chart.quantity > 1){
      this.total -= chart.price; 
      chart.quantity -= 1;
    }
  }
  quantityPlusp(chart){
    chart.quantity += 1;
    this.total += chart.price;
  }
  delItem(chart){    
    let id = document.getElementById(chart.id);
    if(this.arr.find(x => x.id == chart.id)){
      localStorage.removeItem('car');
      id.parentNode.removeChild(id);
      this.total -= chart.price * chart.quantity; 
    }
  }
  goToOrder(){
    location.replace('order');
    // localStorage.setItem('buy', JSON.stringify());
  }
} 
