import { configureStore } from '@reduxjs/toolkit';
import SearchTermReducer from './reducers/searchTerm.ts';
import CounterReducer from './reducers/Counyter.ts'
export const store=configureStore({
    reducer:{
        searchTerm: SearchTermReducer,
        counter:CounterReducer
    }
})



export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;