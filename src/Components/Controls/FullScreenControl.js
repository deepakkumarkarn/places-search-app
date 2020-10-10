import { useContext, useEffect } from "react";
import { FullScreen } from "ol/control";
import MapContext from "../Map/MapContext";
import ZoomSlider from 'ol/control/ZoomSlider';

export const FullScreenControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let fullScreenControl = new FullScreen({});

		map.controls.push(fullScreenControl);

		return () => map.controls.remove(fullScreenControl);
	}, [map]);

	return null;
};

export const ZoomControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;
		let zoomSliderControl = new ZoomSlider();
		map.controls.push(zoomSliderControl);

		return () => map.controls.remove(zoomSliderControl);
	}, [map]);

	return null;
}