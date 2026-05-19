import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {config }from "@/config/config";
import { logout, updateTokens } from "../slice/authSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: config.API_BASE_URL,
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = api.getState().auth.refreshToken;

    if (!refreshToken) {
      api.dispatch(logout());
      return result;
    }

    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
        body: {
          refresh_token: refreshToken,
        },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const { access_token, new_refresh_token } = refreshResult.data;

      api.dispatch(
        updateTokens({
          accessToken: access_token,
          refreshToken: new_refresh_token,
        }),
      );

      // Retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: baseQueryWithReauth,

  tagTypes: [
    "Auth",
    "User",
  ],

  endpoints: () => ({}),
});