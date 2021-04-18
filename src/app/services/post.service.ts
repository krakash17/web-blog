import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
postId: number = 0;

  constructor() { }
//function for getting the post id
  getPostId(id: number){
    this.postId = id;
  }
   
}
