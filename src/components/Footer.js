import React from "react";
import "../styles/footer.css";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="p-5 border">
        <div className=" text-center pb-3 pt-4 ">
          <a target="_blank" href="https://github.com/OUsoben">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a target="_blank" href="https://t.me/ou_soben">
            <FontAwesomeIcon className="ms-4" icon={faTelegram} size="2x" />
          </a>
          <a target="_blank" href="https://www.facebook.com/pai.lav.507/">
            <FontAwesomeIcon className="ms-4" icon={faFacebook} size="2x" />
          </a>
          <a target="_blank" href="https://www.instagram.com/slidyy_smith/">
            <FontAwesomeIcon className="ms-4" icon={faInstagram} size="2x" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/soben-ou-107203288/"
          >
            <FontAwesomeIcon className="ms-4" icon={faLinkedin} size="2x" />
          </a>
          <a
            target="_blank"
            href="mailto:ousoben20@gmail.comsubject = Feedback&body = Message"
          >
        
            <FontAwesomeIcon className="ms-4" icon={faEnvelope} size="2x" />
          </a>
        </div>
        <div className="allrights text-center">
          <p className="p-0">
            © 2023 All Rights Reserved. Design by{"  "}
            <span
              style={{ fontWeight: "bolder" }}
              className=" text-weight-bold"
            >
              Ou Soben
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
