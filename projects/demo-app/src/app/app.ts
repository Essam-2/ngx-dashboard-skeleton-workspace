import { Component, signal } from '@angular/core';
import { 
  SkeletonAvatar, 
  SkeletonCard, 
  SkeletonChart, 
  SkeletonTable, 
  SkeletonText,
  SkeletonDashboard
} from 'ngx-dashboard-skeleton';


@Component({
  selector: 'app-root',
  imports: [
    SkeletonTable,
    SkeletonCard,
    SkeletonChart,
    SkeletonAvatar,
    SkeletonText,
    SkeletonDashboard,
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
