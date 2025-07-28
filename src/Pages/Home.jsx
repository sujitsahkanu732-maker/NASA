import { motion } from 'framer-motion'
import nasaImage from '../assets/nasa.jpg'
import sujitImg from '../assets/sujit.jpg'
import prashantImg from '../assets/prashant.jpg'
import dipeshImg from '../assets/dipesh.jpg'
import bibekImg from '../assets/bibek.jpg'

const groupMembers = [
  {
    name: 'Sujit Sah',
    address: 'Janakpur, Nepal',
    email: 'sujitsahkanu732@gmail.com',
    photo: sujitImg,
    linkedIn: 'https://linkedin.com/in/sujit-sah',
  },
  {
    name: 'Prashant Aryal',
    address: 'Kathmandu, Nepal',
    email: 'prashant@gmail.com',
    photo: prashantImg,
    linkedIn: 'https://linkedin.com/in/prashant-aryal',
  },
  {
    name: 'Dipesh Manandhar',
    address: 'Kathmandu, Nepal',
    email: 'dipesh@gmail.com',
    photo: dipeshImg,
    linkedIn: 'https://linkedin.com/in/dipesh-manandhar',
  },
  {
    name: 'Bibek Rai',
    address: 'Kathmandu, Nepal',
    email: 'bibek@gmail.com',
    photo: bibekImg,
    linkedIn: 'https://linkedin.com/in/bibek-rai',
  },
]

function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🚀 Profile Section with Rocket Emojis */}
      <div className="flex items-center gap-6 mb-6">
        {/* Left Rocket Emoji */}
        <motion.div
          className="text-4xl md:text-5xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🚀
        </motion.div>
        {/* Profile */}
        <img
          src={nasaImage}
          alt="NASA"
          className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl mb-4"
        />
        {/* Right Rocket Emoji */}
        <motion.div
          className="text-4xl md:text-5xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        >
          🚀
        </motion.div>
      </div>
      <h2 className="text-2xl font-semibold mb-2">👨‍🚀 NASA </h2>
      <h1 className="text-4xl font-bold text-yellow-300 mb-2 text-center">
        Welcome to NASA Explorer
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Our space journey toward the future.
      </p>

      {/* Group Members Section */}
      <div className="w-full max-w-6xl bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-yellow-200 mb-8 text-center">
          🚀 Our Group Members
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {groupMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-md p-6 flex items-center gap-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 rounded-full border-2 border-yellow-400 object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold text-yellow-300 mb-1">{member.name}</h4>
                <p className="text-sm text-gray-400 mb-1 italic">{member.role}</p>
                <p className="text-sm text-gray-300 mb-1">📍 {member.address}</p>
                <p className="text-sm text-blue-400 mb-1">
                  ✉️ <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                </p>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-400 underline"
                >
                  🔗 LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Motivational Section */}
      <section className="max-w-4xl w-full text-center bg-gray-800 rounded-xl p-8 shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          From a Student’s Imagination to the Journey Across the Universe
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>We are students — but our dreams have no limits.</strong> <br />
          Through this website, we are trying to understand the mysteries of space, embrace science, and seek the future.
          This is not just a project; it is a reflection of our dreams, our dedication, and the journey ahead.
          <br /><br />
          <strong>Inspired by organizations like NASA, we too hope to contribute to the discoveries of tomorrow.</strong>
          <br /><br />
          <em>"Space may be far, but dreams are close."</em>
        </p>
      </section>

      
    </motion.div>
  )
}

export default Home