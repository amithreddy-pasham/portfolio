
import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone,FaGithub } from "react-icons/fa"; // Icons for LinkedIn, Email, and Phone
export default function ContactMe() {
  return (
    
    <section id="Contact" className="contact--section">
      <h2 className="connect--heading" style={{marginTop:"25px"}}>Let's Connect</h2>
        <div className="connect--container">
        
        <p className="connect--description" >
          Feel free to reach out to me via email, phone, or LinkedIn.
        </p>
        <div className="connect--details">
          {/* Email */}
          <div className="connect--item">
            <FaEnvelope className="connect--icon" />
            <a href="mailto:your.email@example.com" className="connect--link">
              amithreddypasham9@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="connect--item">
            <FaPhone className="connect--icon" />
            <a href="tel:+13127258242" className="connect--link">
              +13127258242
            </a>
          </div>
          <div className="connect--item">
            <FaGithub className="connect--icon" />
            <a
               href="https://github.com/amithreddy-pasham"
              target="_blank"
              rel="noopener noreferrer"
              className="connect--link"
            >
              Github
            </a>
          </div>
          {/* LinkedIn */}
          <div className="connect--item">
            <FaLinkedin className="connect--icon" />
            <a
               href="http://www.linkedin.com/in/amithreddypasham"
              target="_blank"
              rel="noopener noreferrer"
              className="connect--link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
