import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from '../+examples/home';
import {LinksComponent} from '../+examples/links';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'links', component: LinksComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
