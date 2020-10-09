import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fromLonLat, get } from "ol/proj";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";

import "../index.css";
 
import PlacesInput from "./PlacesInput";
// import LocationInfo from "./VenueInfo";
import LocationChart from "./LocationChart";

import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { osm, vector } from "../Source";
import { Controls, FullScreenControl } from "./Controls";


// import "openlayers/css/ol.cs";
import "ol/css";

let styles = {
  Point: new Style({
    image: new CircleStyle({
      radius: 100,
      fill: null,
      stroke: new Stroke({
        color: "rgba(255, 0, 0, 0.1)",
      }),
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: "blue",
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  }),
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "blue",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  }),
};

const geojsonObject = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        kind: "county",
        name: "Wyandotte",
        state: "KS",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-94.8627, 39.202],
              [-94.901, 39.202],
              [-94.9065, 38.9884],
              [-94.8682, 39.0596],
              [-94.6053, 39.0432],
              [-94.6053, 39.1144],
              [-94.5998, 39.1582],
              [-94.7422, 39.1691],
              [-94.7751, 39.202],
              [-94.8627, 39.202],
            ],
          ],
        ],
      },
    },
  ],
};

const App = (props) => {
  //Todo: Add the graph Feature
  const { locationDetail, center, zoom, showLayer1 } = props;

  // const showLocationInfo = () => {
  //   //Todo: Make it work like toggle button for sidenav
  //   const sideBar = (
  //     <Fragment>
  //       <div className={"d-flex venueContainer"}>
  //         <LocationInfo />
  //       </div>
  //     </Fragment>
  //   );
  //   return sideBar;
  // };

  const showGraphicCategorization = () => {
    //Todo: Make it work like toggle button for sidenav
    const sideBar = (
      <Fragment>
        <div className={"d-flex h-100 venueContainer"}>
          <LocationChart />
        </div>
      </Fragment>
    );
    return sideBar;
  };

  return (
    <div className="App w-100 d-flex flex-row">
      <div
        className={
          "d-flex h-100 flex-column p-2 " +
          (Object.keys(locationDetail).length === 0 ? "w-100" : "mainConatiner")
        }
      >
        <div className="d-flex align-items-center w-100 justify-content-center p-2 h-75">
          <div>
            <Map center={fromLonLat(center)} zoom={zoom}>
              <Layers>
                <TileLayer source={osm()} zIndex={0} />
                {showLayer1 && (
                  <VectorLayer
                    source={vector({
                      features: new GeoJSON().readFeatures(geojsonObject, {
                        featureProjection: get("EPSG:3857"),
                      }),
                    })}
                    style={styles.Point}
                  />
                )}
              </Layers>
              <Controls>
                <FullScreenControl />
              </Controls>
            </Map>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <PlacesInput />
        </div>
      </div>
      {showGraphicCategorization()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locationDetail: state.location.locationDetail,
    center: [-94.8627, 39.202],
    zoom: 12,
    showLayer1: true,
  };
};

export default connect(mapStateToProps)(App);
