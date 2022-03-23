import React from 'react'
import './Event.scss'

const Events = () => {
  return (
    <>
    <div className="row-cols-md-3 g-4 ">
    <div className="col event-card">
      <div className='event-image'>
       <img src="images/government-resources.jpg" className="card-img-top" alt="government-resources" />
      </div>
      
        <div className="event-card-details">
          <div className="card-body">
            <h5 className="event-title">Webinar</h5>
            <p className="card-text">At ServiceOntario you can get your driver’s licence, plate stickers, health cards, birth certificates, register a birth and more.</p>
            <p className="user-date">22-11-2022</p>
            <p className="event-time">08:00 PM - 11:00 PM</p>
          </div>
        </div>
      </div>
 
    </div>


    <div className="row-cols-md-3 g-4 ">
    <div className="col event-card">
      <div className='event-image'>
       <img src="images/government-resources.jpg" className="card-img-top" alt="government-resources" />
      </div>
      
        <div className="event-card-details">
          <div className="card-body">
            <h5 className="card-title">Art & Crafts</h5>
            <p className="card-text">At ServiceOntario you can get your driver’s licence, plate stickers, health cards, birth certificates, register a     birth and more.</p>
            <p className="user-date">20-07-2022</p>
            <p className="event-time">08:00 PM - 11:00 PM</p>
          </div>
        </div>
      </div>
 
    </div>


    <div className="row-cols-md-3 g-4 ">
    <div className="col event-card">
      <div className='event-image'>
       <img src="images/government-resources.jpg" className="card-img-top" alt="government-resources" />
      </div>
      
        <div className="event-card-details">
          <div className="card-body">
            <h5 className="card-title">Job fair</h5>
            <p className="card-text">At ServiceOntario you can get your driver’s licence, plate stickers, health cards, birth certificates, register a birth and more.</p>
            <p className="user-date">15-09-2022</p>
            <p className="event-time">08:00 PM - 11:00 PM</p>
          </div>
        </div>
      </div>
 
    </div>
  </>
  )
}


export default Events;