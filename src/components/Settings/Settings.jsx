import React, { useEffect, useState } from "react";
import { searchCountries, searchLang } from "../../services/movieAPI";
import { themeStyles } from "../../plugins/changeTheme";

import { addSlimSelect } from "../../plugins/slim-select";
import "./Settings.scss";

import Modal from "../Modal/Modal";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const Settings = ({ closeSettings }) => {
  const [countriesData, setCountriesData] = useState({});
  const [languageData, setLanguageData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const findCountryAndLang = async () => {
    const langResult = await searchLang()
      .then(({ data }) => setLanguageData(data))
      .catch(() => setError("Opps, something went wrong"));

    const countryResult = await searchCountries()
      .then(({ data }) => setCountriesData(data))
      .catch(() => setError("Opps, something went wrong"));
    Promise.all([langResult, countryResult]).then(() => {
      setIsLoading(false);
      document.querySelector("#language").value = localStorage.getItem("find-film-app_language");
      document.querySelector("#theme").value = localStorage.getItem("find-film-app_theme");
      document.querySelector("#region").value = localStorage.getItem("find-film-app_region");
      addSlimSelect();
    });
  };

  useEffect(() => {
    setIsLoading(true);
    findCountryAndLang();
  }, []);

  return (
    <Modal onClick={() => closeSettings(false)}>
      {error && <h2 className="main__error">{error}</h2>}
      {isLoading || error ? (
        !error && <SpinnerLoader />
      ) : (
        <section className="settings">
          <h2 className="settings__headline">Settings</h2>
          <div className="settings__wrapper">
            <div className="settings__content-wrapper">
              <h3 className="settings__caption">
                <i className="material-icons material-icons--lang">translate</i>Language
              </h3>
              <select className="settings__select" name="language" id="language">
                {languageData.map((item) => (
                  <option key={item.iso_639_1} value={item.iso_639_1}>
                    {item.english_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="settings__content-wrapper">
              <h3 className="settings__caption">
                <i className="material-icons">palette</i>Theme
              </h3>
              <select className="settings__select" name="theme" id="theme">
                {Object.keys(themeStyles).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h3 className="settings__caption">
            <i className="material-icons">public</i>
            Region
          </h3>
          <select className="settings__select settings__select--region" name="region" id="region">
            {countriesData.map((item) => (
              <option key={item.iso_3166_1} value={item.iso_3166_1}>
                {item.native_name}
              </option>
            ))}
          </select>
        </section>
      )}
    </Modal>
  );
};

export default Settings;
