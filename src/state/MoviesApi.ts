// import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { getTrendingSearches } from "./../ilb/appwrite";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MoviesApi = createApi({
  reducerPath: "MoviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TMDB_BASE_URL,
    prepareHeaders: (headers) => {
      // const token=localStorage.getItem('token');
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      if (API_KEY) {
        headers.set("Authorization", `Bearer ${API_KEY}`);
      }
      headers.set("accept", "application/json");
      return headers
    },
  }),

  tagTypes: ["Trending"],
  endpoints: (builder) => ({
    getTrending: builder.query({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async queryFn(): Promise<{ data: any } | { error: any }> {
        try {
          const data = await getTrendingSearches();
          console.log("data quyer", data);

          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Trending"],
    }),
    getMovies: builder.query({
      query: () => "/discover/movie?sort_by=popularity.desc",
    }),
    searchMovies: builder.mutation({
      query: (body) => ({
        url: `/search/movie?query=${encodeURIComponent(body)}`,
        method:'GET '
      }),
      invalidatesTags: ["Trending"],
    }),
  }),
});
export const {
  useGetMoviesQuery,
  useSearchMoviesMutation,
  useGetTrendingQuery,
} = MoviesApi;
