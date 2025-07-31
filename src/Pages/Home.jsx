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
    email: 'sujit@gmail.com',
    photo: sujitImg,
    linkedIn: 'https://linkedin.com/in/sujit-sah',
    role: 'Team Leader(Frontend Developer)',
  },
  {
    name: 'Prashant Aryal',
    address: 'Kathmandu, Nepal',
    email: 'prashant@gmail.com',
    photo: prashantImg,
    linkedIn: 'https://linkedin.com/in/prashant-aryal',
    role: 'Backend Developer',
  },
  {
    name: 'Dipesh Manandhar',
    address: 'Kathmandu, Nepal',
    email: 'dipesh@gmail.com',
    photo: dipeshImg,
    linkedIn: 'https://linkedin.com/in/dipesh-manandhar',
    role: 'Data & API Specialist',
  },
  {
    name: 'Bibek Rai',
    address: 'Kathmandu, Nepal',
    email: 'bibek@gmail.com',
    photo: bibekImg,
    linkedIn: 'https://linkedin.com/in/bibek-rai',
    role: 'UI Designer',
  },
]

function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white p-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🚀 Header Section */}
      <div className="flex items-center gap-6 mb-6">
        <motion.div
          className="text-4xl md:text-5xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🚀
        </motion.div>
        <img
          src={nasaImage}
          alt="NASA Logo"
          className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-lg"
        />
        <motion.div
          className="text-4xl md:text-5xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        >
          🚀
        </motion.div>
      </div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4 text-center"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        Welcome to NASA Explorer
      </motion.h1>

      <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-2xl">
        Our space journey toward the future begins here. Explore the cosmos with curiosity, data, and imagination.
      </p>

      {/* 👨‍💻 Group Members Section */}
      <div className="w-full max-w-6xl bg-gray-800 bg-opacity-60 rounded-xl p-8 shadow-lg mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-200 mb-10 text-center">
          🚀 Our Group Members
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {groupMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-md p-6 flex items-center gap-5 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 rounded-full border-2 border-yellow-400 object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold text-yellow-300 mb-1">{member.name}</h4>
                <p className="text-sm italic text-gray-400 mb-1">
                  🧑‍💻 {member.role || 'Contributor'}
                </p>
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

      {/* 💫 Motivational Section */}
      <section className="max-w-4xl w-full text-center bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          From a Student’s Imagination to a Journey Across the Universe
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>We are students — but our dreams have no limits.</strong> <br />
          Through this website, we aim to explore the mysteries of the universe, celebrate science, and imagine the future.
          <br /><br />
          <strong>Inspired by organizations like NASA,</strong> we hope to make our own small contributions to tomorrow’s discoveries.
          <br /><br />
          <em>"Space may be far, but dreams are close."</em>
        </p>
      </section>
    </motion.div>
  )
}

export default Home