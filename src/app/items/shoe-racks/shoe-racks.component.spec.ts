import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeRacksComponent } from './shoe-racks.component';

describe('ShoeRacksComponent', () => {
  let component: ShoeRacksComponent;
  let fixture: ComponentFixture<ShoeRacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeRacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeRacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
