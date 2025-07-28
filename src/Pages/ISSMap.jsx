import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import axios from 'axios'

// Custom ISS icon
const icon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
})

// Component to recenter the map on update
function RecenterMap({ lat, lng }) {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng], map.getZoom(), {
      animate: true,
      duration: 1,
    })
  }, [lat, lng])
  return null
}

function ISSMap() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 })
  const [altitude, setAltitude] = useState(0)
  const [velocity, setVelocity] = useState(0)

  useEffect(() => {
    const fetchISS = async () => {
      try {
        const res = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        const { latitude, longitude, altitude, velocity } = res.data
        setPosition({ lat: latitude, lng: longitude })
        setAltitude(altitude)
        setVelocity(velocity)
      } catch (err) {
        console.error('Failed to fetch ISS data:', err)
      }
    }

    fetchISS()
    const interval = setInterval(fetchISS, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-purple-900 text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-300">
        🛰 Real-Time ISS Tracker Map
      </h2>

      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl border border-indigo-800">
        <MapContainer
          center={[position.lat, position.lng]}
          zoom={3}
          scrollWheelZoom={true}
          className="h-[500px] w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[position.lat, position.lng]} icon={icon}>
            <Popup className="text-sm text-center">
              🛰 ISS Current Location<br />
              <strong>Lat:</strong> {position.lat.toFixed(2)}<br />
              <strong>Lng:</strong> {position.lng.toFixed(2)}
            </Popup>
          </Marker>
          <RecenterMap lat={position.lat} lng={position.lng} />
        </MapContainer>
      </div>

      {/* Real-Time Data Panel */}
      <div className="mt-6 text-center text-lg space-y-2">
        <p className="text-teal-300">
          🌐 <strong>Latitude:</strong> {position.lat.toFixed(2)}°
        </p>
        <p className="text-teal-300">
          🌐 <strong>Longitude:</strong> {position.lng.toFixed(2)}°
        </p>
        <p className="text-yellow-300">
          🛸 <strong>Altitude:</strong> {altitude.toFixed(2)} km
        </p>
        <p className="text-yellow-300">
          🚀 <strong>Velocity:</strong> {velocity.toFixed(2)} km/h
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Updates every 5 seconds with live satellite data.
        </p>
      </div>
    </div>
  )
}

export default ISSMap
