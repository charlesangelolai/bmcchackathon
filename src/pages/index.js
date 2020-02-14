import React, { Component } from 'react'
import About from '../components/about'
import Itenerary from '../components/itenerary'
import FAQ from '../components/faq'
import Sponsors from '../components/sponsors'
import Team from '../components/team'
import Footer from '../components/footer'

import "./styles.scss"

const SVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFF99" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,213.3C672,192,768,128,864,90.7C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
)

const DEADLINE = new Date("April 4, 2020 12:00:00:00").getTime();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
    this.countdown = this.countdown.bind(this);
  }

  static getDerivedStateFromProps() {
    let today = new Date().getTime();
    let remaining = DEADLINE - today;
    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((remaining / 1000 / 60) % 60);
    let seconds = Math.floor((remaining / 1000) % 60);
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.countdown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countdown() {
    let today = new Date().getTime();
    let remaining = DEADLINE - today;
    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((remaining / 1000 / 60) % 60);
    let seconds = Math.floor((remaining / 1000) % 60);

    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return(
      <>
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                PantherHacks II presents:
              </h1>
              <h2 className="title is-1">
                Spring Sandbox
              </h2>
              <p>April 4, 2020</p>
              <p id="countdown">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
              <p>Borough of Manhattan Community College</p>
              <button>Hacker Application</button>
              <button>Volunteer Application</button>
            </div>
          </div>
        </section>
        <SVG />
        <About />
        <Itenerary />
        <FAQ />
        <Sponsors />
        <Team />
        <Footer />
      </>
    )
  }
}

export default App
