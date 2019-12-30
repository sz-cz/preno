import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEditionComponent } from './service-edition.component';

describe('ServiceEditionComponent', () => {
  let component: ServiceEditionComponent;
  let fixture: ComponentFixture<ServiceEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
