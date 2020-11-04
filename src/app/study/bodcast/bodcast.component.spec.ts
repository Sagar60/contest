import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodcastComponent } from './bodcast.component';

describe('BodcastComponent', () => {
  let component: BodcastComponent;
  let fixture: ComponentFixture<BodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
