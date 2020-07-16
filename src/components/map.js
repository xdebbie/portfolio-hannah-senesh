import React, { useState } from "react"
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps"
import * as markerData from "../data/marker.json"
import mapStyles from "../data/mapStyles"

function GoogleMaps() {
  const [selectedMarker, setSelectedMarker] = useState(null)
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 59.335, lng: 18.06 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {markerData.features.map(office => (
        <Marker
          key={office.properties.OFFICE_ID}
          position={{
            lat: office.geometry.coordinates[0],
            lng: office.geometry.coordinates[1],
          }}
          onClick={() => {
            setSelectedMarker(office)
          }}
          icon={{
            url: "/marker.svg",
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      ))}

      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.geometry.coordinates[0],
            lng: selectedMarker.geometry.coordinates[1],
          }}
          onCloseClick={() => {
            setSelectedMarker(null)
          }}
        >
          <div>
            <h3>{selectedMarker.properties.NAME}</h3>
            <p>{selectedMarker.properties.ADDRESS}</p>
            <p>{selectedMarker.properties.NOTES}</p>
            <p>{selectedMarker.properties.FACILITY}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps))

export default function Map() {
  return (
    <div className="map">
      <div style={{ width: "800px", height: "400px" }}>
        <WrappedMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_KEY}`}
          loadingElement={<div style={{ height: "400px" }} />}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "400px" }} />}
        />
      </div>
    </div>
  )
}
