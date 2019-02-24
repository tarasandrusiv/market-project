import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ChartComponent } from './chart/chart.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { Subject , AsyncSubject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    ListItemComponent,
    ChartComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
