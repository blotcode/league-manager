import { HomeComponent } from '../pages/home/home';
import { ErrorPageComponent } from '../pages/error/error';
import { LoginComponent } from '../auth/login/login';
import { SignupComponent } from '../auth/signup/signup';

export const RouterConfig  = [
  { path: '/home', component: HomeComponent},
  { path: '/login', component: LoginComponent},
  { path: '/signup', component: SignupComponent},
  { path: '/404', component: ErrorPageComponent},
  { path: '/', component: HomeComponent},
  { path: '/*', component: ErrorPageComponent }
];

