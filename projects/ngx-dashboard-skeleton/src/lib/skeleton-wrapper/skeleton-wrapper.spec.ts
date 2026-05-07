import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonWrapper } from './skeleton-wrapper';

describe('SkeletonWrapper', () => {
  let component: SkeletonWrapper;
  let fixture: ComponentFixture<SkeletonWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
