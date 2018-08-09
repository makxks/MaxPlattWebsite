import { Routes, RouterModule } from '@angular/router';

import { WebHomeComponent } from './webhome.component';
import { ChatAppComponent } from './chapp/chatapp.component';
import { WeatherAppComponent } from './weather/weatherapp.component';
import { ClassTrackerAppComponent } from './classtracker/classtrackerapp.component';
import { MProveComponent } from './mprove/mprove.component';

export const WEB_ROUTES: Routes = [
	{ path: '' , redirectTo: 'webhome', pathMatch: 'full' },
	{ path: 'webhome', component: WebHomeComponent },
	{ path: 'chatapp', component: ChatAppComponent },
	{ path: 'weather', component: WeatherAppComponent },
	{ path: 'classtracker', component: ClassTrackerAppComponent},
	{ path: 'mprove', component: MProveComponent}
]
