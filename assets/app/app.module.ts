import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo.component';
import { FooterComponent } from './footer.component';

import { HomeComponent } from './home/home.component';
import { GameIntroComponent } from './home/gameintro.component';
import { WebIntroComponent } from './home/webintro.component';

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
import { EruptionHeaderComponent } from './game/eruption/eruptionheader.component';
import { EruptionDesignComponent } from './game/eruption/eruptiondesign.component';
import { EruptionGameComponent } from './game/eruption/eruptiongame.component';
import { EruptionIntroComponent } from './game/eruption/eruptionintro.component';

import { MigrationComponent } from './game/migration/migration.component';
import { MigrationHeaderComponent } from './game/migration/migrationheader.component';
import { MigrationDesignComponent } from './game/migration/migrationdesign.component';
import { MigrationGameComponent } from './game/migration/migrationgame.component';

import { SurvivorComponent } from './game/survivor/survivor.component';
import { SurvivorBlogComponent } from './game/survivor/survivorblog.component';
import { SurvivorHeaderComponent } from './game/survivor/survivorheader.component';
import { SurvivorDesignComponent } from './game/survivor/survivordesign.component';
import { SurvivorGameComponent } from './game/survivor/survivorgame.component';

import { SparkComponent } from './game/spark/spark.component';
import { SparkBlogComponent } from './game/spark/sparkblog.component';
import { SparkHeaderComponent } from './game/spark/sparkheader.component';
import { SparkDesignComponent } from './game/spark/sparkdesign.component';
import { SparkGameComponent } from './game/spark/sparkgame.component';

import { RockLimeComponent } from './web/rocklime/rocklime.component';

import { ChatAppComponent } from './web/chapp/chatapp.component';

import { WeatherAppComponent } from './web/weather/weatherapp.component';

import { routing } from './app.routing';

import { ErrorService } from './errors/error.service';
import { ErrorComponent } from './errors/error.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LogoComponent,
		FooterComponent,
		HomeComponent,
		GameIntroComponent,
		WebIntroComponent,
		MeComponent,
		WebComponent,
		WebHeaderComponent,
		WebHomeComponent,
		GameComponent,
		GameHeaderComponent,
		GameHomeComponent,
		LearningComponent,
		ContactComponent,
		EruptionComponent,
		EruptionHeaderComponent,
		EruptionDesignComponent,
		EruptionGameComponent,
		EruptionIntroComponent,
		MigrationComponent,
		MigrationHeaderComponent,
		MigrationDesignComponent,
		MigrationGameComponent,
		SurvivorComponent,
		SurvivorHeaderComponent,
		SurvivorBlogComponent,
		SurvivorDesignComponent,
		SurvivorGameComponent,
		SparkComponent,
		SparkHeaderComponent,
		SparkBlogComponent,
		SparkDesignComponent,
		SparkGameComponent,
		RockLimeComponent,
		ChatAppComponent,
		WeatherAppComponent,
		ErrorComponent
	],
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		ReactiveFormsModule
	],
	providers: [
		ErrorService
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}
