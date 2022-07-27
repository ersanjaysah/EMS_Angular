import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  registerForm !: FormGroup;
  actionBtn:string="Save";

  constructor(private formBuilder:FormBuilder,private admin:AdminService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
     private dialogRef:MatDialogRef<DialogComponent>) { }

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


    });
    
    // if(this.editData){
    //   this.actionBtn="Update";
    //   this.registerForm.controls['Fullname'].setValue(this.editData.Fullname);
    //   this.registerForm.controls['Email'].setValue(this.editData.Email);
    //   this.registerForm.controls['Password'].setValue(this.editData.Password);
    //   this.registerForm.controls['Mobilenumber'].setValue(this.editData.Mobilenumber);
    //   this.registerForm.controls['Address'].setValue(this.editData.Address);
    //   this.registerForm.controls['Gender'].setValue(this.editData.Gender);
    //   this.registerForm.controls['Position'].setValue(this.editData.Position);
    //   this.registerForm.controls['Salary'].setValue(this.editData.Salary);
    // }
  }

  addEmployee(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.admin.Register(this.registerForm.value)
      .subscribe({
        next:(res)=>{
          alert("Employee Added Successfully");
          this.registerForm.reset();
          this.dialogRef.close("save");
        },
        error:()=>{
          alert("Error While Adding the Employee")
        }
      })
    }
  }

  // onSubmit(){
  //   console.log(this.registerForm.value);
  //   if(this.registerForm.valid){
  //     console.log("Data Inserted Successfully", this.registerForm.value);
  //     let reqData={
  //       fullName:this.registerForm.value.Fullname,
  //       email:this.registerForm.value.Email,
  //       password:this.registerForm.value.Password,
  //       mobileNumber:this.registerForm.value.Mobilenumber,
  //       address:this.registerForm.value.Address,
  //       gender:this.registerForm.value.Gender,
  //       position:this.registerForm.value.Position,
  //       salary:this.registerForm.value.Salary,
  //     }
  //    // this.admin.Register(reqData).subscribe((result:any)=>{console.log(result);})
  //     this.admin.Register(reqData).subscribe({next:(res)=>{alert('Employee Added successfully');
  //     this.registerForm.reset();
  //     this.dialogRef.close('save');},})
     
  //   }
  //   else
  //   {
  //     console.log("invalid data",this.registerForm.value);
  //   }
  // }

}
