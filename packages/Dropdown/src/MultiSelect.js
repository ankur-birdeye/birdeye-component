import PropTypes from "prop-types";
import styled from "styled-components";

import React, { Component } from "react";
import DropdownWrapper from "./DropdownWrapper";

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected: [],
      options: props.options,
      placeholder: "Select",
      totalCount: props.options.length,
      selectedCount: props.options.filter((option) => option.checked).length
    };
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  };
  closeDropdown = () => {
    this.hide();
    var selectedOptions = this.state.options.filter((option) => option.checked);
    this.props.onBlur(selectedOptions);
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
  onClickOptions = (e, i) => {
    this.setPlaceHolder(e.target.checked);
    var options = this.state.options.slice();
    options[i].checked = e.target.checked;
    this.setState({
      options
    });
  };
  setPlaceHolder(checked) {
    var placeholder;
    var selectedCount = this.state.selectedCount;
    checked ? selectedCount++ : selectedCount--;
    if (selectedCount == 0) {
      placeholder = "Select";
    } else if (selectedCount == this.state.totalCount) {
      placeholder = "All Selected";
    } else {
      placeholder =
        selectedCount + " of " + this.state.totalCount + " selected";
    }
    this.setState({ selectedCount, placeholder });
  }

  selectAll = (e) => {
    var options = this.state.options.map((option) => {
      option.checked = e.target.checked;
      return option;
    });
    var selectedCount = e.target.checked ? this.state.totalCount : 0;
    var placeholder = e.target.checked ? "All Selected" : "Select";
    this.setState({ options, selectedCount, placeholder });
  };

  render() {
    return (
      <DropdownWrapper width={this.props.width}>
        <MultiSelectWrapper>
          {this.state.show &&
            <div className="click-overlay" onClick={this.closeDropdown} />}
          <div className="target">
            <button type="button" className="ms-choice" onClick={this.toggle}>
              <span className="">
                {this.state.placeholder}
              </span>
              <div
                className={
                  "icon icon-cheveron_close " + (this.state.show || "down")
                }
              />
            </button>

            <div
              className={(!this.state.show ? "hide " : "") + "ms-drop bottom"}
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
                <li className="">
                  <label className="">
                    <input
                      onChange={(e) => {
                        this.selectAll(e);
                      }}
                      value="all"
                      type="checkbox"
                      name={"selectAll"}
                      checked={
                        this.state.selectedCount == this.state.totalCount
                      }
                    />
                    <span
                      className={
                        "icon-checkbox icon-checkbox" +
                          (this.state.selectedCount == this.state.totalCount
                            ? "-3"
                            : "_unselected_16px")
                      }
                    />
                    <span>Select All</span>
                  </label>
                </li>
                {this.state.options.length > 0 &&
                  this.state.options.map((option, i) => (
                    <li key={option.value} className="" title={option.name}>
                      <label className="">
                        <input
                          onChange={(e) => {
                            this.onClickOptions(e, i);
                          }}
                          value={option.value}
                          type="checkbox"
                          name={"selectItem" + i}
                          checked={option.checked || false}
                        />
                        <span
                          className={
                            "icon-checkbox icon-checkbox" +
                              (option.checked ? "-3" : "_unselected_16px")
                          }
                        />
                        <span>{option.name}</span>
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
        </MultiSelectWrapper>
      </DropdownWrapper>
    );
  }
}

MultiSelect.propTypes = {
  onBlur: PropTypes.func,
  options: PropTypes.array,
  width: PropTypes.number
};

export default MultiSelect;

const MultiSelectWrapper = styled.div`
  border: 1px solid #ddd; 
  height: 26px;
  button{   
    height:24px;
    .icon{
      top: 6px;
      right: 11px;
      position:absolute;
    }
  }
  li{
    label{
      .icon-checkbox{
        margin-right:5px;
        color:#1976d2;
        font-size:16px;
      } 
    }
  }
`;
