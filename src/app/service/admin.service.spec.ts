import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';

describe(' My AdminService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AdminService]
  }));

  it('should be created', () => {
    const http: AdminService = TestBed.get(AdminService);
    expect(http).toBeTruthy();
  });

  it('Admin login function', () => {
    const http: AdminService = TestBed.get(AdminService);
    expect(http.login).toBeTruthy();
  });

  it('Admin can register Employee credentials', () => {
    const http: AdminService = TestBed.get(AdminService);
    expect(http.Register).toBeTruthy();
  });

  it('Admin can test delete function', () => {
    const http: AdminService = TestBed.get(AdminService);
    expect(http.deleteEmployee).toBeTruthy();
  });

  it('Admin can test updateEmployee function', () => {
    const http: AdminService = TestBed.get(AdminService);
    expect(http.updateEmployee).toBeTruthy();
  });

  it('Admin can getAllFunction of employee', () => {
    const http: AdminService = TestBed.get(AdminService);
    expect(http.getallEmployee).toBeTruthy();
  });
});