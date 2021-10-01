import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  User: any;

  userPost: any = [];
  filterPost: any = [];
  posts: any = [];
  searchTerm: string = "";

  constructor(private http: HttpClient,
    private route: Router,
    private postService: PostService) { }

  ngOnInit() {
    this.User = JSON.parse(localStorage.getItem('User')!);
    this.http.get('assets/userData.json').subscribe(data => {
      this.posts = data;
      for (let i = 0; i < this.posts.length; i++) {
        if (this.User.id === this.posts[i].userId) {
          this.userPost.push(this.posts[i]);
          this.filterPost = this.userPost;
        }
      }
    });
    console.log(this.posts)
  }

  setFilteredItems() {
    this.filterPost = this.filterItems(this.searchTerm);
  }
  //function for searching the post
  filterItems(searchTerm: string) {
    return this.userPost.filter((post: { title: string; }) => {
      return post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  goToPost(postId: number) {
    this.route.navigateByUrl('single-post')
    this.postService.getPostId(postId)
  }
}
