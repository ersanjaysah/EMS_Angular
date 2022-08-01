import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeteilComponent } from './viewdeteil.component';

describe('ViewdeteilComponent', () => {
  let component: ViewdeteilComponent;
  let fixture: ComponentFixture<ViewdeteilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdeteilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
