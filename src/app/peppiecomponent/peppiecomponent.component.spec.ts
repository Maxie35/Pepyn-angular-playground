import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeppiecomponentComponent } from './peppiecomponent.component';

describe('PeppiecomponentComponent', () => {
  let component: PeppiecomponentComponent;
  let fixture: ComponentFixture<PeppiecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeppiecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeppiecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
