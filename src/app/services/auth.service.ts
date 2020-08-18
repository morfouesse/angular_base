// les serrvices permettent
// d'etre réutiliser dans toute l'appli 
export class AuthService {

    isAuth = false;
    signIn()
    {// methode asynchrone
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                         this.isAuth = true;
                         //resultat
                         resolve(true);
                    }, 500
                );        
            }
        ); 
    }
    signOut()
    {
      this.isAuth = false;
    }
}