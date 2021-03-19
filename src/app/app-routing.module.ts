import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsComponent } from './foodItemRestaurant/add-items/add-items.component';
import { AddFoodComponent } from './fooditems/add-food/add-food.component';
import { ListFoodComponent } from './fooditems/list-food/list-food.component';
import { AddReasturantComponent } from './restaurant/add-reasturant/add-reasturant.component';
import { ListReasturantComponent } from './restaurant/list-reasturant/list-reasturant.component';
import { UpdateReasturantComponent } from './restaurant/update-reasturant/update-reasturant.component';

const routes: Routes = [
  {path:'add', component:AddReasturantComponent},
  {path:'update/:_id', component:UpdateReasturantComponent},
  {path:'list', component:ListReasturantComponent},
  {path:"addfood",component:AddFoodComponent},
  {path:'listfood',component:ListFoodComponent},
  {path:'restoItem', component:  AddItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
