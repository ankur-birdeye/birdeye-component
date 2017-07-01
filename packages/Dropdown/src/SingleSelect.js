import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from "react";
import DropdownWrapper from "./DropdownWrapper";

class SingleSelect extends Component {
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
  onClickOption = (option) => {
    this.hide();
    this.props.onClick({
      selected: option
    });
    this.setState({
      selected: option
    });
  };
  render() {
    return (
      <DropdownWrapper width={this.props.width}>
        <Wrapper>
          {this.state.show &&
            <div className="click-overlay" onClick={this.hide} />}
          <div className="target">
            <button type="button" className="ms-choice" onClick={this.toggle}>
              <span className="">{this.state.selected.name || "Select"}</span>
              <div
                className={
                  "icon icon-cheveron_open " + (this.state.show ? "down" : "")
                }
              />
            </button>
            <div
              className={"ms-drop bottom " + (!this.state.show ? "hide" : "")}
            >
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
                            this.onClickOption(option);
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
            </div>
          </div>
        </Wrapper>
      </DropdownWrapper>
    );
  }
}

SingleSelect.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.array,
  width: PropTypes.number
};

export default SingleSelect;

const Wrapper = styled.div`
  background-color: #f4f4f4;
  button{  
    padding: 11px 11px;
    span{
      color: #0d47a1;
    }
  }
  .icon{
    top: 12px;
    right: 11px;
    position:absolute;
  }
  
  li{
    label{
      .icon-post_reply{
        font-weight: bold;
        font-size: 15px;
        position: absolute;
        right: 7px;
        top: 5px;
        color:#1976d2;
      }
    }
  }
  
`;
