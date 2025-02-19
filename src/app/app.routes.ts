import { Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
  {path: "home-page", loadComponent:() => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)},
  {path: "countries", loadChildren:() => import('./pages/countries-list/countries-list.routes').then(m => m.countries_routes)},
  {path: "", redirectTo: "home-page", pathMatch: "full"},
  {path: "**", component: ErrorPageComponent}
];




