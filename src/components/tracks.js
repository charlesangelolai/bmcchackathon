import React from 'react'
import sustainability from '../images/tracks/sustainability.svg'
import accessibility from '../images/tracks/accessibility.svg'
import education from '../images/tracks/education.svg'
import health from '../images/tracks/health.svg'

export default () => (
  <section id="tracks" className="hero is-medium has-text-centered">
    <div className="hero-body">
      <div className="container">
        <div className="content">
          <h1 className="title">Tracks</h1>
          <div className="content">
            <p>Particpants will have the opportunity to create projects base on their choice of a variety of tracks! In addition, we will have corporate-sponsored challenges to be announced on the day of our event.</p>
          </div>
          <div className="tile is-ancestor has-text-centered">
            <div className="tile is-parent">
              <article className="tile is-child box">
                  <figure className="image is-square">
                    <img src={sustainability} />
                  </figure>
                 <p className="title">Sustainability</p>
                 <div className="content">
                  <p>Tackle issues like climate change, energy, food production, water scarcity, and biodiversity.</p>
                 </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                  <figure className="image is-square">
                    <img src={accessibility} />
                  </figure>
                  <p className="title">Accessibility</p>
                  <div className="content">
                   <p>Help make the world more accessible and create tools for people with different needs!</p>
                  </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                  <figure className="image is-square">
                    <img src={education} />
                  </figure>
                  <p className="title">Education</p>
                  <div className="content">
                   <p>Improve education quality and increase access to knowledge around the world.</p>
                  </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                  <figure className="image is-square">
                    <img src={health} />
                  </figure>
                  <p className="title">Health</p>
                  <div className="content">
                   <p>How can technology be used to solve some of the problems around health and health care?</p>
                  </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
