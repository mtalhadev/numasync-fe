import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginSchemaType } from 'src/schema/login.schema';
import { RefreshTokenType } from 'src/types/commonTypes';
import { getCookie } from 'src/utils/cookie';

export const authSlice = createApi({
  reducerPath: 'authSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: headers => {
      const token = getCookie('numassync_token');
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      if (token) {
        headers.set('x-auth-token', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: (body: loginSchemaType) => ({
        url: '/auth/login',
        method: 'POST',
        body: body,
      }),
    }),

    me: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
    }),

    refreshToken: builder.mutation({
      query: (body: RefreshTokenType) => ({
        url: '/auth/session/refresh',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useRefreshTokenMutation } =
  authSlice;
