import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';

@NgModule({
	declarations: [
        LogoutComponent,
        SignupComponent,
        SigninComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})

export class AuthModule {

}
