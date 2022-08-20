import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import { Post } from "../models/post-model";

@Injectable({
    providedIn: 'root'
})

export class postService{

  constructor(private http: HttpClient){}

    posts: Post[] = [];

      getAllPost(): Observable<Post[]>{
        return this.http.get<Post[]>('http://localhost:3000/groupomania');
      }

      postById(postId: number, postType: 'Like' | 'Dislike'): void{
       // const trigger = this.getTriggerById(triggerId);
       // triggerType === 'triggerrred' ? trigger.trigger++ : trigger.trigger--;
      }

      getPostById(postId: number): Observable<Post>{
        return this.http.get<Post>(`http://localhost:3000/groupomania/${postId}`);
      }

      addPost(formValue: {title: string, post: string, imageUrl?: string, like: number, dislike: number}): void {
        const post : Post = {
          ...formValue,
          likes: 0,
          dislikes:0,
          id: this.posts[this.posts.length - 1].id + 1
       };
       this.posts.push(post);
    }
} 