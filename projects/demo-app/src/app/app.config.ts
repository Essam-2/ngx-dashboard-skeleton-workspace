import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { SKELETON_CONFIG } from 'ngx-dashboard-skeleton';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: SKELETON_CONFIG,
      useValue: {
        animationDuration: '2s',
        baseColor: '#e5e7eb',
        highlightColor: '#ffffff',
        borderRadius: '14px',
      },
    },
  ],
};