import React from 'react'

export  function Hero() {
    return (
        <section className="hero  relative flex justify-center align-center">
           <div className="hero-container  flex wrap space-between p-x-160">

            <div className="col">
                <h1>
                Find the best <span>talent</span>
                </h1>
            </div>
            <div className="col flex column space-between">
           <hr/>
           <p>
           Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
           </p>
            </div>
            <img className="absolute" src="images/bg-pattern-home-2.svg" alt=""/>
           </div>
        </section>
    )
}
