import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import devFocus from '../images/svgs/undraw_dev_focus_b9xo.svg'

const Navbar = () => (
  <nav className="navbar is-fixed-top is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <span className="navbar-burger burger" data-target="navbarMenuHeroA" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" role="button" onClick={() => scrollTo('#landing')} tabIndex={0}>
            <span>Home</span>
          </a>
          <a className="navbar-item" role="button" onClick={() => scrollTo('#about')} tabIndex={0}>
            <span>About</span>
          </a>
          <a className="navbar-item" role="button" onClick={() => scrollTo('#itinerary')} tabIndex={0}>
            Itinerary
          </a>
          <a className="navbar-item" role="button" onClick={() => scrollTo('#faq')} tabIndex={0}>
            FAQ
          </a>
          <a className="navbar-item" role="button" onClick={() => scrollTo('#sponsors')} tabIndex={0}>
            Sponsors
          </a>
          <a className="navbar-item" role="button" onClick={() => scrollTo('#team')} tabIndex={0}>
            Team
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Archives
            </a>

            <div className="navbar-dropdown is-boxed">
              <a href="https://bmcchackathon.github.io/2019bmcchackathon/" target="_blank" className="navbar-item">
                Spring 2019
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default class Landing extends React.Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  render() {
    return(
      <section id="landing" className="hero is-light is-fullheight">
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h3 className="subtitle is-3">
                  BMCC Hackathon 2020
                </h3>
                <p className="is-size-4	">April 4, 2020</p>
                <p className="is-size-4	">Borough of Manhattan Community College</p>
                <div className="buttons" style={{ paddingTop: '20px', marginBottom: 0 }}>
                  <a
                  className="button is-link is-rounded"
                  style={{ marginBottom: 0 }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScLZkUNP53tJI7Mq8K70fe3MS0RCMWMAS4JvGN_5qdi0Mrlsg/viewform"
                  target="_blank" rel="noopener noreferrer">Apply Now</a>
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
  }
}
