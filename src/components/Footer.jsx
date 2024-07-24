import React from 'react'

import { AiOutlineTwitter } from "react-icons/ai";  
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-div">
            <h3>About Me</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="icons">
                <div className="icon"><AiOutlineTwitter /></div>
                <div className="icon"><TiSocialFacebook /></div>
                <div className="icon"><FaInstagram /></div>
            </div>
        </div>
        <div className="footer-div">
            <h3>Usefull Links</h3>
            <ul>
                <li>Family Law</li>
                <li>Drug Law</li>
                <li>Insurance Law</li>
                <li>Criminal Law</li>
                <li>Business Law</li>
            </ul>
        </div>
        <div className="footer-div">
            <h3>Quick Links</h3>
            <ul>
                <li>About Us</li>
                <li>Practice Areas</li>
                <li>Appointment</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className="footer-div">
            <h3>Have a Questions?</h3>
            <ul>
                <li><IoLocationSharp />  203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li><FaPhoneAlt /> +2 392 3929 210</li>
                <li><BiSolidMessageSquareEdit /> info@yourdomain.com</li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer