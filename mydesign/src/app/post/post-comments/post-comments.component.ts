import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  @Input() postId: number = 0;
  comments: any[] = [];

  constructor(private postService: PostsService) {

  }

  ngOnInit(): void {
      this.getPostCommments()
  }

  getPostCommments() {
    this.postService.getPostComments(this.postId).then((res: any) => {
      this.comments = res;
    });
  }

}
