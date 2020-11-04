import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodcast3Component } from './bodcast3.component';

describe('Bodcast3Component', () => {
  let component: Bodcast3Component;
  let fixture: ComponentFixture<Bodcast3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodcast3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodcast3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
