import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user.interface';
import { ErrorService } from '../errors/error.service';

declare var firebase: any;
var database = firebase.database();

@Injectable()
export class AuthService {
  constructor(private errorService: ErrorService) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(function(data){
        database.ref('users/' + data.uid).set({
          username: user.username,
          email: user.email
        });
      })
      .catch((error) => {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        this.errorService.handleError(error.toJSON);
        return Observable.throw(error.toJSON);
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      this.errorService.handleError(error.toJSON());
      return Observable.throw(error.toJSON);
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
