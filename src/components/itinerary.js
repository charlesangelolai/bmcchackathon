import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDoorOpen,
  faLaptopCode,
  faUtensils,
  faFileSignature,
  faMicrophone,
  faAward,
  faHourglassEnd,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons'

export default () => (
  <section className="hero has-text-centered">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Itinerary</h1>
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">Start</span>
          </header>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faDoorOpen } />
            </div>
            <div className="timeline-content">
              <p className="heading">8 am</p>
              <p>Doors open</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={ faFileSignature } />
            </div>
            <div className="timeline-content">
              <p className="heading">8:30 am - 9 am</p>
              <p>Registration</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <div className="timeline-content">
              <p className="heading">9 am - 9:15 am</p>
              <p>Introduction</p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <div className="timeline-content">
              <p className="heading">9:15 am - 9:45 am</p>
              <p>Keynote Speaker: Provost Erwing Wong</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <div className="timeline-content">
              <p className="heading">10 am - 10:20 am</p>
              <p>Introduction of Tracks</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">10:30 am - 12 pm</p>
              <p>TBA!</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">10:30 am - 12 pm</p>
              <p>TBA!</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">10:30 am - 12 pm</p>
              <p>TBA!</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">10:30 am - 12 pm</p>
              <p>TBA!</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={ faUtensils } />
            </div>
            <div className="timeline-content">
              <p className="heading">12:15 pm - 1 pm</p>
              <p>Panel and Lunch</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={ faLaptopCode } />
            </div>
            <div className="timeline-content">
              <p className="heading">1:15 pm - 8 pm</p>
              <p>Hack Time</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faHourglassEnd} />
            </div>
            <div className="timeline-content">
              <p className="heading">5:30 pm - 8 pm</p>
              <p>Project Submission and Judging</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={ faUtensils } />
            </div>
            <div className="timeline-content">
              <p className="heading">6:15 pm - 7 pm</p>
              <p>Dinner</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <div className="timeline-content">
              <p className="heading">8 pm</p>
              <p>Finalist Announcement</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <div className="timeline-content">
              <p className="heading">8:15 pm - 8:45 pm</p>
              <p>Presentations</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary is-icon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <div className="timeline-content">
              <p className="heading">8:45 pm - 9 pm</p>
              <p>Prizes</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">End</span>
          </header>
        </div>
      </div>
    </div>
  </section>
)
