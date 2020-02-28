import React from 'react'
import devFocus from '../images/svgs/undraw_dev_focus_b9xo.svg'

export default (props) => (
  <section className="hero is-success is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="subtitle is-3">
              BMCCHacks II
            </h3>
            <h2 className="title is-2">
              {`${props.days}d ${props.hours}h ${props.minutes}m ${props.seconds}s`}
            </h2>
            <p className="is-size-4	">April 4, 2020</p>
            <p className="is-size-4	">Borough of Manhattan Community College</p>
            <div className="buttons" style={{ paddingTop: '20px', marginBottom: 0 }}>
              <a
              className="button is-primary is-rounded"
              style={{ marginBottom: 0 }}
              href="https://docs.google.com/forms/d/e/1FAIpQLScLZkUNP53tJI7Mq8K70fe3MS0RCMWMAS4JvGN_5qdi0Mrlsg/viewform"
              target="_blank">Apply Now</a>
            </div>
            <p>Applications now open!</p>
          </div>
          <div className="column">
            <img src={devFocus} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
)
