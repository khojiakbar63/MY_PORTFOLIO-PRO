import { FC } from "react";
import Paragraph from "../../../typography/paragraph";
import "./_style.scss";

interface ITemplate {
  title: string;
  text: string;
  children?: React.ReactNode;
}

const ResumeDisplayTemplate: FC<ITemplate> = ({ title, text, children }) => {
  return (
    <section className="area">
      <h2 className="title">{title}</h2>
      <Paragraph text={text} />

      {children}
    </section>
  );
};

export default ResumeDisplayTemplate;
