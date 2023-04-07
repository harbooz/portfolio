import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { HashLink } from "react-router-hash-link";
import { MdOutlineCodeOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function Header({ handleCloseMenu }) {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
      <header
        className={`header__section ${!activeMenu ? "mobile--menu" : ""}`}
      >
        <div className="my__name">
          <MdOutlineCodeOff /> cody
        </div>

        <Link className="close-menu" onClick={() => handleCloseMenu()}>
          <GrClose />
        </Link>
        <nav className="header__nav">
          <NavLink to="/#about" smooth onClick={() => handleCloseMenu()}>
            About
          </NavLink>
          <NavLink to="/#skills" smooth onClick={() => handleCloseMenu()}>
            Skills
          </NavLink>
          <NavLink to="/#education" smooth onClick={() => handleCloseMenu()}>
            Education
          </NavLink>
          <NavLink to="/#projects" smooth onClick={() => handleCloseMenu()}>
            Projects
          </NavLink>
          <NavLink to="/#contact" smooth onClick={() => handleCloseMenu()}>
            Contact
          </NavLink>
        </nav>
        <div className="download__cv">
          <Button title="Download CV" />
        </div>
      </header>
    </>
  );
}

export default Header;
const NavLink = styled(HashLink)`
  margin: 0 2rem;
  color: black;

  &:hover {
    color: var(--activeColor);
  }

  &.active {
    color: var(--activeColor);
  }
`;
