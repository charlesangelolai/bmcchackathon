import React from 'react'

const SponsorUs = () => (
  <section className="hero is-light has-text-centered">
    <div className="hero-body">
      <div className="container">
        <p>Interested in sponsoring PantherHacks 2020? Contact us at {`<email@address>`}</p>
      </div>
    </div>
  </section>
)

export default () => (
  <>
    <section className="hero is-medium has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title" style={{ paddingBottom: '50px' }}>Our Team</h1>
          <div className="columns is-3">
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Edwin Carbajal</p>
              <p>Computer Science 2020</p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Mehmet Sahin</p>
              <p>Computer Science 2019</p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Dr. Mohammad Azhar</p>
              <p>Assistant Professor of CIS</p>
            </div>
          </div>
        <div className="columns is-12">
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Thierry Thesatus</p>
            <p>Associate Director of Career Services</p>
          </div>
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Katherine Bedoya</p>
            <p>Employer Relations Coordinator</p>
          </div>
        </div>
        </div>
      </div>
    </section>
    <SponsorUs />
  </>
)
