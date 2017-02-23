import { Routes, RouterModule } from '@angular/router';

import { WebHomeComponent } from './webhome.component';
import { RockLimeComponent } from './rocklime/rocklime.component';
import { MandarinLaneComponent } from './jasonwebsite/mandarinlane.component';
import { PatsStatsComponent } from './patsstats/patsstats.component';
import { ChatAppComponent } from './chapp/chatapp.component';

export const WEB_ROUTES: Routes = [
	{ path: '' , redirectTo: 'webhome', pathMatch: 'full' },
	{ path: 'webhome', component: WebHomeComponent },
	{ path: 'rocklime', component: RockLimeComponent },
	{ path: 'mandarinlane', component: MandarinLaneComponent },
	{ path: 'patsstats', component: PatsStatsComponent },
	{ path: 'chatapp', component: ChatAppComponent }
]
