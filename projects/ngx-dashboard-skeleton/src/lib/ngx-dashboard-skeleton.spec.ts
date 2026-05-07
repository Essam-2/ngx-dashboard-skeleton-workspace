import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDashboardSkeleton } from './ngx-dashboard-skeleton';

describe('NgxDashboardSkeleton', () => {
  let component: NgxDashboardSkeleton;
  let fixture: ComponentFixture<NgxDashboardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDashboardSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDashboardSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
