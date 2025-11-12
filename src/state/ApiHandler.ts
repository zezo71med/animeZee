import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiHandler = createApi({

    reducerPath: 'apiHandler',

    baseQuery: fetchBaseQuery({

        baseUrl: import.meta.env.VITE_TMDB_BASE_URL,

        prepareHeaders: (headers) => {

            const token = localStorage.getItem('token');

            if (token) {

                headers.set('Authorization', `Bearer ${token}`);

            }

            return headers;

        }

    }),

    endpoints: (builder) => ({

        login: builder.mutation({

            query: (userData) => ({

                url: 'auth/login',

                method: 'POST',

                body: userData,

            }),

        }),

        fetchUserProfile: builder.query({

            query: () => 'user/profile',

        }),

    }),

});

export const { useLoginMutation, useFetchUserProfileQuery } = apiHandler;