import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Components
import {AppComponent} from './app/app';
import {ListComponent} from './app/list/components/list/list';
import {ContentParentViewComponent} from './app/content/components/parent-view/parent-view';
import {ContentUsersViewComponent} from './app/content/components/users-view/users-view';
import {SortControlComponent} from './app/content/components/sort-control/sort-control';
import {PaginationComponent} from './app/content/components/pagination/pagination';
import {ContentTableViewComponent} from './app/content/components/table-view/table-view';

// Services
import {APIService} from './app/common/services/api';
import {ErrorHandlerService} from './app/common/services/error-handler';
import {NotificationService} from './app/common/services/notification';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContentParentViewComponent,
    ContentUsersViewComponent,
    SortControlComponent,
    PaginationComponent,
    ContentTableViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    APIService,
    ErrorHandlerService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
