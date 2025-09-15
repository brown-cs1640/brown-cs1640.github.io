import React from "react";
import "./Calendar.css";
import "../globalstyles.css";
import { Container } from "react-bootstrap";

export default function Calendar() {
  return (
    <div className="calendar">
      <h3>Calendar</h3>
      <Container className="frame-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_78fb588a7aaff1a013d6e1b6624a2e56129a3c9ed6f25a2e8e5d4d16a1873d2b%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          title="Course Calendar"
        ></iframe>
      </Container>
    </div>
  );
}
