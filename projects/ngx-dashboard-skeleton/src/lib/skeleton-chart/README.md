# Skeleton Chart

A chart-shaped placeholder for use where charts are displayed. It supports different visual types (bar/line/pie) and a configurable number of bars.

## Inputs

- `type` (`'bar' | 'line' | 'pie'`): Visual type to mimic. Default: `'bar'`.
- `height` (number): Height in pixels. Default: `260`.
- `bars` (number): Number of bars to render (for bar charts). Default: `8`.
- `config` (`SkeletonConfig`): Optional per-component config.

## Usage

```html
<ngx-skeleton-chart type="line" [height]="200"></ngx-skeleton-chart>
```

## Notes

This component renders purely decorative placeholders and does not attempt to draw real chart data. Use `config` to tweak animation and colors (see `skeleton-config.ts`).