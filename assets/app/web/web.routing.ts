import { Routes, RouterModule } from '@angular/router';

import { WebHomeComponent } from './webhome.component';

export const WEB_ROUTES: Routes = [
	{ path: '' , redirectTo: 'webhome', pathMatch: 'full' },
	{ path: 'webhome', component: WebHomeComponent }
]
