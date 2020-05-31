import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndDisplayNotesComponent } from './create-and-display-notes.component';

describe('CreateAndDisplayNotesComponent', () => {
  let component: CreateAndDisplayNotesComponent;
  let fixture: ComponentFixture<CreateAndDisplayNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAndDisplayNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndDisplayNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
