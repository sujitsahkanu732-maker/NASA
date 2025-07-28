import { useEffect, useState } from 'react'
import axios from 'axios'

function SpaceWeather() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await axios.get('https://api.nasa.gov/DONKI/notifications', {
          params: {
            api_key: 'DEMO_KEY',
          },
        })
        setEvents(res.data.slice(0, 10))
      } catch (err) {
        console.error('Error fetching space weather alerts:', err)
      }
    }

    fetchAlerts()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">
        ⚠️ Space Weather Alerts
      </h2>

      <ul className="space-y-6 max-w-4xl mx-auto">
        {events.map((e) => (
          <li
            key={e.messageID}
            className="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition"
          >
            <div className="mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold text-yellow-300">
                {e.messageType}
              </h3>
              <p className="text-sm text-gray-400 mt-2 sm:mt-0">
                Issued: {new Date(e.messageIssueTime).toLocaleString()}
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {e.messageBody.length > 300
                ? `${e.messageBody.slice(0, 300)}...`
                : e.messageBody}
            </p>
          </li>
        ))}
      </ul>

      {events.length === 0 && (
        <p className="text-center mt-8 text-gray-400 text-lg animate-pulse">
          Fetching the latest solar alerts from NASA...
        </p>
      )}
    </div>
  )
}

export default SpaceWeather
