import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:deepsinghanirudh@gmail.com" data-cursor="disable">
                Anurudh Singh
              </a>
            </p>
            <h4>Education</h4>
            <p>B-TECH IN IT</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/deepsingh-co"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/anurudh-singh-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app-"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/anurudh_singh"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/heyy_anirudh"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anurudh Singh</span>
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
