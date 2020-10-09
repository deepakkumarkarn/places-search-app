import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "./../../actions";
import "./Map.css";
import MapContext from "./MapContext";

//Todo: Rough class for the openlayer map
const Map = ({ children, zoom, center }) => {
	const mapRef = useRef();
	const [map, setMap] = useState(null);

	// on component mount
	useEffect(() => {
		let options = {
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: []
		};

		let mapObject = new ol.Map(options);
		mapObject.setTarget(mapRef.current);
		setMap(mapObject);

		return () => mapObject.setTarget(undefined);
	}, []);

	// zoom change handler
	useEffect(() => {
		if (!map) return;

		map.getView().setZoom(zoom);
	}, [zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return; 

		map.getView().setCenter(center)
	}, [center])

	return (
		<MapContext.Provider value={{ map }}>
			<div ref={mapRef} className="ol-map">
				{children}
			</div>
		</MapContext.Provider>
	)
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.location.currentLocation,
    zoom: state.location.zoom,
    venues: state.venue.venueDetail,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);