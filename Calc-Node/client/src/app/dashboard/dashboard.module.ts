import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardRouting }  from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';
import { MyDashboardComponent } from './my-dashboard.component';
import { BundleGeneratorComponent } from './bundle-generator.component';

//
import { ReactiveFormsModule,FormsModule }   from '@angular/forms';
import { EmployeeComponent } from '../shared/component/employee.component'
import { EmployeeListService } from '../shared/services/employee.service'

@NgModule({
    imports: [       
        ChartsModule,       
        DashboardRouting,
        CommonModule,
        FormsModule    
    ],
    declarations: [
        DashboardComponent,
        MyDashboardComponent,
        BundleGeneratorComponent,
        EmployeeComponent
    ],
    providers: [EmployeeListService]
})
export class DashboardModule {

}
