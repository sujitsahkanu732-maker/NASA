import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import axios from 'axios'

const icon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
  iconSize: [40, 40],
})

function ISSMap() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    const fetchISS = async () => {
      const res = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      setPosition({ lat: res.data.latitude, lng: res.data.longitude })
    }
    fetchISS()
    const interval = setInterval(fetchISS, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">🌍 ISS Tracker (Map)</h2>
      <MapContainer center={[position.lat, position.lng]} zoom={2} scrollWheelZoom className="h-[500px] w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[position.lat, position.lng]} icon={icon}>
          <Popup>
            ISS Current Location<br />Lat: {position.lat.toFixed(2)}, Lng: {position.lng.toFixed(2)}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default ISSMap