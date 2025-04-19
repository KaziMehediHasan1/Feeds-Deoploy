"use client";
import Image from "next/image";
import dayjs from "dayjs";

type Team = {
  id: string;
  name: string;
  type: "club" | "national";
  gender: string;
};

type PlayerProfile = {
  id: string;
  profile: {
    name: string;
    gender: string;
    country: {
      id: string;
      name: string;
    };
    date_of_birth: string;
    height: number;
    position: string;
    foot: string;
  };
  teams: Team[];
};

type Props = {
  data: PlayerProfile;
};

const PlayerProfile: React.FC<Props> = ({ data }) => {
  const { profile, teams } = data;
  const age = dayjs().diff(profile.date_of_birth, "year");
  const birthDateFormatted = dayjs(profile.date_of_birth).format("MMM D, YYYY");

  const club = teams.find((t) => t.type === "club");
  const nationalTeam = teams.find((t) => t.type === "national");

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
        {/* Player Image */}
        <div className="flex-shrink-0">
          <Image
            src="/default-player.png"
            alt={profile.name}
            width={140}
            height={140}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Player Info */}
        <div className="w-full">
          {/* Name & Country */}
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl font-bold text-gray-800">
              #{data.id.slice(0, 2)} {profile.name}
            </h1>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
              c
            </span>
          </div>

          {/* Trophy icons (example) */}
          <div className="flex gap-4 mb-4">
            <div className="flex flex-col items-center">
              <Image src="/trophy1.png" width={32} height={32} alt="Trophy" />
              <span className="text-sm text-gray-500">3</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/trophy2.png" width={32} height={32} alt="Trophy" />
              <span className="text-sm text-gray-500">4</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[12px] text-gray-700">
            <p>
              <strong>Date of birth/Age:</strong> {birthDateFormatted} ({age})
            </p>
            <p>
              <strong>Height:</strong> {profile.height} cm
            </p>
            <p>
              <strong>Position:</strong> {profile.position}
            </p>
            <p>
              <strong>Foot:</strong> {profile.foot}
            </p>
            <p>
              <strong>Citizenship:</strong> {profile.country.name}
            </p>
            {club && (
              <p>
                <strong>Current club:</strong> {club.name}
              </p>
            )}
            {nationalTeam && (
              <p>
                <strong>National team:</strong> {nationalTeam.name}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Field Position */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <h2 className="text-gray-600 text-sm mb-2">Main position</h2>
        <div className="flex flex-col gap-1">
          <p className="text-sm">
            <strong>Main:</strong> {profile.position}
          </p>
          <p className="text-sm text-gray-500">Other positions: —</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
