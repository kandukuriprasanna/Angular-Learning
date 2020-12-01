import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostModule } from './post/post.module';
import { PostsRoutingModule } from './post/post.routing.module';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "admin", component: AdminComponent },
  { path: "posts", component: PostListComponent },
  { path: "", component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

