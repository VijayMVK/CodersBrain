/*************************************************************************************************************************************************
Version                  :  1.0
Created                  :  2016 December 1
Author                   :  Hub Team
File Name                :  left-nav-menu.component.ts
Description              :  Left-nav-menu component is used to listout the various pages in application 

Modification History

TRN    Changeset. No     Date                    Name                   Description
-------------------------------------------------------------------------------------------------------------------------------------------
1       1606             12 JAN 2017             Vijayakumar M          Methods comments added

*************************************************************************************************************************************************/



import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { GlobalDataService } from '../../shared/services/globaldata.service';


@Component({   
    selector: 'app-leftnav-menu',
    templateUrl: 'left-nav-menu.component.html'   
})
export class LeftNavMenuComponent {
    public appConfigItems: any;

    constructor(private _globalDataService: GlobalDataService) {
    }   

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };


     /** 
    *@summary method to toggle Dropdown
    *@param{} 
    *@returns no return
    */
    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }


    /** 
    *@summary method to toggle Dropdown on MouseEvent
    *@param{} 
    *@returns no return
    */
    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit() {        
        let configItems = this._globalDataService.getAppConfigItems();
        this.appConfigItems = configItems;
    }

}
