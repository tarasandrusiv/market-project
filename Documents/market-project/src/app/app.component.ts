import { Component, OnInit} from '@angular/core';
import { Subject, AsyncSubject, from, Subscription } from "rxjs";
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arr : any;
  count: any;
  carSer: CarService;
  countt: any;
  
  constructor(
    private carService: CarService
  ){
    
  }
  private subscription: Subscription[] = [];
  ngOnInit(){
    this.arr = JSON.parse(localStorage.getItem('car'));
    this.count = this.arr.length;
    this.arrCount();
    
  }
  

  arrCount(){
    return this.countt = this.carService.getCount.subscribe(x => {
       this.countt = x 
    });
  }
 
}
