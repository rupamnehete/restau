import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.scss']
})
export class UpdateFoodComponent implements OnInit {
  result :any 
  editRestaurant=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl('')
  })

  constructor(private resro:CommonService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    
    this.resro.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurant=new FormGroup({
        name:new FormControl(result),
        email:new FormControl(result),
        phone:new FormControl(result),
        address:new FormControl(result)
      })
    })
  }

  updateResto(){
    this.resro.updateData(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result)=>{
      console.log(result,"data updated");
      
    })
  }
}
