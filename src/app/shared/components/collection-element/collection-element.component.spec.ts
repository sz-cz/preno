import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionElementComponent } from './collection-element.component';

describe('CollectionElementComponent', () => {
  let component: CollectionElementComponent;
  let fixture: ComponentFixture<CollectionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
