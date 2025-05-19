import React from "react";
import "./Home.css";
import "../globalstyles.css";
import square from "./squareIcon.png";
import xicon from "./closeIcon.png";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home">
      <div className="terminal-outline">
        <div className="image-group">
          <img src={square} style={{ height: "30px" }} alt="" />
          <img src={xicon} style={{ height: "30px" }} alt="" />
        </div>

        <div className="terminal-inside">
          <Container>
            <h2>Welcome!</h2>
            <p>
              In this class, you'll have the opportunity to learn both the
              overarching principles of operating systems as well as the
              intricacies of how they work.
            </p>
            <br />
            <p>
              We'll cover topics including multithreaded programming; managing
              threads, interrupts, and storage; processor scheduling; operating
              system structure; virtualization; security; and the design of both
              local and distributed file systems. You'll develop your skill as a
              C programmer while simultaneously learning what goes on inside
              your computer from the moment you power it on.
            </p>
            <br />
            <p>
              As part of the class, if you are enrolled in CS167, you may choose
              to take the (optional) half-credit lab, CS169. If you do so, you
              will attend the same lectures and complete the written assignments
              as usual. However, you will only complete the first two
              programming assignments from CS167, before embarking on an
              in-depth project wherein you build much of the functionality of a
              small operating system called Weenix. It is a significant time
              investment, and you'll still get a lot from the class if you don't
              take the lab. Some thoughts on taking CS169 from previous students
              can be found{" "}
              <a
                href="https://brown-cs1690.github.io/brown-cs167-s22/content/169.pdf"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . CS267 covers the material of both CS167 and 169; it is for
              graduate students only.
            </p>

            <h3>Important Info</h3>
            <p>
              Lectures: MWF 2-2:50pm ET, Metcalf Research Building AUD
            </p>
            <br />
            <p>
              <a
                href="https://forms.gle/5k8ko1LkJvxba7tt8"
                target="_blank"
                rel="noreferrer"
              >
                Onboarding and Collaboration Policy Form
              </a>
            </p>
            <br />
            <p>
              Course Feedback: Fill out the{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                Anonymous Feedback Form
              </a>
            </p>
            <br />
            <p> Contact:</p>
            <ul>
              <li>cs1640headtas@lists.brown.edu</li>
              <li>cs1640tas@lists.brown.edu</li>
            </ul>
            <p> Prerequisites: </p>
            <ul>
              <li>CSCI0300, CSCI0330, CSCI1330, or CSCI1310</li>
            </ul>
            <p>Textbook:</p>
            <ul>
              <li>
                Operating Systems in Depth, by Doeppner, Wiley 2011. ISBN:
                978-0-471-68723-8
              </li>
            </ul>
            <br />
            <br />
          </Container>
        </div>
      </div>
    </div>
  );
}
