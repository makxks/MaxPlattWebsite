import { Component } from '@angular/core';

@Component ({
	selector: 'app-logo',
	template: `
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mask">
			<img id="topImage" src="/images/bg2.png" alt="background image (from survivor)">
		</div>
		<div id="logoPanel">
	  	<div class="well">
				<h1 routerLinkActive="active"><a [routerLink]="['/home']">MAX PLATT</a></h1>
				<hr>
				<h3 id="subheading">Web and Game</h3>
			</div>
		</div>
  </div>
  `,
	styleUrls: ['./logo.component.css']
})

export class LogoComponent {

}
