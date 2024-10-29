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
  <section className='px-20 pt-16 flex flex-col items-center'>
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