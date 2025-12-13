import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryFurnitureComponent } from './luxury-furniture.component';

describe('LuxuryFurnitureComponent', () => {
  let component: LuxuryFurnitureComponent;
  let fixture: ComponentFixture<LuxuryFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxuryFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
