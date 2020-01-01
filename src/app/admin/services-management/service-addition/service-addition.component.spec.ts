import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdditionComponent } from './service-addition.component';

describe('ServiceAdditionComponent', () => {
  let component: ServiceAdditionComponent;
  let fixture: ComponentFixture<ServiceAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
