import {Component, Input} from '@angular/core';
import {IUser} from '../../../common/interfaces/user';
import {APIService, Response} from '../../../common/services/api';
import {IPost} from '../../interfaces/post';

@Component({
  selector: 'content-parent-view',
  template: require('./parent-view.html')
})
export class ContentParentViewComponent {
  private mode: string;
  private data: Array<IPost | IUser>;

  constructor(private apiService: APIService) {

  }

  @Input('mode') set onModeSet(mode: string) {
    if (!mode) {
      return;
    }

    this.mode = mode;

    this.apiService.request(`/${mode}`)
      .then((res: Response) => {
        this.data = res.json();
      })
      .catch(() => {

      })
    ;
  }
}