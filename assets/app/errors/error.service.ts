import { EventEmitter } from '@angular/core';

import { Error } from "./error.model";

export class ErrorService {
	errorOccurred = new EventEmitter<Error>();

	handleError(error: any){
		const errorData = new Error(error.code, error.message);
		console.log(errorData);
		this.errorOccurred.emit(errorData);
	}
}
