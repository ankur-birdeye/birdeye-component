import React from "react";

import "../src/table.css";

const Table = () => (
  <table className="container">
    <thead>
      <tr>
        <th>Site Name</th>
        <th>Business Name</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Yahoo</td>
        <td>Not Found</td>
        <td className="error">Business Not Found</td>
      </tr>
    </tbody>
  </table>
);

export default Table;
