import React from 'react';

export function Features() {
  return (
    <section className="flex space-between  features p-x-160">
      <div className="col">
        <hr />
        <h2>Build & manage distributed teams like no one else.</h2>
      </div>
      <div className="col column">
        <div className="feature flex justify-center align-center ">
          <img src="images/icon-person.svg" alt="" />
          <div className="flex column">
            <h3>Experienced Individuals</h3>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
        </div>
        <div className="feature flex justify-center align-center ">
          <img src="images/icon-cog.svg" alt="" />
          <div className="flex column">
            <h3>Easy to implement</h3>
            <p>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
        </div>
        <div className="feature flex justify-center align-center ">
          <img src="images/icon-chart.svg" alt="" />
          <div className="flex column">
            <h3>Enhanced Productivity</h3>
            <p>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
