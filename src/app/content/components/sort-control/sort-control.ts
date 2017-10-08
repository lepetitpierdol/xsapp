import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'sort-control',
  template: require('./sort-control.html')
})
export class SortControlComponent {
  @Input('sortState') sortState: Object;
  @Input('key') key: string;

  constructor() {
    
  }
}