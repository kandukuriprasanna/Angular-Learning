import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})

export class PostComponent implements OnInit {
  @Input() post: any = {};

  constructor(private postService: PostsService) {

  }

  ngOnInit() {

  }
}
