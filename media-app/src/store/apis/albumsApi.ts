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
  tagTypes: ["Album", "UsersAlbums"] as const, // You must add this line
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
          { type: "UsersAlbums" as const, id: user.id },
        ],
      }),
      deleteAlbum: builder.mutation<Album, Album>({
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: (result, error, album) => [
          { type: "Album" as const, id: album.id },
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
        providesTags: (result, error, user) => {
          const tags: (
            | { type: "Album"; id: number }
            | { type: "UsersAlbums"; id: number }
          )[] = [];

          if (result) {
            for (const album of result) {
              tags.push({ type: "Album", id: album.id });
            }
          }

          tags.push({ type: "UsersAlbums", id: user.id });
          return tags;
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;
export { albumsApi };
