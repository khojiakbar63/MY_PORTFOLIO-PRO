import { FC } from "react";
import { IRoundedBtn } from "../../../types";
import { NavLink } from "react-router-dom";
import "./_style.scss";

const RoundedBtn: FC<IRoundedBtn> = ({ children, path }) => {
  return <NavLink to={path} className="rounded-btn">{children}</NavLink>;
};

export default RoundedBtn;
