import React from 'react'

import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

export default () => {
  return (
    <div id="wrapper" className="clearfix">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  )
}
