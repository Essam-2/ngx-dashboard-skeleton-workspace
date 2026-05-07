import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-skeleton-text',
  imports: [],
  templateUrl: './skeleton-text.html',
  styleUrl: './skeleton-text.css',
})
export class SkeletonText {
  @Input() lines = 3;
  @Input() lineHeight = 14;
  @Input() gap = 10;
  @Input() lastLineWidth = '65%';

  get lineItems(): number[] {
    return Array.from({ length: this.lines });
  }
}
