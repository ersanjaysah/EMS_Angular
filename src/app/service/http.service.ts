import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl=environment.baseUrl;
  
  constructor(private http:HttpClient) { }
  

  postService(url:string, reqdata:any, token:Boolean=true, httpOption:any){
    return this.http.post(url,reqdata,token && httpOption)
  }

  putService(url:string, reqdata:any, token:boolean=true, httpOption:any){
    return this.http.put(url, reqdata, token && httpOption)
  }

  getService(url:string, token:boolean=false, httpOption:any){
    return this.http.get(url,token && httpOption)
  }
  
  deleteService(url:string, token:boolean=false, httpOption:any){
    return this.http.delete(url,token && httpOption)
  }
}
