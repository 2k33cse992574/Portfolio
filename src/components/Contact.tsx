import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:24110cn043@glbitm.ac.in"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — 24110cn043@glbitm.ac.in
              </a>
            </p>
            <p>
              <a
                href="tel:8299257424"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Phone — 8299257424
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science, GL Bajaj Institute of Technology and Management — 2024–2028
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/2k33cse992574"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/arin-sharma-302323353"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Arin Sharma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
