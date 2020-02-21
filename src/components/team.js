import React from 'react'

const SponsorUs = () => (
  <section className="hero is-light has-text-centered">
    <div className="hero-body">
      <div className="container">
        <p>Interested in sponsoring BMCCHacks 2020? Contact us at {`<email@address>`}</p>
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
          <div className="columns is-12">
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Dr. Mohammad Azhar</p>
              <p>Advisor</p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Katherine Bedoya</p>
              <p>Director of Logistics</p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Edwin Carbajal</p>
              <p>Director of Web Development</p>
              <p>Computer Science, 2020</p>
              <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://www.linkedin.com/in/edwincarbajal/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
            <div className="column">
              <figure className="image container is-128x128">
                <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              <p className="has-text-weight-bold">Michael Hicks</p>
              <p>Pending</p>
            </div>
          </div>
        <div className="columns is-12">
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Mehmet Sahin</p>
            <p>Co-Founder of BMCCHacks</p>
            <p>Computer Science, 2019</p>
            <p><a style={{ color: 'black', textDecoration: 'underline' }}href="https://www.linkedin.com/in/mehmetshin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Fernanda Carvalho Santos</p>
            <p>Director of Marketing + Design</p>
          </div>
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Thierry Thesatus</p>
            <p>Pending</p>
          </div>
          <div className="column">
            <figure className="image container is-128x128">
              <img alt="" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <p className="has-text-weight-bold">Elizabeth Yan</p>
            <p>Director of IT + Swag</p>
          </div>
        </div>
        </div>
      </div>
    </section>
    <SponsorUs />
  </>
)
