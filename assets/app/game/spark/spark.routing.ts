import { Routes, RouterModule } from '@angular/router';

import { SparkGameComponent } from './sparkgame.component';
import { SparkDesignComponent } from './sparkdesign.component';

export const SPARK_ROUTES: Routes = [
	{ path: '' , redirectTo: 'sparkgame', pathMatch: 'full' },
	{ path: 'sparkgame', component: SparkGameComponent },
	{ path: 'sparkdesign', component: SparkDesignComponent }
]
