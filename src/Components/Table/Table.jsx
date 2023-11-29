/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTable } from "react-table";
import "./Table.css";
const Table = ({ columns, data: initialData }) => {
  const [data, setData] = useState(initialData);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleAddRow = () => {
    const newRow = {};
    columns.forEach((column) => {
      newRow[column.accessor] = ""; // Initialize each cell with an empty string
    });
    setData([...data, newRow]);
  };

  const handleRemoveRow = (index) => {
    setData((prevData) =>
      prevData.filter((row, rowIndex) => rowIndex !== index)
    );
  };

  return (
    <div>
      <button onClick={handleAddRow} className="btnAddRow">add item +</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup,i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i} style={{backgroundColor:"black", color:"white"}}>
              {headerGroup.headers.map((column,i) => (
                <th {...column.getHeaderProps()} key={i} style={{ width: i === 0 ? '600px' : '120px',padding:"4px" }}>{column.render("Header")}</th>
              ))}
              
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row,i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell,i) => (
                  <td {...cell.getCellProps()} key={i} style={{ width: i === 0 ? '400px' : '100px' }}>
                    <input
                      type="text"
                      style={{ width: "100%",border: "border:1px solid lightgrey",padding:"5px 3px"}}
                      value={cell.value}
                      
                      onChange={(e) => {
                        const newValue = e.target.value;
                        setData((prevData) =>
                          prevData.map((prevRow, rowIndex) =>
                            rowIndex === row.index
                              ? { ...prevRow, [cell.column.id]: newValue }
                              : prevRow
                          )
                        );
                      }}
                    />
                  </td>
                ))}
                <td>
                  <button onClick={() => handleRemoveRow(row.index)} className="btnRemoveRow">
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
