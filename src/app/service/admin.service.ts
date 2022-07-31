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
  empId:any;
  constructor(private httpService:HttpService) { this.token = localStorage.getItem('token');}
  
  Register(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService(this.BaseUrl+'Employee/Registration',reqdata,true,header);
  }

  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService(this.BaseUrl+`Admin/AdminLogin`,reqdata,false,header);
  }

  getallEmployee(){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.getService(this.BaseUrl+'Employee/GetAllEmployee',true,header);
  }

  updateEmployee(data:any,EmpId:any){
    console.log(this.token);
    console.log(data,EmpId);
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.putService(this.BaseUrl+`Employee/UpdateEmployee/${EmpId}`,data, true,header);
  }

  deleteEmployee(EmpId:any){
    console.log(this.token);
    console.log(EmpId);
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      }),
    };
    return this.httpService.deleteService(this.BaseUrl+`Employee/DeleteEmployee/${EmpId}`, true,header);
  }

  // employeeSignin(reqdata: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //     })
  //   }
  //   console.log(reqdata);
  //   return this.httpService.postService(this.BaseUrl+`Employee/EmployeeLogin`, reqdata, false, header)
  // }

  // getemployee() {
  //   console.log(this.token);
    
    
  //   let header = {
  //     Headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization' : 'Bearer '+this.token,
  //     }),
  //   };
  //   return this.httpService.getService(this.BaseUrl+`Employee/EmployeeDetails`,true,header);
  // }
}

