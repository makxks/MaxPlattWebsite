import { Component } from '@angular/core';

@Component ({
	selector: 'app-learning',
	templateUrl: './learning.component.html',
	styleUrls: ['./learning.component.css']
})

export class LearningComponent {

	// get the react app and put it here somehow

	// use the firebase current user UID to check for admin
	checkAdmin(user){
		const adminId = "HpSs3QseDCa17bHO9tHM4eEJqNH3";
		isAdmin = false;

		if (user.uid == adminId){
			isAdmin = true;
		}
		return isAdmin;
	}

}
