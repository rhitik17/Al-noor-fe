import React from 'react'
import HeroSection from '../../components/home/Hero'
import JobSearchSection from '../../components/home/JobSearchSection'
import ProfessionalSupportCard from '../../components/home/SupportCard'
import AboutCard from '../../components/home/AboutCard'
import LatestNews from '../../components/home/Latestnews'
import SucessStories from '../../components/home/SucessStories'

const Home = () => {
  return (
  <>
  <section className='px-20'>
<HeroSection/>
<JobSearchSection/>
<ProfessionalSupportCard/>
<AboutCard/>
<LatestNews/>
<SucessStories/>
  </section>
  </>
  )
}

export default Home