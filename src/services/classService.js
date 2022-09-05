import axios from "axios";
import { setLocalStorage } from "../helpers/localStorage";

const API_URL = process.env.REACT_APP_API_URL

const fetchAllClass = async (data) => {
    const response = await axios.get(API_URL+data?.url+data?.id, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + data?.token
        },
        data
    })
    if (response.data){
        setLocalStorage("classes", response.data?.data)
    }
    return response.data;
}

const classService = {
    fetchAllClass
}
export default classService