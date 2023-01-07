import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Cox</h1>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/cox-musyoki-62ab96185/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/coxmd"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="t.me/+254758812780"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-telegram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Cox Musyoki. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
