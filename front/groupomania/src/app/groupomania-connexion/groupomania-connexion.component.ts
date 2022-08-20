import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groupomania-connexion',
  templateUrl: './groupomania-connexion.component.html',
  styleUrls: ['./groupomania-connexion.component.scss']
})
export class GroupomaniaConnexionComponent implements OnInit {

  userEmail: string = 'email';
  userPassword: string = 'mot de passe';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm): void{
    console.log(form.value);
    this.router.navigateByUrl('groupomania');
  }

}
