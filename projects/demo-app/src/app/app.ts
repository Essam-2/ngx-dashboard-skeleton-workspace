import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { 
  SkeletonAvatar, 
  SkeletonCard, 
  SkeletonChart, 
  SkeletonTable, 
  SkeletonText,
} from 'ngx-dashboard-skeleton';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SkeletonTable,
    SkeletonCard,
    SkeletonChart,
    SkeletonAvatar,
    SkeletonText,
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
