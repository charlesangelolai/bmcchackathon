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
          <h1 className="title">Meet The Team</h1>
          <div className="columns is-centered">
            <div className="column is-narrow">
              <figure className="image is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Edwin Carbajal</p>
              <p>CS 2020</p>
            </div>
            <div className="column is-narrow">
              <figure className="image is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Mehmet Sahin</p>
              <p>Team</p>
            </div>
            <div className="column is-narrow">
              <figure className="image is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Dr. Azhar</p>
              <p>Team</p>
            </div>
          </div>
        </div>
        <div className="columns is-centered is-flex">
          <div className="column is-narrow">
            <figure className="image is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Thierry Thesatus</p>
            <p>Team</p>
          </div>
          <div className="column is-narrow">
            <figure className="image is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Katherine Bedoya</p>
            <p>Team</p>
          </div>
        </div>
      </div>
    </section>
    <SponsorUs />
  </>
)
