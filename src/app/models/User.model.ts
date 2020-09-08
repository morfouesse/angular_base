export class User {
    
    // public => raccourci pour pas initialiser les attriues
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public drinkPreference: string,
                // ? => optionel 
                public hobbies?: string[]
            ){}
    


}