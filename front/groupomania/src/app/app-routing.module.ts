import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupomaniaAppComponent } from './groupomania-app/groupomania-app.component';
import { GroupomaniaConnexionComponent } from './groupomania-connexion/groupomania-connexion.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '/login', component: GroupomaniaConnexionComponent},
  {path: '/signup', component: SignupComponent},
  {path: '', component: GroupomaniaAppComponent},
  {path: '/:id', component: PostListComponent},
  {path: '/new', component: NewPostComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
