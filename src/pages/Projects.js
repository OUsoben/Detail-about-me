import React from 'react'
import "../styles/project.css"
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className="container">
        <div className="text-center">
              <h1 className='fw-bold'>{t("project.h1")}</h1>
        </div>
        <hr />
        <div className="row mt-2 py-5">
          <div className="col-xl-4 col-lg-5">
            <img className='img-fluid container' src="https://i.imgur.com/eFmAzaH.jpeg" alt="" />
          </div>
          <div className="ps-4 col-xl-7 p-2 col-lg-6 ">
            <h4 className='fw-bold '>{t("project.h2")}</h4>
            <p className='text-muted'>{t("project.p1")}</p>
          
            <div className="text-muted">The Sport Store</div>
        
            <p></p>
           <a className='btn btn-secondary mt-4' target='_blank' href="https://ousoben.github.io/final-project/">{t("project.btn")}</a>
          </div>

        </div>
       
      </div>
    
    </>
  )
}

export default Projects