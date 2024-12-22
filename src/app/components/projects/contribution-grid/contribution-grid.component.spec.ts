import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionGridComponent } from './contribution-grid.component';

describe('ContributionGridComponent', () => {
  let component: ContributionGridComponent;
  let fixture: ComponentFixture<ContributionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributionGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
