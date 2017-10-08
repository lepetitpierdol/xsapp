import {SORT_ORDER} from '../enums/sort-order';

export interface ISortState {
  field: string;
  order: SORT_ORDER;
}