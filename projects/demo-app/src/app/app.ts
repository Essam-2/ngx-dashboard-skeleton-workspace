import { Component, signal } from '@angular/core';
import { SkeletonDirective  } from 'ngx-dashboard-skeleton';


@Component({
  selector: 'app-root',
  imports: [
    SkeletonDirective 
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
