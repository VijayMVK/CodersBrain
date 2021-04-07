import { Component } from '@angular/core';
import { Auth }      from './auth.service';

@Component({
  selector: 'no-content',
  template: `
    <div>
      <h1>Unauthorized: you are not allowed to see this content</h1>
       <button class="btn btn-primary btn-margin" (click)="auth.logout()">Log Out</button>
    </div>
  `
})
export class UnauthorizedComponent {
      constructor(private auth: Auth) {}
}
