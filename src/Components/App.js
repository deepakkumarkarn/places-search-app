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
              [78.082, 20.1498],
              [75.082, 18.1498],
              [79.082, 21.1498],
            ],
          ],
        ],
      },
    },
  ],
};

const App = (props) => {
  //Todo: Add the graph Feature
  const { center, zoom, showLayer } = props;

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
      <div className="d-flex h-100 flex-column w-100">
        <div className="d-flex align-items-center w-100 justify-content-center p-2 h-75">
            <Map center={fromLonLat(center)} zoom={zoom}>
              <Layers>
                <TileLayer source={osm()} zIndex={props.zIndex} />
                {showLayer && (
                  <VectorLayer
                    source={vector({
                      features: new GeoJSON().readFeatures(geojsonObject, {
                        featureProjection: get("EPSG:3857"),
                      }),
                    })}
                    style={styles.MultiPolygon}
                  />
                )}
              </Layers>
              <Controls>
                <FullScreenControl />
              </Controls>
            </Map>
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
    center: state.location.center,
    zoom: state.location.zoom,
    showLayer: false,
    zIndex: 0,
  };
};

export default connect(mapStateToProps)(App);
