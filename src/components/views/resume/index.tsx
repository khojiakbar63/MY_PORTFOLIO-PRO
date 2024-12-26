import { FC } from "react";
import Container from "../../containers/container";
import { SquareBtn } from "../../ui";
import { Outlet } from "react-router-dom";
import "./_style.scss";

const ResumeComponent: FC = () => {
  return (
    //  ---------------- Resume ----------------
    <section className="resume">
      <Container>
        {/*  ---------------- Wrapper ---------------- */}
        <div className="wrapper">
          {/* ---------------- Selection ---------------- */}
          <div className="selection">
            <h1 className="title">Why hire me?</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
 
            <div className="buttons">
              <SquareBtn path="/resume/experience">Experience</SquareBtn>
              <SquareBtn path="/resume/education">Education</SquareBtn>
              <SquareBtn path="/resume/skills">Skills</SquareBtn>
              <SquareBtn path="/resume/about-me">About me</SquareBtn>
            </div>
          </div>
          {/* ---------------- Display ---------------- */}
          <div className="display">
            <Outlet />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResumeComponent;
