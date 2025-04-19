import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Transfer {
  id: number;
  player: {
    id: string;
    name: string;
    gender: string;
    position: string;
  };
  from_team: {
    id: string;
    name: string;
    type: string;
    gender: string;
  };
  to_team: {
    id: string;
    name: string;
    type: string;
    gender: string;
  };
  type: { id: number; name: string };
  date_confirmed: string;
  contract: { date_from: string; date_to: string };
  fee: { amount: number | null; currency: string | null };
}

const TransferCard = ({ data }: { data: Transfer }) => {
  return (
    <div className="border border-gray-300 shadow-sm rounded-xl p-6 max-w-md mx-auto">
      <h3 className="bg-[#041C44] text-white text-lg font-semibold p-3">
        LAST TRANSFERS
      </h3>
      {/* Header with Player Name and Position */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {data.player.name}
            </h2>
            <p className="text-sm text-gray-500">{data.player.position}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500">{data.type.name}</span>
      </div>

      {/* Transfer From and To */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">From</p>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-lg font-bold">{data.from_team.name}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">To</p>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-lg font-bold text-green-600">
              {data.to_team.name}
            </p>
          </div>
        </div>
      </div>

      {/* Date Confirmed */}
      <p className="text-center text-sm text-gray-500 mb-2">
        Confirmed on:{" "}
        <span className="font-semibold">{data.date_confirmed}</span>
      </p>

      {/* Contract Dates */}
      <p className="text-center text-sm text-gray-500 mb-4">
        Contract:{" "}
        <span className="font-semibold">{data.contract.date_from}</span> →{" "}
        <span className="font-semibold">{data.contract.date_to}</span>
      </p>

      {/* Transfer Fee */}
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-900 mb-2">Transfer Fee</p>
        <p className="text-2xl font-bold text-green-600">
          {data.fee.amount
            ? `${data.fee.amount} ${data.fee.currency}`
            : "Undisclosed"}
        </p>
      </div>

      {/* Footer with 'All Transfers' link */}
      <a href="#" className="text-blue-500 text-sm mt-4 block text-center">
        All transfers &gt;
      </a>
    </div>
  );
};

export default TransferCard;
