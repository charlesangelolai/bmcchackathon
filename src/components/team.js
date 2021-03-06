import React from 'react'

import katherine from '../images/people/katherine_bedoya.jpg'
import edwin from '../images/people/edwin_carbajal.jpg'
import thierry from '../images/people/thierry_thesatus.jpg'
import mehmet from '../images/people/mehmet_sahin.jpg'

export default () => (
  <>
    <section id="team" className="hero is-medium has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title" style={{ paddingBottom: '50px' }}>Meet The Team</h1>
          <div className="columns is-12">
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Dr. Mohammad Azhar</p>
              <p>Advisor</p>
              <p>Assistant Professor of CIS Dept.</p>
              <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://sites.google.com/view/drazhar/home" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src={katherine} />
              </figure>
              <p className="has-text-weight-bold">Katherine Bedoya</p>
              <p>Director of Logistics</p>
              <p>Employer Relations Coordinator</p>
              <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://www.linkedin.com/in/kbedoya/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src={edwin} />
              </figure>
              <p className="has-text-weight-bold">Edwin Carbajal</p>
              <p>Director of Engineering</p>
              <p>Computer Science, 2020</p>
              <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://www.linkedin.com/in/edwincarbajal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Michael Hicks</p>
              <p>Director of Hacker Experience</p>
              <p><a style={{ color: 'black', textDecoration: 'underline' }}href="/" target="_blank" rel="noopener noreferrer">Link</a></p>
            </div>
          </div>
        <div className="columns is-12">
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src={mehmet} />
            </figure>
            <p className="has-text-weight-bold">Mehmet Sahin</p>
            <p>Co-Founder of the BMCC Hackathon</p>
            <p>Computer Science, 2019</p>
            <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://www.linkedin.com/in/mehmetshin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Fernanda Carvalho Santos</p>
            <p>Director of Marketing + Design</p>
            <p><a style={{ color: 'black', textDecoration: 'underline' }}href="/" target="_blank" rel="noopener noreferrer">Link</a></p>
          </div>
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src={thierry} />
            </figure>
            <p className="has-text-weight-bold">Thierry Thesatus</p>
            <p>Associate Director of Career Services</p>
            <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://www.linkedin.com/in/thierry-thesatus-60aa3913/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Elizabeth Yan</p>
            <p>Director of IT + Swag</p>
            <p>Information Technology Coordinator</p>
            <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://www.linkedin.com/in/elizabethyan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
        </div>
      </div>
    </section>
  </>
)
