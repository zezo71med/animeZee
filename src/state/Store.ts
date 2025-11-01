import { configureStore } from '@reduxjs/toolkit';
import SearchTermReducer from './search/searchTerm.ts';
export const store=configureStore({
    reducer:{
        searchTerm: SearchTermReducer
    }
})



export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;