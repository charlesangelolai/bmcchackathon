import React from 'react'
import google from "../images/past_sponsors/google.png"
import wolfram from "../images/past_sponsors/wolfram.png"
import aws from "../images/past_sponsors/aws_educate.png"
import cpc from "../images/past_sponsors/computer_programming_club.png"
import cfcd from "../images/past_sponsors/center_for_career_development.png"

const SponsorUs = () => (
  <section className="hero is-light has-text-centered">
    <div className="hero-body">
      <div className="container">
        <p>Interested in sponsoring BMCCHacks II? Contact us at {`<email@address>`}</p>
      </div>
    </div>
  </section>
)

const PastSponsors = () => {
  return (
    <section className="hero has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Past Sponsors</h1>
          <div className="columns">
              <div className="column">
                <img src={google} width="300" alt="" />
              </div>
          </div>
          <div className="columns">
              <div className="column">
                <img src={aws} width="300" alt="" />
              </div>
              <div className="column">
                <img src={wolfram} width="300" alt="" />
              </div>
          </div>
          <h1 className="title">Special Thanks To</h1>
          <div className="columns">
            <div className="column">
              <img src={cpc} width="200" alt="" />
            </div>
            <div className="column">
              <img src={cfcd} width="200" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default () => (
  <>
    <section className="hero has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Sponsors</h1>
          <p>TBA!</p>
        </div>
      </div>
    </section>
    <PastSponsors />
    <SponsorUs />
  </>
)
