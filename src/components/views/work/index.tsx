import { FC } from "react";
import "./_style.scss";
import Paragraph from "../../../typography/paragraph";
import Container from "../../containers/container";
import { FaGithub } from "react-icons/fa6";
import { GiBottomRight3dArrow } from "react-icons/gi";

const WorkComponent: FC = () => {
  return (
    <section className="work">
      <Container>
        <div className="wrapper">
          <div className="content">
            <h1 className="orders">03</h1>
            <h2 className="project-type-title">Fullstack Project</h2>
            <Paragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates asperiores vel laborum voluptas placeat molestias aspernatur cum ad temporibus!" />
            <ul className="tech-list">
              <li className="item">Next.js</li>
              <li className="item">Tailwind.css</li>
              <li className="item">Node.js</li>
            </ul>

            <div className="actions">
              <button className="circle-btn">
                <GiBottomRight3dArrow />
              </button>
              <button className="circle-btn">
                <FaGithub />
              </button>
            </div>
          </div>
          <div className="swiper">
            <img src="/public/images/web.webp" alt="img" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkComponent;
