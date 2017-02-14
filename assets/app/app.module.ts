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
import { EruptionHeaderComponent } from './game/eruption/eruptionheader.component';
import { EruptionDesignComponent } from './game/eruption/eruptiondesign.component';
import { EruptionGameComponent } from './game/eruption/eruptiongame.component';

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
		EruptionComponent,
		EruptionHeaderComponent,
		EruptionDesignComponent,
		EruptionGameComponent,
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
		SparkGameComponent
	],
	imports: [
		BrowserModule,
		routing
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}