import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user.interface';
import { ErrorService } from '../errors/error.service';

declare var firebase: any;
var database = firebase.database();

@Injectable()
export class AuthService {
  constructor(private http: Http, private errorService: ErrorService) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(function(data){
        database.ref('users/' + data.uid).set({
          username: user.username,
          email: user.email
        });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  checkAdmin(userDetails){
		const adminId = "HpSs3QseDCa17bHO9tHM4eEJqNH3";
		var isAdmin = false;

		if (userDetails.uid == adminId){
			isAdmin = true;
		}
		return isAdmin;
	}
}
