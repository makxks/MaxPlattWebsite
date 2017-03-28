import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';

@NgModule({
	declarations: [
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
