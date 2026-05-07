# Skeleton Card

A card-shaped placeholder that simulates an image (optional) and multiple text lines while the card content loads.

## Inputs

- `showImage` (boolean): Whether to show the image area. Default: `true`.
- `lines` (number): Number of text lines to render. Default: `3`.
- `config` (`SkeletonConfig`): Optional per-component config.

## Usage

```html
<lib-skeleton-card [showImage]="false" [lines]="4"></lib-skeleton-card>
```

## Notes

The card uses the component `config` to override global skeleton settings. See `skeleton-config.ts` for defaults and available keys.