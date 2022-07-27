import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  BaseUrl=environment.baseUrl;  
  token:any;
  constructor(private httpService:HttpService) { }


  Register(reqdata:any){
    let header={
      Headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService(this.BaseUrl+'Employee/Registration',reqdata,false,header)
  }

  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService(this.BaseUrl+`Admin/AdminLogin`,reqdata,false,header)
  }

  getallEmployee(){
    let header={
      Headers:new HttpHeaders({
        'Content-type': 'application/json',
       // 'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.getService(this.BaseUrl+'Employee/GetAllEmployee',true,header)
  }
  
}
