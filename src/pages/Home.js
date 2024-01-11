import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,

} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';
import i18n from "i18next"
const Home = () => {
  const {t} = useTranslation()
  return (
    <>
      <section className="container">
        <div className="row pt-5 ">
          <div className=" col-xl-6 pt-5 mt-5 p-5 ps-5 col-lg-5">
            <h1 className=" fw-bold">
            {t("homepage.h2")}
              <br />
              {t("homepage.h1")}
              <span className="ms-3">
                <img
                  style={{ width: "40px" }}
                  className="img-fluid mb-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/1200px-383-waving-hand-1.svg.png"
                  alt=""
                />
              </span>
            </h1>
            <p className="fs-5">
            {t("homepage.p1")}
            </p>
            <div className="">
              <p className="fw-bold">{t("homepage.p2")}</p>
              <span className="">
                <FontAwesomeIcon icon={faHtml5} color="orange" size="2x" />
                <FontAwesomeIcon
                  className="ms-4"
                  icon={faCss3Alt}
                  color="blue"
                  size="2x"
                />
                <FontAwesomeIcon className="ms-4" icon={faJs}size="2x" color="#FFFF02"/>
                <FontAwesomeIcon className="ms-4" icon={faBootstrap}size="2x" color="blue"/>
                <FontAwesomeIcon className="ms-4" icon={faReact}size="2x" color="#61DBFB"/>
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-12 ">
            <img
              className="img-fluid "
              src={require("../images/img-1.png")}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className=" mt-5 py-5 container">
        <div align="center" className="row mt-5 ms-5 me-5">
          <div className="col-xl-4   order-1 ">
            <img
              style={{ width: "20%" }}
              className="img-fluid rounded "
              src={require("../images/img-2.png")}
              alt="My photo"
            />
            <h3 className="fw-bold pt-3  ">{t("homepage.p7")}</h3>
            <hr className="text-danger" style={{width: "100px"}} />
            <p className="">{t("homepage.p6")}</p>
          </div>

          <div
            className=" col-xl-8 order-xl-2 
              p-5 "
          >  
             <h4 className="fw-bold"></h4>
            <p className="fs-5">
            {t("homepage.p3")} <span className="fw-bold">{t("homepage.p4")}</span> {" "} {t("homepage.p5")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
