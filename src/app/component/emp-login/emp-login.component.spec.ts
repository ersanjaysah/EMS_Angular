import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpLoginComponent } from './emp-login.component';



describe('Employee login ', () => {
  let component: EmpLoginComponent;
  let fixture: ComponentFixture<EmpLoginComponent>;

    beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [EmpLoginComponent],
      imports: [
         
         ReactiveFormsModule,
         RouterTestingModule,
         HttpClientModule,
         MatSnackBarModule
      ],
    }).compileComponents();
   }));
   
   beforeEach(() => {
     fixture =   TestBed.createComponent(EmpLoginComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create a component', () => {
     expect(component).toBeTruthy();
   });

   it('should contain component Employee Login', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should contain login form of default value', () => {
    expect(component.loginForm.value).toEqual({email:'', password:''});
  });

});