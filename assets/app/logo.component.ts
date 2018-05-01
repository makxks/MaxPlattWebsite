import { Component } from '@angular/core';

@Component ({
	selector: 'app-logo',
	template: `
	<h1 routerLinkActive="active"><a [routerLink]="['/home']">MAX PLATT</a></h1>
  `,
	styleUrls: ['./logo.component.css']
})

export class LogoComponent {

}
