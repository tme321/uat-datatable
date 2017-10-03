import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadRowComponent } from './head-row.component';

describe('HeadRowComponent', () => {
  let component: HeadRowComponent;
  let fixture: ComponentFixture<HeadRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
