import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './base/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Auth0
import { UnauthorizedComponent } from './login/auth0/unauthorized.component'
import { AuthGuard } from './login/auth0/auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }, 
    { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuard] },

    {
        path: '',
        component: HomeComponent,  
        canActivate: [AuthGuard],     
        data: {
            title: 'Home'
        },         
        children: [ 
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },           
            {
                path: 'dashboard',
                component: DashboardComponent,              
                data: {
                    title: 'Dashboard'
                }
            },
            {
                 path: 'carton',
                 loadChildren: './carton/carton.module#CartonModule',//Lazy Loading
                 data: {
                     title: 'Carton Packaging'
                 }
             },
             {
                 path: 'dispatch',
                 loadChildren: './dispatch/dispatch.module#DispatchModule',//Lazy Loading
                 data: {
                     title: 'Dispatch'
                 }
             },
             {
                 path: 'ironing',
                 loadChildren: './ironing/ironing.module#IroningModule',//Lazy Loading
                 data: {
                     title: 'Ironing & Packing'
                 }
             },
             {
                 path: 'stores-delivery',
                 loadChildren: './stores-delivery/stores-delivery.module#StoresDeliveryModule',//Lazy Loading
                 data: {
                     title: 'Stores Delivery'
                 }
             },
             {
                 path: 'stores-receipts',
                 loadChildren: './stores-receipts/stores-receipts.module#StoresReceiptsModule',//Lazy Loading
                 data: {
                     title: 'Stores Receipts'
                 }
             }            
        ]
    },

     //otherwise redirect to home
    { path: '**', redirectTo: 'dashboard' }
   
];

export const appRoutingProviders: any[] = [AuthGuard];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
 