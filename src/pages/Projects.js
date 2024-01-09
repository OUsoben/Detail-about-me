import React from 'react'
import "../styles/project.css"

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
              <h1 className='fw-bold'>Projects</h1>
        </div>
        <hr />
        <div className="row mt-2 py-5">
          <div className="col-xl-4 col-lg-5">
            <img className='img-fluid container' src="https://i.imgur.com/eFmAzaH.jpeg" alt="" />
          </div>
          <div className="ps-4 col-xl-7 p-2 col-lg-6 ">
            <h4 className='fw-bold '>The Sport Store powered by HTML/CSS/Javscript(React)</h4>
            <p className='text-muted'>1 min read</p>
          
            <div className="text-muted">The Sport Store powered by HTML/CSS/Javscript(React)</div>
        
            <p></p>
           <a className='btn btn-secondary mt-4' target='_blank' href="https://ousoben.github.io/final-project/">View more</a>
          </div>

        </div>
       
      </div>
    
    </>
  )
}

export default Projects