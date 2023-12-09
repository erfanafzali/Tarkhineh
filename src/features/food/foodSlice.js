import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAsyncFood = createAsyncThunk(
  "food/getAsyncFood",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get("/food");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState: {
    food: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncFood.pending, (state) => {
      state.loading = true;
      state.food = [];
      state.error = "";
    });

    builder.addCase(getAsyncFood.fulfilled, (state, action) => {
      state.loading = false;
      state.food = action.payload;
      state.error = "";
    });

    builder.addCase(getAsyncFood.rejected, (state, action) => {
      state.loading = false;
      state.food = [];
      state.error = action.payload;
    });
  },
});

export default foodSlice.reducer;
