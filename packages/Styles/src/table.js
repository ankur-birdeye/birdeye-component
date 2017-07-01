import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTable = styled.table`
  background: #fff;
  padding: 0 15px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  th {
    box-sizing: border-box;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    height: 44px;
    padding: 12px 0;
    width: 30px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  td {
    height: 44px;
    padding: 0;
    width: 30px;
    color: #212121;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  td.error {
    color: #e91e63;
  }
`;
const Table = ({ children }) => (
  <StyledTable
    style={{
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "18px"
    }}
  >
    {children}
  </StyledTable>
);

Table.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Table;
