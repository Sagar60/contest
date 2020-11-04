import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Playall2Component } from './playall2.component';

describe('Playall2Component', () => {
  let component: Playall2Component;
  let fixture: ComponentFixture<Playall2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Playall2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Playall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
