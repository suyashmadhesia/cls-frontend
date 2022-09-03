import axios from "axios";
import { setLocalStorage } from "../helpers/localStorage";


const API_URL = process.env.REACT_APP_API_URL

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL+"/api/register", userData);

    if (response.data){
        setLocalStorage('user', response.data);
    }

    return response.data;
}

// Login User
const login = async (userData) => {
    const response = await axios.post(API_URL+"/api/login", userData);
    if(response.data){
        setLocalStorage('user', response.data);
    }
}

const logout = () => {
    localStorage.clear();
}

const authService = {
    register,
    login,
    logout
}

export default authService;