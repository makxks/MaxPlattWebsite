import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import { AuthService } from './auth.service';

@Component({
    selector: 'auth-signup',
    template: `
      <h3>Please sign in if you want to leave comments</h3>
      <div class="authFormContainer">
        <form [formGroup]="myForm" (ngSubmit)="onSignup()" class="authForm">
            <div class="form-group formInput" [ngClass]="{'has-error':!myForm.controls['username'].valid && myForm.controls['username'].touched}">
                <label for="username">Username</label>
                <input formControlName="username" #username id="username" type="text" id="username" class="form-control">
                <span *ngIf="!myForm.controls['username'].valid && !myForm.controls['username'].pristine" class="errorMessage">Enter a username</span>
            </div>
            <div class="form-group formInput" [ngClass]="{'has-error':!myForm.controls['email'].valid && myForm.controls['email'].touched}">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" #email class="form-control">
                <span *ngIf="!myForm.controls['email'].pristine && myForm.controls['email'].errors != null && myForm.controls['email'].errors['noEmail']" class="errorMessage">Invalid email address</span>
            </div>
            <div class="form-group formInput" [ngClass]="{'has-error':!myForm.controls['password'].valid && myForm.controls['password'].touched}">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
                <span *ngIf="!myForm.controls['password'].valid && !myForm.controls['password'].pristine" class="errorMessage">Invalid password</span>
            </div>
            <div class="form-group formInput" [ngClass]="{'has-error':!myForm.controls['confirmPassword'].valid && myForm.controls['confirmPassword'].touched}">
                <label for="confirm-password">Confirm Password</label>
                <input formControlName="confirmPassword" type="password" id="confirm-password" #confirmPassword class="form-control">
                <span *ngIf="!myForm.controls['confirmPassword'].pristine && myForm.controls['confirmPassword'].errors != null && myForm.controls['confirmPassword'].errors['passwordsNotMatch']" class="errorMessage">Passwords do not match</span>
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    `,
  	styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: AuthService) {
    }

}
