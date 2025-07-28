import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Apod from './Pages/Apod'
import Footer from './Components/Footer'
import MarsRover from './Pages/MarsRover'
import ISSLocation from './Pages/ISSLocation'
import ISSMap from './Pages/ISSMap'
import SpaceWeather from './Pages/SpaceWeather'
//import Contact from './Pages/Contact'
import TechTransfer from './Pages/TeachTransfer'
import NasaMediaLibrary from './Pages/NasaMediaLibrary'


function App() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar/>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/apod" element={<Apod/>} />
          <Route path="/mars" element={<MarsRover/>}/>
          <Route path="/iss" element={<ISSLocation/>}/>
          <Route path="/iss-map" element={<ISSMap/>}/>
          <Route path="/space-weather" element={<SpaceWeather/>}/>
          <Route path="/tech-transfer" element={<TechTransfer/>}/>
          <Route path="/media" element={<NasaMediaLibrary/>}/>
          
        </Routes>
      </div>
      <Footer/>
    </main>
  )
}

export default App