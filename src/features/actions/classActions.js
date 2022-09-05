import { createAsyncThunk } from "@reduxjs/toolkit";
import classService from "../../services/classService";

export const fetchAllClassAction = createAsyncThunk('class/fetch', async (data, thunkAPI) => {
    try {
        return await classService.fetchAllClass(data);
    }
    catch(err){
        const message = err.response.data.error
        return thunkAPI.rejectWithValue(message);
    }
})