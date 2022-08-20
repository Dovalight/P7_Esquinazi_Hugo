import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postService } from '../services/post.services';
import { Post } from '../models/post-model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() Post!: Post;
  
  constructor(private postService: postService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onComment(){
    this.router.navigateByUrl(`groupomania/${this.Post.id}`);
  }

}
