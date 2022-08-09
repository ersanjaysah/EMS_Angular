import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';


describe('EmployeeService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EmployeeService]
  }));

  it(' component created', () => {
    const http: EmployeeService = TestBed.get(EmployeeService);
    expect(http).toBeTruthy();
  });

  it('Testing of EmployeeLogin function', () => {
    const http: EmployeeService = TestBed.get(EmployeeService);
    expect(http.employeeSignin).toBeTruthy();
  });

  it('Testing of EmployeeDetails Function', () => {
    const http: EmployeeService = TestBed.get(EmployeeService);
    expect(http.getemployee).toBeTruthy();
  });
});