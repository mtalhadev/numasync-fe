import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetAllQueryParams } from 'src/types/commonTypes';
import { getCookie } from 'src/utils/cookie';

export const entitySlice = createApi({
  reducerPath: 'entitySlice',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: headers => {
      const token = getCookie('numassync_token');
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getAllEntity: builder.query({
      query: ({ page, limit }: GetAllQueryParams) => ({
        url: `/entities?page=${page}&limit=${limit}&orderDirection=DESC`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllEntityQuery } = entitySlice;
