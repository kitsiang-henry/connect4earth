import React, { useEffect, useRef } from 'react'
import { loadModules } from 'esri-loader'

// esriConfig.apiKey = 'AAPK52a2218177464794957bed6489d23817aRlx7XGjKBSnWV5riFXKDxEHj5TO2cnMsmfNi8YdQtWqE0zQ1U3d299TAwZiDvEU';

const AnotherTestMap = () => {
    const MapEl=useRef(null)
    useEffect(
        ()=>{
            let view

            loadModules(["esri/views/MapView", "esri/WebMap", "esri/Map"], {
                css:true
            }).then(([MapView, WebMap])=>{
                const webmap= new WebMap({
                    basemap: 'arcgis-topographic'
                })
                view= new MapView({
                    map: webmap,
                    center: [],
                    zoom:8,
                    // use ref as a container
                    container: MapEl.current

                })

            })
            
            return()=> {
                // close the map view
                if (!!view) {
                    view.destroy()
                    view=null
                }
            }
            }
    , [])

    return (
        <div style={{height:800, width:800}} ref={MapEl}>
        </div>
    )
}

// function BaseMap() {
//     const MapEl=useRef(null)


//     useEffect(
//         ()=>{
//             let view

//         loadModules(["esri/views/MapView", "esri/WebMap"], {
//             css:true
//         }).then(([MapView, WebMap])=>{
//             const webmap= new WebMap({
//                 basemap: 'arcgis-topographic'
//             })
//             view= new MapView({
//                 map: webmap,
//                 center: [],
//                 zoom:8,
//                 // use ref as a container
//                 container: MapEl.current

//             })

//         })
        
//         return()=> {
//             // close the map view
//             if (!!view) {
//                 view.destroy()
//                 view=null
//             }
//         }
//         })
//     return(
//         <div style={{height:800, width:800}} ref={MapEl}>
//         </div>
//     )
// }

export default AnotherTestMap;
