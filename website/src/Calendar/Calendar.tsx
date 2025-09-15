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
          src="https://calendar.google.com/calendar/u/0?cid=Y183OGZiNTg4YTdhYWZmMWEwMTNkNmUxYjY2MjRhMmU1NjEyOWEzYzllZDZmMjVhMmU4ZTVkNGQxNmExODczZDJiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          title="Course Calendar"
        ></iframe>
      </Container>
    </div>
  );
}
