import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./_style.scss";

interface SquareBtnProps {
  children: React.ReactNode;
  path: string;
  className?: string;
}
const SquareBtn: FC<SquareBtnProps> = ({ children, path, className }) => {
  return (
    <NavLink className={`square-btn ${className}`} to={path}>
      {children}
    </NavLink>
  );
};

export default SquareBtn;
