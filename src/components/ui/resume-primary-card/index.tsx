import { FC } from "react";
import "./_style.scss";

interface IResumeCardProps {
  date: string;
  title: string;
  desc: string;
}

const ResumeCard: FC<IResumeCardProps> = ({date, title, desc}) => {
  return (
    <div className="resume-card">
      <h4 className="date">{date}</h4>
      <h3 className="title">{title}</h3>
      <p className="desc">{desc.slice(0, 40)}...</p>
    </div>
  );
};

export default ResumeCard;
