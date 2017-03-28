import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
	selector: 'app-auth',
	template: `
		<header class="row spacing">
			<nav class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
				<ul class="nav nav-tabs">
					<li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
					<li routerLinkActive="active"><a [routerLink]="['signin']" *ngIf="!isAuth()">Signin</a></li>
					<li><a (click)="onLogout()" *ngIf="isAuth()" style="cursor: pointer;">Logout</a></li>
				</ul>
			</nav>
		</header>
		<div class="row spacing">
			<router-outlet></router-outlet>
		</div>
	`
})

export class AuthComponent {
	constructor(private authService: AuthService) {}

	isAuth() {
		return this.authService.isAuthenticated();
	}

	onLogout() {
		this.authService.logout();
	}
}
