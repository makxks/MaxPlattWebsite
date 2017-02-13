import { Routes, RouterModule } from '@angular/router';

import { MigrationGameComponent } from './migrationgame.component';
import { MigrationDesignComponent } from './migrationdesign.component';

export const MIGRATION_ROUTES: Routes = [
	{ path: '' , redirectTo: 'migrationgame', pathMatch: 'full' },
	{ path: 'migrationgame', component: MigrationGameComponent },
	{ path: 'migrationdesign', component: MigrationDesignComponent }
]
