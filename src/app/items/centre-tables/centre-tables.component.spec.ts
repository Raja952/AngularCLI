import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreTablesComponent } from './centre-tables.component';

describe('CentreTablesComponent', () => {
  let component: CentreTablesComponent;
  let fixture: ComponentFixture<CentreTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
