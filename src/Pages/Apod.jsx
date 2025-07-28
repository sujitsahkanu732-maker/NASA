import { useEffect, useState } from 'react'
import axios from 'axios'

function Apod() {
  const [apodData, setApodData] = useState(null)

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const res = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`
        )
        setApodData(res.data)
      } catch (err) {
        console.error('Failed to fetch APOD:', err)
      }
    }

    fetchApod()
  }, [])

  return (
    <div className="p-6">
      {apodData ? (
        <>
          <h2 className="text-3xl font-bold mb-2">{apodData.title}</h2>
          <img src={apodData.url} alt="APOD" className="rounded-lg" />
          <p className="mt-4">{apodData.explanation}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Apod