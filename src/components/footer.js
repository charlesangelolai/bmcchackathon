import React from 'react'

const SecondFooter = () => (
  <div className="has-background-black-ter has-text-centered has-text-white"
    style={{ padding: `10px 0` }}>
    <p>{`Made with ❤️ in New York City`}</p>
  </div>
)

export default () => (
    <section className="hero">
    <svg style={{ background: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#363636" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,245.3C672,256,768,256,864,224C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <footer className="footer has-background-grey-darker has-text-white">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">
            <h5 className="has-text-white">BMCCHacks II Spring 2020</h5>
            <address>
              Borough of Manhattan Community College<br />
              199 Chambers St<br />
              New York, NY 10007<br />
              (212) 220-8000
            </address>
          </div>
          <div className="column">
            <h5 className="has-text-white is-uppercase">Socials</h5>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Medium</p>
          </div>
          <div className="column">
            <h5 className="is-uppercase has-text-white">Past Years</h5>
            <a href="https://bmcchackathon.github.io/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>BMCCHacks 2019</a>
          </div>
          <div className="column">
            <h5 className="has-text-white is-uppercase">Links</h5>
            <a
            style={{ textDecoration: 'none', color: 'white' }}
            href="https://docs.google.com/forms/d/e/1FAIpQLScLZkUNP53tJI7Mq8K70fe3MS0RCMWMAS4JvGN_5qdi0Mrlsg/viewform"
            target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>
          <div className="column">
            <h6 className="has-text-white">Special thanks to Computer Programming Club and CSI Department!!</h6>
            <p>Copyright &copy; 2020 BMCCHacks.</p>
          </div>
        </div>
      </div>
    </footer>
    <SecondFooter />
  </section>
)
