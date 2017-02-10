import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo.component';
import { FooterComponent } from './footer.component';

import { HomeComponent } from './home/home.component';

import { MeComponent } from './me/me.component';

import { ContactComponent } from './contact/contact.component';

import { LearningComponent } from './learning/learning.component';

import { WebComponent } from './web/web.component';
import { WebHeaderComponent } from './web/webheader.component';
import { WebHomeComponent } from './web/webhome.component';

import { GameComponent } from './game/game.component';
import { GameHeaderComponent } from './game/gameheader.component';
import { GameHomeComponent } from './game/gamehome.component';

import { EruptionComponent } from './game/eruption/eruption.component';

import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LogoComponent,
		FooterComponent,
		HomeComponent,
		MeComponent,
		WebComponent,
		WebHeaderComponent,
		WebHomeComponent,
		GameComponent,
		GameHeaderComponent,
		GameHomeComponent,
		LearningComponent,
		ContactComponent,
		EruptionComponent
	],
	imports: [
		BrowserModule,
		routing
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}
