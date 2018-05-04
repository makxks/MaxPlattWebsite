import { Component } from '@angular/core';

import { GameIntroComponent } from './gameintro.component';
import { GameHeaderComponent } from './gameheader.component';

import { WebIntroComponent } from './webintro.component';
import { WebHeaderComponent } from './webheader.component';

import { HomeService } from './home.service';

@Component ({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	clicked: string = '';
	selected: string = '';
	imgPosition: number = 0;
	leftSize: number = -50;
	rightSize: number = -50;

	constructor(private homeService: HomeService){}
	//resize elements to focus on clicked element
	click(name: string){
		if(name == this.clicked){
			this.clicked = "";
			if(this.selected == "game"){
				this.fade(document.getElementById("body"), this.clicked, document.getElementById("game-header"));
			}
			else if (this.selected == "web"){
				this.fade(document.getElementById("body"), this.clicked, document.getElementById("web-header"));
			}
		}
		else if(name == "web"){
			this.clicked = name;
			document.getElementById("body").style.left = "30%";
			this.fade(document.getElementById("to-fade-left"), this.clicked);
		}
		else if(name == "game"){
			this.clicked = name;
			document.getElementById("body").style.left = "15%";
			this.fade(document.getElementById("to-fade-right"), this.clicked);
		}
		this.homeService.selectedGame = "";
		this.homeService.selectedWebsite = "";
	}
	//all needs to be scalable

	//move and scale elements smoothly across screen depending on what was clicked
		//move clicked one to get bigger
		//move non-clicked one to get smaller
	scaleBackgrounds(name: string){
		if(name == ""){
			if(this.leftSize < -50){
				this.leftSize += 1;
				this.rightSize -= 1;
			}
			else if(this.leftSize > -50){
				this.leftSize -= 1;
				this.rightSize += 1;
			}
			else{
				this.unfade(document.getElementById("to-fade-right"));
				this.unfade(document.getElementById("to-fade-left"));
				this.moveLogoVertical(0, -52, document.getElementById("to-fade-right"), true);
				this.moveLogoVertical(0, -52, document.getElementById("to-fade-left"), true);
				clearTimeout(animateBG);
				return;
			}
		}
		else if(name == "game"){
			if(this.leftSize < -2){
				this.leftSize += 1;
				this.rightSize -= 1;
			}
			else {
				this.unfade(document.getElementById("to-fade-left"));
				this.unfade(document.getElementById("body"));
				//this.unfade(document.getElementById("game-header"));
				clearTimeout(animateBG);
				return;
			}
		}
		else if(name == "web"){
			if(this.leftSize > -98){
				this.leftSize -= 1;
				this.rightSize += 1;
			}
			else {
				this.unfade(document.getElementById("to-fade-right"));
				this.unfade(document.getElementById("body"));
				//this.unfade(document.getElementById("web-header"));
				clearTimeout(animateBG);
				return;
			}
		}

		//document.getElementById("left-bg").style.marginLeft = this.leftSize + "%";
		//document.getElementById("right-bg").style.marginRight = this.rightSize + "%";

		var animateBG: any = setTimeout(() => this.scaleBackgrounds(name), 10);
	}

	moveImageToLR(moveTo: number){
		// also need to move logos up by 25% (remove margin-top of logo-mask until it is 0)
		// on unclick need to wait until logo is back to 25% before fading in the other logo
		// after logo has finished movement can fade in the window
		if(moveTo < this.imgPosition){
			this.imgPosition -= 1;
			document.getElementById("centreImages").style.left = this.imgPosition + "%";
			if(this.imgPosition <= moveTo){
				clearTimeout(animate);
				return;
			}
		}
		else if (moveTo > this.imgPosition){
			this.imgPosition += 1;
			document.getElementById("centreImages").style.left = this.imgPosition + "%";
			if(this.imgPosition >= moveTo){
				clearTimeout(animate);
				return;
			}
		}

		var animate: any = setTimeout(() => this.moveImageToLR(moveTo), 10);
	}

	moveLogoVertical(moveTo: number, moveFrom: number, element: HTMLElement, fromBackground: boolean = false){
		var marginTop = moveFrom;  // initial margin

		var timer = setInterval(() => {
			if(moveTo < marginTop){
				marginTop -= 1;
				element.style.marginTop = marginTop + "em";
				if(moveTo >= marginTop){
					if(!fromBackground){
						this.scaleBackgrounds(this.clicked);
					}
					clearInterval(timer);
					return;
				}
			}
			else if(moveTo > marginTop){
				marginTop += 1;
				element.style.marginTop = marginTop + "em";
				if(moveTo <= marginTop){
					if(!fromBackground){
						this.scaleBackgrounds(this.clicked);
					}
					clearInterval(timer);
					return;
				}
			}
		}, 10)
	}

	afterFade(name: string){
		if(name == ""){
			this.moveImageToLR(0);
			this.scaleBackgrounds(this.clicked);
		}
		else if(name == "web"){
			this.moveImageToLR(-50);
			this.moveLogoVertical(-52, 0, document.getElementById("to-fade-right"));
		}
		else if(name == "game"){
			this.moveImageToLR(50);
			this.moveLogoVertical(-52, 0, document.getElementById("to-fade-left"));
		}
		this.selected = this.clicked;
	}

	//fade out elements if the side is deselected
	fade(element: HTMLElement, name: string, element2?: HTMLElement) {
		var op = (parseInt(window.getComputedStyle(element).getPropertyValue('opacity'))) || 1;  // initial opacity
		var op2;
		if(element2){
			op2 = (parseInt(window.getComputedStyle(element2).getPropertyValue('opacity'))) || 1;
		}
		var timer = setInterval(() => {
			if (op <= 0.1){
				op = 0;
				op2 = 0;
				this.afterFade(name);
				clearInterval(timer);
			}
			element.style.opacity = "" + op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			if(element2){
				element2.style.opacity = "" + op2;
				element2.style.filter = 'alpha(opacity=' + op2 * 100 + ")";
			}
			op -= op * 0.2;
			op2 -= op2 * 0.2;
		}, 20);
	}

	//fade in elements of selected side with a timeout so they appear after the previous move
	unfade(element: HTMLElement) {
		var op = (parseInt(window.getComputedStyle(element).getPropertyValue('opacity'))) || 0.1;  // initial opacity
		var timer = setInterval(function () {
			if (op >= 1){
				clearInterval(timer);
			}
			element.style.opacity = "" + op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op += op * 0.2;
		}, 20);
	}
}
