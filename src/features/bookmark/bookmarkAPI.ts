import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Bookmark = {
  id: string;
  title: string;
  location: string;
  image: string;
};


export const bookmarkAPI = createApi({
  reducerPath: "bookmarkAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }), 
  tagTypes: ["Bookmark"],
  endpoints: (builder) => ({
    getBookmarks: builder.query<Bookmark[], void>({
      query: () => "bookmarks",
      providesTags: ["Bookmark"],
    }),
    addBookmark: builder.mutation<Bookmark, Bookmark>({
      query: (bookmark) => ({
        url: "bookmarks",
        method: "POST",
        body: bookmark,
      }),
      invalidatesTags: ["Bookmark"],
    }),
    deleteBookmark: builder.mutation<void, string>({
      query: (id) => ({
        url: `bookmarks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bookmark"],
    }),
  }),
});

export const {
  useGetBookmarksQuery,
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
} = bookmarkAPI;
