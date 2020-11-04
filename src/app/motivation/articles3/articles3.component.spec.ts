import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Articles3Component } from './articles3.component';

describe('Articles3Component', () => {
  let component: Articles3Component;
  let fixture: ComponentFixture<Articles3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Articles3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Articles3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
