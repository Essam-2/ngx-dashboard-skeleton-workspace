# Skeleton Table

A table-shaped placeholder for list or table data while the real table is loading.

## Inputs

- `rows` (number): Number of rows to render. Default: `5`.
- `columns` (number): Number of columns to render. Default: `4`.
- `config` (`SkeletonConfig`): Optional per-component config.

## Usage

```html
<ngx-skeleton-table [rows]="8" [columns]="6"></ngx-skeleton-table>
```

## Notes

Each cell is decorative. Adjust `rows`/`columns` to match your eventual table size. Styling and animation are controlled by `config` and the global `SKELETON_CONFIG`.