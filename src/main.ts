import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

console.log('Main.ts: Bootstrapping application...');

bootstrapApplication(App, appConfig)
  .then(() => console.log('Main.ts: Application bootstrapped successfully'))
  .catch((err) => console.error('Main.ts: Bootstrap error', err));
