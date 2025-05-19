import React from 'react'
import "./Calendar.css"
import "../globalstyles.css"
import {Container} from 'react-bootstrap';

export default function Calendar() {
  return (
    <div className='calendar'>
      <h3>Calendar</h3>
      <Container className='frame-container'>
        <iframe src="https://calendar.google.com/calendar/embed?src=c_56ec3e5aaa25255bc800b2d431977db261f65f7be2e5242c2793a8f3233ec27f%40group.calendar.google.com&ctz=America%2FNew_York" style={{border: 0}} width="100%" height="100%" title='Course Calendar'></iframe>
      </Container>
    </div>
  )
}
