import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonTable } from 'ngx-dashboard-skeleton';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SkeletonTable],

  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
