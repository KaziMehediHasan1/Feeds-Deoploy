import Image from "next/image";

const NewsCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold">{data.player?.name}</h2>
      <p className="text-gray-600">
        From <span className="font-semibold">{data.from_team?.name}</span>
      </p>
      <p className="text-gray-600">
        To <span className="font-semibold">{data.to_team?.name}</span>
      </p>
      <p className="mt-2 text-green-600 font-bold">
        Fee: {data.fee?.amount || "Undisclosed"}
      </p>
    </div>
  );
};

export default NewsCard;
