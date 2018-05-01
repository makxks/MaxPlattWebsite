import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { WebComponent } from './web/web.component';
import { GameComponent } from './game/game.component';
import { LearningComponent } from './learning/learning.component';
import { ContactComponent } from './contact/contact.component';

import { WEB_ROUTES } from './web/web.routing';
import { GAME_ROUTES } from './game/game.routing';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'games', component: GameComponent, children: GAME_ROUTES },
	{ path: 'web', component: WebComponent, children: WEB_ROUTES },
	{ path: 'learning', component: LearningComponent },
  { path: 'me', component: MeComponent },
	{ path: 'contact', component: ContactComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
