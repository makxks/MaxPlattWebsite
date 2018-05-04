import { Component } from '@angular/core';

import { HomeService } from './home.service';

@Component ({
	selector: 'home-webintro',
	templateUrl: './webintro.component.html',
	styleUrls: ['./webintro.component.css']
})

export class WebIntroComponent {
	constructor(private homeService: HomeService){}
}
