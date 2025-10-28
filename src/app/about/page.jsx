import Counter from '@/components/Counter'
import OurStory from '@/components/OurStory'
import SimpleTeamSlider from '@/components/SimpleTeamSlider'
import WeProvaideCustomar from '@/components/WeProvaideCustomar'
import React from 'react'

const AboutPage = () => {
  return (
    <div> 
      <OurStory/>
      <Counter/>
      <SimpleTeamSlider/>
      <WeProvaideCustomar/>
    </div>
  )
}

export default AboutPage