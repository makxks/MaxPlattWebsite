import { Routes, RouterModule } from '@angular/router';

import { EruptionGameComponent } from './eruptiongame.component';
import { EruptionDesignComponent } from './eruptiondesign.component';

export const ERUPTION_ROUTES: Routes = [
	{ path: '' , redirectTo: 'eruptiongame', pathMatch: 'full' },
	{ path: 'eruptiongame', component: EruptionGameComponent },
	{ path: 'eruptiondesign', component: EruptionDesignComponent }
]
