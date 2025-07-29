import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../../utils/pause";
import type { Album, Photo } from "../../types/media";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  tagTypes: ["Photo", "AlbumPhotos"] as const, // You must add this line
  endpoints: (builder) => {
    return {
      addPhoto: builder.mutation<Photo, Album>({
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.url({ width: 150, height: 150 }),
            },
          };
        },
        invalidatesTags: (result, error, album) => [
          { type: "AlbumPhotos" as const, id: album.id },
        ],
      }),
      deletePhoto: builder.mutation<Photo, Photo>({
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: (result, error, photo) => [
          { type: "Photo" as const, id: photo.id },
        ],
      }),
      fetchPhotos: builder.query<Photo[], Album>({
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
        providesTags: (result, error, album) => {
          const tags: (
            | { type: "Photo"; id: number }
            | { type: "AlbumPhotos"; id: number }
          )[] = [];

          if (result) {
            for (const photo of result) {
              tags.push({ type: "Photo", id: photo.id });
            }
          }

          tags.push({ type: "AlbumPhotos", id: album.id });
          return tags;
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;

export { photosApi };
