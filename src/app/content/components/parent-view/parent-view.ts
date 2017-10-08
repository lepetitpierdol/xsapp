import {Component, Input} from '@angular/core';
import {APIService, Response} from '../../../common/services/api';
import {ErrorHandlerService} from '../../../common/services/error-handler';
import {IPost} from '../../interfaces/post';
import {IComment} from '../../interfaces/comment';
import {IUser} from '../../interfaces/user';

@Component({
  selector: 'content-parent-view',
  template: require('./parent-view.html')
})
export class ContentParentViewComponent {
  private mode: string;
  private data: Array<IPost | IUser | IComment>;

  constructor(private errors: ErrorHandlerService, private apiService: APIService) {

  }

  @Input('mode') set onModeSet(mode: string) {
    if (!mode) {
      return;
    }

    this.data = undefined;
    this.mode = mode;

    this.apiService.request(`/${mode}`)
      .then((res: Response) => {
        try {
          this.data = res.json();
        } catch(e) {
          this.errors.handle(e);
        }
      })
      .catch(res => this.errors.handle(res))
    ;
  }
}