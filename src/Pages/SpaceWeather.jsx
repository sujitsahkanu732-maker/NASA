import { useEffect, useState } from 'react'
import axios from 'axios'

function SpaceWeather() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchAlerts = async () => {
      const res = await axios.get(
        'https://api.nasa.gov/DONKI/notifications',
        {
          params: {
            api_key: 'DEMO_KEY',
          },
        }
      )
      setEvents(res.data.slice(0, 10)) // Top 10 alerts
    }

    fetchAlerts()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">⚠️ Space Weather Alerts</h2>
      <ul className="space-y-4">
        {events.map((e) => (
          <li key={e.messageID} className="bg-gray-800 p-4 rounded shadow">
            <p><strong>Type:</strong> {e.messageType}</p>
            <p><strong>Source:</strong> {e.messageIssueTime}</p>
            <p className="text-sm text-gray-400">{e.messageBody.slice(0, 300)}...</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpaceWeather