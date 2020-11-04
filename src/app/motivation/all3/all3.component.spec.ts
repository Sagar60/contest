import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { All3Component } from './all3.component';

describe('All3Component', () => {
  let component: All3Component;
  let fixture: ComponentFixture<All3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ All3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(All3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
