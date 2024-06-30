import { CsvData } from "@/types";
import React from "react";

interface DataTableProps {
  data: CsvData[];
}

const GridSection: React.FC<DataTableProps> = ({ data }) => {
  const processedData = data.map((row) => {
    return Object.values(row).map((cell) => (cell === "" ? null : cell));
  });

  const renderCell = (
    value: string | null,
    rowIndex: number,
    colIndex: number
  ) => {
    if (value === null) return null;

    let rowSpan = 1;
    for (let i = rowIndex + 1; i < processedData.length; i++) {
      if (processedData[i][colIndex] === null) {
        rowSpan++;
      } else {
        break;
      }
    }

    const cellClass = colIndex === 2 && rowIndex % 2 !== 0 ? "bg-gray-100" : "";

    return (
      <td
        key={`${rowIndex}-${colIndex}`}
        className={`border px-2 py-1 text-center align-middle ${cellClass}`}
        rowSpan={rowSpan}
      >
        {value}
      </td>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max">
        <p className="text-xs text-gray-500 mb-2">スクロールして表全体を表示</p>
        <table className="table-auto w-full border-collapse text-xs">
          <thead>
            <tr className="bg-gray-200">
              {Object.keys(data[0] || {}).map((key) => (
                <th
                  key={key}
                  className="border px-2 py-1 text-center whitespace-nowrap"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {processedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, colIndex) =>
                  renderCell(value, rowIndex, colIndex)
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GridSection;
