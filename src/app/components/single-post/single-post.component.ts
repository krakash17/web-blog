import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  postId: number = 0;
  post: any = {}
  body: string = ''
  title: string = ''
  User: any;
  posts: any = [];
  constructor(private postService: PostService,
    private http: HttpClient) { }

  ngOnInit(

  ) {
    this.postId = this.postService.postId;
    this.User = JSON.parse(localStorage.getItem('User')!);
    this.http.get('assets/userData.json').subscribe(data => {
      this.posts = data;
      for (let i = 0; i < this.posts.length; i++) {
        if (this.postId === this.posts[i].id) {
          this.post = this.posts[i];
          this.body = this.post.body;
          this.title = this.post.title;

        }
      }
    });
  }
}
