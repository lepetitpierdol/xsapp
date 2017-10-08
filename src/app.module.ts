import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

// Components
import {AppComponent} from './app/app';
import {ListComponent} from './app/list/components/list/list';
import {ContentParentViewComponent} from './app/content/components/parent-view/parent-view';
import {ContentUsersViewComponent} from './app/content/components/users-view/users-view';
import {SortControlComponent} from './app/content/components/sort-control/sort-control';
import {PaginationComponent} from './app/content/components/pagination/pagination';
import {ContentTableViewComponent} from './app/content/components/table-view/table-view';
import {RootComponent} from './app/common/components/root/root';

// Services
import {APIService} from './app/common/services/api';
import {ErrorHandlerService} from './app/common/services/error-handler';
import {NotificationService} from './app/common/services/notification';

let routes: Routes = [{
  path: '',
  component: RootComponent
}, {
  path: ':mode',
  component: ContentParentViewComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContentParentViewComponent,
    ContentUsersViewComponent,
    SortControlComponent,
    PaginationComponent,
    ContentTableViewComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    APIService,
    ErrorHandlerService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
