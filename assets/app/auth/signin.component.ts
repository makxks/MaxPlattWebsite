import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from './auth.service';

@Component({
    selector: 'auth-signin',
    template: `
        <h3>Please sign in if you want to leave comments</h3>
        <div class="authFormContainer">
          <form [formGroup]="myForm" (ngSubmit)="onSignin()" class="authForm">
              <div class="form-group formInput" [ngClass]="{'has-error':!myForm.controls['email'].valid && myForm.controls['email'].touched}">
                  <label for="email">E-Mail</label>
                  <input formControlName="email" type="email" id="email" class="form-control">
                  <span *ngIf="!myForm.controls['email'].pristine && myForm.controls['email'].errors != null" class="errorMessage">Enter an email address</span>
              </div>
              <div class="form-group formInput" [ngClass]="{'has-error':!myForm.controls['password'].valid && myForm.controls['password'].touched}">
                  <label for="password">Password</label>
                  <input formControlName="password" type="password" id="password" class="form-control">
                  <span *ngIf="!myForm.controls['password'].pristine && myForm.controls['password'].errors != null" class="errorMessage">Enter your password</span>
              </div>
              <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
          </form>
        </div>
    `,
  	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    onSignin() {
      this.authService.signinUser(this.myForm.value);
      this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
