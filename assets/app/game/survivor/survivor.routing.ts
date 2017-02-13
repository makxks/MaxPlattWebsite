import { Routes, RouterModule } from '@angular/router';

import { SurvivorGameComponent } from './survivorgame.component';
import { SurvivorDesignComponent } from './survivordesign.component';
import { SurvivorBlogComponent } from './survivorblog.component';

export const SURVIVOR_ROUTES: Routes = [
	{ path: '' , redirectTo: 'survivorgame', pathMatch: 'full' },
	{ path: 'survivorgame', component: SurvivorGameComponent },
	{ path: 'survivordesign', component: SurvivorDesignComponent },
  { path: 'survivorblog', component: SurvivorBlogComponent }
]
