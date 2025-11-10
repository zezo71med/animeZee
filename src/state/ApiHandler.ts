import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery=fetchBaseQuery({
    baseUrl:import.meta.env.VITE_TMDB_BASE_URL,
    headers:{
        Authantcation:'Barer 42198749281'
    }
})
