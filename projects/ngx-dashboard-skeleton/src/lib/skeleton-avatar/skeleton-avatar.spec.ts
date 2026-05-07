import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonAvatar } from './skeleton-avatar';

describe('SkeletonAvatar', () => {
  let component: SkeletonAvatar;
  let fixture: ComponentFixture<SkeletonAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonAvatar],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonAvatar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
