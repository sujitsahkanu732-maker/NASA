import { useEffect, useState } from 'react'
import axios from 'axios'

function Apod() {
  const [apod, setApod] = useState(null)

  useEffect(() => {
    const fetchApod = async () => {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      )
      setApod(res.data)
    }
    fetchApod()
  }, [])

  if (!apod) return <div className="text-center mt-10">Loading...</div>

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{apod.title}</h2>
      <img
        src={apod.url}
        alt={apod.title}
        className="max-w-full mx-auto rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg">{apod.explanation}</p>
      <p className="mt-2 text-sm text-gray-400">Date: {apod.date}</p>
    </div>
  )
}

export default Apod