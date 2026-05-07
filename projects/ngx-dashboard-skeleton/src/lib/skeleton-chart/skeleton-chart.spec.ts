import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonChart } from './skeleton-chart';

describe('SkeletonChart', () => {
  let component: SkeletonChart;
  let fixture: ComponentFixture<SkeletonChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonChart],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
