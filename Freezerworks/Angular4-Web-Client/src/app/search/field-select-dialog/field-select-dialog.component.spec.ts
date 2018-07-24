import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSelectDialogComponent } from './field-select-dialog.component';

describe('FieldSelectDialogComponent', () => {
  let component: FieldSelectDialogComponent;
  let fixture: ComponentFixture<FieldSelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldSelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
