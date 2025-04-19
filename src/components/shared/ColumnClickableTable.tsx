"use client";

import React from "react";

// Define types for header and data
interface Header {
  key: string; // key will be used to access data in each row
  value: string; // value will be used as the display name in the header
  onClick?: (value: any) => void; // Optional click handler for the column
  id?: any;
}

interface RowData {
  [key: string]: any; // A row object where keys are dynamic and values can be string or number
}

interface TableProps {
  headers: Header[]; // An array of headers
  data: RowData[]; // An array of rows, each row is an object with dynamic keys and values
  isLoading?: boolean;
  isHoverable?: boolean;
}

const ColumnClickableTable = ({
  headers,
  data,
  isLoading = false,
  isHoverable = true,
}: TableProps) => {
  console.log("logging");

  const handleColumnClick = (header: Header, row: RowData) => {
    if (header.onClick) {
      // If the column has an onClick handler, call it with the row data
      // header.onClick(row[header.key]);
      header.onClick(row);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th key={header.id || index} className="p-2 text-left">
                {header.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-1 text-center text-gray-500"
              >
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="none"
                      d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                    ></path>
                  </svg>
                  Loading...
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-2 text-center text-gray-500"
              >
                There is no data
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
                } cursor-pointer ${isHoverable && "hover:bg-gray-200"}`}
              >
                {headers.map((header, headerIndex) => (
                  <td
                    key={headerIndex}
                    className={`px-2 py-1 ${
                      header.onClick ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      handleColumnClick(header, row);
                    }}
                  >
                    {row[header.key]} {/* Access data using header.key */}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ColumnClickableTable;
