import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {
  alert:boolean | any
 
  addFood=new FormGroup({
    foodItemsname:new FormControl(''),
    photo:new FormControl('')
  })
  constructor(private resro:CommonService) { }

  ngOnInit(): void { 
    this.getResto()
    this.getfoodItem()
  }

  getResto(){
    this.resro.getRestoList('restaurant').subscribe((result: any)=>{
      console.log(result);
      
    })
  }

  getfoodItem(){
    this.resro.getRestoList('foodItems').subscribe((result: any)=>{
      console.log(result);
      
    })
  }

  createResto(){
    this.resro.addResto("fooditems",this.addFood.value).subscribe((result: any)=>{
      this.alert = true;
      this.addFood.reset({});
      console.log("get data",result);
    })
  } 

  closeAlert(){
    this.alert = false;
  }
}