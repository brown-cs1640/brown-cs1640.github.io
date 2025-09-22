import React from "react";
import { Container, Table } from "react-bootstrap";
import square from "./squareIcon.png";
import xicon from "./closeIcon.png";
import "./Resources.css";
import LectureReview from "./AdditionalReadings.json";

interface Reading {
  title: string;
  link: string;
}

export default function Resources() {
  const renderReadings = (readings?: Reading[]) => {
    if (!readings || readings.length === 0) return null;

    return readings.map((reading, idx) => (
      <a
        key={idx}
        href={reading.link}
        target="_blank"
        rel="noreferrer"
        style={{
          marginRight: "8px",
          fontFamily: "'Fira Code', 'Consolas', 'Courier New', monospace",
          fontWeight: "bold",
        }}
      >
        {reading.title}
      </a>
    ));
  };

  let counter = 0;

  return (
    <div className="resources">
      <h3>Additional Readings</h3>
      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="" />
          <img src={xicon} style={{ height: "30px" }} alt="" />
        </div>
        <div className="terminal-inside">
          <Container>
            <Table bordered>
              <tbody>
                {LectureReview.map((readingGroup: Reading | {}, idx) => {
                  if (Object.keys(readingGroup).length === 0) {
                    counter++;
                    return (
                      <tr key={idx}>
                        <td
                          colSpan={1}
                          style={{
                            textAlign: "center",
                            fontFamily:
                              "'Fira Code', 'Consolas', 'Courier New', monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Reading Set {counter}
                        </td>
                      </tr>
                    );
                  }

                  const { title, link } = readingGroup as Reading;

                  return (
                    <tr key={idx}>
                      <td>{renderReadings([{ title, link }])}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    </div>
  );
}
