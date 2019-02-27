import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  localArr : any;
  count: any;

  constructor(private carService: CarService){}

  ngOnInit(){
    this.carService.count.subscribe(x=> this.count = x ? x : null)
  }

}
