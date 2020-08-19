import axios from "axios";

const client = axios.create();

// client.defaults.baseURL = "";

// client.dafaults.headers.common["Authorization"] = "";

// axios.intercepter.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );
export default client;
