import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const H1 = styled.h1`
    background: #1976D2;
    padding: 0px 10px;
    font-size: 22px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:white;
`;

const Logo = () => (
  <span className="logo-section bf-logo">
    <a href="/" target="_blank">
      <img
        style={{ maxHeight: 50, verticalAlign: "middle" }}
        src="//d3cnqzq0ivprch.cloudfront.net/prod/css/images/logo_white.png"
        alt="BirdEye"
      />
    </a>
  </span>
);

const Header = ({ title, children }) => (
  <div>
    <H1 color="green">
      <Logo /><span
        style={{
          position: "relative",
          top: 2
        }}
      >
        {title}
      </span>
    </H1>
    <div>
      {children}
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string
};

export default Header;
