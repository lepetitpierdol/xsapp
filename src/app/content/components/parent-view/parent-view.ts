import {Component, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
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
  private data: Array<IPost | IUser | IComment>;
  private mode: string;

  constructor(private route: ActivatedRoute, private errors: ErrorHandlerService, private apiService: APIService) {
    this.route.params.subscribe((params: Params) => {
      this.mode = params.mode;
      this.injectChild();
    });
  }

  injectChild(): void {
    if (!this.mode) {
      return;
    }

    this.data = undefined;

    this.apiService.request(`/${this.mode}`)
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