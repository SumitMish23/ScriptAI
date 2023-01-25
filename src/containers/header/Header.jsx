import React from "react";
import "./header.css";
import AI from "../../assets/ai.png";
import People from "../../assets/people.png";

const Header = () => {
 function handleMouseChange(e){
 e.target.style.backgroundColor="white"
 }

  return (
    <>
      <div className="header-main" onMouseMove={(e)=>handleMouseChange(e)}>
        <div className="header-main-text-content">
          <div className="heading">
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          </div>
          <div className="paragraph">
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Your Email Address" />
            <button>Get Started</button>
          </div>
          <div className="testimonials">
            <div className="img-testimonials">
              <img src={People} alt="" srcset="" />
            </div>
            <span>1,600 people requested access a visit in last 24 hours</span>
          </div>
        </div>

        <div className="header-main-image">
          <img src={AI} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Header;
