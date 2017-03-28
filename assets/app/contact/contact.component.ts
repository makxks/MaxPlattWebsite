import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styles: ['./contact.component.css']
})

export class ContactComponent {
  myForm: FormGroup;

  constructor(private http: Http) {}

  onSubmit() {
    this.http.post("https://formspree.io/maxplatt@outlook.com", this.myForm);
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
				Validators.required,
				Validators.pattern("^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$")
			]),
      message: new FormControl(null, Validators.required)
    })
  }

}
