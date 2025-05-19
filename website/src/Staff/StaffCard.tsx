import React from 'react'
import "./StaffCard.css"
import { Card } from 'react-bootstrap'

interface StaffCardProps {
    name: string,
    pronouns: string,
    image: string,
    item?: string,
    email: string,
    hours?: string;
}

export default function StaffCard(props: StaffCardProps) {
  return (
    <div className="staff-card">
      <Card style={{ width: "20rem" }}>
        <div className="staff-pics">
          <Card.Img src={props.image} className="img-actual"/>
          <Card.Img src={props.item} className="img-item"/>
        </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>
            {" "}
            {props.pronouns} <br /> {props.hours}
          </Card.Subtitle>
          {/* <Card.Subtitle>{props.hours}</Card.Subtitle> */}
          <Card.Link href={props.email}>{props.email}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
