import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";



const H1 = styled.h1`
    background: #1976D2;
    padding: 0px 10px;
    height:60px;
    font-size: 22px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:white;
    .row{
      max-width:1200px;
      margin:0 auto;
      height:100%;
    }
    .right-nav{
      display: inline-block;
      float: right;
      padding: 19px 0;
    }
    .icon{
      margin-left:30px;
      cursor:pointer;
    }
    .icon-user:before{
      color:white;
    }
`;

const Logo = () => (
    <span className="logo-section bf-logo">
        <a href="/" target="_blank" style={{ verticalAlign: "text-top" }}>
            <img
                style={{ height: "50px", verticalAlign: "middle", paddingTop: "5px" }}
                src="//d3cnqzq0ivprch.cloudfront.net/prod/css/images/logo_white.png"
                alt="BirdEye"
            />
        </a>
    </span>
);

const Header = ({ title, children }) => (
    <div>
        <H1 color="green">
            <div className="row">
                <Logo />
                <span
                    style={{
                        position: "relative",
                        top: 2
                    }}
                >
                    {title}
                </span>
                <div className="right-nav">
                    <span className="icon icon-app_menu" />
                    <span className="icon icon-user" />
                    <span className="icon icon-hamburger" />
                </div>
            </div>
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
