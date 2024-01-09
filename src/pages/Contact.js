import React from 'react'
import "../styles/contect.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  
  return (
    
    <>
    
    <div class="container mt-5 py-5">
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-8">
            <form id="regForm">
           
                <div class="all-steps" id="all-steps"> 
                  <span class="step"><a target="_blank" href="https://github.com/OUsoben">
            <FontAwesomeIcon icon={faGithub} color='blue' />
          </a></span> 
                  <span class="step"><a target="_blank" href="https://t.me/ou_soben">
            <FontAwesomeIcon className="" icon={faTelegram}  />
          </a></span>
                  <span class="step">  <a target="_blank" href="https://www.facebook.com/pai.lav.507/">
            <FontAwesomeIcon  icon={faFacebook} />
          </a></span>
                  <span class="step"><a target="_blank" href="https://www.instagram.com/slidyy_smith/">
            <FontAwesomeIcon  icon={faInstagram}  />
          </a></span>
          <span class="step"><a target="_blank" href="https://www.linkedin.com/in/soben-ou-107203288/">
            <FontAwesomeIcon  icon={faLinkedinIn}  />
          </a></span>
          <span class="step"> <a
            target="_blank"
            href="mailto:ousoben20@gmail.com"> 
            <FontAwesomeIcon icon={faEnvelopeCircleCheck}  />
          </a>
         </span>
        
                
                </div>

              
                <div class="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" class="mb-4"/>
                    <h3>Thank you for your Watching!</h3> Thanks for you view my personal information. It's let you to know me more
                </div>
               
            </form>
        </div>
    </div>
</div>
</>
  )
}

export default Contact