import PropTypes from "prop-types";
import styled from "styled-components";

import React, { Component } from "react";

class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  showDropdown = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Wrapper float={this.props.float || "left"}>
        <span className="icon-download" />
        {this.props.children}
      </Wrapper>
    );
  }
}

Popover.propTypes = {
  children: PropTypes.element,
  float: PropTypes.string
};

PropTypes.defaultProps = {
  float: "left"
};

export default Popover;

const floatPosition = {
  left: {
    boxShadow: "2px 2px 2px 0 rgba(0,0,0,.15)",
    left: 0,
    right: "auto"
  },
  right: {
    boxShadow: "-2px 2px 2px 0 rgba(0,0,0,.15)",
    left: "auto",
    right: 0
  }
};

const Wrapper = styled.span`
  display:inline-block;
  position:relative;
  cursor:pointer;
  .icon-download{
    padding:10px;
    display:inline-block;
  }
  
  ul{
    position: absolute;
    z-index: 1;
    top: 28px;
    left:${({ float }) => floatPosition[float].left};
    right:${({ float }) => floatPosition[float].right};
    font-size: 12px;
    display: none;
    box-shadow: ${({ float }) => floatPosition[float].boxShadow}
  }
  &:hover{
    &>ul{ 
      display:inline-block;
    } 
  }
  li{
    background-color: #fff;
    border-top: solid 1px #f4f4f4;
    color: #666;
    box-sizing: border-box;
    &:hover{
      a{
        color: #1976d2;
      }
    }
  }
  a{
    box-sizing: border-box;
    color: #666;
    display: inline-block;
    padding: 10px 40px;
    white-space: nowrap;
    line-height: normal;
    text-decoration:none;
  }
  
`;
