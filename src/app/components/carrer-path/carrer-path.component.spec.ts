import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerPathComponent } from './carrer-path.component';

describe('CarrerPathComponent', () => {
  let component: CarrerPathComponent;
  let fixture: ComponentFixture<CarrerPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrerPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrerPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
