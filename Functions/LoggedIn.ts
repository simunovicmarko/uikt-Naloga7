export const LoggedIn = ():boolean => {
    let user = localStorage.getItem('logedInUser');
    // console.log(user, "user")
    return user !== null;
}
