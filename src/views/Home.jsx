import React from 'react'
import { Cta} from '../cmps/Cta'
import { Features} from '../cmps/Features'
import { Footer} from '../cmps/Footer'
import { Hero} from '../cmps/Hero'
import { Quotes} from '../cmps/Quotes'

export  function Home() {


    return (
        <section className="home padding-x-30">
          <Hero />
          <Features />
          <Quotes />
          <Cta />
          <Footer />
        </section>
    )
}
