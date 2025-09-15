import React from "react";
import { Container, Table } from "react-bootstrap";
import square from "./squareIcon.png";
import xicon from "./closeIcon.png";
import "./Resources.css";
import LectureReview from "./LectureReview.json";

interface Lec {
  Date: string;
  Topic: string;
  Notes: string;
  Recording: string;
  Slides?: string;
}

export default function Resources() {
  const parseLectures = (lecture: Lec) => {
    console.log(lecture);
    const notesLink = lecture.Notes ? (
      <a href={lecture.Notes} target="_blank" rel="noreferrer">
        Notes
      </a>
    ) : (
      "Notes"
    );
    const recordingLink = lecture.Recording ? (
      <a href={lecture.Recording} target="_blank" rel="noreferrer">
        Recording
      </a>
    ) : (
      "Recording"
    );

    const slideLink = lecture.Slides ? (
      <a href={lecture.Slides} target="_blank" rel="noreferrer">
        Slides
      </a>
    ) : (
      "Slides"
    );
    return (
      <tr>
        <td>{lecture.Date}</td>
        <td>{lecture.Topic}</td>
        <td>
          {notesLink} | {recordingLink} | {slideLink}
        </td>
      </tr>
    );
  };

  return (
    <div className="resources">
      <h3>Resources</h3>
      <Container className="links">
        <a
          href="https://docs.google.com/document/d/16yRRw6ranXjVrhOXAmXnemCzcryxwfEnqCG53OOOWa8/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          CS1640 Syllabus
        </a>
        <br />
        <a
          href="https://docs.google.com/document/d/1PfhKpgVfZjpGak752N7pqQW54ALseWyj2cFCSdADJZ8/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Collaboration Policy
        </a>
        <br />
        <a
          href="https://github.com/brown-cs1690/handout/wiki"
          target="_blank"
          rel="noreferrer"
        >
          Handout Wiki
        </a>
        <br />
        <a
          href="https://github.com/brown-cs1690/handout/wiki/Github-and-Gradescope"
          target="_blank"
          rel="noreferrer"
        >
          Github and Gradescope Guide
        </a>
        <br />
        <a
          href="https://github.com/brown-cs1690/handout/wiki/Developing-Locally-Guide"
          target="_blank"
          rel="noreferrer"
        >
          Developing Locally Guide
        </a>
        <br />
        <a
          href="https://edstem.org/us/courses/73923"
          target="_blank"
          rel="noreferrer"
        >
          EdStem
        </a>
      </Container>
      <h3>Help Sessions</h3>
      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="" />
          <img src={xicon} style={{ height: "30px" }} alt="" />
        </div>
        <div className="terminal-inside">
          <Container>
            <Table bordered>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Project</th>
                  <th>Slides</th>
                  <th>Recording</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jan 28 @ 7pm ET</td>
                  <td>uthreads</td>
                  <td>
                    <a
                      href="https://docs.google.com/presentation/d/19BLvBBAbUUATnRUQTwsWuzrVxJyy8wAVAVFX_jYaa4U/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides (from 2023)
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1-OnReBw065DJOH0Es1j1kyUgvk7a9_G_/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recording
                    </a>
                    &nbsp;(
                    <a
                      href="https://docs.google.com/document/d/1KVYCPvH_saOeEzwpfUjWT1dnReN33Ow5LDNymfDPO_A/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Errata
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td>Jan 30 @ 7pm ET</td>
                  <td>Weenix - Processes</td>
                  <td>
                    <a
                      href="https://docs.google.com/presentation/d/1bp37Bdz5fcX6iifXqP3TmdUgLgDYQ_ydE8J4nirzG2Q/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1fuz_9N4E9TtEyEGkfrlri7_FYfdNFItn/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recording
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Feb 11 @ 7pm ET</td>
                  <td>mthreads</td>
                  <td>
                    <a
                      href="https://docs.google.com/presentation/d/1BVc84xmVt2fP1X69w-UtixMdD6UjdijiIp1Qv0ZvqfI/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1z_OHk-vbJlfhGsOdOyGuClnEOOvy99S9/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recording
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>drivers_gear_up&minus;&gt;kt_cancelled = 1</td>
                  <td>Weenix - Drivers</td>
                  <td>
                    <a
                      href="https://docs.google.com/presentation/d/1egkm5OClmCep62dtIS40aSKna55BgmiZ8BKzSBUVEn4/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides (from 2023)
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1FbBJ9N_HC-LWigepcGV1eR-ClvNP194U/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recording (from 2023)
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Mar 11 @ 7pm ET</td>
                  <td>Weenix - VFS</td>
                  <td>
                    <a
                      href="https://docs.google.com/presentation/d/1JPXIGAhs6Yiwk-JiSEvER-44o0If4HL0U9WsEjcvRmA/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1oxC0MkKPec_4HAaZkA2p08LKkN4u27Ei/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recording
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Apr 3 @ 7pm EST</td>
                  <td>Weenix - S5FS</td>
                  <td>
                    <a
                      href="https://docs.google.com/presentation/d/1Ngq6rb5jBgpHx-S1t6ak0g1ujL-oNbaQsg5Zrh3rRI8/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1S2n5n3jo_xaWRZu_PDhLeNpfzSbycIWG/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recording
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Apr 15 @ 7pm ET</td>
                  <td>Weenix - VM</td>
                  <td>
                    <a
                      href="https://docs.google.com/presentation/d/1srdMFriR0DS89ekguWV4Rmf7sZNHL_fO7N4Za2xDQz0/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://drive.google.com/file/d/1pr3xM1VaAKznaf4VU2dAJmqSQiLIwLzy/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Recording
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    </div>
  );
}
