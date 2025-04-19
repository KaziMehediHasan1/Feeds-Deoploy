"use client";

import React from "react";

// Define types for header and data
interface Header {
  key: string; // key will be used to access data in each row
  value: string; // value will be used as the display name in the header
}

interface RowData {
  [key: string]: any; // A row object where keys are dynamic and values can be string or number
}

interface TableProps {
  headers: Header[]; // An array of headers
  data: RowData[]; // An array of rows, each row is an object with dynamic keys and values
  isClickable?: boolean; // Optional prop to make rows clickable
  onRowClick?: (row: RowData) => void; // Callback function when a row is clicked
  isLoading?: boolean;
  isHoverable?: boolean;
}

const RowClickableTable = ({
  headers,
  data = [],
  isClickable = false,
  onRowClick,
  isLoading = false,
  isHoverable = true,
}: TableProps) => {
  const handleRowClick = (row: any) => {
    if (onRowClick) {
      onRowClick(row); // Execute the passed onRowClick function
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-2 text-left text-sm">
                {header.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            // If isLoading is true, show the loading spinner
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-2 text-center text-gray-500"
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
            // If data is empty, show "There is no data" message
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-2 text-center text-gray-500"
              >
                There is no data
              </td>
            </tr>
          ) : (
            // Render table rows if data exists
            data.map((row, index) => (
              <tr
                key={row.id || index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }  cursor-pointer ${isHoverable && "hover:bg-gray-200"}`}
                onClick={() => {
                  isClickable && handleRowClick(row);
                }} // Add onClick if isClickable is true
              >
                {headers.map((header) => (
                  <td key={header.key} className="px-2 py-2">
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

export default RowClickableTable;
