import { useState } from 'react'
import sujitImg from '../assets/sujit.jpg'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    // Optional: Connect to backend/email service
    console.log('Contact form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-10 px-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={sujitImg}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-yellow-400 object-cover shadow-lg"
          />
        </div>
        
        <h1 className="text-center text-3xl font-bold text-yellow-400 mb-2">👨‍💻 Sujit Sah</h1>
        <h2 className="text-center text-2xl font-semibold mb-6 text-white">📬 Get in Touch</h2>

        {/* Professional Bio */}
        

        {/* Contact Information */}
        <div className="mb-8 text-center text-sm text-gray-300 space-y-2">
          <p>📍 <strong>Location:</strong> Janakpur, Nepal</p>
          <p>
            📞 <strong>Phone:</strong>{' '}
            <a href="tel:+9779808266236" className="text-blue-400 hover:underline">
              +977-9808266236
            </a>
          </p>
          <p>
            📧 <strong>Email:</strong>{' '}
            <a href="mailto:sujitsahkanu732@gmail.com" className="text-blue-400 hover:underline">
              sujitsahkanu732@gmail.com
            </a>
          </p>
          <p>⏰ <strong>Availability:</strong> Monday – Friday, 9:00 AM – 5:00 PM</p>
          <div className="flex justify-center gap-5 pt-3">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
              Twitter
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
              Facebook
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mb-8 text-gray-300 text-sm leading-relaxed space-y-3 justify-center">
          <p>
            I’m <strong>Sujit Sah</strong>, a dedicated full-stack web developer based in Janakpur, Nepal. I specialize in building modern, high-performance web applications using technologies like <strong>React, Node.js, JavaScript, and Tailwind CSS</strong>. I take pride in delivering clean, scalable code and intuitive user experiences.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I enjoy solving real-world problems through code and staying up-to-date with the latest trends in the tech industry. I’m always open to new challenges, collaborations, and professional opportunities.
          </p>
          <p>
            If you're interested in working together or just want to say hello, feel free to reach out using the form below.
          </p>
        </div>
        {/* Qualifications */}
        <div className="mb-8 bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-300 mb-4">🎓 Qualifications & Skills</h3>
          <div className="space-y-4 text-gray-300 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">📚 Education</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Bachelor's Degree in Information Technology</li>
                <li>Full-Stack Web Development Certification</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">💻 Technical Skills</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Frontend:</strong> React, JavaScript, Tailwind CSS, HTML5, CSS3</li>
                <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, REST APIs</li>
                <li><strong>Tools:</strong> Git, Vite, ESLint, VS Code</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">🏆 Expertise</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Full-Stack Web Development</li>
                <li>Responsive Web Design</li>
                <li>API Integration & Development</li>
                <li>Database Design & Management</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        {submitted ? (
          <p className="text-green-400 text-center text-lg font-medium">
            ✅ Thank you for your message. I’ll get back to you as soon as possible.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full p-3 rounded text-orange-300 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="w-full p-3 rounded text-orange-300 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              onChange={handleChange}
              required
              className="w-full p-3 rounded text-orange-300 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded font-semibold transition"
            >
              📤 Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
