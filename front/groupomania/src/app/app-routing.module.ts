import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupomaniaAppComponent } from './groupomania-app/groupomania-app.component';
import { GroupomaniaConnexionComponent } from './groupomania-connexion/groupomania-connexion.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: 'signup', component: GroupomaniaConnexionComponent},
  {path: '', component: GroupomaniaAppComponent},
  {path: 'groupomania/:id', component: PostListComponent},
  {path: 'new', component: NewPostComponent}
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
