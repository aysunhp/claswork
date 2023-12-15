import { configureStore } from "@reduxjs/toolkit";
import humanReducer from "../slices/humanSlice";

export const store = configureStore({
  reducer: {
    human: humanReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
