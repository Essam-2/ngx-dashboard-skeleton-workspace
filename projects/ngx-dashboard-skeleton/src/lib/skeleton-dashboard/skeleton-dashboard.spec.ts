import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonDashboard } from './skeleton-dashboard';

describe('SkeletonDashboard', () => {
  let component: SkeletonDashboard;
  let fixture: ComponentFixture<SkeletonDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
