import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UATDataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: UATDataTableComponent<any>;
  let fixture: ComponentFixture<UATDataTableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UATDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UATDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
