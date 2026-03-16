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

function WHATX() {
  const technologies = [
    {
      icon: '🔬',
      title: 'Water Detection Systems',
      description: 'Advanced sensors for detecting water and ice in space environments and planetary surfaces.',
      status: 'Active',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: '🛰️',
      title: 'Satellite Technology',
      description: 'Next-generation satellite systems for Earth observation and communication.',
      status: 'Development',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: '🧬',
      title: 'Life Detection Tech',
      description: 'Instruments designed to detect potential biosignatures of extraterrestrial life.',
      status: 'Research',
      color: 'from-green-600 to-emerald-500',
    },
    {
      icon: '⚡',
      title: 'Energy Systems',
      description: 'Innovative power generation and storage solutions for deep space missions.',
      status: 'Active',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: '🎯',
      title: 'Precision Instruments',
      description: 'Ultra-precise sensors for scientific measurements in extreme environments.',
      status: 'Development',
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: '🌐',
      title: 'Communication Network',
      description: 'Global network infrastructure for real-time data transmission from space probes.',
      status: 'Active',
      color: 'from-indigo-600 to-blue-600',
    },
  ]

  const innovations = [
    {
      title: 'Autonomous Navigation Systems',
      description: 'AI-powered navigation allowing spacecraft to make decisions independently in deep space.',
      impact: 'High',
    },
    {
      title: 'Radiation Shielding',
      description: 'Advanced materials protecting astronauts from cosmic radiation during long missions.',
      impact: 'Critical',
    },
    {
      title: 'Recycling Systems',
      description: 'Closed-loop life support systems for sustainable long-duration space missions.',
      impact: 'High',
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation computing for processing complex cosmic data analysis.',
      impact: 'Revolutionary',
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
              Advanced Technology
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              WHATX Platform
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore cutting-edge technologies and innovations that power NASA's space exploration missions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12"
        >
          Core Technologies
        </motion.h2>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={cardAnimation}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(250, 204, 21, 0.1)' }}
              className="bg-gray-900 border border-gray-700 hover:border-yellow-400 rounded-lg overflow-hidden transition group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${tech.color} h-24 group-hover:brightness-110 transition`}></div>
              
              <div className="p-6">
                <span className="text-4xl mb-3 block group-hover:scale-125 transition duration-300">
                  {tech.icon}
                </span>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition">
                  {tech.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {tech.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded ${
                    tech.status === 'Active' ? 'bg-green-900/50 text-green-400' :
                    tech.status === 'Development' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-blue-900/50 text-blue-400'
                  }`}>
                    {tech.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Innovations Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12"
          >
            Key Innovations
          </motion.h2>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {innovations.map((innovation, idx) => (
              <motion.div
                key={idx}
                variants={cardAnimation}
                whileHover={{ x: 10 }}
                className="bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg p-6 transition cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition flex-1">
                    {innovation.title}
                  </h3>
                  <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded whitespace-nowrap ml-4 ${
                    innovation.impact === 'Critical' ? 'bg-red-900/50 text-red-400' :
                    innovation.impact === 'Revolutionary' ? 'bg-purple-900/50 text-purple-400' :
                    'bg-yellow-900/50 text-yellow-400'
                  }`}>
                    {innovation.impact} Impact
                  </span>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {innovation.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12"
        >
          Research Focus Areas
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
              area: 'Materials Science',
              description: 'Developing advanced materials that withstand extreme space conditions.',
            },
            {
              area: 'Artificial Intelligence',
              description: 'AI systems for autonomous decision-making in space exploration.',
            },
            {
              area: 'Renewable Energy',
              description: 'Sustainable power solutions for long-duration missions.',
            },
            {
              area: 'Medical Technology',
              description: 'Healthcare innovations adapted for zero-gravity environments.',
            },
          ].map((focus, idx) => (
            <motion.div
              key={idx}
              variants={cardAnimation}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-700 hover:border-yellow-400 rounded-lg p-8 transition group cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition">
                {focus.area}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {focus.description}
              </p>
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
            Learn More About Our Technologies
          </h2>
          <p className="text-black/80 text-lg mb-8">
            Dive deeper into NASA's technological innovations and research initiatives.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-yellow-400 font-bold py-3 px-10 rounded-lg hover:bg-gray-900 transition shadow-lg"
          >
            Explore WHATX
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}

export default WHATX
