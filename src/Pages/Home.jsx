import { motion } from 'framer-motion'
import nasaImage from '../assets/nasa.jpg'
import sujitImg from '../assets/sujit.jpg'

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const groupMembers = [
  {
    id: 1,
    name: 'Sujit Sah',
    role: 'Contributor',
    address: 'Janakpur, Nepal',
    email: 'sujit@gmail.com',
    photo: sujitImg,
    linkedIn: 'https://linkedin.com/in/sujit-sah',
  },
]

/* -------------------------------------------------------------------------- */
/*                              MOTION VARIANTS                               */
/* -------------------------------------------------------------------------- */

const pageAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

function Home() {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white px-6 py-10 flex flex-col items-center"
    >
      {/* ============================== HEADER ============================== */}
      <header className="mb-12">
        <img
          src={nasaImage}
          alt="NASA Logo"
          className="w-28 h-28 mx-auto rounded-full border-4 border-yellow-400 shadow-lg"
        />
      </header>

      {/* ============================== HERO ================================ */}
      <section className="text-center max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-4">
          NASA Explorer
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          A student-driven platform exploring space, science, and imagination.
        </p>
      </section>

      {/* ============================== TEAM ================================ */}
      <section className="w-full max-w-4xl bg-gray-800/80 rounded-2xl p-8 shadow-xl mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-200 text-center mb-10">
          Team Member
        </h2>

        {groupMembers.map(member => (
          <motion.article
            key={member.id}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col sm:flex-row items-center gap-6 bg-gray-700 rounded-xl p-6 shadow-md transition"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full border-2 border-yellow-400 object-cover"
            />

            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-xl font-semibold text-yellow-300">
                {member.name}
              </h3>

              {/* Role Badge */}
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-400 text-black">
                {member.role}
              </span>

              <p className="text-sm text-gray-300">
                {member.address}
              </p>

              <p className="text-sm text-blue-400">
                <a href={`mailto:${member.email}`} className="hover:underline">
                  {member.email}
                </a>
              </p>

              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-500 hover:text-blue-400 underline"
              >
                View LinkedIn
              </a>
            </div>
          </motion.article>
        ))}
      </section>

      {/* ============================ MOTIVATION ============================= */}
      <section className="max-w-4xl text-center bg-gray-800/80 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          Driven by Curiosity
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>We are students, but our vision is limitless.</strong>
          <br /><br />
          Inspired by NASA and space exploration, this project represents our
          passion for science, learning, and the future.
          <br /><br />
          <em>Exploration begins with imagination.</em>
        </p>
      </section>
    </motion.main>
  )
}

export default Home
