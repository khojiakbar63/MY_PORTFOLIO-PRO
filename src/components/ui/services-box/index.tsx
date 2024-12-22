import { FC } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import "./_style.scss";

interface ServicesBoxProps {
  order: number | string;
  jobTitle: string;
  desc: string;
}
const ServicesBox: FC<ServicesBoxProps> = ({order, jobTitle, desc}) => {
  return (
    <div className="box">
      <button className="btn"><BsArrowDownRight className="icon"/></button>
      <div className="number">{order}</div>
      <h2 className="job-title">{jobTitle}</h2>
      <p className="desc">
        {desc}
      </p>
    </div>
  );
};

export default ServicesBox;
