import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Playall3Component } from './playall3.component';

describe('Playall3Component', () => {
  let component: Playall3Component;
  let fixture: ComponentFixture<Playall3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Playall3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Playall3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
