import { InjectionToken } from '@angular/core';

export interface SkeletonConfig {
  animationDuration?: string;
  baseColor?: string;
  highlightColor?: string;
  borderRadius?: string;
}

export const DEFAULT_SKELETON_CONFIG: Required<SkeletonConfig> = {
  animationDuration: '1.4s',
  baseColor: 'var(--ngx-skeleton-base)',
  highlightColor: 'var(--ngx-skeleton-highlight)',
  borderRadius: '8px',
};

export const SKELETON_CONFIG = new InjectionToken<SkeletonConfig>(
  'SKELETON_CONFIG'
);