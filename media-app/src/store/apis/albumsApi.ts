import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import type { Album, User } from "../../types/media";
import { pause } from "../../utils/pause";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  tagTypes: ["Album"], // You must add this line
  endpoints: (builder) => {
    return {
      addAlbum: builder.mutation<Album, User>({
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
        invalidatesTags: (result, error, user) => [
          { type: "Album", id: user.id },
        ],
      }),
      fetchAlbums: builder.query<Album[], User>({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
        providesTags: (result, error, user) => [
          { type: "Album", id: user.id }, // Correct structure
        ],
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
