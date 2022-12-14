import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
//import logo from '../../assets/logo/icon-left-font-monochrome-white.png';

@Component({
  selector: 'app-groupomania-connexion',
  templateUrl: './groupomania-connexion.component.html',
  styleUrls: ['./groupomania-connexion.component.scss']
})
export class GroupomaniaConnexionComponent implements OnInit {

  userEmail: string = 'email';
  userPassword: string = 'mot de passe';
  //logo:string = "../../assets/logo/icon-left-font-monochrome-white.png"

  constructor(private router: Router,
    private service: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitForm(): void{
    console.log(this.userEmail);
    this.service.logIn(this.userEmail, this.userPassword).subscribe(
      (result)=>{
        console.log(result);
        sessionStorage.setItem("userId", result.userId)
        sessionStorage.setItem("token", result.token)
        this.router.navigateByUrl('');
    },
    (error)=>{
      console.log(error);
    })
  }

}
