import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
interface SearchState {
  searchTerm: string;
}
const initialState: SearchState = {
  searchTerm: "",
};

const searchTerm = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    getSearchTerm(state: any) {
      return state.searchTerm;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTermApi.fulfilled, (state, action) => {
        state.searchTerm = action.payload;
      });
  },
});
export const searchTermApi = createAsyncThunk(
  "searchTerm/fetchSearchTerm",
  async (term: string) => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const API_BASEURL = import.meta.env.VITE_TMDB_BASE_URL;
    const API_OPTIONS = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    const response = await fetch(
      `${API_BASEURL}/search/movie?query=${term}`,
      API_OPTIONS
    );
    const data = await response.json();
    return data;
  }
);
export default searchTerm.reducer;
export const { setSearchTerm, getSearchTerm } = searchTerm.actions;
