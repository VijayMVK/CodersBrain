import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../base/home/home.component';
import { DispatchComponent } from './dispatch.component';

const dispatchRoutes: Routes = [
    {
        path: '',
        component: DispatchComponent,
        pathMatch: 'full'
    }
];

export const DispatchRouting: ModuleWithProviders = RouterModule.forChild(dispatchRoutes);
