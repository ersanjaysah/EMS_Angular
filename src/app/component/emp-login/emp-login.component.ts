import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.scss']
})
export class EmpLoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;
  token:any;
  
constructor(private formBuilder: FormBuilder,private employee:EmployeeService,private router:Router,private snackBar:MatSnackBar) { }

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
        password:this.loginForm.value.password,
      }
      this.employee.employeeSignin(reqData).subscribe((result:any)=>{
        console.log(result);
       localStorage.setItem('emptoken',result.token); 
        this.router.navigateByUrl('/viewdetail') 
        this.snackBar.open('Login Successfully..!!!', '..', {
          duration: 3000,
        }) 
      })
      
    }
    else{
      console.log("invalid data",this.loginForm.value);
    }
  }

}
