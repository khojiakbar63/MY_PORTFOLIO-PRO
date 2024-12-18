import { FC } from "react";
import { ISocialBtn } from "../../../types";
import "./_style.scss";


const SocialBtn: FC<ISocialBtn> = ({ children, path }) => {
  return (
    <a className="social-btn" href={path} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default SocialBtn;
