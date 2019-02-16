import { Component, OnInit} from '@angular/core';
import { CARS } from '../mock-data/mock-cars';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  cars = CARS;
  arr: any;

  constructor() { 
    localStorage.setItem('car', JSON.stringify([{ 
      id:32, 
      model: 'Susuki VitaraV2', 
      description: 'ALLGRIP 4WD:Система повного привода , Трансмісія: 6-ступенчатая автомат, ALLGRIP 4WD: 1. Режим Auto; 2. Режим Sport',
      price: 528000,
      photo: "./assets/Jimny.png",
      markId: 100
  },
  { 
    id:33, 
    model: 'Susuki VitaraV2', 
    description: 'ALLGRIP 4WD:Система повного привода , Трансмісія: 6-ступенчатая автомат, ALLGRIP 4WD: 1. Режим Auto; 2. Режим Sport',
    price: 528760,
    photo: "./assets/VitaraS2.png",
    markId: 100
}
  ])); 
  }

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('car'));
  }

  total(){

  }
} 
