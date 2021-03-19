import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url = "http://localhost:3000"
  constructor(private _http: HttpClient) { }
    getRestoList(name:any){
      return this._http.get(`${this.url}/${name}`);
  }

  addResto(name:any,data: {}){
    console.log(data);
    console.log(this.url);
    // data.["status"]=true;
    return this._http.post(`${this.url}/${name}`,data)
  }

  deleteResto(_id: any){
    return this._http.delete(`${this.url}/${_id}`)
  }

  getCurrentData(_id :any){
    return this._http.get(`${this.url}/${_id}`)
  }

  updateData(_id: any,data: any){
    return this._http.put(`${this.url}/${_id}`,data)
 
  }
}
