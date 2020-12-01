import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})

export class PostListComponent implements OnInit {
  posts : any[] = [];

  constructor(private postService: PostsService) {

  }

  ngOnInit() {
    this.postService.getPost().then((res: any) => {
        this.posts = res;
    });
  }
}
