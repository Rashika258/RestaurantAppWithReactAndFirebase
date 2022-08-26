export const fetchUser = () => {

    // get the user data from localstorage and parse it, if it is undefined clear the localStorage

    const userInfo= localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")):localStorage.clear();


    return userInfo;
}