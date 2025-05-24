import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout/home',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
      {
        path: 'car-list',
        loadComponent: () =>
          import('./pages/car-list/car-list.component').then(
            (m) => m.CarListComponent
          ),
      },
      {
        path: 'car-detail',
        loadComponent: () =>
          import('./pages/car-detail/car-detail.component').then(
            (m) => m.CarDetailComponent
          ),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./pages/about-us/about-us.component').then(
            (m) => m.AboutUsComponent
          ),
      },
    ],
  },
];
