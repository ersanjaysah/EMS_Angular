
import { Component, OnInit,Output ,EventEmitter,Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() employeeUpdate=new EventEmitter<any>();
  empId:any;

  constructor(private admin:AdminService,private snackBar:MatSnackBar,
    public dialogRef:MatDialogRef<UpdateComponent>,
    ) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void{
   
    
    // this.admin.updateEmployee().subscribe((result:any)=>{
    //   console.log(result);
    //   this.employeeUpdate.emit(result);

    //   this.snackBar.open('Employee updated successfully','',{
    //     duration:3000,
    //   })
    //   this.dialogRef.close();
    // })
  }
  

}
