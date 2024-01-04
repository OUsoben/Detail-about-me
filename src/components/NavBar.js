import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"


function NavBar() {
  return (
    <Navbar  expand="lg"   className="  justify-content-between text-center sticky-top" >
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-nav cobar-nav">
          <Nav className="ms-auto p-2 ">
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/"}>Home</NavLink>
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/about"}>About</NavLink>
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/projects"}>Projects</NavLink>
            <NavLink className={"nav-link fw-bold ps-4 nav-links"} to={"/contact"}>Contact</NavLink>
            </Nav>
          
      
        </Navbar.Collapse>
   
       <div className="flag col-lg-1 col-md-1 col-sm-2 col-3  ms-auto "> 
              <img style={{width: "40px"}} className='img-fluid ' src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg" alt="England Flag" /></div>
    </Navbar>
  );
}

export default NavBar;