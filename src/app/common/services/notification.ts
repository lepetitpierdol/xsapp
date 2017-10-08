import {Injectable, EventEmitter, Output} from '@angular/core';

@Injectable()
export class NotificationService {
  @Output() show$: EventEmitter<string> = new EventEmitter();
  
  constructor() {
    
  }

  public throw(msg: string): void {
    this.show$.emit(msg);
  }
}