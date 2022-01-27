import React from "react";

import ContentLoader from "../../../components/ContentLoader/ContentLoader";
import Card from "../../Card/Card";

export default function CardContainer({ requestData, isLoading }) {
  return (
    <div className="search-result__card-container">
      {requestData.length > 0 &&
        requestData.map((item) => <Card key={item.id} enableBtn item={item} imgWidth={400} />)}
      {isLoading && <ContentLoader count={10} />}
    </div>
  );
}
