import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupomaniaConnexionComponent } from './groupomania-connexion/groupomania-connexion.component';

const routes: Routes = [
  {path: 'groupomania/login', component: GroupomaniaConnexionComponent},
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
