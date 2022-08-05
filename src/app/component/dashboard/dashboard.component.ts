import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   dataSource: any = [];
  constructor(private dialog: MatDialog, private admin: AdminService, private router: Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getAllEmployee();
  }
  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '34%',
      height: '75%'
    }).afterClosed().subscribe(val => {
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.router.onSameUrlNavigation="reload";
      this.router.navigate(["./dashboard"]),{
        relativeTo:this.route
      }
      if (val === 'Save') {
        this.getAllEmployee();
      
      }
      
    })
  }
  getAllEmployee() {
    this.admin.getallEmployee().subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = response.response.reverse();
        console.log(this.dataSource);
      })
  }
 
  updateEmployee(arr: any) {
    this.dialog.open(DialogComponent, {
      width: '34%',
      height: '75%',
      data: arr,
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllEmployee();
      }
    })
  }

  deleteEmployee(empId: any) {
    this.admin.deleteEmployee(empId).subscribe({
      next: (res) => {
        alert("Employee deleted successfully");
        this.getAllEmployee();
      },
      error: () => {
        alert("Error While deleting the Employee record");
      }
    })
  }
}




