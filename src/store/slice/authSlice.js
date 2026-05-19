import { createSlice } from "@reduxjs/toolkit";

const storedAuth = localStorage.getItem("auth");

const parsedAuth = storedAuth ? JSON.parse(storedAuth) : null;

const initialState = {
  accessToken: parsedAuth?.accessToken ?? null,

  refreshToken: parsedAuth?.refreshToken ?? null,

  isAuthenticated: parsedAuth?.isAuthenticated ?? false,

  user: parsedAuth?.user ?? null,

  isAdmin: parsedAuth?.isAdmin ?? false,

  isStaff: parsedAuth?.isStaff ?? false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.access_token;

      state.refreshToken = action.payload.refresh_token;

      state.user = {
        id: action.payload.id,

        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,

        email_verified: action.payload.email_verified,
      };

      // IMPORTANT FIX
      state.isAuthenticated = action.payload.email_verified;

      state.isAdmin = action.payload.role === "admin";

      state.isStaff = false;

      localStorage.setItem("auth", JSON.stringify(state));
    },

    updateTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;

      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem("auth", JSON.stringify(state));
    },

    setEmailVerified: (state) => {
      if (state.user) {
        state.user.email_verified = true;
      }

      state.isAuthenticated = true;

      localStorage.setItem("auth", JSON.stringify(state));
    },

    logout: (state) => {
      state.accessToken = null;

      state.refreshToken = null;

      state.user = null;

      state.isAuthenticated = false;

      state.isAdmin = false;

      state.isStaff = false;

      localStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, updateTokens, logout, setEmailVerified } =
  authSlice.actions;

export default authSlice.reducer;
