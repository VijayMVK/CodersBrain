import { Directive, HostListener } from '@angular/core';

/** 
*@summary Allows the aside to be toggled via click.
*@param{} 
*@returns no return
*/
@Directive({
    selector: '.aside-toggle',
})
export class AsideToggleDirective {
    constructor() { }

    @HostListener('click', ['$event'])
    toggleOpen($event:any) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-open');
    }
}
