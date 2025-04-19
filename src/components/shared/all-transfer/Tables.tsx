import React from "react";

type THeader = [string, string, string, string, string, string];

type TPersonCell = {
  Image?: string;
  name?: string;
  position?: string;
};

type TRow = [TPersonCell, ...string[]];

type TProps = {
  ThName: THeader;
  TData: TRow[];
};

const Tables = ({ ThName, TData }: TProps) => {
  return (
    <div>
      <table className="w-full">
        <thead className="text-xs bg-gray-300/30 text-black/300 text-center">
          <tr>
            {ThName.map((head, idx) => (
              <th key={idx} className="border border-gray-300 px-4 py-2">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-xs bg-white text-center">
          {TData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {ThName.map((_, cellIndex) => {
                const cell = row[cellIndex];

                return (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cellIndex === 0 && typeof cell === "object" ? (
                      <div className="flex items-center gap-2">
                        {cell?.Image ? (
                          <img
                            src={cell.Image}
                            alt={cell.name || "Avatar"}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-300" />
                        )}
                        <div className="text-left">
                          <div className="font-medium">{cell?.name || "-"}</div>
                          <div className="text-xs text-gray-500">
                            {cell?.position || "-"}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>{cell ? (cell as string) : "-"}</>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
