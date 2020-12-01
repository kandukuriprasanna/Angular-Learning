import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostListComponent } from './post-list/post-list.component';
import { appTrendingDirective } from './directives/app-trending.directive';
import { appSelectedDirective } from './directives/app-selected.ditective';
import { PostsRoutingModule } from './post.routing.module';
import { cutStringPipe } from './pipes/cutString.pipe';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  exports: [PostListComponent],
  declarations: [
    PostComponent,
    PostCommentsComponent,
    PostListComponent,
    appTrendingDirective,
    appSelectedDirective,
    cutStringPipe
  ],
  providers: [],
})
export class PostModule {

}
