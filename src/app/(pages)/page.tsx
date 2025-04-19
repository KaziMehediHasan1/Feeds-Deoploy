import PremierLeague from "@/components/home/Fixture/Premier-League/PremierLeague";
import HeroSection from "@/components/home/hero-section";
import NewsSection from "@/components/home/news";
import TopScore from "@/components/home/score/TopScore";
import StatisticSections from "@/components/home/statistic";
import Transfer from "@/components/home/transfer-section/Transfer";
import CommonWrapper from "@/components/shared/CommonWrapper";
import ScrollToTopButton from "@/components/ui/ScrollToTop";

export default async function Home() {
  const url =
    "https://api.footballfeeds.com/json/transfers/official?key=5CWA4FYK";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  const latestTransfers = data?.slice(0, 2); // Show only the latest 5 transfers

  // console.log(data);

  return (
    <div>
      <CommonWrapper>
        <div className="bg-white">
          {/* news section */}
          <HeroSection />

          {/* news section */}
          <NewsSection />

          {/* transfer section */}
          <Transfer />

          {/* fixture section */}
          <PremierLeague />

          {/* score section */}
          <TopScore />

          {/* statistic section */}
          <StatisticSections />
          <ScrollToTopButton />
        </div>
      </CommonWrapper>

      {/* <Footer /> */}
    </div>
  );
}
