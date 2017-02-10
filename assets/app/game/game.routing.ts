import { Routes, RouterModule } from '@angular/router';

import { GameHomeComponent } from './gamehome.component';
import { EruptionComponent } from './eruption/eruption.component';

export const GAME_ROUTES: Routes = [
	{ path: '' , redirectTo: 'gamehome', pathMatch: 'full' },
	{ path: 'gamehome', component: GameHomeComponent },
	{ path: 'eruption', component: EruptionComponent }
]
