import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Articles2Component } from './articles2.component';

describe('Articles2Component', () => {
  let component: Articles2Component;
  let fixture: ComponentFixture<Articles2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Articles2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Articles2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
