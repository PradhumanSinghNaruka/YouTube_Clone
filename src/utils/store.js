// import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//     params: { hl: "en", gl: "US" },
//     headers: {
//         "X-RapidAPI-Key":
//             process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
//         "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//     },
// };

// export const fetchDataFromApi = async (url) => {
//     try {
//         const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error.response ? error.response.data : error.message);
//         throw error;
//     }
// };








// import {configureStore} from "@reduxjs/toolkit";
// import appReducer from "../utils/appSlice";
// const store = configureStore({
//     reducer:{
//         app:appReducer
//     }
// })
// export default store;