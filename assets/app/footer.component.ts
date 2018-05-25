import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer>
			<app-header></app-header>
			<div class="row">
				<p>&copy; Max Platt 2018</p>
				<p class="right">Email me: <a href="mailto:maxplatt@outlook.com">maxplatt@outlook.com</a></p>
			</div>
		</footer>
	`,
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

}
