import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from '../base/home/home.component';
import { MyDashboardComponent }  from './my-dashboard.component';
import { DashboardComponent }  from './dashboard.component';
import { BundleGeneratorComponent } from './bundle-generator.component';
import { AuthGuard } from '../login/auth0/auth.guard';
const dashboardRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { title: 'Home' },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { title: 'Dashboard' },
                children: [
                    { path: '', redirectTo: 'my-dashboard', pathMatch: 'full' },
                    { path: 'my-dashboard', component: MyDashboardComponent, data: { title: 'My Dashboard' } },
                    { path: 'fabric', component: BundleGeneratorComponent, data: { title: 'Fabric' } },
                    { path: 'cutting', component: BundleGeneratorComponent, data: { title: 'Cutting' } },
                ]
            },
        ]
    }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);