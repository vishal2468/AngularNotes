import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOverviewComponent } from './employee-overview.component';

describe('EmployeeOverviewComponent', () => {
  let component: EmployeeOverviewComponent;
  let fixture: ComponentFixture<EmployeeOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeOverviewComponent]
    });
    fixture = TestBed.createComponent(EmployeeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
