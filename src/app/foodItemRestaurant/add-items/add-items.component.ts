import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
}) 
export class AddItemsComponent implements OnInit {
  alert:boolean = false
  showItem :boolean = false;
  addRestaurant=new FormGroup({
    restaurantname:new FormControl(''),
    email:new FormControl(''),
    photo:new FormControl(''),
    openingtime:new FormControl(''),
    closingtime:new FormControl('')
  })
  dataList :any;
  constructor(private resro:CommonService) { }

  ngOnInit(): void { 
    this.getResto()
    this.getfoodItem()
  }

  getResto(){
    this.resro.getRestoList('restaurant').subscribe((result: any)=>{
      console.log(result);
      this.dataList = result;
      this.showItem = true;
      console.log(this.dataList);
      
    })
  }

  getfoodItem(){
    this.resro.getRestoList('foodItems').subscribe((result: any)=>{
      console.log(result);
      
    })
  }

  createItemsResto(){
    this.resro.addResto("restaurant",this.addRestaurant.value).subscribe((result: any)=>{
      this.alert = true;
      this.addRestaurant.reset({});
      console.log("get data",result);
    })
  } 

  closeAlert(){
    this.alert = false;
  }
}
