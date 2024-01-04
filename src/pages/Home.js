import React from 'react'
import "../styles/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
const Home = () => {
  return (
    <>
        <section className="container">
                <div className="row mt-5 pt-5 ">
                  <div className=" col-xl-6 pt-5 mt-5 p-5  col-lg-5">
                      <h1 className=' fw-bold'>Front-End React 
                      <br />
                      Developer
                      <span className='ms-3'>
                         <img style={{width:"40px"}} className='img-fluid mb-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/1200px-383-waving-hand-1.svg.png" alt="" /></span>
                       </h1>
                       <p>Hi, I'm Ou Soben.A passionate Front-end React Developer based in Phnom penh</p>
                       <a target='_blank' style={{}} className='me-3' href="https://t.me/ou_soben"><FontAwesomeIcon icon={faTelegram} size='2x' /></a>
                       <a target='_blank' href="https://github.com/OUsoben"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                  </div>
                  <div className="col-xl-6 col-lg-7 col-12 ">
                    <img  className='img-fluid ' src={require("../images/img-1.png")}alt="" />
                  </div>
                </div>
        </section>
   
        <section className='container  mt-5 justify-content-center '>
            <div  align="center" className="row container mt-5  ">
              <div className="col-xl-6   order-1 ms-5col-md-12 ">
                <img   style={{width:"20%"}} className='img-fluid rounded ' src={require("../images/img-2.png")} alt="My photo" />
                    <h3 className='fw-bold pt-3 container '>Ou Soben</h3>
                    <hr />
                    <p className=''>It All Begins With A Passion.</p>
              </div>
            
              <div className=" col-xl-6 order-xl-2 
              p-5 ">
                <p className='fs-5'>My name's Ou soben. I'm 21 years old. I am from Phnom Penh,and I'm Currently a third-year student pursuing a Bachelor's Degree in Computer Science at Royal University of Phnom Penh. </p>
              </div>
            </div>
        </section>
    </>
  )
}

export default Home