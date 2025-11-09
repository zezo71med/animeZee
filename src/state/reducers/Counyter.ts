import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const Counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateCounter(state, action) {
      state.count = state.count +action.payload;
    },
  },
});
export default Counter.reducer;
export const  {updateCounter} = Counter.actions
