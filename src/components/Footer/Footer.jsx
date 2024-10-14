import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.newlogo} alt="" />

          <p>
            "Enjoy a world of flavours with our online food ordering platform!
            From savoury classics to exotic delights, top-rated restaurants and
            chefs prepare a diverse range of cuisines. Satisfy your cravings
            from the comfort of your own home, office, or on-the-go, with
            convenient delivery options that fit your schedule. Improve your
            dining experience today with our reliable platform, where
            convenience meets culinary excellence!"
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-1236-54-7869</li>
            <li>swigato13@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © 2024 SWIGATO.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
