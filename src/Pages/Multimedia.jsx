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

function Multimedia() {
  const mediaTypes = [
    {
      icon: '📸',
      title: 'Images',
      description: 'Browse thousands of high-resolution space images',
      count: '50,000+',
    },
    {
      icon: '🎥',
      title: 'Videos',
      description: 'Watch documentaries and educational content',
      count: '2,500+',
    },
    {
      icon: '🎵',
      title: 'Audio',
      description: 'Listen to space sounds and podcasts',
      count: '500+',
    },
    {
      icon: '🗂️',
      title: 'Collections',
      description: 'Curated galleries organized by theme',
      count: '200+',
    },
    {
      icon: '🎨',
      title: 'Infographics',
      description: 'Data visualizations and scientific diagrams',
      count: '1,200+',
    },
    {
      icon: '📊',
      title: 'Interactive',
      description: 'Explore interactive 3D models and tools',
      count: '150+',
    },
  ]

  const featured = [
    {
      type: 'IMAGE',
      title: 'The Pillars of Creation',
      description: 'Iconic three columns of cosmic dust and gas where stars are born in the Eagle Nebula.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      type: 'VIDEO',
      title: 'Journey to Mars',
      description: 'A stunning 4K documentary following the path of human exploration to the Red Planet.',
      color: 'from-red-600 to-orange-500',
    },
    {
      type: 'AUDIO',
      title: 'Sounds of Space',
      description: 'Experience the fascinating electromagnetic sounds captured from planets and space phenomena.',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      type: 'INTERACTIVE',
      title: '3D Solar System',
      description: 'Explore an interactive 3D model of our solar system with detailed planet information.',
      color: 'from-yellow-500 to-orange-600',
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
              Media Library
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Multimedia Hub
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Access images, videos, audio recordings, and interactive content from NASA missions and space research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Types */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mediaTypes.map((media, idx) => (
            <motion.div
              key={idx}
              variants={cardAnimation}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(250, 204, 21, 0.1)' }}
              className="bg-gray-900 border border-gray-700 hover:border-yellow-400 rounded-lg p-8 transition cursor-pointer group"
            >
              <span className="text-5xl mb-4 block group-hover:scale-125 transition duration-300">
                {media.icon}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition">
                {media.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {media.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-yellow-400 font-semibold">
                  {media.count}
                </span>
                <a href="#" className="text-gray-400 group-hover:text-yellow-400 transition">
                  →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Media */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12"
          >
            Featured Media
          </motion.h2>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featured.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardAnimation}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg overflow-hidden group cursor-pointer transition"
              >
                <div className={`bg-gradient-to-br ${item.color} aspect-video group-hover:brightness-110 transition`}></div>
                
                <div className="p-6">
                  <span className="text-xs text-yellow-400 font-bold uppercase tracking-widest">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-yellow-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <a href="#" className="text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition">
                    View Content →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12"
        >
          Image Gallery
        </motion.h2>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {Array(24).fill(null).map((_, idx) => (
            <motion.div
              key={idx}
              variants={cardAnimation}
              whileHover={{ scale: 1.1 }}
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg group cursor-pointer border border-gray-700 hover:border-yellow-400 transition overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 group-hover:brightness-125 transition"></div>
            </motion.div>
          ))}
        </motion.div>
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
            Discover Amazing Content
          </h2>
          <p className="text-black/80 text-lg mb-8">
            Explore our vast collection of multimedia resources organized by topic and media type.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-yellow-400 font-bold py-3 px-10 rounded-lg hover:bg-gray-900 transition shadow-lg"
          >
            Browse Gallery
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}

export default Multimedia
