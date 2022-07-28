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
  title='Employee Table'
  displayedColumns: string[] = ['EmpId', 'Fullname', 'Email', 'Password','Mobilenumber','Address','Gender','Position','Salary','Action'];
  dataSource!:MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

constructor(private dialog:MatDialog,private admin:AdminService) { }

ngOnInit(): void {
    this.getAllEmployee();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
    width:'34%',
    height:'75%'
    });
  }
  getAllEmployee(){
    this.admin.getalldetails().subscribe({
      next:(result)=>{
        // this.dataSource=new MatTableDataSource(result);
         this.dataSource.paginator=this.paginator;
         this.dataSource.sort=this.sort;
      },
     
      
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  
}
 
  


