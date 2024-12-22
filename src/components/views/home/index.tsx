import { FC } from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa6";
import Container from "../../containers/container";
import Paragraph from "../../../typography/paragraph";
import { DownloadCV, SocialBtn } from "../../ui";
import Counter from "../../layouts/counters";
import "./_style.scss";

const HomeComponent: FC = () => {
  const text = `Hi, I'm Khojiakbar, a passionate Junior Full-Stack Developer skilled in building web applications with React, Next.js, Express.js, and MongoDB. Although I'm relatively new to the field, I’m eager to learn, grow, and take on new challenges. I’m excited to collaborate and build something great together as I continue to develop my skills.`;

  return (
    <section id="home" className="home">
      <Container>
        <div className="wrapper">
          <div className="left">
            <p className="job">Software Developer</p>

            <h1 className="greeting">
              Hello I'm <br />{" "}
              <span className="green">Khojiakbar Abdulakhatov</span>
            </h1>

            <Paragraph
              style={{ minHeight: "84px" }}
              text={
                <TypeAnimation
                  sequence={[text, 1000]} // Passing text directly as the sequence element
                  speed={40} // Typing speed
                />
              }
            />

            {/* ACTIONS */}
            <div className="actions">
              <DownloadCV />
              {/* SOCIAL BUTTONS */}
              <div className="socials">
                <SocialBtn path="https://github.com/khojiakbar63?tab=repositories">
                  <FaGithub />
                </SocialBtn>
                <SocialBtn path="https://www.linkedin.com/in/xojiakbar-abdulaxatov-b7aa31316/">
                  <RiLinkedinFill />
                </SocialBtn>
                <SocialBtn path="https://web.telegram.org/a/">
                  <FaTelegramPlane />
                </SocialBtn>
                <SocialBtn path="https://www.instagram.com/?hl=en">
                  <PiInstagramLogoFill />
                </SocialBtn>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <div className="cover">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src="/images/my.png"
                alt="Profile"
                className="my-photo"
              />
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <Counter /> {/* Call the Counter component here */}
      </Container>
    </section>
  );
};

export default HomeComponent;
