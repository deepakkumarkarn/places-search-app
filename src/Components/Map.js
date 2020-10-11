import "ol/ol.css";
import Map from "ol/Map";
import { fromLonLat } from "ol/proj";
import View from "ol/View";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { Draw, Modify, Snap } from "ol/interaction";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { connect } from "react-redux";
import React from "react";

// global so we can remove them later
var draw, snap;
var clickStatus = false;
var drawBtn = document.getElementById("activateDraw");
var raster = new TileLayer({
  source: new OSM(),
});
var view;
var map;

var source = new VectorSource();
var modify = new Modify({ source: source });

var vector = new VectorLayer({
  source: source,
  style: new Style({
    fill: new Fill({
      color: "rgba(255, 0, 0, 0.2)",
    }),
    stroke: new Stroke({
      color: "rgba(255, 0, 0, 1)",
      width: 2,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: "rgba(255, 0, 0, 1)",
      }),
    }),
  }),
});

view = new View({
  center: fromLonLat([79.082, 21.1498]),
  zoom: 12,
});

map = new Map({
  layers: [raster, vector],
  target: "map",
  view: view,
});

map.addInteraction(modify);

function addInteractions() {
  draw = new Draw({
    source: source,
    type: "Circle",
  });
  map.addInteraction(draw);
  snap = new Snap({ source: source });
  map.addInteraction(snap);
}

drawBtn.onclick = () => {
  if (clickStatus) {
    drawBtn.value = "Activate Marker";
    drawBtn.innerHTML = "Activate Marker";
    map.removeInteraction(draw);
    map.removeInteraction(snap);
    clickStatus = false;
  } else {
    drawBtn.value = "Deactivate Marker";
    drawBtn.innerHTML = "Deactivate Marker";
    addInteractions();
    clickStatus = true;
  }
};

const MapComp = (props) => {
  const { center, zoom } = props;
  var size = map.getSize();

  view.fit(fromLonLat(center), {
    padding: [170, 50, 30, 150],
    minResolution: 10,
  });

  view.centerOn(fromLonLat(center), size, [430, 200]);
  view.setZoom(zoom);

  return <React.Fragment></React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    locationDetail: state.location.locationDetail,
    center: state.location.center,
    zoom: state.location.zoom,
  };
};

export default connect(mapStateToProps)(MapComp);
