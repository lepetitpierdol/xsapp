import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IPagination} from '../../interfaces/pagination';

@Component({
  selector: 'pagination',
  template: require('./pagination.html')
})
export class PaginationComponent {
  @Input('count') itemsCount: number;
  @Input('pagination') pagination: IPagination;

  @Output('onPrev') onPrev$: EventEmitter<undefined> = new EventEmitter();
  @Output('onNext') onNext$: EventEmitter<undefined> = new EventEmitter();
  @Output('onPerPageChange') onPerPageChange$: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  getMaxPages(): number {
    return Math.ceil(this.itemsCount / this.pagination.perPage);
  }

  onPrevPage(): void {
    this.onPrev$.emit();
  }

  onNextPage(): void {
    this.onNext$.emit();
  }

  onPerPageChange(event: KeyboardEvent): void {
    if (event.target['value'] <= 0) {
      return;
    }

    this.onPerPageChange$.emit(parseInt(event.target['value']));
  }
}