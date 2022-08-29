import { fetchCart, fetchUser } from "../utils/FetchLocalDataStorage";

// fetchUser fetches the data from localstorage
const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState={
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo
};