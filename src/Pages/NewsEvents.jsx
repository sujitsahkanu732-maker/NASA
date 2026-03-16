import { motion } from 'framer-motion'

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function NewsEvents() {
  const newsItems = [
    {
      category: 'ASTRONOMY',
      date: 'Jan 28, 2026',
      title: 'James Webb Captures First Images of Ancient Galaxy',
      description: 'New observations reveal galaxies formed just 300 million years after the Big Bang, challenging our understanding of early universe formation.',
      image: 'from-orange-500 to-red-600',
    },
    {
      category: 'EXPLORATION',
      date: 'Jan 26, 2026',
      title: 'NASA Plans Next Mars Mission for 2030',
      description: 'The Artemis program aims to establish a sustainable presence on Mars with advanced rovers and habitat systems.',
      image: 'from-red-600 to-orange-500',
    },
    {
      category: 'RESEARCH',
      date: 'Jan 24, 2026',
      title: 'ISS Completes Critical Life Support Upgrade',
      description: 'International Space Station receives upgraded environmental systems for extended missions and expanded crew capacity.',
      image: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'TECHNOLOGY',
      date: 'Jan 22, 2026',
      title: 'New Satellite Technology Tracks Climate Change',
      description: 'Revolutionary imaging satellite provides unprecedented data on global temperature changes and weather patterns.',
      image: 'from-green-500 to-teal-600',
    },
    {
      category: 'DISCOVERY',
      date: 'Jan 20, 2026',
      title: 'Potential Signs of Ancient Microbial Life on Mars',
      description: 'Curiosity Rover discovers organic molecules and methane fluctuations suggesting possible biological signatures.',
      image: 'from-purple-600 to-pink-600',
    },
    {
      category: 'MISSION UPDATE',
      date: 'Jan 18, 2026',
      title: 'Parker Solar Probe Approaches Sun Closer Than Ever',
      description: 'The spacecraft breaks its own record, venturing closer to the Sun\'s corona for unprecedented measurements.',
      image: 'from-yellow-500 to-orange-600',
    },
  ]

  const upcomingEvents = [
    {
      title: 'Virtual Moon Walk Tour',
      date: 'Feb 1, 2026',
      time: '2:00 PM EST',
      icon: '🌙',
    },
    {
      title: 'ISS Flyover Watch Party',
      date: 'Feb 5, 2026',
      time: '6:30 PM EST',
      icon: '🚀',
    },
    {
      title: 'Space Science Live Webinar',
      date: 'Feb 10, 2026',
      time: '3:00 PM EST',
      icon: '🔭',
    },
    {
      title: 'Astrobiology Q&A Session',
      date: 'Feb 15, 2026',
      time: '4:00 PM EST',
      icon: '👨‍🚀',
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
        <div className="relative max-w-4xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-yellow-400 font-semibold tracking-widest text-sm uppercase mb-4">
              Stay Updated
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              News & Events
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Latest updates from NASA missions, space discoveries, and upcoming events to explore the cosmos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12"
        >
          Latest News
        </motion.h2>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {newsItems.map((news, idx) => (
            <motion.article
              key={idx}
              variants={cardAnimation}
              whileHover={{ x: 10 }}
              className="bg-gray-900 border border-gray-700 hover:border-yellow-400 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 p-6 transition cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${news.image} rounded-lg hidden md:block group-hover:scale-105 transition`}></div>
              
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs text-yellow-400 font-bold uppercase tracking-widest">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {news.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition">
                  {news.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {news.description}
                </p>
                
                <a href="#" className="text-yellow-400 font-semibold hover:text-yellow-300 transition inline-flex items-center gap-2">
                  Read Full Article →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12"
          >
            Upcoming Events
          </motion.h2>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                variants={cardAnimation}
                whileHover={{ y: -10, boxShadow: '0 15px 35px rgba(250, 204, 21, 0.15)' }}
                className="bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg p-6 transition cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">
                  {event.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-yellow-300 transition">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    📅 {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    🕐 {event.time}
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded transition"
                >
                  Register
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Never Miss an Update
          </h2>
          <p className="text-black/80 text-lg mb-8">
            Subscribe to our newsletter for the latest news and event announcements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-yellow-400 font-bold py-3 px-10 rounded-lg hover:bg-gray-900 transition shadow-lg"
          >
            Subscribe Now
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}

export default NewsEvents
