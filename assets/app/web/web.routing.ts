import { Routes, RouterModule } from '@angular/router';

import { WebHomeComponent } from './webhome.component';
import { RockLimeComponent } from './rocklime/rocklime.component';
import { ChatAppComponent } from './chapp/chatapp.component';
import { WeatherAppComponent } from './weather/weatherapp.component';

export const WEB_ROUTES: Routes = [
	{ path: '' , redirectTo: 'webhome', pathMatch: 'full' },
	{ path: 'webhome', component: WebHomeComponent },
	{ path: 'rocklime', component: RockLimeComponent },
	{ path: 'chatapp', component: ChatAppComponent },
	{ path: 'weather', component: WeatherAppComponent }
]
