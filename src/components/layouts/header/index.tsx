import { FC } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../containers/container";
import {RoundedBtn} from "../../ui/index";
import { CiMenuFries } from "react-icons/ci";
import "./_style.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="wrapper">
          {/* LOGO */}
          <div className="logo">
            <NavLink to={"/"} className="logo-title">
              Khojiakbar<span className="logo-title-dot">.</span>
            </NavLink>
          </div>

          {/* NAVIGATION MENU */}
          <ul className="list">
            <li className="item">
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li className="item">
              <NavLink className="link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="item">
              <NavLink className="link" to="/resume">
                Resume
              </NavLink>
            </li>
            <li className="item">
              <NavLink className="link" to="/work">
                Work
              </NavLink>
            </li>
            <li className="item">
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </li>
            {/* HIRE ME BUTTON */}

            <RoundedBtn path="hire-me">Hire me</RoundedBtn>
          </ul>



          {/* MOBILE MENU */}
          <div className="mobile-menu">
            <CiMenuFries />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
