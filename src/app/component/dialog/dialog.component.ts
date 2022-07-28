import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  registerForm !: FormGroup;
  actionBtn: string = "Save";
  empId: any;


  constructor(private formBuilder: FormBuilder, private admin: AdminService,
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Fullname: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Mobilenumber: ['', Validators.required],
      Address: ['', Validators.required],
      Gender: ['', Validators.required],
      Position: ['', Validators.required],
      Salary: ['', Validators.required],


    });
    console.log(this.updateData);

    if (this.updateData) {
      this.actionBtn = "update";
      this.registerForm.controls['Fullname'].setValue(this.updateData.fullName);
      this.registerForm.controls['Email'].setValue(this.updateData.email);
      this.registerForm.controls['Password'].setValue(this.updateData.password);
      this.registerForm.controls['Mobilenumber'].setValue(this.updateData.mobileNumber);
      this.registerForm.controls['Address'].setValue(this.updateData.address);
      this.registerForm.controls['Gender'].setValue(this.updateData.gender);
      this.registerForm.controls['Position'].setValue(this.updateData.position);
      this.registerForm.controls['Salary'].setValue(this.updateData.salary);
    }
  }

  addEmployee() {
    console.log(this.registerForm.value);
    if (!this.updateData) {
      if (this.registerForm.valid) {
        this.admin.Register(this.registerForm.value)
          .subscribe({
            next: (res) => {
              alert("Employee record Added Successfully");
              this.registerForm.reset();
              this.dialogRef.close("save");
            },
            error: () => {
              alert("Error While Adding the Employee record");
            }
          })
      }
    }
    else {
      this.updateEmployee()
    }

  }
  updateEmployee() {
    this.admin.updateEmployee(this.registerForm.value, this.updateData.empId).subscribe({
      next: (res) => {
        alert("Employee record updated Successfully!!!");
        this.registerForm.reset();
        this.dialogRef.close("update");

      },
      error: () => {
        alert("Error While updating the Employee record");
      }
    })
  }
}
