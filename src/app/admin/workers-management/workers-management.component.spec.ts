import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersManagementComponent } from './workers-management.component';

describe('WorkersManagementComponent', () => {
  let component: WorkersManagementComponent;
  let fixture: ComponentFixture<WorkersManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
