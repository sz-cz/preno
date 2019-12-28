import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateModalComponent } from './deactivate-modal.component';

describe('DeactivateModalComponent', () => {
  let component: DeactivateModalComponent;
  let fixture: ComponentFixture<DeactivateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
