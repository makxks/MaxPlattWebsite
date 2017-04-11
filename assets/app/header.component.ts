import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
		<header>
			<nav>
				<ul class="nav nav-pills nav-justified">
					<li routerLinkActive="active"><a [routerLink]="['/web']">Web</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/games']">Game</a></li>
          <li routerLinkActive="active"><a [routerLink]="['/learning']">Learning</a></li>
          <li routerLinkActive="active"><a [routerLink]="['/me']">Me</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/contact']">Contact</a></li>
					<!--<li routerLinkActive="active"><a [routerLink]="['/auth']">Login</a></li>-->
				</ul>
			</nav>
		</header>
	`,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

}
