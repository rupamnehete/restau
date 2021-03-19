import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddReasturantComponent } from './restaurant/add-reasturant/add-reasturant.component';
import { UpdateReasturantComponent } from './restaurant/update-reasturant/update-reasturant.component';
import { ListReasturantComponent } from './restaurant/list-reasturant/list-reasturant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFoodComponent } from './fooditems/add-food/add-food.component';
import { ListFoodComponent } from './fooditems/list-food/list-food.component';
import { CommonModule } from '@angular/common';
import { AddItemsComponent } from './foodItemRestaurant/add-items/add-items.component';
// import { UpdateFoodComponent } from './fooditems/update-food/update-food.component';
// import { AddHoursComponent } from './restaurantopeninghours/add-hours/add-hours.component';
// import { ListHoursComponent } from './restaurantopeninghours/list-hours/list-hours.component';
// import { UpdateHoursComponent } from './restaurantopeninghours/update-hours/update-hours.component';
// import { ListItemsComponent } from './fooditemrestaurant/list-items/list-items.component';
// import { UpdateItemsComponent } from './fooditemrestaurant/update-items/update-items.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReasturantComponent,
    UpdateReasturantComponent,
    ListReasturantComponent,
    AddFoodComponent,
    ListFoodComponent,
    // UpdateFoodComponent,
    // AddHoursComponent,
    // ListHoursComponent,
    // UpdateHoursComponent,
    AddItemsComponent
    // ListItemsComponent,
    // UpdateItemsComponent 
],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
