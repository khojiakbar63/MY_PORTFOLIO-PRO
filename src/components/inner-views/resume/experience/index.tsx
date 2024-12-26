import { FC } from "react";
import { ResumeCard } from "../../../ui";
import ResumeDisplayTemplate from "../../../templates/resume-display";
import "./_style.scss";

const ResumeExperience: FC = () => {
  return (
    <div className="resume-experience">
      <ResumeDisplayTemplate
        title="My Experience"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
      >
        <div className="cards">
          <ResumeCard
            date="2019 - Present"
            title="Software Engineer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
          <ResumeCard
            date="2020 - Summer"
            title="Software Engineer"
            desc="This a description."
          />
          <ResumeCard
            date="2023 - Present"
            title="Frontend Developer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
          <ResumeCard
            date="2000 - Autumn"
            title="Backend Developer"
            desc="This a description."
          />
        </div>
      </ResumeDisplayTemplate>
    </div>
  );
};

export default ResumeExperience;
