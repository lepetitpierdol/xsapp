import {Component} from '@angular/core';
import {NotificationService} from './common/services/notification';

@Component({
  selector: 'xs-app',
  template: require('./app.html')
})
export class AppComponent {
  private mode: string;
  private notification: string;

  constructor(private notificationService: NotificationService) {
    this.notificationService.show$.subscribe((msg: string) => {
      this.notification = msg;
      
      window.setTimeout(() => {
        this.notification = undefined;
      }, 3000);
    });
  }

  onModeSelected(mode: string): void {
    this.mode = mode;
  }
}