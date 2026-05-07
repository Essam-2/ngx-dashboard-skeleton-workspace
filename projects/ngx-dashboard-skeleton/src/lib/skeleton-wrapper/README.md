# Skeleton Wrapper

A single wrapper component that switches between different skeleton types (table, card, chart, dashboard, text, avatar) while content is loading.

## Inputs

- `loading` (boolean): Whether to show the skeleton. Default: `false`.
- `skeleton` (`'table' | 'card' | 'chart' | 'dashboard' | 'text' | 'avatar'`): Which skeleton to render. Default: `text`.
- `config` (`SkeletonConfig`): Optional per-component config.
- Plus additional inputs forwarded to specific skeleton types (e.g. `rows`, `columns`, `lines`, `cards`, `chartType`, `chartHeight`, `avatarSize`, `avatarShape`).

## Usage

```html
<lib-skeleton-wrapper loading="true" skeleton="dashboard" [cards]="6"></lib-skeleton-wrapper>
```

## Notes

Use the wrapper when you need a single placeholder entry point that can mimic multiple layouts. Pass `config` to tweak appearance and animation for the selected skeleton type.