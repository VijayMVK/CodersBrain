import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../base/home/home.component';
import { StoresReceiptsComponent } from './stores-receipts.component';

const storesReceiptsRoutes: Routes = [
    {
        path: '',
        component: StoresReceiptsComponent,
        pathMatch: 'full'
    }
];

export const StoresReceiptsRouting: ModuleWithProviders = RouterModule.forChild(storesReceiptsRoutes);
