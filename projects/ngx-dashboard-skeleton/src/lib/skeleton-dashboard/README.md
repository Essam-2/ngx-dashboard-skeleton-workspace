# Skeleton Dashboard

A composite skeleton that lays out multiple card, table, and chart placeholders to mimic a typical dashboard while data is loading.

## Inputs

- `cards` (number): Number of card placeholders. Default: `4`.
- `showTable` (boolean): Include a table placeholder. Default: `true`.
- `showChart` (boolean): Include a chart placeholder. Default: `true`.
- `config` (`SkeletonConfig`): Optional per-component config.

## Usage

```html
<lib-skeleton-dashboard [cards]="6" [showChart]="false"></lib-skeleton-dashboard>
```

## Notes

The dashboard composes other skeleton components. Use `config` to pass styling and animation overrides that propagate to child placeholders.