import { configureStore } from '@reduxjs/toolkit';
import SearchTermReducer from './reducers/searchTerm.ts';
import CounterReducer from './reducers/Counyter.ts'
import { MoviesApi } from './MoviesApi.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
export const store=configureStore({
    reducer:{
        searchTerm: SearchTermReducer,
        counter:CounterReducer,
        [MoviesApi.reducerPath]:MoviesApi.reducer
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviesApi.middleware),        

})


setupListeners(store.dispatch)
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;