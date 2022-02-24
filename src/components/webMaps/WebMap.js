import React from "react";
import { useWebMap } from "esri-loader-hooks";
import { loadCss } from 'esri-loader';

// hooks allow us to create a map component as a function
function WebMap({ id }) {
  // this custom hook takes an item id and
  // returns a ref you can use to assign a container DOM node
  loadCss();
  const [ref] = useWebMap(id);
  return (
      <div style={{ height: 400 }} ref={ref} />
  )
}

export default WebMap;
