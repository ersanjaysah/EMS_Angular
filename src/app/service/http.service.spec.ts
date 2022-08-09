import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

describe(' MY HttpService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpService]
  }));

  it('service created', () => {
    const http: HttpService = TestBed.get(HttpService);
    expect(http).toBeTruthy();
  });

  it('service test getData function', () => {
    const http: HttpService = TestBed.get(HttpService);
    expect(http.getService).toBeTruthy();
  });

});