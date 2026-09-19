import React, { useState, useEffect } from "react";
import "./DataTable.css";

const DataTable = ({ data, columns, rowsPerPage }) => {
  console.log("DataTable rendered with data:", data);
  console.log("DataTable rendered with columns:", columns);
  const [activepage, setActivePage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [filteredData, setFilteredData] = useState([]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setActivePage(newPage);
      setFilteredData(
        data.slice((newPage - 1) * rowsPerPage, newPage * rowsPerPage),
      );
    }
  };
  useEffect(() => {
    setFilteredData(data.slice(0, rowsPerPage));
  }, [data]);
  return (
    <>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => handlePageChange(activepage - 1)}>
          Previous
        </button>
        <div>{activepage}</div>
        <button onClick={() => handlePageChange(activepage + 1)}>Next</button>
      </div>
    </>
  );
};

export default DataTable;
