import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '.nav-dropdown',
    host: {
        '[class.open]': '_open',
    }
})
export class NavDropdownDirective {

    private _open = false;

    /** 
    *@summary Checks if the dropdown menu is open or not.
    *@param{} 
    *@returns no return
    */
    isOpen() { return this._open; }

    /** 
    *@summary Opens the dropdown menu.
    *@param{} 
    *@returns no return
    */
    open() {
        this._open = true;
    }

    /** 
   *@summary Closes the dropdown menu .
   *@param{} 
   *@returns no return
   */
    close() {
        this._open = false;
    }

   /** 
    *@summary Toggles the dropdown menu.
    *@param{} 
    *@returns no return
    */
    toggle() {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }
}

/** 
*@summary Allows the dropdown to be toggled via click.
*@param{} 
*@returns no return
*/
@Directive({   
    selector: '.nav-dropdown-toggle',
})
export class NavDropdownToggleDirective{
    constructor(private dropdown: NavDropdownDirective) {}

    @HostListener('click', ['$event'])
    toggleOpen($event:any) {
        $event.preventDefault();
        this.dropdown.toggle();
    }
}

export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
