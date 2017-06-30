import PropTypes from "prop-types";
import styled from "styled-components";
import "../../Styles/src/style.css";

import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected: {},
      options: props.options
    };
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  };
  hide = () => {
    this.setState({ show: false });
  };
  filterOptions = (event) => {
    var value = event.target.value;
    var filteredOptions = this.props.options.filter(
      (option) => option.name.indexOf(value) != -1
    );
    this.setState({ search: event.target.value, options: filteredOptions });
  };

  onClickOption = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <Wrapper width={this.props.width}>
        <div className="click-overlay" onClick={this.hide} />
        <div className="target">
          <button type="button" className="ms-choice" onClick={this.toggle}>
            <span className="">{this.state.selected.name || "Select"}</span>
            <div
              className={
                "icon icon-cheveron_" + (this.state.show ? "open" : "close")
              }
            />
          </button>

          {this.state.show &&
            <div className="ms-drop bottom">
              <div className="ms-search">
                <input
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  placeholder="Find"
                  onChange={this.filterOptions}
                />
                <span className="icon-search" />
              </div>
              <ul>
                {this.state.options.length > 0 &&
                  this.state.options.map((option, i) => (
                    <li key={i} className="" title={option.name}>
                      <label className="">
                        <input
                          onChange={() => {
                            this.props.onClick({
                              selected: option
                            });
                            this.setState({
                              selected: option
                            });
                          }}
                          value={option.value}
                          type="radio"
                          name="selectItem"
                          checked={option.value == this.state.selected.value}
                        />
                        <span>{option.name}</span>
                        {option.value == this.state.selected.value &&
                          <span className="icon-post_reply" />}
                      </label>
                    </li>
                  ))}
                {this.state.options.length == 0 &&
                  <li className="ms-no-results">
                    No matches found
                  </li>}
              </ul>
            </div>}
        </div>
      </Wrapper>
    );
  }
}

Dropdown.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.array,
  width: PropTypes.number
};

export default Dropdown;

const Wrapper = styled.div`
  display:inline-block;
  border: 0;
  background-color: #f4f4f4;
  border-radius: 0;
  position:relative;
  
  width:${({ width = 100 }) => width + "%"};
  .target{
    z-index: 2;
    position:relative;
  }
  .click-overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
}
  
  button{  
    padding: 11px 11px;
    background: transparent;
    outline:none;
    border: none;
    width: 100%;
    text-align: left;
    span{
      color: #0d47a1;
      padding-left: 0;
      padding-right: 15px;
    }
  }
  .icon{
    top: 3px;
    margin-top: 10px;
    bottom: 0;
    right: 11px;
    position:absolute;
  }
  .ms-search{
    padding: 4px;
    position:relative;
    input{
      background: 0 0;
      border: 1px solid #B0B1B1;
      color: #434343;
      width: 100%;
      transition: border-color .2s linear 0s;
      padding: 0 20px 0 5px;
      outline: none;
      min-height: 24px;
    }
    .icon-search{
      right: 9px;
      top: 8px; 
      position:absolute;
    }
  }
  .ms-drop{
    box-shadow: 0 4px 5px rgba(0,0,0,.15);
    border-radius: 0;
    border: 0 solid #ccc;
    color: #434343;
    margin-top: 1px;
    max-height: 250px;
    background-color:white;
    width:100%;
    position:absolute;
  }
  input{
    width:100%;
  }
  li{
    font-size: 12px;
    border-bottom: 1px solid #f4f4f4;
    :hover{
      color:#1976d2;
    }
   
    input{
      display:none;
    }
    label,&.ms-no-results{
      width: 100%;
      padding: 6px 8px;
      display: inline-block;
      position:relative;
      .icon-post_reply{
        font-weight: bold;
        position: absolute;
        right: 7px;
        top: 7px;
        color:#1976d2;
        font-weight:bold;
      }
    }
    span{
      vertical-align: middle;
    }
  }
  
`;
