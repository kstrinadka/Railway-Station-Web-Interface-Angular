import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorsListComponent } from './administrators-list.component';

describe('AdministratorsListComponent', () => {
  let component: AdministratorsListComponent;
  let fixture: ComponentFixture<AdministratorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
