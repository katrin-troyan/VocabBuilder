import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type AuthState = {
  user: null | { name: string; email: string };
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    payload: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (payload.email === "error@example.com") {
        return thunkAPI.rejectWithValue("Email вже використовується");
      }

      return {
        token: "mock-token",
        name: payload.name,
        email: payload.email,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue("Server error");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (payload.email === "error@example.com") {
        return thunkAPI.rejectWithValue("Невірний email або пароль");
      }

      return {
        token: "mock-token-login",
        name: "User Name",
        email: payload.email,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue("Server error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
