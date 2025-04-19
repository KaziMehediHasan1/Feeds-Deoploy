import React from "react";
import { generateRandomId } from "@/lib/utils";
import Heading from "../home/shared/Heading";
import StatsList from "../statistics/shared/StatsList";
import Link from "next/link";

type Props = {};

const TransferPerLeagueLinkList = (props: Props) => {
  const linkList = [
    {
      id: generateRandomId(),
      label: "Premier League",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/gb1.png?lm=1521104656",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/189.png?lm=1520611569",
    },
    {
      id: generateRandomId(),
      label: "Championship",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/gb2.png?lm=1692214857",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/189.png?lm=1520611569",
    },

    {
      id: generateRandomId(),
      label: "Premiership",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/sc1.png?lm=1710947120",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/190.png?lm=1520611569",
    },
    {
      id: generateRandomId(),
      label: "LaLiga",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/es1.png?lm=1725974302",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/157.png?lm=1520611569",
    },
    {
      id: generateRandomId(),
      label: "Bundesliga",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/l1.png?lm=1525905518",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/40.png?lm=1520612525",
    },
    {
      id: generateRandomId(),
      label: "Series A",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/it1.png?lm=1656073460",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/75.png?lm=1520611569",
    },
    {
      id: generateRandomId(),
      label: "Ligue 1",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/fr1.png?lm=1732280518",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/50.png?lm=1520611569",
    },
    /*  {
      id: generateRandomId(),
      label: "Saudi Pro League",
      href: "/stats/top-goal-scorers",
      logo: "https://tmssl.akamaized.net//images/logo/homepageWappen150x150/sa1.png?lm=1692612717",
      flag: "https://tmssl.akamaized.net//images/flagge/homepageSmall/146.png?lm=1520611569",
    }, */
  ];
  return (
    <div>
      <Heading heading="Transfer Per League" className="text-center" />
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-2">
        {linkList.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.href}
              className="w-[100px] sm:w-[120px] md:w-[140px] border-[1px] border-blackpx-4 pt-3 pb-6 rounded-sm bg-blue-50 relative flex flex-col items-center"
            >
              <img
                src={item.logo}
                alt={`${item.label} logo`}
                className="max-w-[48px] max-h-[48px]"
              />
              <div className="flex justify-center">
                <img
                  src={item.flag}
                  alt={`${item.label} flag`}
                  className="max-h-[15px] absolute -bottom-2"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TransferPerLeagueLinkList;
