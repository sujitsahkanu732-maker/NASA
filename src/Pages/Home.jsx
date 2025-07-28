import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg' // Your profile image

const groupMembers = [
  {
    name: 'Sujit Sah',
    address: 'Janakpur, Nepal',
    email: 'sujitsahkanu732@gmail.com',
  },
  {
    name: 'Prashant Aryal',
    address: 'Kathmandu, Nepal',
    email: 'prashant@gmail.com',
  },
  {
    name: 'Dipesh Manandhar',
    address: 'Kathmandu, Nepal',
    email: 'dipesh@gmail.com',
  },
  {
    name: 'Bibek Rai',
    address: 'Kathmandu, Nepal',
    email: 'bibek@gmail.com',
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
      {/* Profile */}
      <img
        src={profileImage}
        alt="Sujit Sah"
        className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">👨‍🚀 Sujit Sah</h2>
      <h1 className="text-4xl font-bold text-yellow-300 mb-2">Welcome to NASA Explorer</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Our space journey toward the future.
      </p>

      {/* Group Members Section */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl p-6 shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-yellow-200 mb-6 text-center">
          🚀 Our Group Members
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groupMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h4 className="text-xl font-semibold text-white mb-2">
                👤 {member.name}
              </h4>
              <p className="text-sm text-gray-300 mb-1">
                📍 <span className="font-medium">{member.address}</span>
              </p>
              <p className="text-sm text-blue-400">
                ✉️ <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Section */}
      <section className="max-w-4xl w-full text-center bg-gray-800 rounded-xl p-8 shadow-lg">
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
