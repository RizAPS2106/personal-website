import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className="contact">
      <h1 className="title">Get Connected</h1>
      <hr className="title-line" />
      <div className="platforms">
        <a href="tel:+62895703071443" className="platform">
          <FaPhoneAlt size={50} />
        </a>
        <a href="mailto:rizkyaditya2106@gmail.com" className="platform">
          <FaEnvelope size={50} />
        </a>
        <a
          href="https://github.com/RizAPS2106"
          target="_blank"
          rel="noreferrer"
          className="platform"
        >
          <FaGithub size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/rizky-aditya-1512b6247/"
          target="_blank"
          rel="noreferrer"
          className="platform"
        >
          <FaLinkedin size={50} />
        </a>
        <a
          href="https://leetcode.com/RizAPS2106/"
          target="_blank"
          rel="noreferrer"
          className="platform"
        >
          <SiLeetcode size={50} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
