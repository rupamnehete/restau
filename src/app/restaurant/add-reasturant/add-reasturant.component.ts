import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

 
@Component({
  selector: 'app-add-reasturant',
  templateUrl: './add-reasturant.component.html',
  styleUrls: ['./add-reasturant.component.scss']
})
export class AddReasturantComponent implements OnInit {
  alert:boolean | any
 
  addRestaurant=new FormGroup({
    restaurantname:new FormControl(''),
    email:new FormControl(''),
    photo:new FormControl(''),
    openingtime:new FormControl(''),
    closingtime:new FormControl('')
  })
  constructor(private resro:CommonService) { }

  ngOnInit(): void { 
  }

  createResto(){
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
