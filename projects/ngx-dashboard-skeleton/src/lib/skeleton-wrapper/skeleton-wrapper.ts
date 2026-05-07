import { Component, Input } from '@angular/core';
import { SkeletonTable } from '../skeleton-table/skeleton-table';
import { SkeletonAvatar, SkeletonAvatarShape } from '../skeleton-avatar/skeleton-avatar';
import { SkeletonCard } from '../skeleton-card/skeleton-card';
import { SkeletonChart, SkeletonChartType } from '../skeleton-chart/skeleton-chart';
import { SkeletonConfig } from '../skeleton-config';
import { SkeletonDashboard } from '../skeleton-dashboard/skeleton-dashboard';
import { SkeletonText } from '../skeleton-text/skeleton-text';

export type SkeletonWrapperType =
  | 'table'
  | 'card'
  | 'chart'
  | 'dashboard'
  | 'text'
  | 'avatar';

@Component({
  selector: 'lib-skeleton-wrapper',
  imports: [
    SkeletonTable,
    SkeletonCard,
    SkeletonChart,
    SkeletonDashboard,
    SkeletonText,
    SkeletonAvatar,
  ],
  templateUrl: './skeleton-wrapper.html',
  styleUrl: './skeleton-wrapper.css',
})
export class SkeletonWrapper {

  @Input() loading = false;
  @Input() skeleton: SkeletonWrapperType = 'text';
  @Input() config: SkeletonConfig = {};

  @Input() rows = 5;
  @Input() columns = 4;
  @Input() lines = 3;
  @Input() cards = 4;

  @Input() chartType: SkeletonChartType = 'bar';
  @Input() chartHeight = 260;
  @Input() avatarSize = 48;
  @Input() avatarShape: SkeletonAvatarShape = 'circle';
}
