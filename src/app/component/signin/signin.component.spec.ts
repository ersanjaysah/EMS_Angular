import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { SigninComponent } from './signin.component';


describe('LoginComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

    beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [SigninComponent],
      imports: [
         
         ReactiveFormsModule,
         RouterTestingModule,
         HttpClientModule,
         MatSnackBarModule
      ],
    }).compileComponents();
   }));
   
   beforeEach(() => {
     fixture =   TestBed.createComponent(SigninComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create a form using formbuilder', () => {
     expect(component).toBeTruthy();
   });

   it('should contain component', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should contain login form of default value', () => {
    expect(component.loginForm.value).toEqual({email:'', password:''});
  });
});