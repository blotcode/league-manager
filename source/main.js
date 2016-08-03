import 'babel-polyfill';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'rxjs/add/operator/map';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent } from './core/app/app';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS, HTTP_BINDINGS } from '@angular/http';

import 'material-design-lite/material';
import './assets/styles/lm-style.scss';

// if (ENVIRONMENT === 'production') {
//     enableProdMode();
// }

bootstrap(AppComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  HTTP_BINDINGS,
  ROUTER_PROVIDERS,
  // AUTH_PROVIDERS,
  // POSTS_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
  // provide(environment, { useValue: ENVIRONMENT })
]);
