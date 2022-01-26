import { createReducer } from "@reduxjs/toolkit";
import { changeLanguage } from "./language-actions";

export const language = createReducer("", { [changeLanguage.type]: (_, { payload }) => payload });
