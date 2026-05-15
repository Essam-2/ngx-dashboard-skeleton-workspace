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
	template: '<lib-skeleton-card [lines]="4"></lib-skeleton-card>',
})
export class AppComponent {}
```

## Components

### Skeleton Card

Selector: `lib-skeleton-card`

```html
<lib-skeleton-card [showImage]="true" [lines]="4"></lib-skeleton-card>
```

### Skeleton Table

Selector: `lib-skeleton-table`

```html
<lib-skeleton-table [rows]="6" [columns]="5"></lib-skeleton-table>
```

### Skeleton Chart

Selector: `lib-skeleton-chart`

```html
<lib-skeleton-chart type="bar" [height]="260"></lib-skeleton-chart>
<lib-skeleton-chart type="line" [height]="220"></lib-skeleton-chart>
<lib-skeleton-chart type="pie" [height]="260"></lib-skeleton-chart>
```

### Skeleton Avatar

Selector: `lib-skeleton-avatar`

```html
<lib-skeleton-avatar [size]="64" shape="circle"></lib-skeleton-avatar>
<lib-skeleton-avatar [size]="64" shape="square"></lib-skeleton-avatar>
```

### Skeleton Text

Selector: `lib-skeleton-text`

```html
<lib-skeleton-text [lines]="4" [lineHeight]="16" [gap]="12" [lastLineWidth]="'45%'"></lib-skeleton-text>
```

### Skeleton Dashboard

Selector: `lib-skeleton-dashboard`

```html
<lib-skeleton-dashboard [cards]="4" [showChart]="true" [showTable]="true"></lib-skeleton-dashboard>
```

### Skeleton Wrapper

Selector: `lib-skeleton-wrapper`

```html
<lib-skeleton-wrapper [loading]="isLoading" skeleton="card" [lines]="4">
	<app-real-card></app-real-card>
</lib-skeleton-wrapper>
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
<lib-skeleton-text
	[lines]="4"
	[config]="{
		animationDuration: '2s',
		baseColor: '#e5e7eb',
		highlightColor: '#ffffff',
		borderRadius: '14px'
	}"
></lib-skeleton-text>
```

## Dark Mode

Add the `dark` class or `data-theme="dark"` to a parent element.

```html
<div class="dark">
	<lib-skeleton-dashboard></lib-skeleton-dashboard>
</div>
```

## API Summary

- `SkeletonCard` -> `lib-skeleton-card`
- `SkeletonTable` -> `lib-skeleton-table`
- `SkeletonChart` -> `lib-skeleton-chart`
- `SkeletonAvatar` -> `lib-skeleton-avatar`
- `SkeletonText` -> `lib-skeleton-text`
- `SkeletonDashboard` -> `lib-skeleton-dashboard`
- `SkeletonWrapper` -> `lib-skeleton-wrapper`
- `SkeletonDirective` -> `[ngxSkeleton]` with `ngxSkeletonType`

## License

MIT

