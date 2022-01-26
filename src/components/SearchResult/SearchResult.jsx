import "./SearchResult.scss";
import React, { useEffect } from "react";
import addTippy from "../../plugins/tippy";

import CardContainer from "./CardContainer/CardContainer";
import GoBackBtn from "../GoBackBtn/GoBackBtn";

export default function SearchResult({ requestData, isLoading }) {
  useEffect(() => requestData.length > 0 && addTippy(), [requestData]);

  return (
    <>
      {!isLoading && <GoBackBtn additionalClass="search-result__back-btn" />}
      <CardContainer isLoading={isLoading} requestData={requestData} />
    </>
  );
}
