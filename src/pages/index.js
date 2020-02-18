import React, { Component } from 'react'
import About from '../components/about'
import Itenerary from '../components/itenerary'
import FAQ from '../components/faq'
import Sponsors from '../components/sponsors'
import Team from '../components/team'
import Footer from '../components/footer'

import "./styles.scss"

const HeaderWaves = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFF99" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,213.3C672,192,768,128,864,90.7C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
)

const DEADLINE = new Date("April 4, 2020 00:00:00").getTime();
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
    let now = new Date().getTime();
    let t = DEADLINE - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours =  Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    if(t < 0) days = hours = minutes = seconds = 0;
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.countdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countdown() {
    let now = new Date().getTime();
    let t = DEADLINE - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours =  Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    
    if(t > 0) this.setState({ days, hours, minutes, seconds });
    else clearInterval(this.timerID);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return(
      <>
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
                <h3 className="subtitle is-3">
                  PantherHacks II presents:
                </h3>
                <h2 className="title is-1">
                  Spring Sandbox
                </h2>
                <p className="is-size-3 has-text-weight-semibold	">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
                <p className="is-size-4	">April 4, 2020</p>
                <p className="is-size-4	">Borough of Manhattan Community College</p>
                <div className="field is-grouped" style={{ paddingTop: '20px' }}>
                  <p className="control">
                    <button className="button is-primary is-rounded">Hacker Application</button>
                  </p>
                  <p>
                  <button className="button is-link is-rounded">Volunteer Application</button>
                  </p>
                </div>
            </div>
          </div>
        </section>
        <HeaderWaves />
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
