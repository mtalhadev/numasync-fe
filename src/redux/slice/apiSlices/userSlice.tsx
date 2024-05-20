import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'userSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: builder => ({
    user: builder.query({
      query: () => '/user',
    }),
  }),
});

// export const { useUserQuery } = userSlice;
