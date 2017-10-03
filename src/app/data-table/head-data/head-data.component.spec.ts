import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDataComponent } from './head-data.component';

describe('HeadDataComponent', () => {
  let component: HeadDataComponent;
  let fixture: ComponentFixture<HeadDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
