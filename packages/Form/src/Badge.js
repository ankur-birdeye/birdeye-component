import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Span = styled.span`
    display: inline-block;
    padding: 2px 12px;
    font-size: 11px;
    font-weight: 500;
    color: #fff;
    background-color: #1976d2;
    border-radius: 28px;
    margin-left: 12px;
    min-width: 65px;
    height: 24px;
    text-align: center;
    position: relative;
    top: -2px;
    line-height: 2;
    letter-spacing: .5px;
`;

const Badge = ({ children }) => (
  <Span>
    <b>{children}</b>
  </Span>
);

Badge.propTypes = {
  children: PropTypes.string
};

export default Badge;
