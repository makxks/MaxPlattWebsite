import { Routes, RouterModule } from '@angular/router';

import { NetworkGameComponent } from './networkgame.component';
import { NetworkDesignComponent } from './networkdesign.component';

export const NETWORK_ROUTES: Routes = [
	{ path: '' , redirectTo: 'networkgame', pathMatch: 'full' },
	{ path: 'networkgame', component: NetworkGameComponent },
	{ path: 'networkdesign', component: NetworkDesignComponent }
]
