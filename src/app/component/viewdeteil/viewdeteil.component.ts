import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/service/admin.service';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-viewdeteil',
  templateUrl: './viewdeteil.component.html',
  styleUrls: ['./viewdeteil.component.scss']
})
export class ViewdeteilComponent implements OnInit {
  panelOpenState = false;
  EmpId:any;
  token:any;
  employeeArray:any=[];
  constructor(private employee:EmployeeService, private snackBar:MatSnackBar) {this.token=localStorage.getItem("token") }

  ngOnInit(): void {
    this.getemployee();
  }

  getemployee() {
    let reqdata = {
      empId: this.EmpId
    };
    this.employee.getemployee().subscribe((response: any) => {
      console.log(response);
      this.employeeArray = response.response;
      
      console.log(this.employeeArray);
      this.snackBar.open('Employee detail fatch Successfull', '', {
        duration: 3000,
      })
    });
  }
}
