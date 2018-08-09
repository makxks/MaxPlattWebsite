import { Routes, RouterModule } from '@angular/router';

import { GameHomeComponent } from './gamehome.component';
import { EruptionComponent } from './eruption/eruption.component';
import { MigrationComponent } from './migration/migration.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { SparkComponent } from './spark/spark.component';
import { NetworkComponent } from './network/network.component';

import { ERUPTION_ROUTES } from './eruption/eruption.routing';
import { MIGRATION_ROUTES } from './migration/migration.routing';
import { NETWORK_ROUTES } from './network/network.routing';
import { SURVIVOR_ROUTES } from './survivor/survivor.routing';
import { SPARK_ROUTES } from './spark/spark.routing';

export const GAME_ROUTES: Routes = [
	{ path: '' , redirectTo: 'gamehome', pathMatch: 'full' },
	{ path: 'gamehome', component: GameHomeComponent },
	{ path: 'eruption', component: EruptionComponent, children: ERUPTION_ROUTES },
	{ path: 'migration', component: MigrationComponent, children: MIGRATION_ROUTES },
	{ path: 'network', component: NetworkComponent, children: NETWORK_ROUTES },
	{ path: 'survivor', component: SurvivorComponent, children: SURVIVOR_ROUTES },
	{ path: 'spark', component: SparkComponent, children: SPARK_ROUTES }
]
