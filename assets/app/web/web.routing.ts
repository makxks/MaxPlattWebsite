import { Routes, RouterModule } from '@angular/router';

import { WebHomeComponent } from './webhome.component';
// import { RockLimeComponent } from './rocklime.component';
// import { MandarinLaneComponent } from './mandarinlane.component';
// import { PatsStatsComponent } from './patsstats.component';
// import { ChatAppComponent } from './chatapp.component';

export const WEB_ROUTES: Routes = [
	{ path: '' , redirectTo: 'webhome', pathMatch: 'full' },
	{ path: 'webhome', component: WebHomeComponent }
	//{ path: 'rocklime', component: RockLimeComponent },
	//{ path: 'mandarinlane, component: MandarinLaneComponent },
	//{ path: 'patsstats', component: PatsStatsComponent },
	//{ path: 'chatapp', component: ChatAppComponent }
]
