import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer>
			<app-header></app-header>
			<div class="row">
				<p class="col-lg-3 col-md-4 col-sm-4 col-xs-6">&copy; Max Platt 2017</p>
				<p class="right col-lg-3 col-md-4 col-sm-4 col-xs-6">Email me: <a href="mailto:maxplatt@outlook.com">maxplatt@outlook.com</a></p>
			</div>
		</footer>
	`,
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

}
