import axios from "axios";

export interface PlayerData {
  id: string;
  name: string;
  gender: string;
  country: {
    id: string;
    name: string;
  };
  date_of_birth: string; // Matching the API field 'date_of_birth'
  height: number;
  position: string;
  foot: string;
  teams: Array<{
    id: string;
    name: string;
    type: string;
    gender: string;
  }>;
  updated_at: string;
  is_deleted: boolean;
  image: string;
  bio: string;
  width: number;
}

export const fetchPlayerData = async () => {
  try {
    console.log("Fetching data from API..."); // Add log to confirm the function is called

    const response = await axios.get(
      "https://api.footballfeeds.com/json/players/RASMUS-NIELSEN-KRISTENSEN?key=5CWA4FYK"
    );

    // Log the fetched data for verification
    console.log("Fetched data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching player data:", error);
    return null;
  }
};
