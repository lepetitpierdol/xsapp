import {Component, Input} from '@angular/core';
import {AbstractViewComponent} from '../abstract-view/abstract-view';

@Component({
  selector: 'content-table-view',
  template: require('./table-view.html')
})
export class ContentTableViewComponent extends AbstractViewComponent {
  private table: Object = {
    comments: [{
      key: 'id',
      name: '#',
      width: '7%'
    }, {
      key: 'email',
      name: 'E-Mail',
      width: '10%'
    }, {
      key: 'name',
      name: 'Nazwa',
      width: '22%'
    }, {
      key: 'body',
      name: 'Treść',
      width: '60%',
      sortable: false
    }],
    posts: [{
      key: 'id',
      name: '#',
      width: '5%'
    }, {
      key: 'title',
      name: 'Tytuł',
      width: '30%'
    }, {
      key: 'body',
      name: 'Treść',
      width: '65%',
      sortable: false
    }]
  }
}