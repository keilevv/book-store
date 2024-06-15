// In your store.js or a new authSlice.js file
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    readingList: [],
    availableBooks: [],
    tab: "all",
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
  },
});

export const { setReadingList, setAvailableBooks, setTab } = appSlice.actions;
export default appSlice.reducer;
