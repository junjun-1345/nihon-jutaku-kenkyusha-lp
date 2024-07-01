import { CsvData, ContentData } from "@/types";
import React, { useState } from "react";
import Modal from "react-modal";

interface DataTableProps {
  data: CsvData[];
  contentData: ContentData[];
}

const GridSection: React.FC<DataTableProps> = ({ data, contentData }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ContentData | null>(null);

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

    const handleClick = () => {
      const content = contentData.find((item) => item.項目 === value);
      if (content) {
        setModalContent(content);
        setModalIsOpen(true);
      }
    };

    return (
      <td
        key={`${rowIndex}-${colIndex}`}
        className={`border px-4 py-2 text-center align-middle ${cellClass} ${
          colIndex === 0 ? "cursor-pointer text-blue-600 underline" : ""
        }`}
        rowSpan={rowSpan}
        onClick={colIndex === 0 ? handleClick : undefined}
      >
        {value}
      </td>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max">
        <table className="table-auto w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-200">
              {Object.keys(data[0] || {}).map((key) => (
                <th
                  key={key}
                  className="border px-4 py-2 text-center whitespace-nowrap"
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="項目の詳細"
        className="modal"
        overlayClassName="overlay"
      >
        {modalContent && (
          <div className="p-4">
            <h2 className="text-2xl mb-4">{modalContent.項目}</h2>
            <p className="mb-4">{modalContent.説明}</p>
            <ul className="list-disc list-inside">
              {modalContent.内容.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button
              onClick={() => setModalIsOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              閉じる
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GridSection;
