import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../base/home/home.component';
import { IroningComponent } from './ironing.component';

const ironingRoutes: Routes = [
    {
        path: '',
        component: IroningComponent,
        pathMatch: 'full'
    }
];

export const IroningRouting: ModuleWithProviders = RouterModule.forChild(ironingRoutes);
