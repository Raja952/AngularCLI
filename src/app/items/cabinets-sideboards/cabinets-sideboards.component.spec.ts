import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsSideboardsComponent } from './cabinets-sideboards.component';

describe('CabinetsSideboardsComponent', () => {
  let component: CabinetsSideboardsComponent;
  let fixture: ComponentFixture<CabinetsSideboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetsSideboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetsSideboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
