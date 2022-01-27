import { createReducer } from "@reduxjs/toolkit";
import { addLike, deleteLike } from "./likes-actions";

export const likes = createReducer([], {
  [addLike.type]: (state, { payload }) => [...state, payload],
  [deleteLike.type]: (state, { payload }) => [...state.filter((item) => item !== payload)],
});
