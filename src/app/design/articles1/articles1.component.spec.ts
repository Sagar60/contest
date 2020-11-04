import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Articles1Component } from './articles1.component';

describe('Articles1Component', () => {
  let component: Articles1Component;
  let fixture: ComponentFixture<Articles1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Articles1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Articles1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
