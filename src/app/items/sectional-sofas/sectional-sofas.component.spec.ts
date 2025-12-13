import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionalSofasComponent } from './sectional-sofas.component';

describe('SectionalSofasComponent', () => {
  let component: SectionalSofasComponent;
  let fixture: ComponentFixture<SectionalSofasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionalSofasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionalSofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
