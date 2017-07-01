import styled from "styled-components";
//import * as colors from "./colors";

function setBackgroundColor({ type }) {
  return type == "secondary" ? "white" : "#0b78e3";
}

function setWidth({ size }) {
  return size == "full-width" ? "100%" : "auto";
}

const StyledButton = styled.button`
    border-radius: 2px;
    background-color: ${setBackgroundColor};
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.1),inset 0 1px 0 0 rgba(255,255,255,.13);
    display: inline-block;
    height: 36px;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    color: #fff;
    line-height: 36px;
    padding: 0 15px;
    min-width: 160px;
    border:none;
    outline:none;
    width:${setWidth};
`;

import React from "react";

const Button = (props) => <StyledButton {...props} />;

export default Button;
