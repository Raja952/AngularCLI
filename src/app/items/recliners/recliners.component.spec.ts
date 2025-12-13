import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclinersComponent } from './recliners.component';

describe('ReclinersComponent', () => {
  let component: ReclinersComponent;
  let fixture: ComponentFixture<ReclinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclinersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
