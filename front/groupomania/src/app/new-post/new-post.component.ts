import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { postService } from '../services/post.services';
import { Post } from '../models/post-model';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  Post!: Post;
  postForm!: FormGroup;
  postPreview$!: Observable<Post>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private postService: postService,
    private router: Router ) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required],
      post: [null, Validators.required],
      imageUrl:[null, [Validators.pattern(this.urlRegex)]]
    }, {
      updateOn: 'blur'
    });
    this.postPreview$ = this.postForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0,
        likes: 0,
        dislikes: 0
      }))
    );
  }

  onSubmitForm(): void{
    this.postService.addPost(this.postForm.value);
    this.router.navigateByUrl('')
  }
}
