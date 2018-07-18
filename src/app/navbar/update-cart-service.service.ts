import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UpdateCartServiceService {

  private messageSource = new BehaviorSubject([0,0]);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

}
