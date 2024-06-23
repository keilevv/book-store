// In your store.js or a new authSlice.js file
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    readingList: [],
    availableBooks: [],
    tab: 0,
    categories: [],
  },
  reducers: {
    setReadingList: (state, action) => {
      state.readingList = action.payload;
    },
    setAvailableBooks: (state, action) => {
      state.availableBooks = action.payload;
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setReadingList, setAvailableBooks, setTab, setCategories } =
  appSlice.actions;
  
export default appSlice.reducer;
