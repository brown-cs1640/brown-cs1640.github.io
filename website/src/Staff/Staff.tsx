import React from 'react'
import StaffCard from './StaffCard'
import "./Staff.css"

import defaultImg from "./photos/item/default.jpg"
import nikos from "./photos/actual/nikos.jpg"
import nikos2 from "./photos/item/Tom_machine.jpg";
import ayman from "./photos/actual/ayman.jpg"
import angel from "./photos/actual/angel.jpg"
import angel2 from "./photos/item/angel.png"
import alex from "./photos/actual/alex.jpg"
import alex2 from "./photos/item/alex.jpg"
import tomas from "./photos/actual/tomas.jpg"
import tomas2 from "./photos/item/tomas2.jpeg"
import brandon from "./photos/actual/brandon.jpg"
import brandon2 from "./photos/item/brandon.jpeg"
import mithi from "./photos/actual/mithi.jpg"
import mithi2 from "./photos/item/mithi2.jpg"
import daniel from "./photos/actual/daniel.jpg"
import daniel2 from "./photos/item/daniel2.jpg"
import jason from "./photos/actual/jason.png"
import jason2 from "./photos/item/jason.jpg"
import kyle from "./photos/actual/kyle.jpg"
import mason from "./photos/actual/mason.jpg"
import matthias from "./photos/actual/matthias.jpg"
import matthias2 from "./photos/item/matthias.jpg"
import nicky from "./photos/actual/nicky.jpg"

export default function Staff() {
  return (
    <div className="staff">
      <h3>Staff</h3>
      <h4>Professor</h4>
      <div className="center">
        <StaffCard
          name="Nikos Triandopoulos"
          pronouns="he/him/his"
          email="	nikolaos_triandopoulos@brown.edu"
          image={nikos}
          item={nikos2}
          hours="MWF 3-4PM (CIT405)"
        />
      </div>

      <h4>HTAs</h4>
      <div className="center">
        <StaffCard
          name="Ayman Benjelloun Touimi"
          pronouns="he/him/his"
          email="ayman_benjelloun_touimi@brown.edu"
          image={ayman}
          item={defaultImg}
        />
        <StaffCard
          name="Matthias Yee"
          pronouns="he/him/his"
          email="matthias_yee@brown.edu"
          image={matthias}
          item={matthias2}
        />
      </div>

      <h4>UTAs</h4>

      <div className="center">
        <StaffCard
          name="Angel Arrazola"
          pronouns="he/him/his"
          email="angel_arrazola@brown.edu"
          image={angel}
          item={angel2}
        />
        <StaffCard
          name="Alex Cueva"
          pronouns="he/him/his"
          email="alexander_cueva@brown.edu"
          image={alex}
          item={alex2}
        />
        <StaffCard
          name="Tomas Dougan"
          pronouns="he/him/his"
          email="tomas_dougan@brown.edu"
          image={tomas}
          item={tomas2}
        />
        <StaffCard
          name="Brandon Gong"
          pronouns="he/him/his"
          email="brandon_gong@brown.edu"
          image={brandon}
          item={brandon2}
        />
        <StaffCard
          name="Mithi Jethwa"
          pronouns="she/her/hers"
          email="mithi_jethwa@brown.edu"
          image={mithi}
          item={mithi2}
        />
        <StaffCard
          name="Mason Lee"
          pronouns="he/him/his"
          email="jae-hyun_m_lee@brown.edu"
          image={mason}
          item={defaultImg}
        />
        <StaffCard
          name="Daniel Liu"
          pronouns="he/him/his"
          email="daniel_liu2@brown.edu"
          image={daniel}
          item={daniel2}
        />
        <StaffCard
          name="Jason Ni"
          pronouns="he/him/his"
          email="jason_ni@brown.edu"
          image={jason}
          item={jason2}
        />
        <StaffCard
          name="Nicky Yarnall"
          pronouns="he/him/his"
          email="nicholas_yarnall@brown.edu"
          image={nicky}
          item={defaultImg}
        />
        <StaffCard
          name="Kyle Yeh"
          pronouns="he/him/his"
          email="kyle_yeh@brown.edu"
          image={kyle}
          item={defaultImg}
        />
      </div>
    </div>
  );
}
