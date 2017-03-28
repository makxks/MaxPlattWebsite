import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from '../errors/error.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styles: ['./contact.component.css']
})

export class ContactComponent {
  myForm: FormGroup;

  constructor(private http: Http, private errorService: ErrorService) {}

  onSubmit() {
    const headers = new Headers({
      'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http.post('http://formspree.io/maxplatt@outlook.com', { message: "From: " + this.myForm.value.email + "message: " + this.myForm.value.message }, { headers: headers });
  }

  // decide where app lives (heroku?) find service for sending email from that server postmark on heroku or sparkpost

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
				Validators.required,
				Validators.pattern("^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$")
			]),
      message: new FormControl(null, Validators.required)
    });
  }
}
