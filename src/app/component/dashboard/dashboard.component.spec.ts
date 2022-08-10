import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';

describe('Dashboard Component', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [DashboardComponent],
      imports: [
         
         ReactiveFormsModule,
         RouterTestingModule,
         HttpClientModule,
         MatSnackBarModule,
         MatDialogModule
      ],
    }).compileComponents();
   }));
   
   beforeEach(() => {
     fixture =   TestBed.createComponent(DashboardComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create a component', () => {
     expect(component).toBeTruthy();
   });

   it('should contain openDialog', () => {
    expect(component.openDialog).toBeTruthy();
  });

  it('should contain DataSource', () => {
    expect(component.dataSource).toBeTruthy();
  });
});