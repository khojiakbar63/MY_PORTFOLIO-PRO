import { FC } from "react";
import ResumeDisplayTemplate from "../../../templates/resume-display";
import "./_style.scss";

const ResumeAboutMe: FC = () => {
  return (
    <div className="resume-about-me">
      <ResumeDisplayTemplate
        title="About me"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti nam rem corporis eveniet dolorum fugiat dolore at voluptates sapiente."
      >
        <div className="wrapper">
          <ul className="list">
            <li className="item">
              <p className="title">
                Name <span className="info">Khojiakbar Abdulakhatov</span>
              </p>
            </li>

            <li className="item">
              <p className="title">
                Experience <span className="info">1+ years</span>
              </p>
            </li>

            <li className="item">
              <p className="title">
                Nationality <span className="info">Uzbek</span>
              </p>
            </li>
            <li className="item">
              <p className="title">
                Freelance <span className="info">Available</span>
              </p>
            </li>
          </ul>

          <ul className="list">
            <li className="item">
              <p className="title">
                Phone{" "}
                <a className="info" href="tel:+998885718777">
                  +9989(88)571-87-77
                </a>
              </p>
            </li>
            <li className="item">
              <p className="title">
                Telegram{" "}
                <a
                  className="info"
                  href="https://t.me/Xojiakbarrr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Xojiakbarrr
                </a>
              </p>
            </li>
            <li className="item">
              <p className="title">
                Instagram{" "}
                <a
                  className="info"
                  href="https://www.instagram.com/khojiakbar1199"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  khojiakbar1199
                </a>
              </p>
            </li>
            <li className="item">
              <p className="title">
                LinkedIn{" "}
                <a
                  className="info"
                  href="https://www.linkedin.com/in/linkedin_nick"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin_nick
                </a>
              </p>
            </li>
          </ul>
        </div>
      </ResumeDisplayTemplate>
    </div>
  );
};

export default ResumeAboutMe;
