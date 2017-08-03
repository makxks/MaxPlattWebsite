import { Component } from '@angular/core';

@Component ({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	clicked: string = '';

	click(name: string){
		if(name == this.clicked){
			this.clicked = '';
		}
		else {
			this.clicked = name;
		}
	}

	getPlace(){
		if(this.clicked == ""){
			return '38%';
		}
		else if (this.clicked == "web"){
			return '-12%';
		}
		else {
			return '88%';
		}
	}
}

