import { FC } from "react";
import { IRoundedBtn } from "../../../types";
import { NavLink } from "react-router-dom";
import "./_style.scss";

const RoundedBtn: FC<IRoundedBtn> = ({ children, path, className }) => {
  return <NavLink to={path} className={`rounded-btn ${className}`}>{children}</NavLink>;
};

export default RoundedBtn;
