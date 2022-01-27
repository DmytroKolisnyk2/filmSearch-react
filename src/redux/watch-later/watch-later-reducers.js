import { createReducer } from "@reduxjs/toolkit";
import { addWatchLater, deleteWatchLater } from "./watch-later-actions";

export const watchLater = createReducer([], {
  [addWatchLater.type]: (state, { payload }) => [...state, payload],
  [deleteWatchLater.type]: (state, { payload }) => [...state.filter((item) => item !== payload)],
});
