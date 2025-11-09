import AcademicResearch from "../components/home/AcademicResearch"
import BuyerSellerMap from "../components/home/BuyerSellerMap"
import CircleOfTrust from "../components/home/CircleOfTrust"
import Dashboard from "../components/home/Dashboard"
import Discover from "../components/home/Discover"
import ExiMapsFeatures from "../components/home/ExiMapsFeatures"
import EximapsIntro from "../components/home/EximapsIntro"
import ExperienceEdge from "../components/home/ExperienceEdge"
import GoogleReviews from "../components/home/GoogleReviews"
import Hero from "../components/home/Hero"
import LevelNext from "../components/home/LevelNext"
import Nexus from "../components/home/Nexus"
import PortAnalysis from "../components/home/PortAnalysis"
import PowerOfAI from "../components/home/PowerOfAI"
import Testimonials from "../components/home/Testimonials"
import TradeAnalysis from "../components/home/TradeAnalysis"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark-900">
      <Hero/>
      <BuyerSellerMap/>
      <EximapsIntro/>
      <CircleOfTrust/>
      <GoogleReviews/>
      <Testimonials/>
      <AcademicResearch/>
      <ExperienceEdge/>
      <LevelNext/>
      <PowerOfAI/>
      <ExiMapsFeatures/>
      <Discover/>
      <Dashboard/>
      <Nexus/>
      <TradeAnalysis/>
      <PortAnalysis/>
    </div>
  )
}

export default Home
