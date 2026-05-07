import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-skeleton-card',
  imports: [],
  templateUrl: './skeleton-card.html',
  styleUrl: './skeleton-card.css',
})
export class SkeletonCard {
  @Input() showImage = true;
  @Input() lines = 3;

  get lineItems(): number[] {
    return Array.from({ length: this.lines });
  }
}
