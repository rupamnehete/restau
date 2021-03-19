import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  alert :boolean | any
  public collection :any
  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result: any)=>{
      this.collection=result;
      console.log(this.collection);   
    })
  }

  deleteResto(resto: { id: any; }){
    this.collection.splice(resto.id,-1)
    this.commonService.deleteResto(resto).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      this.alert= true;
    })
  }
}
