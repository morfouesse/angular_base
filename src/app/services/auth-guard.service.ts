import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {AuthService} from "./auth.service";

// Pour injecter un service dans un autre service, il faut que le service dans
// lequel on injecte un autre ait le décorateur injectable
@Injectable()
export class AuthGuard implements CanActivate {
//Une guard est en effet un service qu'Angular exécutera
// au moment où l'utilisateur essaye de naviguer vers la route sélectionnée.
    constructor(private authService: AuthService,
        private router: Router)
    {}
    // pour les classes dans route et state :
    // seront fournis par Angular au moment de l'exécution
    // et retourne une valeur booléenne, soit de manière
    // synchrone (boolean), soit de manière asynchrone
    // (sous forme de Promise ou d'Observable)
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{

        if(this.authService.isAuth)
        {
            return true;
        }else{
            this.router.navigate(['/auth']);
        }
    }
}
