import {Component, Input} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {IComment} from '../../interfaces/comment';
import {IPost} from '../../interfaces/post';
import {SORT_ORDER} from '../../enums/sort-order';
import {ISortState} from '../../interfaces/sort-state';
import * as _ from 'lodash';

@Component({
  selector: 'abstract-view',
  template: ''
})
export class AbstractViewComponent {
  private filter: string = '';

  private originalData: Array<IPost | IUser | IComment>;
  protected data: Array<IPost | IUser | IComment>;

  protected sortState: ISortState = {field: 'id', order: SORT_ORDER.ASC};

  constructor() {

  }

  @Input('data') set onDataSet(data: Array<IPost | IUser | IComment>) {
    this.originalData = data;
    this.data = data;
  }

  onFilter(): void {
    if (!this.data) {
      return;
    }

    if (this.filter.length <= 3) {
      this.data = this.originalData;
    }

    let results = [];

    for (let item of this.originalData) {
      let itemKeys = Object.keys(item);

      for (let key of itemKeys) {
        if (typeof item[key] === 'string' && item[key].toLowerCase().indexOf(this.filter) > -1) {
          results.push(item);
          break;
        }
      }
    }

    this.data = results;
  }

  onSort(field: string): void {
    if (this.sortState.field === field) {
      this.sortState.order = +!this.sortState.order;
    } else {
      this.sortState.order = SORT_ORDER.ASC;
    }

    this.sortState.field = field;

    this.data = _.orderBy(this.data, [field], [(this.sortState.order ? 'asc': 'desc')]);
  }
}