import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodcast2Component } from './bodcast2.component';

describe('Bodcast2Component', () => {
  let component: Bodcast2Component;
  let fixture: ComponentFixture<Bodcast2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodcast2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodcast2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
