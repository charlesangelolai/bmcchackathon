import React from 'react'
const HeaderWaves = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFF99" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,213.3C672,192,768,128,864,90.7C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
)

export default () => (
  <section className="hero is-medium">
    <HeaderWaves />
    <div className="hero-body">
      <div className="container">
        <div className="content">
          <h1 className="title has-text-centered">What is BMCCHacks?</h1>
          <p>BMCCHacks is a one day hackathon taking place on April 4th, hosted at the Borough of Manhattan Community College. Come build your dream project, learn from our talks and mentors, and win prizes! BMCCHacks is free, and made possible thanks to our wonderful supporters and BMCC clubs.</p>
          <p>The purpose of this hackathon is to inspire BMCC students to work in a collaborative environment to solve real world problems by creating needed projects while helping current students familiarize with current technology.</p>
        </div>
      </div>
    </div>
  </section>
)
