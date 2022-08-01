import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  BaseUrl=environment.baseUrl;  
  emptoken:any;
  
  constructor(private httpService:HttpService) { }

  employeeSignin(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log(reqdata);
    return this.httpService.postService(this.BaseUrl+`Employee/EmployeeLogin`, reqdata, false, header)
  }

  getemployee() {
    this.emptoken = localStorage.getItem('emptoken');
    console.log(this.emptoken);
    
    
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.emptoken
      }),
      
    };
    console.log(header);
    return this.httpService.getService(this.BaseUrl+`Employee/EmployeeDetails`,true,header);
  }
}
