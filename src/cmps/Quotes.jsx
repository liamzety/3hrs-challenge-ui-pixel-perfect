import React from 'react';

export function Quotes() {
  return (
    <section className="quotes flex justify-center align-center column p-x-160 relative">
     <img className="bg absolute" src="images/bg-pattern-home-4-about-3.svg" alt=""/>
     <img className="bg absolute" src="images/bg-pattern-home-5.svg" alt=""/>
     
      <h2>
        Delivering real results for top companies. Some of our{' '}
        <span>success stories.</span>
      </h2>
      <div className="quotes-container flex space-between align-center">
        <div className="quote flex justify-center align-center column">
          <p className="quote-txt relative">
          <img className="bg absolute" src="images/icon-quotes.svg" alt=""/>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <div className="quote-reviewer flex align-center column">
            <h5>Kady Baker</h5>
            <p>Product Manager at Bookmark</p>
          </div>
          <img src="images/quote-profile1.png" alt="" className="profile" />
        </div>

        <div className="quote flex justify-center align-center column">
          <p className="quote-txt relative">
          <img className="bg absolute" src="images/icon-quotes.svg" alt=""/>
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <div className="quote-reviewer flex align-center column">
            <h5>Aiysha Reese</h5>
            <p>Founder of Manage</p>
          </div>
          <img src="images/quote-profile2.png" alt="" className="profile" />
        </div>

        <div className="quote flex justify-center align-center column">
          <div className="quote-txt relative">
          <img className="bg absolute" src="images/icon-quotes.svg" alt=""/>
            <p>
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
          </div>
          <div className="quote-reviewer flex align-center column">
            <h5>Arthur Clarke</h5>
            <p>Co-founder of MyPhysio</p>
          </div>
          <img src="images/quote-profile3.png" alt="" className="profile" />
        </div>
      </div>
    </section>
  );
}
