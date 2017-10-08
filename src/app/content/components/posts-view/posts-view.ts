import {Component} from '@angular/core';
import {AbstractViewComponent} from '../abstract-view/abstract-view';

@Component({
  selector: 'content-posts-view',
  template: require('./posts-view.html')
})
export class ContentPostsViewComponent extends AbstractViewComponent {
  private table: Array<Object> = [{
    key: 'id',
    name: 'ID'
  }, {
    key: 'title',
    name: 'Tytuł'
  }, {
    key: 'body',
    name: 'Treść',
    sortable: false
  }];
}