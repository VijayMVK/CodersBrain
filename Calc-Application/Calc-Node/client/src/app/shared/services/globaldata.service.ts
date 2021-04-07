import {Injectable} from '@angular/core';

@Injectable()
export class GlobalDataService {
    currentModuleConfigItems: any;
    /** 
*@summary defines the left navigation.
*@param{} 
*@returns returns the left navigation items and its structure. 
*/
    getAppConfigItems() {
        return APP_Config_Items;
    }
}

export const APP_Config_Items = {
    "title": "Left Navigation",
    "leftNavItems": [
        {
            "navText": "Dashboard",
            "navUrl": "/dashboard",
            "imgStyle": "icon-speedometer",
            "children": [
                {
                    "navText": "My-Dashboard",
                    "navUrl": "/dashboard/my-Dashboard",
                    "imgStyle": "icon-speedometer"
                },
                {
                    "navText": "Fabric",
                    "navUrl": "/dashboard/fabric",
                    "imgStyle": "fa fa-yelp"
                },
                {
                    "navText": "Cutting",
                    "navUrl": "/dashboard/cutting",
                    "imgStyle": "fa fa-cut"
                }
            ]
        },
        {
            "navText": "Carton Packaging",
            "navUrl": "/carton",
            "imgStyle": "fa fa-dropbox"
        },
        {
            "navText": "Dispatch",
            "navUrl": "/dispatch",
            "imgStyle": "fa fa-location-arrow"
        },
        {
            "navText": "Ironing & Packing",
            "navUrl": "/ironing",
            "imgStyle": "fa fa-fire"
        },
        {
            "navText": "Stores Delivery",
            "navUrl": "/stores-delivery",
            "imgStyle": "fa fa-exchange"
        },
        {
            "navText": "Stores Receipts",
            "navUrl": "/stores-receipts",
            "imgStyle": "fa fa-edit"
        }    
    ]
}
