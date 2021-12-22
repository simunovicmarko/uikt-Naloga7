import { User } from "../Interfaces/User";
import { LoggedIn } from "./LoggedIn";

export const getUser = ():User|null => {
    if (LoggedIn()) {
        let userStr = localStorage.getItem('logedInUser');
        if (userStr !== null) {
            let user:User = JSON.parse(userStr);
            return user;
        }
    }
    return null;
}
