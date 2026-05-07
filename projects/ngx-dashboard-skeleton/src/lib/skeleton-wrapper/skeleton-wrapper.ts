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

  /** Whether to show the skeleton or the real content. Defaults to `false`. */
  @Input() loading = false;
  /** Type of skeleton to render when `loading` is true. Defaults to `'text'`. */
  @Input() skeleton: SkeletonWrapperType = 'text';
  /** Local configuration for the wrapper and forwarded to inner components. */
  @Input() config: SkeletonConfig = {};

  /** Table-specific: number of rows to render. Defaults to `5`. */
  @Input() rows = 5;
  /** Table-specific: number of columns to render. Defaults to `4`. */
  @Input() columns = 4;
  /** Text-specific: number of lines to render. Defaults to `3`. */
  @Input() lines = 3;
  /** Dashboard/card-specific: number of cards to render. Defaults to `4`. */
  @Input() cards = 4;

  /** Chart-specific: type of chart to show. Defaults to `'bar'`. */
  @Input() chartType: SkeletonChartType = 'bar';
  /** Chart-specific: height in pixels. Defaults to `260`. */
  @Input() chartHeight = 260;
  /** Avatar-specific: avatar size in pixels. Defaults to `48`. */
  @Input() avatarSize = 48;
  /** Avatar-specific: avatar shape. Defaults to `'circle'`. */
  @Input() avatarShape: SkeletonAvatarShape = 'circle';
}
