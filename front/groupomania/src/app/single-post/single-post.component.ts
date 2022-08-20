import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { postService } from '../services/post.services';
import { Post } from '../models/post-model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  Post$!: Observable<Post>;

  constructor(private postService: postService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = +this.route.snapshot.params['id'];
    this.Post$ =  this.postService.getPostById(postId);
  }

}
