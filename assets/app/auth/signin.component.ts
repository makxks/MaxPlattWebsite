import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

    constructor(private fb: FormBuilder) {}

    onSignin() {

    }

    ngOnInit():any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
