import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaExchangeAlt,
  FaWpforms,
  FaUserAlt,
  FaListUl,
} from "react-icons/fa";
import Typography from "../../components/Typography";

const StyledNav = styled.nav`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 56px;
  box-shadow: 0 0 3px #e0e0e0;
  background-color: #ffffff;
  display: flex;
`;

const StyledNavLink = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-decoration: none;
  ${({ $isActive }) => $isActive && `border-top: 0.125rem solid #00D1C1;`}
  svg {
    margin-bottom: 0.375rem;
  }
`;

const StyledNotificationIndicator = styled.span`
  background: #e33f37;
  width: 7px;
  height: 7px;
  display: block;
  border-radius: 50%;
  border: 2px solid #ffffff;
  position: absolute;
  left: 52%;
  top: 8px;
  z-index: 2;
`;

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navLinks = [
    { link: "Home", icon: FaHome },
    { link: "Passbook", icon: FaExchangeAlt },
    { link: "Billbox", icon: FaWpforms, hasNew: true },
    { link: "Profile", icon: FaUserAlt },
    { link: "More", icon: FaListUl },
  ];

  return (
    <StyledNav>
      {navLinks.map(({ link, icon, hasNew }) => (
        <StyledNavLink
          href="#"
          $isActive={activeTab === link}
          onClick={() => setActiveTab(link)}
          key={link}
        >
          {hasNew && <StyledNotificationIndicator role="presentation" />}
          {React.createElement(icon, {
            color: activeTab === link ? "#00D1C1" : "#000000",
            size: "1.25rem",
          })}
          <Typography
            as="span"
            color={activeTab === link ? "#00D1C1" : "#494949"}
            fontSize="0.75rem"
            $lineHeight="0.733rem"
          >
            {link}
          </Typography>
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};

export default NavBar;
