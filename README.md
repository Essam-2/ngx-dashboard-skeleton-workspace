# ngx-dashboard-skeleton

A lightweight Angular skeleton loading library for dashboards, cards, tables, charts, avatars, text placeholders, and loading wrappers.

## Highlights

- Standalone Angular components
- Clean, reusable skeleton patterns for common dashboard layouts
- Global and local configuration support
- Dark theme friendly CSS variables
- Structural directive for fast loading-state rendering

## Installation

```bash
npm install ngx-dashboard-skeleton
```

## Theme

Import the library theme once in your global styles:

```scss
@import 'ngx-dashboard-skeleton/themes/skeleton-theme.css';
```

## Quick Start

Import the component you want to use. The exported class names do not use a `Component` suffix.

```ts
import { Component } from '@angular/core';
import { SkeletonCard } from 'ngx-dashboard-skeleton';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [SkeletonCard],
	template: '<ngx-skeleton-card [lines]="4"></ngx-skeleton-card>',
})
export class AppComponent {}
```

## Components

### Skeleton Card

Selector: `ngx-skeleton-card`

```html
<ngx-skeleton-card [showImage]="true" [lines]="4"></ngx-skeleton-card>
```

### Skeleton Table

Selector: `ngx-skeleton-table`

```html
<ngx-skeleton-table [rows]="6" [columns]="5"></ngx-skeleton-table>
```

### Skeleton Chart

Selector: `ngx-skeleton-chart`

```html
<ngx-skeleton-chart type="bar" [height]="260"></ngx-skeleton-chart>
<ngx-skeleton-chart type="line" [height]="220"></ngx-skeleton-chart>
<ngx-skeleton-chart type="pie" [height]="260"></ngx-skeleton-chart>
```

### Skeleton Avatar

Selector: `ngx-skeleton-avatar`

```html
<ngx-skeleton-avatar [size]="64" shape="circle"></ngx-skeleton-avatar>
<ngx-skeleton-avatar [size]="64" shape="square"></ngx-skeleton-avatar>
```

### Skeleton Text

Selector: `ngx-skeleton-text`

```html
<ngx-skeleton-text [lines]="4" [lineHeight]="16" [gap]="12" [lastLineWidth]="'45%'"></ngx-skeleton-text>
```

### Skeleton Dashboard

Selector: `ngx-skeleton-dashboard`

```html
<ngx-skeleton-dashboard [cards]="4" [showChart]="true" [showTable]="true"></ngx-skeleton-dashboard>
```

### Skeleton Wrapper

Selector: `ngx-skeleton-wrapper`

```html
<ngx-skeleton-wrapper [loading]="isLoading" skeleton="card" [lines]="4">
	<app-real-card></app-real-card>
</ngx-skeleton-wrapper>
```

## Structural Directive

Import `SkeletonDirective` and use `*ngxSkeleton` for conditional skeleton rendering.

```ts
import { Component } from '@angular/core';
import { SkeletonDirective } from 'ngx-dashboard-skeleton';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [SkeletonDirective],
	templateUrl: './app.html',
})
export class AppComponent {}
```

```html
<div *ngxSkeleton="isLoading; type: 'card'">
	<app-real-card></app-real-card>
</div>
```

## Configuration

### Global Configuration

Provide `SKELETON_CONFIG` at application level to set shared defaults.

```ts
import { ApplicationConfig } from '@angular/core';
import { SKELETON_CONFIG } from 'ngx-dashboard-skeleton';

export const appConfig: ApplicationConfig = {
	providers: [
		{
			provide: SKELETON_CONFIG,
			useValue: {
				animationDuration: '1.8s',
				baseColor: '#e5e7eb',
				highlightColor: '#ffffff',
				borderRadius: '12px',
			},
		},
	],
};
```

### Local Configuration

Each component accepts a `config` input that overrides the global values.

```html
<ngx-skeleton-text
	[lines]="4"
	[config]="{
		animationDuration: '2s',
		baseColor: '#e5e7eb',
		highlightColor: '#ffffff',
		borderRadius: '14px'
	}"
></ngx-skeleton-text>
```

## Dark Mode

Add the `dark` class or `data-theme="dark"` to a parent element.

```html
<div class="dark">
	<ngx-skeleton-dashboard></ngx-skeleton-dashboard>
</div>
```

## API Summary

- `SkeletonCard` -> `ngx-skeleton-card`
- `SkeletonTable` -> `ngx-skeleton-table`
- `SkeletonChart` -> `ngx-skeleton-chart`
- `SkeletonAvatar` -> `ngx-skeleton-avatar`
- `SkeletonText` -> `ngx-skeleton-text`
- `SkeletonDashboard` -> `ngx-skeleton-dashboard`
- `SkeletonWrapper` -> `ngx-skeleton-wrapper`
- `SkeletonDirective` -> `[ngxSkeleton]` with `ngxSkeletonType`

## License

MIT

