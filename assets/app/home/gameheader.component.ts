import { Component } from '@angular/core';

import { HomeService } from './home.service';

@Component ({
	selector: 'game-header',
	templateUrl: './gameheader.component.html',
	styleUrls: ['./gameheader.component.css']
})

export class GameHeaderComponent {

	constructor(private homeService: HomeService){};

	selectGame(toSelect: string){
		this.homeService.selectedGame = toSelect;
	}
}
