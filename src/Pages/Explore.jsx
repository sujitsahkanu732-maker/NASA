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

function Explore() {
  const categories = [
    {
      icon: '🌌',
      title: 'Galaxies',
      description: 'Explore millions of galaxies across the universe',
      count: '12,500+ Images',
    },
    {
      icon: '⭐',
      title: 'Stars & Planets',
      description: 'Discover stellar objects and planetary systems',
      count: '8,300+ Images',
    },
    {
      icon: '⚫',
      title: 'Black Holes',
      description: 'Study the most mysterious objects in space',
      count: '2,100+ Images',
    },
    {
      icon: '🌍',
      title: 'Earth from Space',
      description: 'View our planet from different perspectives',
      count: '15,600+ Images',
    },
    {
      icon: '🚀',
      title: 'Spacecraft & Missions',
      description: 'Follow humanity\'s journey into space',
      count: '9,800+ Images',
    },
    {
      icon: '🔭',
      title: 'Nebulae & Clusters',
      description: 'Witness the birthplaces of stars',
      count: '6,400+ Images',
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
              Browse & Discover
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Explore the Cosmos
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Browse through thousands of stunning images and data from NASA missions. Find galaxies, stars, planets, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardAnimation}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(250, 204, 21, 0.1)' }}
              className="bg-gray-900 border border-gray-700 hover:border-yellow-400 rounded-lg p-8 transition cursor-pointer group"
            >
              <span className="text-5xl mb-4 block group-hover:scale-125 transition duration-300">
                {category.icon}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-yellow-400 font-semibold">
                  {category.count}
                </span>
                <a href="#" className="text-gray-400 group-hover:text-yellow-400 transition">
                  →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Exploration */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12"
          >
            Trending Explorations
          </motion.h2>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'The Orion Nebula',
                description: 'One of the most spectacular nebulae visible from Earth, a stellar nursery full of young stars.',
                image: 'from-purple-600 to-blue-600',
              },
              {
                title: 'Andromeda Galaxy',
                description: 'Our closest galactic neighbor, containing over 1 trillion stars in a spiral formation.',
                image: 'from-blue-600 to-indigo-600',
              },
              {
                title: 'Saturn\'s Rings',
                description: 'Stunning views of the ringed planet and its fascinating moon system.',
                image: 'from-yellow-500 to-orange-600',
              },
              {
                title: 'Deep Field Universe',
                description: 'Hubble\'s iconic deep field revealing thousands of galaxies in a tiny patch of sky.',
                image: 'from-black to-gray-800',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardAnimation}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${item.image} aspect-video rounded-lg mb-4 group-hover:brightness-110 transition`}></div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
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
            Ready to Explore?
          </h2>
          <p className="text-black/80 text-lg mb-8">
            Choose a category above to start your cosmic adventure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-yellow-400 font-bold py-3 px-10 rounded-lg hover:bg-gray-900 transition shadow-lg"
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}

export default Explore
