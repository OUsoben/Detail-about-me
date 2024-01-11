import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"
import { useTranslation } from 'react-i18next';
import i18n from "i18next"
var lang = 'en';
const lngs = [
  {
    code: "en",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Cambodia_%283-2%29.svg/2560px-Flag_of_Cambodia_%283-2%29.svg.png",

  },
  {
    code: "kh",
    flag: "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
  }
]

const langs = {
  "en": {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Cambodia_%283-2%29.svg/2560px-Flag_of_Cambodia_%283-2%29.svg.png",
  },

  "kh": {
    "flag": "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
  }
}

function NavBar() {
  const { t } = useTranslation()
  return (
    <Navbar expand="lg" className="  justify-content-between bg-white text-center sticky-top" >
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-nav cobar-nav">
        <Nav className="ms-auto p-2 ">
          <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/"}>{t("navbar.header1")}</NavLink>
          <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/about"}>{t("navbar.header2")}</NavLink>
          <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/projects"}>{t("navbar.header3")}</NavLink>
          <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/contact"}>{t("navbar.header4")}</NavLink>
        </Nav>

      </Navbar.Collapse>

      <div className="flag col-lg-1 col-md-1 col-sm-2 col-3  ms-auto ">
        {


          <img style={{ width: "40px" }} className='img-fluid '
            key={lang}
            type='submit'
            onClick={() => {
              if (lang == "en")
                lang ="kh"
              else if (lang == "kh")
                lang = "en"
   
              i18n.changeLanguage(lang)
            }}
            src={langs[lang]["flag"]} alt=" Flag" />
        }
      </div>
    </Navbar>
  );
}

export default NavBar;