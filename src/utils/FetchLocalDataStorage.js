export const fetchUser = () => {
  // get the user data from localstorage and parse it, if it is undefined clear the localStorage

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
    const cartInfo = localStorage.getItem("cartItems") !== "undefined" ? JSON.parse(localStorage.getItem("cartItems")) : localStorage.clear();

    return cartInfo ? cartInfo : [];
}
