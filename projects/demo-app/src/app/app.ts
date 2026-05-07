import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonAvatar, SkeletonCard, SkeletonChart, SkeletonTable } from 'ngx-dashboard-skeleton';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SkeletonTable,
    SkeletonCard,
    SkeletonChart,
    SkeletonAvatar,
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
