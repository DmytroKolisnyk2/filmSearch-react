import "./SearchResult.scss";
import React, { useEffect } from "react";
import addTippy from "../../plugins/tippy";

import CardContainer from "./CardContainer/CardContainer";

export default function SearchResult({ requestData, isLoading }) {
  useEffect(() => requestData.length > 0 && addTippy(), [requestData]);

  return (
   <CardContainer isLoading={isLoading} requestData={requestData} />
  );
}
