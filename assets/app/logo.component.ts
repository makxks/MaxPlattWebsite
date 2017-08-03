import { Component } from '@angular/core';

@Component ({
	selector: 'app-logo',
	template: `
	<div class="row">
		<div id="logoPanel">
			<h1 routerLinkActive="active"><a [routerLink]="['/home']">MAX PLATT</a></h1>
			<hr>
			<h3 id="subheading">Web and Game</h3>
		</div>
  </div>
  `,
	styleUrls: ['./logo.component.css']
})

export class LogoComponent {

}
