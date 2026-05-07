# Skeleton Text

A simple multi-line text placeholder used to simulate paragraphs and descriptions while content loads.

## Inputs

- `lines` (number): Number of text lines to render. Default: `3`.
- `lineHeight` (number): Height of each line in pixels. Default: `14`.
- `gap` (number): Gap between lines in pixels. Default: `10`.
- `lastLineWidth` (string): CSS width of the final line (e.g. `"65%"`). Default: `"65%"`.
- `config` (`SkeletonConfig`): Optional per-component config.

## Usage

```html
<lib-skeleton-text [lines]="4" lastLineWidth="80%"></lib-skeleton-text>
```

## Notes

Use the `lastLineWidth` to vary the look of the final line so the placeholder better resembles real text blocks.