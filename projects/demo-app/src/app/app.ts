import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonCard, SkeletonTable } from 'ngx-dashboard-skeleton';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SkeletonTable,SkeletonCard],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
