import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAdditionComponent } from './worker-addition.component';

describe('WorkerAdditionComponent', () => {
  let component: WorkerAdditionComponent;
  let fixture: ComponentFixture<WorkerAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
