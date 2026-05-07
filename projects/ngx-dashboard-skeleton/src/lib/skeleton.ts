import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { SkeletonWrapper } from './skeleton-wrapper/skeleton-wrapper';

@Directive({
  selector: '[ngxSkeleton]',
})
export class SkeletonDirective {
  private isLoading = false;
  private skeletonType:
    | 'table'
    | 'card'
    | 'chart'
    | 'dashboard'
    | 'text'
    | 'avatar' = 'text';

  @Input('ngxSkeleton')
  set loading(value: boolean) {
    this.isLoading = value;
    this.updateView();
  }

  @Input('ngxSkeletonType')
  set type(value: 'table' | 'card' | 'chart' | 'dashboard' | 'text' | 'avatar') {
    this.skeletonType = value;
    this.updateView();
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}

  private updateView(): void {
    this.viewContainer.clear();

    if (this.isLoading) {
      const skeletonRef = this.viewContainer.createComponent(
        SkeletonWrapper
      );

      skeletonRef.instance.loading = true;
      skeletonRef.instance.skeleton = this.skeletonType;
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}