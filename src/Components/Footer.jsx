import { Link } from 'react-router-dom'
import nasaImage from '../assets/nasa.jpg'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={nasaImage} alt="NASA" className="w-12 h-12 rounded-full" />
              <h4 className="text-lg font-bold text-white">NASA Explorer</h4>
            </div>
            <p className="text-sm text-gray-400">
              Exploring space, science, and the universe through data and discovery.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/apod" className="hover:text-yellow-400 transition">APOD</Link></li>
              <li><Link to="/mars" className="hover:text-yellow-400 transition">Mars Rover</Link></li>
              <li><Link to="/iss" className="hover:text-yellow-400 transition">ISS Location</Link></li>
              <li><Link to="/space-weather" className="hover:text-yellow-400 transition">Space Weather</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/media" className="hover:text-yellow-400 transition">Media Library</Link></li>
              <li><Link to="/tech-transfer" className="hover:text-yellow-400 transition">Tech Transfer</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
              <li><a href="https://nasa.gov" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">NASA.gov</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <div className="space-y-3 text-sm">
              <p>
                <a href="mailto:sujitsahkanu732@gmail.com" className="hover:text-yellow-400 transition">
                  📧 sujitsahkanu732@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+9779808266236" className="hover:text-yellow-400 transition">
                  📞 +977-9808266236
                </a>
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">Twitter</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© {currentYear} NASA Explorer. Developed by Sujit Sah 🇳🇵</p>
            <div className="flex gap-6 text-xs">
              <a href="#privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-yellow-400 transition">Terms of Use</a>
              <a href="#sitemap" className="hover:text-yellow-400 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer