import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerEditionComponent } from './worker-edition.component';

describe('WorkerEditionComponent', () => {
  let component: WorkerEditionComponent;
  let fixture: ComponentFixture<WorkerEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
