import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;
  token: any;
  
  constructor(private formBuilder: FormBuilder,private admin:AdminService,private router:Router,private activeRoute:ActivatedRoute) { 
   this.token = localStorage.getItem("token")
  }
  ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
  });
  }
    onSubmit()
  {
    this.submitted=true;
    if(this.loginForm.valid){
      console.log("Login Successfully",this.loginForm.value);
      let reqData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.admin.login(reqData).subscribe((result:any)=>{
        console.log(result);
        localStorage.setItem('token',result.data.token); 
        this.router.navigateByUrl('/dashboard')  
      })
      
    }
    else{
      console.log("invalid data",this.loginForm.value);
    }
  }
}
