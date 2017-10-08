import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'list',
  template: require('./list.html')
})
export class ListComponent {
  @Output('onModeSelected') onModeSelected: EventEmitter<string> = new EventEmitter();

  constructor() {
    
  }

  onModeSelect(content: string): void {
    this.onModeSelected.emit(content);
  }
}