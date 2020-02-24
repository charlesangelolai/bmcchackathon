import React, { Component } from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Location from '../components/location'
import Itinerary from '../components/itinerary'
import FAQ from '../components/faq'
import Sponsors from '../components/sponsors'
import Team from '../components/team'

import "./styles.scss"

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

    if (hours < "10" && hours > "0") { hours = "0" + hours; }
    if (minutes < "10" && hours > "0") { minutes = "0" + minutes; }
    if (seconds < "10" && hours > "0") { seconds = "0" + seconds; }
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

    if (hours < "10" && hours > "0") { hours = "0" + hours; }
    if (minutes < "10" && hours > "0") { minutes = "0" + minutes; }
    if (seconds < "10" && hours > "0") { seconds = "0" + seconds; }

    if(t > 0) this.setState({ days, hours, minutes, seconds });
    else clearInterval(this.timerID);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return(
      <Layout>
        <Header
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <About />
        <Location />
        <Itinerary />
        <FAQ />
        <Sponsors />
        <Team />
      </Layout>
    )
  }
}
export default App
