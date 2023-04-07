import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section id="contact" className="section contact__section">
      <div className="contact__content">
        <div className="contact__details">
          <h2>Let's get in touch</h2>
          <p>
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>
          <p>
            <strong>Living In:</strong> <br />
            30 Shacham street, Los Angeles, USA.
          </p>
          <p>
            <strong>Call:</strong>
            (+060) 444 434 444
          </p>
          <div>
            <ul className="social__link">
              <li>
                <Link to="/">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact__form">
          <h2>Estimate your Project?</h2>
          <form>
            <div className="form__group">
              <label>What is Your Name:</label>
              <input type="text" name="name" placeholder="" required />
            </div>
            <div className="form__group">
              <label>Your Email Address:</label>
              <input type="email" name="email" placeholder="" required />
            </div>
            <div className="form__group">
              <label>How can I Help you?:</label>
              <textarea
                name="message"
                placeholder=""
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form__cta">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <p className="copyright">cody © 2023. ALL RIGHTS RESERVED.</p>
    </section>
  );
}

export default Contact;
