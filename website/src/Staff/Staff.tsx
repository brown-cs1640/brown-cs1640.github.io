import React from "react";
import StaffCard from "./StaffCard";
import "./Staff.css";

import defaultImg from "./photos/item/default.jpg";
import nikos from "./photos/actual/nikos.jpg";
import nikos2 from "./photos/item/alex.jpg";
import alex from "./photos/actual/alex.jpg";
import alex2 from "./photos/item/alex.jpg";

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
          hours="Hours: M,T 1-2 or by appt -- CIT 223"
        />
      </div>

      <h4>HTA</h4>
      <div className="center">
        <StaffCard
          name="Alex Cueva"
          pronouns="he/him/his"
          email="alexander_cueva@brown.edu"
          image={alex}
          item={alex2}
          hours="Hours: Th 4-5pm -- CIT 143"
        />
      </div>

      <h4>UTA</h4>

      <div className="center">
        <StaffCard
          name="Keyan Rahimi"
          pronouns="he/him/his"
          email="keyan_rahimi@brown.edu"
          image={defaultImg}
          item={alex2}
          hours="Hours: Tu 4-5pm -- CIT 143"
        />
      </div>
    </div>
  );
}
