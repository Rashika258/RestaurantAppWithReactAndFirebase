import { fetchUser } from "../utils/FetchLocalDataStorage";

// fetchUser fetches the data from localstorage
const userInfo = fetchUser()

export const initialState={
    user: userInfo,
    foodItems: null,
};