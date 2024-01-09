import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const NotFoundPage = () => {
  let navigate = useNavigate()
  return (
    <>
   <div className=" d-flex justify-content-center p-5 mt-5">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocPeLb_-t8Hk0MTlTXCPo3pO5354Yjeu41kD_lTZbHsomjYjXK8IMHFYNKZz7x9cipmM&usqp=CAU" alt="Error image" />
   </div>
   <div className="text-center">
     <h3>404 pages not found</h3>
     <div className="container">
     <p className='text-muted'>This page doesn't exist or was incorect! 
    
     </p>
     <p className="text-muted ">
     We suggest you back to home
     </p>
     </div>
     <button className='btn btn-primary mb-5'
     onClick={()=>{
       navigate("/")
     }}
     >Back to home </button>
   </div>
    </>
  )
}

export default NotFoundPage