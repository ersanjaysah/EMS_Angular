import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(private formBuilder:FormBuilder,private admin:AdminService, private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
     Fullname :['',Validators.required],
     Email:['',Validators.required],
     Password :['',Validators.required],
     Mobilenumber:['',Validators.required],
     Address :['',Validators.required],
     Gender:['',Validators.required],
     Position :['',Validators.required],
     Salary:['',Validators.required],


    })
  }

  onSubmit(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      console.log("Data Inserted Successfully", this.registerForm.value);
      let reqData={
        fullName:this.registerForm.value.Fullname,
        email:this.registerForm.value.Email,
        password:this.registerForm.value.Password,
        mobileNumber:this.registerForm.value.Mobilenumber,
        address:this.registerForm.value.Address,
        gender:this.registerForm.value.Gender,
        position:this.registerForm.value.Position,
        salary:this.registerForm.value.Salary,
      }
     // this.admin.Register(reqData).subscribe((result:any)=>{console.log(result);})
      this.admin.Register(reqData).subscribe({next:(res)=>{alert('Employee Added successfully');
      this.registerForm.reset();
      this.dialogRef.close('save');},})
     
    }
    else
    {
      console.log("invalid data",this.registerForm.value);
    }
  }

}
