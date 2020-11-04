import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Downloads1Component } from './downloads1.component';

describe('Downloads1Component', () => {
  let component: Downloads1Component;
  let fixture: ComponentFixture<Downloads1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Downloads1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Downloads1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
