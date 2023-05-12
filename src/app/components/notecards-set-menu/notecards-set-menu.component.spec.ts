import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecardsSetMenuComponent } from './notecards-set-menu.component';

describe('NotecardsSetMenuComponent', () => {
  let component: NotecardsSetMenuComponent;
  let fixture: ComponentFixture<NotecardsSetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecardsSetMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotecardsSetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
