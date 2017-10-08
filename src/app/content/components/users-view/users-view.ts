import {Component} from '@angular/core';
import {AbstractViewComponent} from '../abstract-view/abstract-view'

@Component({
  selector: 'content-users-view',
  template: require('./users-view.html')
})
export class ContentUsersViewComponent extends AbstractViewComponent {

}