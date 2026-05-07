export interface SkeletonConfig {
  animationDuration?: string;
  baseColor?: string;
  highlightColor?: string;
  borderRadius?: string;
}

export const DEFAULT_SKELETON_CONFIG: Required<SkeletonConfig> = {
  animationDuration: '1.4s',
  baseColor: '#eeeeee',
  highlightColor: '#f7f7f7',
  borderRadius: '8px',
};