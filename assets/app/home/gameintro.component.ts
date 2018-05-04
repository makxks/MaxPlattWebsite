import { Component } from '@angular/core';

import { GameHeaderComponent } from './gameheader.component';

import { HomeService } from './home.service';

@Component ({
	selector: 'home-gameintro',
	templateUrl: './gameintro.component.html',
	styleUrls: ['./gameintro.component.css']
})

export class GameIntroComponent {
	constructor(private homeService: HomeService){}
}
