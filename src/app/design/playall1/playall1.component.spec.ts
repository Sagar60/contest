import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Playall1Component } from './playall1.component';

describe('Playall1Component', () => {
  let component: Playall1Component;
  let fixture: ComponentFixture<Playall1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Playall1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Playall1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
