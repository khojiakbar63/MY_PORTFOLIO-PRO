import { FC } from "react";
import Container from "../../containers/container";
import Paragraph from "../../../typography/paragraph";
import { CubeBadge, RoundedBtn } from "../../ui";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


import "./_style.scss";

const ContactComponent: FC = () => {
  return (
    <section className="contact">
      <Container>
        <div className="wrapper">
          <form className="form">
            <h3 className="title">Let's work together</h3>
            <Paragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius qui quo voluptate illum molestias, nisi culpa quos neque facilis?" />

            <div className="input_group">
              <input className="input" type="text" placeholder="Firstname" />
              <input className="input" type="text" placeholder="Lastname" />
            </div>

            <div className="input_group">
              <input className="input" type="email" placeholder="Your Email" />
              <input
                className="input"
                type="number"
                placeholder="Your Number"
              />
            </div>

            <div className="input_group column">
              <select className="input">
                <option selected>Select a service</option>
                <option value="web development">Web Development</option>
                <option value="ui/ux design">Ui/Ux Design</option>
              </select>
              <textarea
                rows={4}
                cols={10}
                className="input textarea"
                placeholder="Your Message"
              />
            </div>

            <RoundedBtn className="btn" path="#">
              Send Message
            </RoundedBtn>
          </form>

          <ul className="contact-list">
            <li className="contact-item">
              <CubeBadge>
                <FaPhoneAlt />
              </CubeBadge>
              <div className="contact-details">
                <p className="contact-label">Phone</p>
                <a className="contact-link" href="tel:+998(88)5718777">
                  +998(88)5718777
                </a>
              </div>
            </li>

            <li className="contact-item">
              <CubeBadge>
                <FaEnvelope />
              </CubeBadge>
              <div className="contact-details">
                <p className="contact-label">Email</p>
                <a className="contact-link" href="mailto:hojiakbar7796@mail.ru">
                  hojiakbar7796@mail.ru
                </a>
              </div>
            </li>

            <li className="contact-item">
              <CubeBadge>
                <FaLocationDot />
              </CubeBadge>
              <div className="contact-details">
                <p className="contact-label">Address</p>
                <a className="contact-link" href="#">
                  Tashkent, Uzbekistan
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ContactComponent;
