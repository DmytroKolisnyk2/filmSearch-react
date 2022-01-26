import SlimSelect from "slim-select";
import "slim-select/dist/slimselect.css";
import { changeAxiosRegion, changeAxiosLanguage } from "../services/movieAPI";
import { changeTheme } from "./changeTheme";

export const addSlimSelect = () => {
  new SlimSelect({
    select: "#theme",
    onChange: (info) => {
      localStorage.setItem("find-film-app_theme", info.value);
      changeTheme(info.value);
    },
  });
  new SlimSelect({
    select: "#language",
    onChange: (info) => {
      localStorage.setItem("find-film-app_language", info.value);
      changeAxiosLanguage(info.value);
    },
  });
  new SlimSelect({
    select: "#region",
    onChange: (info) => {
      localStorage.setItem("find-film-app_region", info.value);
      changeAxiosRegion(info.value)
    },
  });
};
