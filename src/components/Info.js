import React from 'react'
import Mypic from "../images/Rectangle.png";
function About (){
    return(
        <>
        <div id='info-container'>
        <div id='img-container'>
         <img src={Mypic} alt='my pic'/>
         </div>
         <div id='info-content'>
         <h1>Laura Smith</h1>
         <p>Frontend Developer</p>
         <p>laurasmith.website</p>
         <a href='/'>
            <button>
                <i className="fa-solid fa-envelope"></i>
                Email
            </button>
          </a>
        </div>
        </div>
        </>
    )
}

export default About