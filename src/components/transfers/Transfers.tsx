const TransfersSection = async() => {
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
  console.log(data)
    return (
      <section className="bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">TRANSFERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Last Transfers */}
          <div className="border border-gray-300 shadow-sm">
            <h3 className="bg-[#041C44] text-white text-lg font-semibold p-3">LAST TRANSFERS</h3>
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-2">Player/Position</th>
                    <th className="pb-2">Club</th>
                    <th className="pb-2">Transfer Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-blue-600 font-medium">K. Askildsen</td>
                    <td>
                      <img src="/club-logo.png" alt="Club" className="w-6 inline-block" />
                    </td>
                    <td>?</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Victor Wanyama</td>
                    <td>
                      <img src="/club-logo.png" alt="Club" className="w-6 inline-block" />
                    </td>
                    <td>-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Jalal Abdullai</td>
                    <td>
                      <span className="bg-gray-200 px-2 py-1 rounded">Loan Transfer</span>
                    </td>
                    <td></td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Allen Obando</td>
                    <td>
                      <span className="bg-gray-200 px-2 py-1 rounded">Loan Transfer</span>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="font-medium">Adriel</td>
                    <td>
                      <span className="bg-gray-200 px-2 py-1 rounded">Loan Transfer</span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className="text-blue-500 text-sm mt-3 block">
                All transfers &gt;
              </a>
            </div>
          </div>
  
          {/* Top Winter Transfers */}
          <div className="border border-gray-300 shadow-sm">
            <h3 className="bg-[#041C44] text-white text-lg font-semibold p-3">TOP WINTER TRANSFERS</h3>
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-2">Player/Position</th>
                    <th className="pb-2">Club</th>
                    <th className="pb-2">Transfer Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-blue-600 font-medium">K. Kvaratskhelia</td>
                    <td>
                      <img src="/psg-logo.png" alt="PSG" className="w-6 inline-block" />
                    </td>
                    <td>€70.00m</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Xavi Simons</td>
                    <td>
                      <img src="/rb-logo.png" alt="RB" className="w-6 inline-block" />
                    </td>
                    <td>€50.00m</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Jhon Durán</td>
                    <td>
                      <img src="/villa-logo.png" alt="Aston Villa" className="w-6 inline-block" />
                    </td>
                    <td>€77.00m</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Omar Marmoush</td>
                    <td>
                      <img src="/city-logo.png" alt="Man City" className="w-6 inline-block" />
                    </td>
                    <td>€75.00m</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Nico González</td>
                    <td>
                      <img src="/city-logo.png" alt="Man City" className="w-6 inline-block" />
                    </td>
                    <td>€60.00m</td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className="text-blue-500 text-sm mt-3 block">
                All winter transfers &gt;
              </a>
            </div>
          </div>
  
          {/* Latest Rumours */}
          <div className="border border-gray-300 shadow-sm">
            <h3 className="bg-[#041C44] text-white text-lg font-semibold p-3">LATEST RUMOURS</h3>
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-2">Player/Current Club</th>
                    <th className="pb-2">Interested</th>
                    <th className="pb-2">%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-blue-600 font-medium">Benja Cremaschi</td>
                    <td>Tottenham</td>
                    <td className="text-green-600 font-bold">85%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">V. Gyökeres</td>
                    <td>Sporting CP</td>
                    <td className="text-green-500 font-bold">47%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Darwin Núñez</td>
                    <td>Atletico</td>
                    <td className="text-green-500 font-bold">60%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium">Cristian Romero</td>
                    <td>Tottenham</td>
                    <td className="text-green-500 font-bold">65%</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Jobe Bellingham</td>
                    <td>Brighton</td>
                    <td className="text-green-500 font-bold">55%</td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className="text-blue-500 text-sm mt-3 block">
                Go to Rumour Mill &gt;
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TransfersSection;
  