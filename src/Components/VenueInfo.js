import React from "react";
import { connect } from "react-redux";

import "../index.css";

const LocationInfo = (props) => {
  const {
    name,
    administrative,
    type,
    country,
    countryCode,
    latlng,
    postcode,
    population,
    tags,
  } = props.locationDetail;

  const showTags = tags.map((tag, index) => (
    <div className="list-group-item " key={index}>
      {tag}
    </div>
  ));

  return (
    <div className="w-100 p-2 d-flex flex-column">
      <div className="d-flex p-2 justify-content-center align-items-center ">
        <div className="headSectionFont title">{" Location : " + name}</div>
      </div>
      <div className="d-flex separator"></div>
      <div className="d-flex flex-column">
        <div className="headSeactionFont title d-flex  list-group">
          <div className="d-flex list-group-item">{"Type: " + type}</div>
          <div className="d-flex list-group-item">
            {"Administrated By: " + administrative || "Self"}
          </div>
          <div className="d-flex list-group-item">{"Country: " + country}</div>
          <div className="d-flex list-group-item">
            {"Country Code: " + countryCode}
          </div>
          <div className="d-flex list-group-item">
            {"Lat-Lng: " + JSON.stringify(latlng)}
          </div>
          <div className="d-flex list-group-item">
            {"Postcode: " + postcode || "NA"}
          </div>
          <div className="d-flex list-group-item">
            {"Population: " + population}
          </div>
          <div className="d-flex list-group-item list-group">
            {"Search Tag: "}{showTags}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locationDetail: state.location.locationDetail,
  };
};

export default connect(mapStateToProps)(LocationInfo);
