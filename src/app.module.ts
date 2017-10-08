import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Components
import {AppComponent} from './app/app';
import {ListComponent} from './app/list/components/list/list';
import {ContentParentViewComponent} from './app/content/components/parent-view/parent-view';
import {ContentPostsViewComponent} from './app/content/components/posts-view/posts-view';
import {ContentUsersViewComponent} from './app/content/components/users-view/users-view';
import {ContentCommentsViewComponent} from './app/content/components/comments-view/comments-view';
import {SortControlComponent} from './app/content/components/sort-control/sort-control';

// Services
import {APIService} from './app/common/services/api';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContentParentViewComponent,
    ContentPostsViewComponent,
    ContentUsersViewComponent,
    ContentCommentsViewComponent,
    SortControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
