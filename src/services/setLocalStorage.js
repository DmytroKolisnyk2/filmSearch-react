import { changeAxiosRegion, changeAxiosLanguage } from "./movieAPI";
import { changeTheme } from "../plugins/changeTheme";

export const setLocalStorage = () => {
  localStorage.setItem(
    "find-film-app_theme",
    localStorage.getItem("find-film-app_theme") || "Brown theme"
  );
  localStorage.setItem(
    "find-film-app_language",
    localStorage.getItem("find-film-app_language") || "en"
  );
  localStorage.setItem(
    "find-film-app_region",
    localStorage.getItem("find-film-app_region") || "US"
  );
  changeTheme(localStorage.getItem("find-film-app_theme") || "Brown theme");
  changeAxiosLanguage(localStorage.getItem("find-film-app_language") || "en");
  changeAxiosRegion(localStorage.getItem("find-film-app_region") || "US");
};
