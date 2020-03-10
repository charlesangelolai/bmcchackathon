import React from 'react'

export default ({ days, hours, minutes, seconds }) => (
  <section className="hero has-text-centered is-link is-medium">
    <div className="hero-body">
      <h1 className="title">BMCC Hackathon Starts In:</h1>
      <nav className="level is-mobile">
        <div className="level-item has-text-centered">
          <div>
            <p className="title">{days}</p>
            <p className="heading">Days</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title">{hours}</p>
            <p className="heading">Hours</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title">{minutes}</p>
            <p className="heading">Minutes</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="title">{seconds}</p>
            <p className="heading">Seconds</p>
          </div>
        </div>
      </nav>
    </div>
  </section>
)
