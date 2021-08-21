import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://localhost:44328/api";
const ApiTienda = axios.create({
  baseURL: baseUrl,
});

// FarmaciasAppApi.interceptors.request.use(async (config) => {

//   const token = await AsyncStorage.getItem("token");

//    if (token) config.headers["token"] = token;
//    config.headers["Content-Type"] = 'application/json';   
//    return config;

//   });
export default ApiTienda;