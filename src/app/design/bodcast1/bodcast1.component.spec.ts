import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodcast1Component } from './bodcast1.component';

describe('Bodcast1Component', () => {
  let component: Bodcast1Component;
  let fixture: ComponentFixture<Bodcast1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bodcast1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bodcast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
