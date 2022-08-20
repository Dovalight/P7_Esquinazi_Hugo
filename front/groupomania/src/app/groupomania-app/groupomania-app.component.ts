import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { postService } from '../services/post.services';
import { Post } from '../models/post-model';

@Component({
  selector: 'app-groupomania-app',
  templateUrl: './groupomania-app.component.html',
  styleUrls: ['./groupomania-app.component.scss']
})
export class GroupomaniaAppComponent implements OnInit {

  postes$!: Observable<Post[]>;

  constructor(private postService: postService) { }

  ngOnInit(): void {
this.postes$ = this.postService.getAllPost();

  }

}
