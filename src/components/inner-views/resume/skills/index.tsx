import { FC } from "react";
import "./_style.scss";
import ResumeDisplayTemplate from "../../../templates/resume-display";
import { TechsCard } from "../../../ui";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandAstro } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

const ResumeSkills: FC = () => {
  return (
    <div className="resume-skills">
      <ResumeDisplayTemplate
        title="My Skills"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
      >
        {/* ------------------------ TECHS CARDS ------------------------ */}

        <div className="cards">
          <TechsCard title="HTML5">
            <FaHtml5 />
          </TechsCard>

          <TechsCard title="CSS3">
            <FaCss3Alt />
          </TechsCard>

          <TechsCard title="SASS">
            <FaSass />
          </TechsCard>

          <TechsCard title="BOOTSTRAP">
            <SiBootstrap />
          </TechsCard>

          <TechsCard title="TAILWIND CSS">
            <RiTailwindCssFill />
          </TechsCard>

          <TechsCard title="JAVASCRIPT">
            <FaJs />
          </TechsCard>

          <TechsCard title="GITHUB">
            <FaGithub />
          </TechsCard>

          <TechsCard title="ASTRO">
            <TbBrandAstro />
          </TechsCard>

          <TechsCard title="REACT">
            <FaReact />
          </TechsCard>

          <TechsCard title="EXPRESS">
            <SiExpress />
          </TechsCard>

          <TechsCard title="MONGODB">
            <SiMongodb />
          </TechsCard>

          <TechsCard title="SHADCN UI">
            <SiShadcnui />
          </TechsCard>
        </div>
      </ResumeDisplayTemplate>
    </div>
  );
};

export default ResumeSkills;
