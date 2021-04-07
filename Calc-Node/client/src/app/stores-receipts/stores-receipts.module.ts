import { NgModule }  from '@angular/core';
import { StoresReceiptsComponent } from './stores-receipts.component';
import { StoresReceiptsRouting } from './stores-receipts.routing';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        FormsModule,
        CommonModule, // added to avoid error in NgIf while lazy load
        StoresReceiptsRouting
    ],
    declarations: [
        StoresReceiptsComponent
    ],
    exports: [
        StoresReceiptsComponent, ReactiveFormsModule, RouterModule
    ], providers: []
})
export class StoresReceiptsModule {

}
