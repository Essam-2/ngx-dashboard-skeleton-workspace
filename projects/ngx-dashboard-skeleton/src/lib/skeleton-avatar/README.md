# Skeleton Avatar

A small placeholder avatar used to represent user/profile images while content is loading.

## Inputs

- `size` (number): Size in pixels (width and height). Default: `48`.
- `shape` (`'circle' | 'square'`): Avatar shape. Default: `'circle'`.
- `config` (`SkeletonConfig`): Optional per-component config (overrides global config).

## Usage

```html
<ngx-skeleton-avatar [size]="64" shape="square"></ngx-skeleton-avatar>
```

## Notes

The component merges `DEFAULT_SKELETON_CONFIG`, any injected global `SKELETON_CONFIG`, and the local `config` input. See `skeleton-config.ts` for default values and available options (animationDuration, baseColor, highlightColor, borderRadius).