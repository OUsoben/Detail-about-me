import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"
import { useTranslation } from 'react-i18next';
import i18n from "i18next"

const lngs =[
  {
    code: "en",
  },
  {
    code: "kh", 
  }
]

function NavBar() {
  const {t} = useTranslation()
  return (
    <Navbar  expand="lg"   className="  justify-content-between bg-white text-center sticky-top" >
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-nav cobar-nav">
          <Nav className="ms-auto p-2 ">
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/"}>{t("navbar.header1")}</NavLink>
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/about"}>About</NavLink>
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/projects"}>Projects</NavLink>
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/contact"}>Contact</NavLink>
            </Nav>
          
      
        </Navbar.Collapse>
   
       <div className="flag col-lg-1 col-md-1 col-sm-2 col-3  ms-auto "> 
    
             <img style={{width: "40px"}} className='img-fluid ' 
              key={lngs.code}
              type='submit'
              onClick={()=> i18n.changeLanguage(lngs.code)}
              src={t("navbar.flag")} alt=" Flag" /></div>
    </Navbar>
  );
}

export default NavBar;