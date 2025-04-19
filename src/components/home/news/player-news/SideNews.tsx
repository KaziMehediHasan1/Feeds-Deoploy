import Image from "next/image";
import Heading from "../../shared/Heading";
import SubHeading from "../../shared/SubHeading";

interface PlayerCardProps {
  name: string;
  image: string;
  dob: string;
  age: number;
  nationalities: string[];
  club: string;
  contract: string;
  position: string;
  marketValue: string;
  clubLogo: string;
}

const PlayerCard = ({
  name,
  image,
  dob,
  age,
  nationalities,
  club,
  contract,
  position,
  marketValue,
  clubLogo,
}: PlayerCardProps) => {
  return (
    <div className=" mb-4 bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
        <h2 className="text-blue-600 font-semibold">{name}</h2>
        <Image
          src="https://tmssl.akamaized.net//images/wappen/smallquad/51663.png?lm=1478716243"
          alt="club logo"
          width={30}
          height={30}
        />
      </div>

      <div className="flex gap-4 p-4 ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg"
          alt={name}
          width={80}
          height={30}
          className="rounded"
        />
        <div className="text-sm space-y-1">
          <p>
            <span className="font-semibold">Date of birth/Age:</span> {dob} (
            {age})
          </p>
          <p>
            <span className="font-semibold">Nat.:</span>{" "}
            {nationalities.map((flag, i) => (
              <Image
                key={i}
                src={flag}
                alt="national flag"
                width={20}
                height={15}
                className="inline ml-1"
              />
            ))}
          </p>
          <p>
            <span className="font-semibold">Current club:</span> {club}
          </p>
          <p>
            <span className="font-semibold">Contract until:</span> {contract}
          </p>
          <p>
            <span className="font-semibold">Position:</span> {position}
          </p>
          <p>
            <span className="font-semibold">Market value:</span> {marketValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function SideNews() {
  return (
    <div className="max-w-xl mx-auto mt-1">
      <SubHeading subHeading="Author" />
      <hr />
      <PlayerCard
        name="Emmanuel Latte Lath"
        image="/players/latte.png"
        dob="Jan 1, 1999"
        age={26}
        nationalities={["/flags/civ.png", "/flags/ita.png"]}
        club="Atlanta United FC"
        contract="Dec 31, 2028"
        position="Centre-Forward"
        marketValue="€18.00m"
        clubLogo="/clubs/atlanta.png"
      />

      <PlayerCard
        name="Wilfried Zaha"
        image="/players/zaha.png"
        dob="Nov 10, 1992"
        age={32}
        nationalities={["/flags/civ.png", "/flags/eng.png"]}
        club="Charlotte FC"
        contract="Jan 17, 2026"
        position="Left Winger"
        marketValue="€6.00m"
        clubLogo="/clubs/charlotte.png"
      />
      <PlayerCard
        name="Wilfried Zaha"
        image="/players/zaha.png"
        dob="Nov 10, 1992"
        age={32}
        nationalities={["/flags/civ.png", "/flags/eng.png"]}
        club="Charlotte FC"
        contract="Jan 17, 2026"
        position="Left Winger"
        marketValue="€6.00m"
        clubLogo="/clubs/charlotte.png"
      />
      <PlayerCard
        name="Wilfried Zaha"
        image="/players/zaha.png"
        dob="Nov 10, 1992"
        age={32}
        nationalities={["/flags/civ.png", "/flags/eng.png"]}
        club="Charlotte FC"
        contract="Jan 17, 2026"
        position="Left Winger"
        marketValue="€6.00m"
        clubLogo="/clubs/charlotte.png"
      />
      <PlayerCard
        name="Wilfried Zaha"
        image="/players/zaha.png"
        dob="Nov 10, 1992"
        age={32}
        nationalities={["/flags/civ.png", "/flags/eng.png"]}
        club="Charlotte FC"
        contract="Jan 17, 2026"
        position="Left Winger"
        marketValue="€6.00m"
        clubLogo="/clubs/charlotte.png"
      />
      <PlayerCard
        name="Wilfried Zaha"
        image="/players/zaha.png"
        dob="Nov 10, 1992"
        age={32}
        nationalities={["/flags/civ.png", "/flags/eng.png"]}
        club="Charlotte FC"
        contract="Jan 17, 2026"
        position="Left Winger"
        marketValue="€6.00m"
        clubLogo="/clubs/charlotte.png"
      />
      <PlayerCard
        name="Wilfried Zaha"
        image="/players/zaha.png"
        dob="Nov 10, 1992"
        age={32}
        nationalities={["/flags/civ.png", "/flags/eng.png"]}
        club="Charlotte FC"
        contract="Jan 17, 2026"
        position="Left Winger"
        marketValue="€6.00m"
        clubLogo="/clubs/charlotte.png"
      />
    </div>
  );
}
