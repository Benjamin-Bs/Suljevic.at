import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPathComponent } from './education-path.component';

describe('EducationPathComponent', () => {
  let component: EducationPathComponent;
  let fixture: ComponentFixture<EducationPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
