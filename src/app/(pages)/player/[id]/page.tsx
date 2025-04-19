"use client";

import React, { useEffect, useState } from "react";
import CommonWrapper from "@/components/shared/CommonWrapper";
import SubHeading from "@/components/home/shared/SubHeading";

interface Player {
  id: string;
  name: string;
  gender: string;
  nationality: string;
  dateOfBirth: string;
  height: number;
  position: string;
  foot: string;
  teams: string[];
  lastUpdated: string;
  image: string;
  bio: string;
  width: number;
}

const defaultPlayer: Player = {
  id: "RASMUS-NIELSEN-KRISTENSEN",
  name: "Rasmus Kristensen",
  gender: "Male",
  nationality: "Denmark",
  dateOfBirth: "1997-07-11",
  height: 187,
  position: "Defender",
  foot: "Right",
  teams: ["Eintracht Frankfurt", "Denmark"],
  lastUpdated: "2025-04-16T17:49:04Z",
  image:
    "https://img.a.transfermarkt.technology/portrait/header/167722-1726135167.png?lm=1",
  bio: "Rasmus Kristensen is a Danish professional footballer who plays as a right-back for Eintracht Frankfurt on loan from Leeds United, and the Denmark national team.",
  width: 50,
};

const PlayerDetails: React.FC = () => {
  const [player, setPlayer] = useState<Player>(defaultPlayer);

  const getAge = (dob: string): number => {
    const birth = new Date(dob);
    const ageDifMs = Date.now() - birth.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div>
      <CommonWrapper>
        <div className="bg-[#E9E9E9] p-2">
          <SubHeading subHeading="Player Profile" />
          <div className="p-3 border border-gray-400 bg-white">
            <p className="text-3xl font-semibold">{player.name}</p>
            <div className="py-2 flex flex-col md:flex-row gap-3">
              <div>
                <img
                  src={player.image}
                  alt={player.name}
                  className="max-w-[120px] h-auto border-2 border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4">
                  <InfoCard label="Name" value={player.name} />
                  <InfoCard
                    label="Date of Birth / Age"
                    value={`${player.dateOfBirth} (${getAge(
                      player.dateOfBirth
                    )})`}
                  />
                  <InfoCard label="Height" value={`${player.height} cm`} />
                  <InfoCard label="Gender" value={player.gender} />
                  <InfoCard label="Nationality" value={player.nationality} />
                  <InfoCard label="Position" value={player.position} />
                  <InfoCard label="Preferred Foot" value={player.foot} />
                  <InfoCard label="Teams" value={player.teams.join(", ")} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 mt-4 border border-gray-400 bg-white">
            <SubHeading subHeading="Player Data" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <InfoCard label="Name" value={player.name} />
              <InfoCard
                label="Age"
                value={getAge(player.dateOfBirth).toString()}
              />
              <InfoCard label="Date of Birth" value={player.dateOfBirth} />
              <InfoCard label="Position" value={player.position} />
              <InfoCard label="Height" value={`${player.height} cm`} />
              <InfoCard label="Width" value={`${player.width} cm`} />
              <InfoCard label="Nationality" value={player.nationality} />
              <InfoCard label="Gender" value={player.gender} />
            </div>
            <p className="mt-2 text-[#333] text-sm">{player.bio}</p>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

interface InfoCardProps {
  label: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-900 font-semibold">{label}</p>
    <p className="text-base text-gray-800">{value}</p>
  </div>
);

export default PlayerDetails;

/* 
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  fetchPlayerData,
  PlayerData,
} from "@/components/utils/fetchPlayerData";
import CommonWrapper from "@/components/shared/CommonWrapper";
import SubHeading from "@/components/home/shared/SubHeading";

const PlayerDetails = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlayer = async () => {
      const data = await fetchPlayerData();
      console.log("Fetched Data:", data); 
      setPlayer(data);
      setLoading(false);
    };

    loadPlayer();
  }, []);

  const getAge = (dob: string): number => {
    const birth = new Date(dob);
    const ageDifMs = Date.now() - birth.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  if (loading) {
    return <p className="text-center text-lg mt-10">Loading player data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  if (!player) {
    return <p className="text-center text-red-500 mt-10">Player not found.</p>;
  }

  return (
    <CommonWrapper>
      <div className="bg-[#E9E9E9] p-2">
        <SubHeading subHeading="Player Profile" />
        <div className="player-profile">
          <div className="player-info">
            <h2 className="text-xl font-bold">{player.name}</h2>
            <p>
              <strong>Gender:</strong> {player.gender}
            </p>
            <p>
              <strong>Country:</strong> {player.country.name}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {new Date(player.date_of_birth).toLocaleDateString()}
            </p>
            <p>
              <strong>Height:</strong> {player.height} cm
            </p>
            <p>
              <strong>Position:</strong> {player.position}
            </p>
            <p>
              <strong>Foot:</strong> {player.foot}
            </p>
            <p>
              <strong>Age:</strong> {getAge(player.date_of_birth)} years old
            </p>
          </div>

          <div className="player-teams">
            <h3 className="text-lg font-semibold">Teams</h3>
            <ul>
              {player.teams.map((team) => (
                <li key={team.id}>
                  <strong>{team.name}</strong> ({team.type})
                </li>
              ))}
            </ul>
          </div>

          <div className="player-updated">
            <p>
              <strong>Last Updated:</strong>{" "}
              {new Date(player.updated_at).toLocaleString()}
            </p>
            <p>
              <strong>Deleted:</strong> {player.is_deleted ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default PlayerDetails; */

/* import SubHeading from "@/components/home/shared/SubHeading";
import CommonWrapper from "@/components/shared/CommonWrapper";
import React from "react";

type Props = {};

const PlayerDetails = (props: Props) => {
  const player = {
    id: "RASMUS-NIELSEN-KRISTENSEN",
    name: "Rasmus Kristensen",
    gender: "Male",
    nationality: "Denmark",
    dateOfBirth: "1997-07-11",
    height: 187,
    position: "Defender",
    foot: "Right",
    teams: ["Eintracht Frankfurt", "Denmark"],
    lastUpdated: "2025-04-16T17:49:04Z",
    image:
      "https://img.a.transfermarkt.technology/portrait/header/167722-1726135167.png?lm=1",
    bio: "Rasmus Kristensen is a Danish professional footballer who plays as a right-back for Eintracht Frankfurt on loan from Leeds United, and the Denmark national team. Born on July 11, 1997, in Brande, he started his career with Brande IF before moving to BK Herning Fremad and then FC Midtjylland. He has also played for Ajax Amsterdam, FC Red Bull Salzburg, and Leeds United.",
    width: 50,
  };

  const getAge = (dob: string) => {
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
      <CommonWrapper>
        <div className="bg-[#E9E9E9] p-2">
          <SubHeading subHeading="Player Profile" />
          <div className="p-3 border-[1px] border-gray-400 bg-white">
            <p className="text-3xl font-semibold">{player.name}</p>
            <div className="py-2 flex flex-col md:flex-row gap-3">
              <div>
                <img
                  src={player.image}
                  alt="Player"
                  className="max-w-[120px] h-auto border-2 border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4">
                  <InfoCard label="Name" value={player.name} />
                  <InfoCard
                    label="Date of Birth / Age"
                    value={`${player.dateOfBirth} (${getAge(
                      player.dateOfBirth
                    )})`}
                  />

                  <InfoCard label="Height" value={`${player.height} cm`} />
                  <InfoCard label="Gender" value={player.gender} />
                  <InfoCard label="Nationality" value={player.nationality} />
                  <InfoCard label="Position" value={player.position} />
                  <InfoCard label="Preferred Foot" value={player.foot} />
                  <InfoCard label="Teams" value={player.teams.join(", ")} />
                </div>
              </div>
             <div className="bg-[#5CA6FF] px-2 py-4 self-start">
                <p className="text-sm text-white">Last updated:</p>
                <p className="text-white font-bold text-xl">
                  {formatDate(player.lastUpdated)}
                </p>
              </div> 
            </div>
          </div>

    
          <div className="p-3 mt-4 border-[1px] border-gray-400 bg-white">
            <SubHeading subHeading="Player Data" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <InfoCard label="Name" value={player.name} />
              <InfoCard
                label="Age"
                value={getAge(player.dateOfBirth).toString()}
              />
              <InfoCard label="Date of Birth" value={player.dateOfBirth} />
              <InfoCard label="Position" value={player.position} />
              <InfoCard label="Height" value={`${player.height} cm`} />
              <InfoCard label="Width" value={`${player.width} cm`} />{" "}
        
              <InfoCard label="Nationality" value={player.nationality} />
              <InfoCard label="Gender" value={player.gender} />
            </div>
            <p className="mt-2 text-[#333] text-sm">{player.bio}</p>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default PlayerDetails;

interface InfoCardProps {
  label: string;
  value: string;
}

const InfoCard = ({ label, value }: InfoCardProps) => {
  return (
    <p className="text-[#333] text-[12px]">
      <span className="font-medium">{label}</span>:{" "}
      <span className="font-bold">{value}</span>
    </p>
  );
};
 */
