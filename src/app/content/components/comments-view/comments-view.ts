import {Component} from '@angular/core';
import {AbstractViewComponent} from '../abstract-view/abstract-view';

@Component({
  selector: 'content-comments-view',
  template: require('./comments-view.html')
})
export class ContentCommentsViewComponent extends AbstractViewComponent {
  private table: Array<Object> = [{
    key: 'id',
    name: 'ID'
  }, {
    key: 'email',
    name: 'E-Mail'
  }, {
    key: 'name',
    name: 'Nazwa'
  }, {
    key: 'body',
    name: 'Treść',
    sortable: false
  }];
}