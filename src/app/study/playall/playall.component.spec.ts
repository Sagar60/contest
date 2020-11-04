import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayallComponent } from './playall.component';

describe('PlayallComponent', () => {
  let component: PlayallComponent;
  let fixture: ComponentFixture<PlayallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
