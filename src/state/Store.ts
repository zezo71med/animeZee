import { configureStore } from '@reduxjs/toolkit';
import SearchTermReducer from './reducers/searchTerm.ts';
import CounterReducer from './reducers/Counyter.ts'
import { apiHandler } from './ApiHandler.ts';
import loggerMiddleware from '../middleware.ts';
export const store=configureStore({
    reducer:{
        searchTerm: SearchTermReducer,
        counter:CounterReducer,
        [apiHandler.reducerPath]:apiHandler.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
        

})



export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;