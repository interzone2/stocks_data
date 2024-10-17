'use client';

import React, { useEffect, useState } from 'react';

interface DataTableProps {
  columns: any[];
  data: any[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{
                  borderBottom: '2px solid #ddd',
                  padding: '8px',
                  textAlign: 'right', // Ensure alignment matches data cells
                  backgroundColor: '#333', // Dark background
                  color: '#fff', // Light text
                }}
              >
                {typeof column.header === 'function' ? column.header() : column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    borderBottom: '1px solid #ddd',
                    padding: '8px',
                    textAlign: 'right', // Ensure alignment matches headers
                  }}
                >
                  {typeof row[column.accessorKey] === 'function' ? row[column.accessorKey]() : row[column.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
