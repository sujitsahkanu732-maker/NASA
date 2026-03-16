import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const quickLinks = [
  {
    to: '/explore',
    title: 'Explore',
    description: 'Browse NASA images, missions, and discoveries.',
    emoji: '🧭',
  },
  {
    to: '/apod',
    title: 'APOD (Daily Image)',
    description: 'See today’s Astronomy Picture of the Day from NASA.',
    emoji: '🌌',
  },
  {
    to: '/mars',
    title: 'Mars Rover',
    description: 'Track the latest rover photos and mission updates.',
    emoji: '🚀',
  },
  {
    to: '/iss',
    title: 'ISS Tracker',
    description: 'See where the International Space Station is right now.',
    emoji: '🛰️',
  },
  {
    to: '/space-weather',
    title: 'Space Weather',
    description: 'Monitor solar storms, auroras, and more.',
    emoji: '☀️',
  },
  {
    to: '/media',
    title: 'Media Library',
    description: 'Search NASA’s image and video archive.',
    emoji: '📸',
  },
]

function Home() {
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const fetchApod = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
          { signal: controller.signal }
        )
        if (!res.ok) throw new Error('Failed to load APOD')
        const data = await res.json()
        setApod(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('APOD fetch error:', err)
          setError('Unable to load today’s image. Try again later.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchApod()
    return () => controller.abort()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.12),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block text-sm font-semibold tracking-wide text-yellow-400 uppercase mb-4">
              NASA Space Explorer
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Discover the Universe, One Mission at a Time
            </h1>
            <p className="text-gray-300 max-w-xl mb-10">
              Dive into NASA’s latest missions, stunning imagery, and real-time
              data. Start your journey from the International Space Station to
              distant galaxies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              >
                ⚡ Start Exploring
              </Link>
              <Link
                to="/apod"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                🌌 Today’s Picture
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
              <div className="px-6 py-5 bg-black/40">
                <h2 className="text-lg font-semibold text-white">Astronomy Picture of the Day</h2>
                <p className="text-sm text-gray-400">
                  Powered by NASA’s APOD API (DEMO_KEY)
                </p>
              </div>

              {loading ? (
                <div className="px-6 py-20 text-center text-gray-300">
                  Loading today’s image…
                </div>
              ) : error ? (
                <div className="px-6 py-20 text-center text-red-300">
                  {error}
                </div>
              ) : (
                <div className="">
                  {apod?.media_type === 'video' ? (
                    <div className="relative aspect-video">
                      <iframe
                        title="APOD Video"
                        src={apod.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <img
                      src={apod?.url}
                      alt={apod?.title || 'NASA APOD'}
                      className="w-full h-[320px] object-cover"
                    />
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{apod?.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-3">{apod?.explanation}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        to="/apod"
                        className="text-sm font-semibold text-yellow-300 hover:text-yellow-200"
                      >
                        Learn more →
                      </Link>
                      <span className="text-sm text-gray-500">{apod?.date}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-8">Jump to a section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group block rounded-2xl border border-gray-800 bg-gray-900 p-8 hover:border-yellow-400 transition"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-300">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 group-hover:text-yellow-200">
                Explore
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
