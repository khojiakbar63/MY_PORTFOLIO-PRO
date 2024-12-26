import { FC } from "react";
import './_style.scss'

interface ITechsProps {
  children: JSX.Element | JSX.Element[]; // Correctly defines children as JSX elements
  title: string;
}

const TechsCard: FC<ITechsProps> = ({ children, title }) => {
  return <div title={title} className="techs-card">{children}</div>;
};

export default TechsCard;
