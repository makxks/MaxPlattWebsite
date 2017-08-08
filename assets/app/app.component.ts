import { Component } from '@angular/core';

@Component ({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	clicked: string = '';
	selected: string = '';
	imgPosition: number = 0;
	leftSize: number = 50;
	rightSize: number = 50;

	//resize elements to focus on clicked element
	click(name: string){
		if(name == this.clicked){
			this.clicked = "";
			this.afterFade("");
		}
		else if(name == "web"){		
			this.clicked = name;
			document.getElementById("body").style.left = "30%";
			this.fade(document.getElementById("to-fade-left"), this.clicked);
		}
		else if(name == "game"){		
			this.clicked = name;
			document.getElementById("body").style.left = "10%";
			this.fade(document.getElementById("to-fade-right"), this.clicked);
		}
	}
	//all needs to be scalable

	//move and scale elements smoothly across screen depending on what was clicked
		//move clicked one to get bigger
		//move non-clicked one to get smaller
	scaleBackgrounds(name: string){
		if(name == ""){
			if(this.leftSize < 50){
				this.leftSize += 1;
				this.rightSize -= 1;
			}
			else if(this.leftSize > 50){
				this.leftSize -= 1;
				this.rightSize += 1;
			}
			else{
				this.unfade(document.getElementById("to-fade-right"));
				this.unfade(document.getElementById("to-fade-left"));
				clearTimeout(animateBG);
				return;
			}
		}
		else if(name == "game"){
			if(this.leftSize < 98){
				this.leftSize += 1;
				this.rightSize -= 1;
			}
			else {
				this.unfade(document.getElementById("to-fade-left"));
				clearTimeout(animateBG);
				return;
			}
		}
		else if(name == "web"){
			if(this.leftSize > 2){
				this.leftSize -= 1;
				this.rightSize += 1;
			}
			else {			
				this.unfade(document.getElementById("to-fade-right"));
				clearTimeout(animateBG);
				return;
			}
		}

		document.getElementById("left-bg").style.width = this.leftSize + "%";
		document.getElementById("right-bg").style.width = this.rightSize + "%";

		var animateBG: any = setTimeout(() => this.scaleBackgrounds(name), 10);
	}

	moveImageToLR(moveTo: number){
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

	afterFade(name: string){
		if(name == ""){
			this.moveImageToLR(0);
		}
		else if(name == "web"){	
			this.moveImageToLR(-50);
		}
		else if(name == "game"){
			this.moveImageToLR(50);
		}
		this.selected = this.clicked;
		this.scaleBackgrounds(this.clicked);
	}
	
	//fade out elements if the side is deselected
	fade(element, name: string, element2?) {
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
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			if(element2){
				element2.style.opacity = op2;
				element2.style.filter = 'alpha(opacity=' + op2 * 100 + ")";
			}
			op -= op * 0.2;
			op2 -= op2 * 0.2;
		}, 20);
	}

	//fade in elements of selected side with a timeout so they appear after the previous move
	unfade(element) {
		var op = (parseInt(window.getComputedStyle(element).getPropertyValue('opacity'))) || 0.1;  // initial opacity
		var timer = setInterval(function () {
			if (op >= 1){
				clearInterval(timer);
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op += op * 0.2;
		}, 20);
	}
}