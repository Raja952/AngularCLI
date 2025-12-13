import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTablesComponent } from './study-tables.component';

describe('StudyTablesComponent', () => {
  let component: StudyTablesComponent;
  let fixture: ComponentFixture<StudyTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
