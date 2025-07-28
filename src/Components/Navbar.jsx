import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 tracking-wide flex items-center gap-2">
          🚀 NASA Explorer
        </h1>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-3 sm:gap-5 text-sm sm:text-base mt-2 sm:mt-0 text-gray-300">
          <Link to="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
          <Link to="/apod" className="hover:text-yellow-300 transition duration-200">APOD</Link>
          <Link to="/mars" className="hover:text-yellow-300 transition duration-200">Mars Rover</Link>
          <Link to="/iss" className="hover:text-yellow-300 transition duration-200">ISS Info</Link>
          <Link to="/iss-map" className="hover:text-yellow-300 transition duration-200">ISS Map</Link>
          <Link to="/space-weather" className="hover:text-yellow-300 transition duration-200">Space Weather</Link>
          <Link to="/tech-transfer" className="hover:text-yellow-300 transition duration-200">Tech Patents</Link> 
           <Link to="/media" className="hover:text-yellow-300 transition duration-200">NASA Media Library</Link> 
          <Link to="/Contact" className="hover:text-yellow-300 transition duration-200">Contact</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
