import {Component} from '@angular/core';

@Component({
  selector: 'xs-app',
  template: require('./app.html')
})
export class AppComponent {
  private mode: string;

  constructor() {
    
  }

  onModeSelected(mode: string): void {
    this.mode = mode;
  }
}