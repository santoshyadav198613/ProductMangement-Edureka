

import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post/post.service';
import { Post } from '../service/post/post';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  postList: Post[];
  post = new Post();
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => this.postList = data,
      (err) => console.log(err));

    this.postService.getPostsData().subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {
        console.log(event.loaded);
        console.log(event.total);
      }
      else if (event instanceof HttpResponse) {
        this.postList = <Post[]>event.body;
      }
    })
  }

  addPost() {
    this.postService.addPost(this.post).subscribe((data) => console.log(data),
      (err) => console.log(err));
    this.post = new Post();
  }
}
