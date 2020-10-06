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

  const showTags = tags.map((tag) => <div className="d-flex ">{tag}</div>);

  return (
    <div className="w-100 p-2 d-flex flex-column">
      <div className="d-flex p-2 justify-content-center align-items-center ">
        <div className="headSectionFont title">{" Location : " + name}</div>
      </div>
      <div class="d-flex separator"></div>
      <div className="d-flex flex-column">
        <div className="headSeactionFont title p-2 d-flex">Basic Details:</div>
        <div className="d-flex flex-column p-3">
          <div className="d-flex">{"Type: " + type}</div>
          <div className="d-flex">
            {"Administrated By: " + administrative || "Self"}
          </div>
          <div className="d-flex">{"Country: " + country}</div>
          <div className="d-flex">{"Country Code: " + countryCode}</div>
          <div className="d-flex">{"Lat-Lng: " + JSON.stringify(latlng)}</div>
          <div className="d-flex">{"Postcode: " + postcode || "NA"}</div>
          <div className="d-flex">{"Population: " + population}</div>
          <div className="d-flex">{"Search Tag: "}</div>
          <div className="p-2">{showTags}</div>
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
