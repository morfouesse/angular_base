import { User } from "../models/User.model";
import {Subject} from "rxjs";
export class UserService {

   
    private users: User[] = [
        {
            firstName: "James",
            lastName: "Strong",
            email: "james@hotmail.fr",
            drinkPreference: "coca",
            hobbies: [
                "coder",
                "jouer",
                "lego"
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers()
    {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User)
    {
        this.users.push(user);
        this.emitUsers();
    }

   
}