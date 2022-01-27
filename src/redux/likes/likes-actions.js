import { createAction } from "@reduxjs/toolkit";

export const addLike = createAction("likes/add");
export const deleteLike = createAction("likes/delete");
