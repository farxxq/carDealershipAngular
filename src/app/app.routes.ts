import { Routes } from '@angular/router';
import { LoginComponent } from './components/authorization/login/login.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'layout',
        component:LayoutComponent,
        children: [
            {
                path:'home',
                component: HomeComponent
            },
            {
                path:'contact',
                component: ContactComponent
            },
            {
                path:'car-list',
                component: CarListComponent
            },
            {
                path:'car-detail',
                component: CarDetailComponent
            },
        ]
    }
];
