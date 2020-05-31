import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOperationsComponent } from './label-operations.component';

describe('LabelOperationsComponent', () => {
  let component: LabelOperationsComponent;
  let fixture: ComponentFixture<LabelOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
