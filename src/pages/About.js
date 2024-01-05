import React from "react";
import "../styles/about.css";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="fw-bold">About Me</h1>

        <div className="justify-content-center mt-5">
          <p className="text-danger fw-bold name-font fs-5">Ou soben</p>
          <img
            style={{ width: "15%" }}
            className="img-fluid img-2"
            src={require("../images/img-2.png")}
            alt=""
          />
        </div>
      </div>
      <section className="container col-xl-9">
        <div className="mt-5 pt-5  ">
          <h1 className="fw-bold name-font "> A little about me</h1>
          <p className="fs-5 p1-font">
            {" "}
            I am very excited to share my personal information with you. I was
            born in Phnom Penh, Cambodia 18 April 2003, and a passion with Web
            Development since I was in grade 11. I didn't know much about
            computers at that time, and currently ,I am studying in the major of
            computer science I have the goal to become a web full-stack web
            developer is what I'm thinking.
          </p>
          <h1 className="fw-bold name-font "> Education</h1>
          <hr />
          <p className="fw-bold pt-4">
            {" "}
            2022 Present{" "}
            <span className="ms-5 ps-5 "> Bachelor of Computer Science</span>
          </p>
          <div style={{ marginLeft: "200px" }} className="">
            <p className=" ">Royal University of Phnom </p>
          </div>
          <p className="fw-bold">
            {" "}
            December 2021
            <span style={{ marginLeft: "82px" }} className="">
              High School Diploma
            </span>
          </p>
          <div style={{ marginLeft: "201px" }} className="">
            <p className=" ">Russey Keo High School </p>
          </div>
          <h1 className="fw-bold name-font mt-5 "> Work Experience</h1>
          <hr />
          <p className="fw-bold fs-5 pt-3">
            Teacher of Khmer and English, CCDS School, Phnom Penh, Cambodia
          </p>
          <p className="text-muted fw-bold pt-3">
            January 2023 - November 2023{" "}
          </p>

          <p className="fw-bold fs-5 pt-3">
            Pizza Maker, Pasta Corner, Phnom Penh
          </p>
          <p className=" text-muted fw-bold pt-3">February 2022 - January 2023 </p>
          <p className="fw-bold fs-5 pt-3">
          Pizza Delivery Driver, The Pizza Company, Phnom Penh
          </p>
          <p className=" text-muted fw-bold pt-3">May 2020 - August 2021 </p>
        </div>
      </section>
    </>
  );
};

export default About;
