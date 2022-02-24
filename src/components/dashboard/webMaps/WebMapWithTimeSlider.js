/* import React from "react";
import { useWebMap } from "esri-loader-hooks";
import { loadCss } from 'esri-loader';
// import TimeSlider from "@arcgis/core/widgets/TimeSlider";
// import TimeSliderMap from 

// hooks allow us to create a map component as a function
function WebMapWithTimeSlider({ id }) {
  // this custom hook takes an item id and
  // returns a ref you can use to assign a container DOM node
  loadCss();
  const [ref] = useWebMap(id);
  const timeSlider = new TimeSlider({
    container: "timeSlider",
    timeVisible: true, // show the time stamps on the timeslider
    loop: true
  });
  return (
      <div style={{ height: 400 }} ref={ref} />
  )
}

export default WebMapWithTimeSlider; */

