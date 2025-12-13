import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningSeatsComponent } from './dinning-seats.component';

describe('DinningSeatsComponent', () => {
  let component: DinningSeatsComponent;
  let fixture: ComponentFixture<DinningSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinningSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinningSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
