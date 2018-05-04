import { Component } from '@angular/core';

import { HomeService } from './home.service';

@Component ({
	selector: 'web-header',
	templateUrl: './webheader.component.html',
	styleUrls: ['./webheader.component.css']
})

export class WebHeaderComponent {

	constructor(private homeService: HomeService){};

	public selectWebsite(toSelect: string){
		this.homeService.selectedWebsite = toSelect;
	}
}
