import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../base/home/home.component';
import { StoresDeliveryComponent } from './stores-delivery.component';

const storesDeliveryRoutes: Routes = [
    {
        path: '',
        component: StoresDeliveryComponent,
        pathMatch: 'full'
    }
];

export const StoresDeliveryRouting: ModuleWithProviders = RouterModule.forChild(storesDeliveryRoutes);
