import { configureStore } from "@reduxjs/toolkit";
import userSliceReduser from "./userSlice";
import moviesReduser from "./moviesSlice"
import gptReduser from "./gptSlice"
import configReduser from "./configSlice"

const appStore = configureStore({
  reducer: {
    user: userSliceReduser,
    movies: moviesReduser,
    gpt: gptReduser,
    config: configReduser,
  },
});

export default appStore;
