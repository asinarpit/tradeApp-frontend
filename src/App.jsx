import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import GlobalTradeData from './pages/GlobalTradeData'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import ComingSoon from './pages/ComingSoon'
import Register from './pages/Register'
import Login from './pages/Login'
import { Phone, MessageCircle } from 'lucide-react';

function App() {
  return (
    <Router>

      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path='/trade-data' element={<GlobalTradeData />} />
          <Route path="/export-test" element={<ComingSoon />} />
          <Route path="/hs-codes" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />


        </Routes>
        <Footer />


        <div className="fixed bottom-6 right-4 sm:bottom-10 sm:right-8 flex flex-col space-y-3 sm:space-y-4 z-50">


          <button
            aria-label="Contact Us by Phone"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white flex items-center justify-center shadow-2xl transition-colors"
          >
            <Phone size={20} className="sm:w-6 sm:h-6" />
          </button>


          <button
            aria-label="Contact Us on WhatsApp"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white flex items-center justify-center shadow-2xl transition-colors"
          >
            <MessageCircle size={22} fill="white" className="sm:w-[26px] sm:h-[26px]" />
          </button>
        </div>
      </div>
    </Router>
  )
}

export default App