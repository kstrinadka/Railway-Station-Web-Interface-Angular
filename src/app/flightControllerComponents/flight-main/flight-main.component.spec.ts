import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightMainComponent } from './flight-main.component';

describe('FlightMainComponent', () => {
  let component: FlightMainComponent;
  let fixture: ComponentFixture<FlightMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
