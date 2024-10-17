import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Lokasi default
const position = [1.0456, 104.0305]; // Batam

const customIcon = () => {
  const iconUrl = "/marker-icon.png";
  return L.icon({
    iconUrl: iconUrl,
    iconSize: [30, 30],
  });
};

function LeafletMap() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      // style={{ height: "400px", width: "100%" }}
      className="h-[200px] md:h-full w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={customIcon()} position={position}>
        <Popup>Batam, Indonesia</Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMap;
