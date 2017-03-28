import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user.interface';
import { ErrorService } from '../errors/error.service';

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private http: Http, private errorService: ErrorService) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
}
