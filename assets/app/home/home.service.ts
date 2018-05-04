import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
  selectedGame: string = "";
  selectedWebsite: string = "";
}
