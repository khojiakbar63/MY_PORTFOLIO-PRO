import { FC } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../containers/container";
import { RoundedBtn } from "../../ui/index";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

import "./_style.scss";

const Header: FC = () => {
  const handleMobileMenu = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav?.classList.toggle("show");
  };

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


          {/* DESKTOP NAVIGATION MENU */}
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
          <button onClick={handleMobileMenu} className="mobile-menu">
            <CiMenuFries />
          </button>

          {/* MOBILE NAVIGATION MENU */}
          <div className="mobile-nav">
            <button
              onClick={handleMobileMenu}
              className="mobile-menu"
              style={{ position: "absolute", top: "2rem", right: "1rem" }}
            >
              <GrClose />
            </button>

            {/* <h1 className="mobile-name">Khojiakbar <span className="dot">.</span></h1> */}
            <ul className="mobile-list">
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
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
