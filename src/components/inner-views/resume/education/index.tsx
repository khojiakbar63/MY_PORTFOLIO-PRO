import { FC } from "react";
import "./_style.scss";
import { ResumeCard } from "../../../ui";
import ResumeDisplayTemplate from "../../../templates/resume-display";

const ResumeEducation: FC = () => {
  return (
    <div className="resume-education">
      <ResumeDisplayTemplate
        title="My Education"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
      >
        <div className="cards">
          <ResumeCard
            date="2020"
            title="Software Engineer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
          <ResumeCard
            date="2020"
            title="Software Engineer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
          <ResumeCard
            date="2020"
            title="Software Engineer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
          <ResumeCard
            date="2020"
            title="Software Engineer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
          <ResumeCard
            date="2020"
            title="Software Engineer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
          <ResumeCard
            date="2020"
            title="Software Engineer"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique soluta optio quo repellat sint pariatur, amet a harum provident sequi neque incidunt."
          />
        </div>
      </ResumeDisplayTemplate>
    </div>
  );
};

export default ResumeEducation;
