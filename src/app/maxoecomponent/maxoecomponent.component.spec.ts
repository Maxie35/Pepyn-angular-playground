import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxoecomponentComponent } from './maxoecomponent.component';

describe('MaxoecomponentComponent', () => {
  let component: MaxoecomponentComponent;
  let fixture: ComponentFixture<MaxoecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxoecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxoecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
