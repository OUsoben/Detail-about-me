import React from "react";
import "../styles/about.css";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} =useTranslation()
  return (
    <>
      <div className="text-center">
        <h1 className="fw-bold">{t("about.h1")}</h1>

        <div className="justify-content-center mt-5">
          <p className="text-danger fw-bold name-font fs-5">{t("homepage.p7")}</p>
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
          <h1 className="fw-bold name-font "> {t("about.h2")}</h1>
          <p className="fs-5 p1-font">
            {" "}
            {t("about.p1")}
          </p>
          <h1 className="fw-bold name-font ">     {t("about.h3")}</h1>
          <hr />
          <p className="fw-bold pt-4">
            {" "}
          {t("about.h4")}
            <span className="ms-5 ps-5 "> {t("about.h5")}</span>
          </p>
          <div style={{ marginLeft: "200px" }} className="">
            <p className=" ">{t("about.p2")} </p>
          </div>
          <p className="fw-bold">
            {" "}
            {t("about.h6")}
            <span style={{ marginLeft: "82px" }} className="">
            {t("about.h7")}
            </span>
          </p>
          <div style={{ marginLeft: "201px" }} className="">
            <p className=" ">{t("about.p3")} </p>
          </div>
          <h1 className="fw-bold name-font mt-5 "> {t("about.h8")}</h1>
          <hr />
          <p className="fw-bold fs-5 pt-3">
          {t("about.h9")}
          </p>
          <p className="text-muted fw-bold pt-3">
            {t("about.p4")}{" "}
          </p>

          <p className="fw-bold fs-5 pt-3">
          {t("about.h10")}
          </p>
          <p className=" text-muted fw-bold pt-3">   {t("about.p5")} </p>
          <p className="fw-bold fs-5 pt-3">
          {t("about.h11")}
          </p>
          <p className=" text-muted fw-bold pt-3">   {t("about.p6")} </p>
        </div>
      </section>
    </>
  );
};

export default About;
