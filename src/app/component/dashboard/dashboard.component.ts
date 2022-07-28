import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminService } from 'src/app/service/admin.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   dataSource:any=[];
  

   @ViewChild(MatPaginator) paginator!:MatPaginator;
   @ViewChild(MatSort) sort!:MatSort;

constructor(private dialog:MatDialog, private admin:AdminService) { }

ngOnInit(): void {
    this.getAllEmployee();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
    width:'34%',
    height:'75%'
    }).afterClosed().subscribe(val=>{
      if(val ==='Save'){
        this.getAllEmployee();
      }
    })
  }
  getAllEmployee(){
    this.admin.getallEmployee().subscribe(
      (response:any)=>{
        console.log(response);
       this.dataSource = response.response;
       console.log(this.dataSource);
       this.dataSource.paginator=this.paginator;
       this.dataSource.sort=this.sort;
      })
  }


  updateEmployee(arr:any){
    this.dialog.open(DialogComponent,{
      width:'34%',
      height:'75%',
      data:arr,
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllEmployee();
      }
    })
  }


  deleteEmployee(empId:any){
    this.admin.deleteEmployee(empId).subscribe({
      next:(res)=>{
        alert("Employee deleted successfully");
        this.getAllEmployee();
      },
      error: () => {
        alert("Error While deleting the Employee record");
      }
    })
  }
}
 
  


