import {Component} from '@angular/core';
import {NotificationService} from '../../services/notification';

@Component({
  selector: 'root',
  template: require('./root.html')
})
export class RootComponent {
  private notification: string;

  constructor(private notificationService: NotificationService) {
    this.notificationService.show$.subscribe((msg: string) => {
      this.notification = msg;
      
      window.setTimeout(() => {
        this.notification = undefined;
      }, 3000);
    });
  }
}