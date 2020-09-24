import React, { useState } from "react";

import "./Footer.css";

function Footer() {
  const [language, setLanguage] = useState({
    language: ["en", "fr", "it", "de"],
  });

  const handleChange = (event, data) => {
    setLanguage(data.value);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>About</h3>
          <br />
          <ul>
            <a href="#">
              <li>Careers</li>
            </a>
            <a href="#">
              <li>Global information</li>
            </a>
            <a href="#">
              <li>About us</li>
            </a>
            <a href="#">
              <li>Development</li>
            </a>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Join us</h3>
          <br />
          <ul>
            <a href="#">
              <li>Trade on Amazon</li>
            </a>
            <a href="#">
              <li>Make your brand</li>
            </a>
            <a href="#">
              <li>Check Amazon Bussines</li>
            </a>
            <a href="#">
              <li>Partnership program</li>
            </a>
            <a href="#">
              <li>Advertise yourself</li>
            </a>
            <a href="#">
              <li>Amazon HUB</li>
            </a>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Payment methods</h3>
          <br />
          <ul>
            <a href="#">
              <li>PayCard</li>
            </a>
            <a href="#">
              <li>Gather points</li>
            </a>
            <a href="#">
              <li>Credit Cards</li>
            </a>
            <a href="#">
              <li>Gift Cards</li>
            </a>
            <a href="#">
              <li>Currency converter</li>
            </a>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Need help?</h3>
          <br />
          <ul>
            <a href="#">
              <li>Follow your orders</li>
            </a>
            <a href="#">
              <li>Delivery Options</li>
            </a>
            <a href="#">
              <li>Amazon Prime</li>
            </a>
            <a href="#">
              <li>Amazon Assistant</li>
            </a>
            <a href="#">
              <li>Customer Service</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__logo">
          <img
            className="footer__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>
        <div className="footer__languagePicker">
          <form action="" className="footer__languageForm">
            <label for="footer__languageSelect">Choose language</label>

            <select name="footer__languageSelect" id="language-picker-select">
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english" selected>
                English
              </option>
              <option lang="fr" value="francais">
                Français
              </option>
              <option lang="it" value="italiano">
                Italiano
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
