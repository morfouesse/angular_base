import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // connecter ou non
    this.authStatus = this.authService.isAuth;
  }
// se connecter
  onSignIn()
  {
    //then = permet de réagir a une méthode asynchrone
    // apres un callback
      this.authService.signIn().then(
        () => {
          // navigate permet d'aller dinamiquement sur une route
          this.router.navigate(['appareils']);
          this.authStatus = this.authService.isAuth;
        }
      );
  }
// se déconecter
  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
