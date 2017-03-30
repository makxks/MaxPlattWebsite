import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
	selector: 'app-auth',
	template: `
		<div class="authComponentsContainer">
			<header>
				<nav class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2">
					<ul class="nav nav-tabs">
						<li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
						<li routerLinkActive="active"><a [routerLink]="['signin']" *ngIf="!isAuth()">Signin</a></li>
						<li><a (click)="onLogout()" *ngIf="isAuth()" style="cursor: pointer;">Logout</a></li>
					</ul>
				</nav>
			</header>
			<div>
				<router-outlet></router-outlet>
			</div>
		</div>
	`,
	styleUrls: ['./auth.component.css']
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
