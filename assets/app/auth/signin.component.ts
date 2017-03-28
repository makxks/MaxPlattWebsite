import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from './auth.service';

@Component({
    selector: 'auth-signin',
    template: `
        <h3>Please sign up if you want to leave comments</h3>
        <div class="authFormContainer">
          <form [formGroup]="myForm" (ngSubmit)="onSignin()" class="authForm">
              <div class="form-group">
                  <label for="email">E-Mail</label>
                  <input formControlName="email" type="email" id="email" class="form-control">
              </div>
              <div class="form-group">
                  <label for="password">Password</label>
                  <input formControlName="password" type="password" id="password" class="form-control">
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
