import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../base/home/home.component';
import { CartonComponent } from './carton.component';

const cartonRoutes: Routes = [
    {
        path: '',
        component: CartonComponent,
        pathMatch: 'full'
    }
];

export const CartonRouting: ModuleWithProviders = RouterModule.forChild(cartonRoutes);
