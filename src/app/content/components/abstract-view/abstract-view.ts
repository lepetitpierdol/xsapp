import {Component, Input} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {IComment} from '../../interfaces/comment';
import {IPost} from '../../interfaces/post';
import {SORT_ORDER} from '../../enums/sort-order';
import {ISortState} from '../../interfaces/sort-state';
import {IPagination} from '../../interfaces/pagination';
import * as _ from 'lodash';

@Component({
  selector: 'abstract-view',
  template: ''
})
export class AbstractViewComponent {
  @Input('mode') mode: string;

  private originalData: Array<IPost | IUser | IComment>;
  protected data: Array<IPost | IUser | IComment>;

  private perPageLocalStorageKey: string = '_tableViewPerPage';
  private filter: string = '';
  protected sortState: ISortState = {field: 'id', order: SORT_ORDER.ASC};

  protected pagination: IPagination = {
    perPage: 10,
    currentPage: 0
  };

  constructor() {
    let savedPerPageValue = window.localStorage.getItem(this.perPageLocalStorageKey);
    
    if (savedPerPageValue) {
      this.pagination.perPage = parseInt(savedPerPageValue);
    }
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

    this.pagination.currentPage = 0;
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
    this.pagination.currentPage = 0;
  }

  onNextPage(): void {
    if (this.pagination.currentPage >= ((this.data.length / this.pagination.perPage) - 1)) {
      return;
    }

    this.pagination.currentPage++;
  }

  onPrevPage(): void {
    if (this.pagination.currentPage === 0) {
      return;
    }

    this.pagination.currentPage--;
  }

  onPerPageChange(newPerPageValue: number): void {
    this.pagination.currentPage = 0;
    this.pagination.perPage = newPerPageValue;

    window.localStorage.setItem(this.perPageLocalStorageKey, this.pagination.perPage.toString());
  }
}