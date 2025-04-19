import SubHeading from "@/components/home/shared/SubHeading";
import Image from "next/image";
import React from "react";
import ads from "../../../../../public/ads3.png";
import PlayerIndex from "@/components/home/news/player-news/PlayerIndex";

const AuthlateClub = () => {
  return (
    <div>
      {/* main Code  */}
      <div className=" mx-auto p-6 bg-white mt-1 mb-1 space-y-4">
        {/* Ads Code */}
        <div className="w-full bg-gradient-to-r from-[#7c7521] via-[#d3c313] to-[#f2e015] text-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 ">
          <div className="flex-1">
            <h2 className="text-3xl font-oswald font-bold mb-2 text-black">
              ⚽ Gear Up for the Football Season!
            </h2>
            <p className="text-sm md:text-base text-gray-800 mb-4">
              Save up to 50% on official jerseys, boots, and fan gear. Limited
              time offer!
            </p>
            <button className="px-6 py-2 bg-[#f2e015] text-black font-semibold rounded-full hover:bg-black hover:text-white transition">
              Explore Deals
            </button>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src={ads.src} // replace with your actual image path
              alt="Football Gear Sale"
              className="w-[200px] h-[100px] md:w-[300px] md:h-[180px] object-contain rounded-xl"
            />
          </div>
        </div>
        <PlayerIndex />
        {/* <div className="flex items-center justify-between text-sm text-black uppercase bg-[#f2e015] text-md font-semibold p-1">
          <span>17.04.2025 • 11:00</span>
          <span>source: Transfermarkt | Reading Time: 3 mins</span>
        </div>
        <SubHeading subHeading="Second Leg tonight" />

        <h1 className="text-2xl font-bold font-oswald">
          Athletic Club scouting report: <br /> How good are Rangers&apos;
          Europa League quarter-final opponents?
        </h1>

        <div className="relative w-full h-96">
          <Image
            src="https://tmssl.akamaized.net//images/foto/galerie/athletic-club-spotlight-1744114296-165324.png"
            alt="Athletic Club players"
            fill
            className="object-cover rounded-md h-full w-full"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          Although Rangers form has been anything but consistent in the
          <span className="font-semibold text-blue-800">
            Scottish Premiership
          </span>
          this season, they have done a stellar job to make it into the last
          eight of the{" "}
          <span className="font-semibold text-blue-800">Europa League</span>.
          Their last 16 victory triumph over{" "}
          <span className="font-semibold text-blue-800">Fenerbahçe</span> on
          penalties was some achievement for a team with a squad value of just
          €79.5m compared to their opponent&apos;s €235.3m. Despite Robin
          Propper being sent off in the first half during the first leg, Rangers
          held on for a goalless draw at Ibrox but they face an uphill task in
          the second leg.
        </p>
        <div className="flex items-center  text-sm text-black uppercase text-md font-semibold p-1">
          <span className="text-yellow-400  ">EUROPA LEAGUE</span> <br />
          <span>Fixtures</span>
        </div>
        <p className="text-gray-700 leading-relaxed">
          The unique club, whom only play players with Basque-region (a small
          area in the north of Spain and south of France) origins, are currently
          fourth in the Spanish top-flight, and look a good bet to qualify for
          the Champions League next season. So how good are the Bilbao-based
          club and what should Rangers fan's expect from their quarter-final
          foes? To find out more, we spoke to Transfermarkt's LaLiga expert Iván
          Fuente.
        </p>
        <hr className="text-yellow-600" />
        <div>
          <div className="bg-white p-6  max-w-5xl mx-auto mt-5 space-y-6">
            <h2 className="text-2xl font-bold text-center">Club Comparison</h2>

            <div className="grid grid-cols-2 text-center font-semibold   uppercase bg-black text-[var(--color-primary)] text-md font-semibold p-1">
              <div className="py-1">Rangers FC</div>
              <div className="py-1">Athletic Bilbao</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
              <div className="col-span-1 flex justify-center">
                <Image
                  src="https://tmssl.akamaized.net//images/wappen/normal/124.png?lm=1657628093"
                  alt="Rangers logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <Image
                  src="https://tmssl.akamaized.net//images/logo/homepageNewsLogo80x80/sc1.png?lm=1710947120"
                  alt="Cinch logo"
                  width={100}
                  height={50}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <Image
                  src="https://tmssl.akamaized.net//images/logo/mediumquad/es1.png?lm=1725974302"
                  alt="LaLiga logo"
                  width={100}
                  height={50}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <Image
                  src="https://tmssl.akamaized.net//images/wappen/normal/621.png?lm=1695069038"
                  alt="Athletic logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 text-center border border-yellow-500 rounded text-sm">
              <div className="bg-gray-100 py-2 font-semibold">Premiership</div>
              <div className="bg-black text-white py-2 font-bold">
                Market Value
              </div>
              <div className="bg-gray-100 py-2 font-semibold">LaLiga</div>

              <div className="bg-[#f2e015] text-black py-2">€79.45m</div>
              <div className="bg-[#f2e015] text-black py-2 font-semibold">
                Market Value
              </div>
              <div className="bg-[#f2e015] text-black py-2">€367.00m</div>

              <div className="py-2">First Tier</div>
              <div className="py-2 font-medium">League Level</div>
              <div className="py-2">First Tier</div>

              <div className="py-2">€16.86m</div>
              <div className="py-2 font-medium">Expenditures 24/25</div>
              <div className="py-2">€18.00m</div>

              <div className="py-2">Barry Ferguson</div>
              <div className="py-2 font-medium">Managers</div>
              <div className="py-2">Ernesto Valverde</div>
            </div>

            <div className="flex justify-center">
              <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-[#f2e015] hover:text-black transition-all">
                Full Club Comparison
              </button>
            </div>

            <div className="space-y-2 pt-6">
              <h3 className="text-xl font-bold">
                How good have Athletic Club been this season?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Athletic Club manager{" "}
                <span className="font-semibold text-blue-700">
                  Ernesto Valverde
                </span>{" "}
                was re-appointed manager in 2022, after briefly leaving for the
                Barcelona job, and this season, he has begun to really stamp his
                authority on the team once again. After finishing seventh in his
                first campaign back in charge, Athletic Club came fifth last
                season, and this term look set to finish in the top four. They
                are currently six points clear of fifth-placed Villarreal and
                only six points behind third-placed Atlético Madrid. Asked if he
                had been impressed with Athletic Club this season, Fuente said:
                "Yes, at least in LaLiga. In knockout tournaments they...
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AuthlateClub;
