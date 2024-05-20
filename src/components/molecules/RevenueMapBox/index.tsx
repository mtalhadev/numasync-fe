import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RevenueMapBox = () => {
  const markers = [
    {
      lat: -37.8136,
      lng: 144.9631,
      title: 'Melbourne, AUS',
      url: 'https://untitledui.com/pricing',
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      title: 'London, UK',
      url: 'https://untitledui.com/pricing',
    },
    {
      lat: 40.7128,
      lng: -74.006,
      title: 'New York, USA',
      url: 'https://untitledui.com/pricing',
    },
    {
      lat: 34.0522,
      lng: -118.2437,
      title: 'Los Angeles, USA',
      url: 'https://untitledui.com/pricing',
    },
  ];

  return (
    <MapContainer
      center={[-25.2744, 133.7751]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
      attributionControl={false}
      maxBounds={[
        [-90, -180 * 10],
        [90, 180 * 10],
      ]}
      markerZoomAnimation={true}
      maxZoom={18}
      minZoom={2}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <CircleMarker
          key={index}
          center={[marker.lat, marker.lng]}
          radius={10} // Vary size as needed
          fillOpacity={0.5}
          stroke={false}
          fillColor="#2A81CB" // Your choice of color
        >
          <Popup>
            <div className="custom-popup">
              <h2>{marker.title}</h2>
              <a href={marker.url}>{marker.url}</a>
            </div>
          </Popup>
        </CircleMarker>
      ))}
      {/* Your SVG or PNG pattern overlay here */}
    </MapContainer>
  );
};

export default RevenueMapBox;
